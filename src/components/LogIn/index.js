import React, { Component } from 'react'
import { setToken } from "../../actions/tokenActions";
import { fetchUser } from "../../actions/userActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import './style.css'

class LogIn extends Component {

    componentDidMount() {
    
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
           e = r.exec(q);
        }
        
      const token = hashParams.access_token
      if (token) {
        this.props.setToken(token)
        this.props.fetchUser(token)
        console.log(this.props.user);
        
      }
      
    }

  render() {
    return (
      <div className = 'LoginContainer'>
         {!this.props.user
         ?  (<div className = 'Login'>
              <p> <span className = 'SpotifyLogoSpan'> Spotify </span> with React</p>
              <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2000px-Spotify_logo_without_text.svg.png" />
              <a href = "http://localhost:8888"> Login to React Spotify App</a>
              </div>) 
         : ( <Redirect to = "/dashboard" /> )
      }

      </div>
    )
  }
}

const mapStateToProps = state => {
    return{
      token: state.tokenReducer.token,
      user: state.userReducer.user
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      setToken,
      fetchUser
    }, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
