import React, { Component } from 'react'
import Recomended from "../Recomended";
import User from "../User";
import Search from '../Search'
import Playlists from '../Playlists'
import './style.css'


class Dashboard extends Component {
    
  render() {
    return (
      <div className = 'Dashboard'>
        <div className = 'Header'>
            <User />
            <Search />
        </div>
        <div className = 'Content'>
            <div className = 'leftSideSection'>
                <Playlists />
            </div>
            <div className = 'mainSection'>
                <Recomended />
            </div>
        </div>
        <div className = 'Footer'>

        </div>
      </div>
    )
  }
}

export default Dashboard