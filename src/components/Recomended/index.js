import React, { Component } from 'react'
import { connect } from "react-redux";
import { ScaleLoader } from "react-spinners";
import { bindActionCreators } from "redux";
import { fetchRecommendations } from "../../actions/recommendedActions";
import './style.css'

class Recomended extends Component {

   

  render() {
    let name = null;

    if (this.props.user) {
        name = this.props.user.display_name.split(' ')
    }
    
    if (this.props.token !== '') {
        this.props.fetchRecommendations(this.props.token)
        
    }
    
    
  
    return (
      <div>
        {
            this.props.user 
            ? (<p className = 'recommendedHeader'> Witaj {name[0]}, oto propozycje dla Ciebie: </p>)
            : (<ScaleLoader />)
        }
        {console.log(this.props.recommendations)}
      </div>
    )
  }
}


const mapStateToProps = state => {
    return {
        user: state.userReducer.user ? state.userReducer.user : '',
        token: state.tokenReducer.token ? state.tokenReducer.token : '',
        recommendations: state.recommendedReducer.recommendations ? state.recommendedReducer.recommendations : ''
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchRecommendations
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps )(Recomended)