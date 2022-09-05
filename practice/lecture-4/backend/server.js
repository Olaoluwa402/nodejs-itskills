import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import cors from 'cors';
import {posts} from './data.js';
import morgan from 'morgan';
const app = express()
import PostRoute from './routes/postRoute.js'
import UserRoute from './routes/usersRoute.js'
import GeneralRoute from './routes/generalRoute.js'
import {connectDB} from './config/db.js'
import colors from 'colors'

//setup cors permission
app.use(cors());
app.use(express.json({limit:'50mb'}));
app.use(morgan('dev'))

app.use('/api/v1/posts', PostRoute)
app.use('/api/v1/users', UserRoute)
app.use('/api/v1/general', GeneralRoute)
//middleware
// req => middleware => res
//three type of middleware 1. custome middleware 2. library 3. inbuilt

//express router

//hiome route
app.get('/',(req,res)=> {
    res.send("<h2>Home Page <a href='/api/v1/posts'>Get Posts</a></h2>")
})


//page not found
app.all('*', async(req,res)=>{
    try{

        res.status(404)
         throw new Error('Sorry, no endpoint found')
    }catch(err){
       res.status(404).json({
        status:'error',
        message:err.message
       })
    }
})

const start = async(port) => {
    try{

        const conn = await connectDB();
        app.listen(port, (err)=>{
            if(err){
               console.log(err)
               return
            }
            console.log('server is running'.bgCyan)
       })

       console.log(`Database is up and running on ${conn.connection.host}`.bgGreen.underline)
    }catch(err){
      console.log(`${err}`.bgRed.underline)
    }
}

const PORT = process.env.PORT || 5000

start(PORT)



