import React from 'react'
import { connect } from "react-redux";
import { ScaleLoader } from "react-spinners";

const User = (props) => {
    console.log(props);
    return (
    
    <div>
        {!props.user 
            ? (<ScaleLoader />)
            : (<p> Witaj {props.user.display_name} </p>)
        }
      
    </div>
  )
}


// const mapStateToProps = (state) => {
//     return{
//         user: state.userReducer.user
//     }
// }

export default User