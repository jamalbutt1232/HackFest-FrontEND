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
  const [messages, setMessages] = React.useState([{id:'01', data:"My Names i Jama" ,name:""}  
  , {id:'02', data:"My Names i <ao" ,name:""}])

  const [input,setInput] = useState(null)
  // const [val,setVal] = useState(null)

  useLayoutEffect(()=>{
    console.log("above axios response.data response.data" )

    axios.get(`http://localhost:8080/api/user/fetch-messages?chatter=${userID}&chattee=${otherUserID}`).then((response)=>{
      console.log("response.data response.data response.data" + (response))
      
      console.log("meassages list 01 :"+ response.data)

      // setTheArray(oldArray => [...oldArray, newElement]);
      const val  ={
        data:response.data[0].message,
        name:"JAMAL",
        id:response.data[0].id
      }
      setMessages(response.data)
      // setMessages( response.data)
      console.log( "response.data response.data :"  +messages)
    }).catch((err)=>{
      console.log("errr in gerch msgs :" + err)
    })
  }  )

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
  const AlertBox = () =>{
    alert("VIDEO CALL")
  }
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
              <div class="col-md-3 col-sm-3 col-xs-6"> <a href="#" class="btn btn-sm animated-button thar-four" onClick={AlertBox}>Video</a> </div>
            </div> 


            {showLoader && 
            <div style={{justifyContent:"center", alignContent:"center" }}>
              <Loader
                type="Puff"
                color="#00BFFF"
                height={300}
                width={300}
                timeout={3000} //3 secs
              />
                          </div>
            }

            {showChat && 

              <div>
                <div style={divStyle}>

                {messages.map(message =>
                  <div key={uuidv4()} >
                    <h2>{message.name}</h2><p>{message.message}</p>
                  </div>
                )}
              </div>  
                  <div style={{display:'flex' , flex:1}}>

                  <div  
                    onClick={()=>getInput()}
                    style={{position:'fixed' , bottom:30  ,
                        height:100,width:150 , Left:0 , color:"black",float:'right', 
                      padding:10,fontSize:24}}> <a href="#" class="btn btn-sm animated-button thar-four">Next</a></div>

                    
                    <textarea  

                    onChange={e=> setInput(e.target.value)}
                    value={input}
                    style={{position:'fixed' , bottom:20 , width:"80%" ,height:80 , marginLeft:"8%" , color:"black",
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
