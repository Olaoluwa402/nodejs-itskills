import {Routes, Route, Navigate} from 'react-router-dom'
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from "./screens/RegisterScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import Layout from './components/Layout/Layout/Layout';
import ContactScreen from './screens/ContactScreen';
import CreatePostScreen from './screens/PostScreen';


const Router = ()=> {
    return (
        <Routes>
            <Route path='/' element={<Layout><HomeScreen /></Layout>}/>
            <Route path='/login' element={<Layout><LoginScreen /></Layout>}/>
            <Route path='/register' element={<Layout><RegisterScreen /></Layout>}/>
            <Route path='/contact' element={<Layout><ContactScreen /></Layout>}/>
            <Route path='/not-found' element={<Layout><NotFoundScreen /></Layout>}/>
            <Route path='/create-post' element={<Layout><CreatePostScreen /></Layout>}/>

            <Route path='*' element={<Navigate to='/not-found'/>}/>
        </Routes>
    )
}

export default Router