import React, { Component } from 'react'
import { fetchPlaylist } from "../../actions/playlistActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ScaleLoader } from "react-spinners";
import './style.css'

class Playlists extends Component {

renderPlaylist = playlist => {
        return <li> {playlist.name} </li>
}

render() {
    if (this.props.user) {
        this.props.fetchPlaylist(this.props.user.id, this.props.token)
    }
    


    return (
      <div className = 'playlistContainer'>
          <p>Playlisty</p>
        {!this.props.playlists 
            ? (<ScaleLoader />)
            : ( <ul className='listPlaylist'> {this.props.playlists.map(playlist => this.renderPlaylist(playlist))} </ul> )
        }
      </div>
    )
  }
}


const mapStateToProps = state => {
    return {
        token: state.tokenReducer.token ? state.tokenReducer.token : '',
        user: state.userReducer.user ? state.userReducer.user : '',
        playlists: state.playlistReducer.playlists ? state.playlistReducer.playlists : '',
        isPlaylistPending: state.playlistReducer.isPlaylistPending ? state.playlistReducer.isPlaylistPending : ''
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchPlaylist
    }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(Playlists)