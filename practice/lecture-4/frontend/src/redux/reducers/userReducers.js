import {
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_Fail,
    CREATE_USER_RESET,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_Fail,
    LOGIN_USER_RESET
} from '../constants/userConstants.js'

// const initialState = {
//     user:{}
// }
const createUserReducer = (state=null, action) => {
     switch(action.type){
        case CREATE_USER_REQUEST:
            return {loading:true}
        case CREATE_USER_SUCCESS:
            return {loading:false,success:true,user:action.paylaod}
        case CREATE_USER_Fail:
            return {loading:false, error:action.payload}
        case CREATE_USER_RESET:
            return {}
        default:
            return state
     }
}

const loginUserReducer = (state=null, action) => {
    switch(action.type){
       case LOGIN_USER_REQUEST:
           return {loading:true}
       case LOGIN_USER_SUCCESS:
           return {loading:false,success:true,user:action.paylaod}
       case LOGIN_USER_Fail:
           return {loading:false, error:action.payload}
       case LOGIN_USER_RESET:
           return {}
       default:
           return state
    }
}

export {
    createUserReducer,
    loginUserReducer
}