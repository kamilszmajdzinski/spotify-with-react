import React from 'react'
import { connect } from "react-redux";
import { ScaleLoader } from "react-spinners";
import './style.css'

const User = (props) => {
    console.log(props);
    let IMG_URL = null;
    if (props.user) {
        IMG_URL = props.user.images["0"].url
    }
    
    return (
    
    <div className = 'userContainer'>
        {!props.user 
            ? (<ScaleLoader />)
            : (<div className = 'User' >
                <img  className = 'userImage' src = {IMG_URL} />
                 <p> Witaj {props.user.display_name} </p>
               </div>)
        }
      
    </div>
  )
}


export default User