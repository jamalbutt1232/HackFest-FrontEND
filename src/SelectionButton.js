import React from 'react'
import { Link } from 'react-router-dom'

const SelectionButton = () => {
    return (
    <div style={{display:'flex'  ,justifyContent:"center"  , alignItems:"center"}}>
        <div class="col-md-3 col-sm-3 col-xs-6"><Link to="/convo"> <a href="#" class="btn btn-sm animated-button thar-two">Chat</a> </Link></div>
        <div class="col-md-3 col-sm-3 col-xs-6"> <a href="#" class="btn btn-sm animated-button thar-four">Video</a> </div>
    </div>
    )
}

export default SelectionButton
