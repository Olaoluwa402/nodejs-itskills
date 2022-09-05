import { combineReducers } from "redux";
import {createUserReducer, loginUserReducer} from './userReducers'
import {contactAdminReducer} from './generalReducers'


const rootReducer  = combineReducers({
    createUser:createUserReducer,
    loginUser:loginUserReducer,
    contactAdmin:contactAdminReducer
})

export default rootReducer