import React, { useEffect, useState } from 'react'
import './Home.css'
import SelectionButton from './SelectionButton'
import ScrollToTop from 'react-scroll-up'


const Home = () => {
  const divStyle={
    overflowY: 'scroll',
    marginRight:20,
    padding:20,
    width:'100%',
    height:'600px',
    position:'relative'
  };
  const [messages, setMessages] = React.useState([{id:'01', data:"My Names i Jama" ,name:"Jamal"}  
  , {id:'02', data:"My Names i <ao" ,name:"Maisam"}])

  const [input,setInput] = useState(null)

  const getInput=()=>{
    // setTheArray(oldArray => [...oldArray, newElement]);
    const val  ={
      data:input,
      name:"JAMAL",
      id:'03'
    }
    setMessages(messages => [...messages , val])
    setInput("" )
  }
  const MINUTE_MS = 1000;

  const [currentTime , setCurrentTime] = useState(()=>{
    const localData = localStorage.getItem('Time');
    return localData ? localData:0;
  })


  useEffect(() => {
    const timerID = setInterval(() =>   { 
      setCurrentTime((currentTime) => parseInt(currentTime) + 1)}, 1000)
    return () => {
      clearInterval(timerID)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('Time', currentTime)
  }, [currentTime])


    return (
        <div>
          <div style={{height:100, backgroundColor:"#def2d0" }}>
            <h1 style={{  paddingTop:30  , color:'black' , textAlign:"center" }}><b>BITFICIAL</b></h1>

            <SelectionButton/>  
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
