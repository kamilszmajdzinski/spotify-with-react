import React, { Component } from 'react'
import { connect } from "react-redux";
import { ScaleLoader } from "react-spinners";
import { bindActionCreators } from "redux";
import { fetchRecommendations } from "../../actions/recommendedActions";
import './style.css'



const Recomended = (props) => {

    let name = null;
    name = props.user.display_name.split(' ')
    props.fetchRecommendations(props.token)

    const renderAlbums = album => {
        let ALBUM_URL = album.images[1].url
        console.log(album.images);
        
        return (
            <div className = 'Album'>
                <img src = {ALBUM_URL}/>
                <p>{album.name}</p>
                <p>{album.artists[0].name}</p>
            </div>
        )
    }

  return (
    <div>
        <p className = 'recommendedHeader'> Witaj {name[0]}, oto propozycje dla Ciebie: </p>
      {
            props.recommendations 
            ? (
                <div className = 'recommendedContainer'>
                 {props.recommendations.items.map(album => renderAlbums(album))}
                </div>
            )
            : (<ScaleLoader />)
        }
    </div>

  )
}


const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        token: state.tokenReducer.token,
        recommendations: state.recommendedReducer.recommendations
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchRecommendations
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Recomended)