import { combineReducers } from 'redux'
import { routerReducer } from "react-router-redux";
import tokenReducer from './tokenReducer'
import userReducer from './userReducer'
import playlistReducer from './playlistReducer'
import recommendedReducer from './recommendedReducer'

export default combineReducers({
    routing: routerReducer,
    tokenReducer,
    userReducer,
    playlistReducer,
    recommendedReducer
})