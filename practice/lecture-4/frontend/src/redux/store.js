import { createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index'

 
const middleware = [thunk]

let devTools;
if(process.env.NODE_ENV === 'development'){
    devTools = composeWithDevTools(applyMiddleware(...middleware))
}else{
    devTools = applyMiddleware(...middleware)
}


const store = createStore(rootReducer, devTools)

export default store