import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/userActions";
import User from "../User";
import Search from '../Search'
import Playlists from '../Playlists'
import './style.css'


class Dashboard extends Component {
    componentDidMount = (props) => {

      this.props.fetchUser(this.props.token);
      if (this.props.userPending) {
        console.log('ładuje');
      }  else console.log('zaladowanamo');  
    }
    
  render() {
    return (
      <div className = 'Dashboard'>
        <div className = 'Header'>
            <User user = {this.props.user}/>
            <Search />
        </div>
        <div className = 'Content'>
            <div className = 'leftSideSection'>
                <Playlists id = {this.props.user} token = {this.props.token}/>
            </div>
            <div className = 'mainSection'>
            </div>
        </div>
        <div className = 'Footer'>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        token: state.tokenReducer.token,
        user: state.userReducer.user,
        userPending: state.userReducer.userPending
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchUser
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)