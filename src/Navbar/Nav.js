import React from 'react'
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from '../Home';



  function Contact() {
    return <h2>Contacts</h2>;
  }
  
const Nav = () => {
    return (
        <>
        {/* NAV BAR LINKS */}

        <Link to="/" style={{padding:20 , fontSize:24 , color:"#57461a" , textDecoration : 1 , fontWeight:650}}>        Home       </Link>
        <Link to="/contact" style={{padding:20, fontSize:24, color:"#57461a", textDecoration : 1  , fontWeight:650}}> Contact Us </Link>


        {/* LOAD SPECIFIC COMPONENTS BASED ON URL */}

       
        </>
    )
}

export default Nav
