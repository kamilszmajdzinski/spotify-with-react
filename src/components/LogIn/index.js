import React, { Component } from 'react'
import { setToken } from "../../actions/tokenActions";
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
      if (!token) {
        console.log('ni ma tokena');
        
      } else {
       
        this.props.setToken(token)
      }
      
    }

  render() {
    return (
      <div className = 'LoginContainer'>
         {!this.props.token
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
      token: state.tokenReducer.token
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      setToken
    }, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
