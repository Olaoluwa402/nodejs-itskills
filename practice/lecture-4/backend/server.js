import express from 'express'
import cors from 'cors';
import {posts} from './data.js';
import morgan from 'morgan';
const app = express()
import PostRoute from './routes/postRoute.js'

//setup cors permission
app.use(cors());
app.use(express.json({limit:'50mb'}));
app.use(morgan('dev'))

app.use('/api/v1/posts', PostRoute)
//middleware
// req => middleware => res
//three type of middleware 1. custome middleware 2. library 3. inbuilt

//express router

//hiome route
app.get('/',(req,res)=> {
    res.send("<h2>Home Page <a href='/api/v1/posts'>Get Posts</a></h2>")
})


//page not found
app.all('*', (req,res)=>{
    res.send("<h2>Page Not Found  <a href='/'>Return Home</a></h2>")
})

app.listen(5000, (err)=>{
     if(err){
        console.log(err)
        return
     }
     console.log('server is running')
})

