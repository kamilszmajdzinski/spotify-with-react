import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ScaleLoader } from "react-spinners";
import './style.css'

class User extends Component {
   
    render(){
        
let IMG_URL = null;

    IMG_URL = this.props.user.images["0"].url


        console.log(this.props);
        
    return (
    
    <div className = 'userContainer'>
        {!this.props.user 
            ? (<ScaleLoader />)
            : (<div className = 'User' >
                <img  className = 'userImage' src = {IMG_URL} />
                <div className = 'userData'>
                    <p className = 'userName'> Witaj {this.props.user.display_name} </p>
                    <p className = 'userProduct'>{this.props.user.product}</p>
               </div>
               </div>)
        }
      
    </div>
  )
}

}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}


export default connect(mapStateToProps, )(User)