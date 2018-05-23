import React, { Component } from 'react'
import { fetchPlaylist } from "../../actions/playlistActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ScaleLoader } from "react-spinners";
import './style.css'

class Playlists extends Component {

    componentDidMount = (props) =>  {
            console.log(this.props);
            
            //fetchPlaylist(props.user.id, props.token)
    }
    


  render() {
    return (
      <div >
        {!this.props.playlists 
            ? (<ScaleLoader />)
            : ( <p> playlists</p> )
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        token: state.tokenReducer.token,
        user: state.userReducer.user,
        playlists: state.playlistReducer.playlists
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchPlaylist
    }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(Playlists)