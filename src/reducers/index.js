import { combineReducers } from 'redux'
import { routerReducer } from "react-router-redux";
import tokenReducer from './tokenReducer'
import userReducer from './userReducer'

export default combineReducers({
    routing: routerReducer,
    tokenReducer,
    userReducer
})