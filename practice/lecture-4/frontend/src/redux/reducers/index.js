import { combineReducers } from "redux";
import {createUserReducer, loginUserReducer} from './userReducers'


const rootReducer  = combineReducers({
    createUser:createUserReducer,
    loginUser:loginUserReducer
})

export default rootReducer