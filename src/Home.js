import React, { useEffect, useState } from 'react'
import './Home.css'
import ScrollToTop from 'react-scroll-up'
import axios from 'axios'
import { Link,useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import {
  setUserData,
  selectUserData
} from "./slices/userAuthSlice";
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
  
  console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX userID : " + userID)
  
  const [buttonpressed, setButtonPresses]  = useState(false)
  const [myVar, setMyVar]  = useState(false)
  const [messages, setMessages] = React.useState([{id:'01', data:"My Names i Jama" ,name:"Jamal"}  
  , {id:'02', data:"My Names i <ao" ,name:"Maisam"}])

  const [input,setInput] = useState(null)

  const getInput=()=>{
    const val  ={
      data:input,
      name:"JAMAL",
      id:'04'
    }
    setMessages(messages => [...messages , val])
    setInput("")
  }

  const [currentTime , setCurrentTime] = useState(()=>{
    const localData = localStorage.getItem('Time');
    return localData ? localData:0;
  })

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

  useEffect(() => {
    const timerID = setInterval(() =>   { 
      axios.get('http://localhost:8080/api/user/fetch-online').then((response)=>{
        console.log(response)
        })
    }, 15000)
    return () => {
      clearInterval(timerID)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('Time', currentTime)
  }, [currentTime])

  useEffect(()=>{
    console.log("TRACKKKKKKKKKKKKKK REQUEST")
    if (buttonpressed) {
      console.log("TRACKKKKKKKKKKKKKK REQUEST INSIDE IF")
      axios.patch(`http://localhost:8080/api/user/track-requests?userid=${userID}`).then((response)=>{
        console.log("TRACKKKKKKKKKKKKKK  buttonpressed "  +response)
      })
    }
  }, [buttonpressed , myVar])


  useEffect(() => {

      // axios.get('http://localhost:8080/api/user/fetch-online').then((response)=>{
      //   console.log(response)
      // })
    // return clearInterval(interval1);
    
  },[]);


  const Broadcast = () => {
    
    setButtonPresses(true)
    axios.post(`http://localhost:8080/api/user/broadcast-request?userid=${userID}`).then((response)=>{
      console.log("12123333")
      console.log(response)
      setMyVar(true)
    })
  }
    return (
        <div>
          <div style={{height:100, backgroundColor:"#def2d0" }}>
            <h1 style={{  paddingTop:30  , color:'black' , textAlign:"center" }}><b>BITFICIAL</b></h1>

            <div style={{display:'flex'  ,justifyContent:"center"  , alignItems:"center"}}>
              <div class="col-md-3 col-sm-3 col-xs-6"><a href="#" class="btn btn-sm animated-button thar-two" onClick={Broadcast}>Chat</a></div>
              <div class="col-md-3 col-sm-3 col-xs-6"> <a href="#" class="btn btn-sm animated-button thar-four">Video</a> </div>
            </div> 

            <div>
              <div style={divStyle}>

              {messages.map(message =>
                  <div key={message.id} >
                    <h2>{message.name}</h2><p>{message.data}</p>
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
            

          </div>
        </div>
    )
}

export default Home
