import React, { useEffect, useState,useLayoutEffect } from 'react'
import './Home.css'
import ScrollToTop from 'react-scroll-up'
import axios from 'axios'
import { Link,useLocation } from 'react-router-dom'
import Loader from "react-loader-spinner";
import { v4 as uuidv4 } from 'uuid';

import { useSelector, useDispatch } from "react-redux";
import {
  setUserData,
  selectUserData
} from "./slices/userAuthSlice";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Home = (props) => {
  const divStyle={
    overflowY: 'scroll',
    marginRight:20,
    padding:20,
    width:'100%',
    height:'600px',
    position:'relative'
  };



  const userID = useSelector(selectUserData);
  const [showLoader , setShowLoader] = useState(false)
  const [showChat , setShowChat] = useState(false)
  console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX userID : " + userID)
  
  const [buttonpressed, setButtonPresses]  = useState(false)
  const [myVar, setMyVar]  = useState(false)
  const [messages, setMessages] = React.useState([])

  const [input,setInput] = useState(null)
  // const [val,setVal] = useState(null)

  useLayoutEffect(()=>{
    console.log("above axios response.data response.data" )

    axios.get(`http://localhost:8080/api/user/fetch-messages?chatter=${userID}&chattee=${otherUserID}`).then((response)=>{
      console.log("response.data response.data" + response.data[0].message)
      // {id:'02', data:"My Names i <ao" ,name:"Maisam"}
    //   [
    //     {
    //          "id": "jnC5l8z3DOH1b1mHtEMz",
    //          "timeStamp": {
    //              "seconds": 1632009247,
    //              "nanoseconds": 905000000
    //          },
    //          "senderID": "5def8c61-511b-46a8-b835-2147b2cfb1a3",
    //          "recieverID": "0b863044-d5b6-4a2a-97b4-0fa61da440f2",
    //          "message": "sd xD"
    //      }
    //  ]
      // console.log("meassages list 01 :"+ response.id)

      // setTheArray(oldArray => [...oldArray, newElement]);

      setMessages( response.data[0].message)
      console.log("meassages list meassages list:"+ messages)
    }).catch((err)=>{

    })
  } )

  const getInput=()=>{
    axios.post(`http://localhost:8080/api/user/send-message?message=${input}&chatter=${userID}&chattee=${otherUserID}`)


    setInput("")
  }
  const [currentTime , setCurrentTime] = useState(()=>{
    const localData = localStorage.getItem('Time');
    return localData ? localData:0;
  })

  const checkTime = () => {
    if (currentTime>9000){
      return false;
    }else{
      return true;
    }
  }


  const {state} = useLocation()

  useEffect(() => {
    const timerID = setInterval(() =>   { 
      setCurrentTime((currentTime) => parseInt(currentTime) + 1);
    }, 1000)
    console.log("XXXXXXXXXXXXXXXXXXX")
    console.log(state)
    return () => {
      clearInterval(timerID)
    }
  }, [])

  const [otherUserID , setOtherUserID]= useState(null)
  useEffect(() => {
    
    const timerID = setInterval(() =>   { 
      if (buttonpressed) {
        axios.patch(`http://localhost:8080/api/user/check-requests?userid=${userID}`).then((response)=>{
          console.log("checkcheck   checkcheck checkcheck buttonpressed "  +response.data)
          if (response.data!== "No requests available"){
            setOtherUserID(response.data)
            setButtonPresses(false)
            setShowLoader(false)
            setShowChat(true)
          }
        }).catch((err)=>{
          console.log("err in check requests  :"+err);
        })
    }
    }, 5000)
  
    return () => {
      clearInterval(timerID)
    }
  } ,  [buttonpressed])

  // useEffect(() => {
  //   const timerID = setInterval(() =>   { 
  //     axios.get('http://localhost:8080/api/user/fetch-online').then((response)=>{
  //       console.log(response)
  //       })
  //   }, 15000)
  //   return () => {
  //     clearInterval(timerID)
  //   }
  // }, [])
  // useEffect(() => {
  //   localStorage.setItem('Time', currentTime)
  // }, [currentTime])

  
  // useEffect(()=>{
  //   console.log("TRACKKKKKKKKKKKKKK REQUEST")
  //   if (buttonpressed) {
  //     console.log("TRACKKKKKKKKKKKKKK REQUEST INSIDE IF")
  //     axios.patch(`http://localhost:8080/api/user/track-requests?userid=${userID}`).then((response)=>{
  //       console.log("TRACKKKKKKKKKKKKKK  buttonpressed "  +response)


  //     })
  //   }
  // }, [buttonpressed , myVar])
  
  // setShowChat(true)

  useEffect(() => {

      // axios.get('http://localhost:8080/api/user/fetch-online').then((response)=>{
      //   console.log(response)
      // })
    // return clearInterval(interval1);
    
  },[]);


  const Broadcast = () => {
    
    setButtonPresses(true)
    axios.post(`http://localhost:8080/api/user/broadcast-request?userid=${userID}`).then((response)=>{
      console.log("Broadcast API caled")
      console.log(response)
      setMyVar(true)
      setShowLoader(true)
      

    })
  }

  useEffect(()=>{
    console.log("showLoader :" + showLoader)
  })
    
   

    return (
        <div>
          <div style={{height:100, backgroundColor:"#def2d0" }}>
            <h1 style={{  paddingTop:30  , color:'black' , textAlign:"center" }}><b>BITFICIAL</b></h1>

            <div style={{display:'flex'  ,justifyContent:"center"  , alignItems:"center"}}>
              <div class="col-md-3 col-sm-3 col-xs-6"><a href="#" class="btn btn-sm animated-button thar-two" onClick={Broadcast}>Chat</a></div>
              <div class="col-md-3 col-sm-3 col-xs-6"> <a href="#" class="btn btn-sm animated-button thar-four">Video</a> </div>
            </div> 


            {showLoader && 
              <Loader
                type="Puff"
                color="#00BFFF"
                height={300}
                width={300}
                timeout={3000} //3 secs
              />
            }
            {showChat && 

              <div>
                <div style={divStyle}>

                {messages.map(message =>
                    <div key={uuidv4} >
                      <p>{message}</p>
                    </div>
                  )}
              </div>  
                  <div style={{display:'flex' , flex:1}}>
                    <textarea  

                    onChange={e=> setInput(e.target.value)}
                    value={input}
                    style={{position:'fixed' , bottom:20 , width:"80%" ,height:80 , marginLeft:"5%" , color:"black",
                                      padding:10,fontSize:16
                    }}/>
                    <div  
                    onClick={()=>getInput()}
                    style={{position:'fixed' , bottom:30  ,
                        height:100,width:150 , marginLeft:"88%" , color:"black",float:'right', 
                      padding:10,fontSize:24}}> <a href="#" class="btn btn-sm animated-button thar-four">Send</a></div>

                </div>            
              </div>
            
            }
          </div>
        </div>
    )
}

export default Home
