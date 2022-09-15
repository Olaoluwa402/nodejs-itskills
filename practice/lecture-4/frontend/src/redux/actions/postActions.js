import {
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    CREATE_POST_Fail,
} from '../constants/postConstants.js'
import { logout } from './userActions.js'

import axios from 'axios'

const baseUrl = 'http://localhost:5000'

const createPostAction = (title, body,image) => async(dispatch, getState) => {
    try{
        dispatch({
            type:CREATE_POST_REQUEST
         })

         const {loginUser:{userInfo}} = getState()

         console.log(userInfo.token)

         const config = {
            headers:{
                "Content-Type":"Application/json",
                "authorization": `Bearer ${userInfo.token}`
                }
         }
    
         const {data} = await axios.post(`${baseUrl}/api/v1/posts`, {title,body,image}, config)
          
         console.log(data)
         dispatch({
            type:CREATE_POST_SUCCESS,
            payload:data.post
         })
    }catch(err){ 
        let message = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(message)
        if(message === 'Invalid token, Not authorized!' || /jwt/.test(message)){
            //dispatch logout
            console.log('logout')
            dispatch(logout())
        }
        dispatch({
            type:CREATE_POST_Fail,
            payload:message
        })
    }
     
}

export {createPostAction }