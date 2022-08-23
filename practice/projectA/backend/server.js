import dotenv from 'dotenv'
dotenv.config();

console.log(process.env.MONGODB_URI)
import express from 'express';
import cors from 'cors'
import morgan from 'morgan'
import connectDB from './config/db.js';
import colors from 'colors'
import User from './models/User.js'

//involke the xpress app and save in a variable
let app = express();

// setup cors
app.use(cors())
app.use(morgan('dev'))
app.use(express.json({limit:'50mb'}))

app.get('/', (req,res)=> {
    res.redirect('/api/v1')
})

app.get('/api/v1', (req,res)=> {
    res.json('Welcome to backend')
})

//CRUD - CREATE, READ, UPDATE and DELETE

//@desc create user
//@route POST /api/v1/users
//@access public
app.post('/api/v1/users', async(req,res)=> {
    const {name, email, age} = req.body
    try{
    const user = await User.create({
        name:name,
        email,
        age
    })
   
    res.json({
        status:'success',
        user
    })

    }catch(err){
        res.json({
            status:'failed',
            error:err.message
        })
    }
})

//@desc get users
//@route GET /api/v1/users
//@access public
app.get('/api/v1/users', async(req,res)=> {
    console.log('hiutttt')
    try{
    const users = await User.find({});

    if(!users){
        throw Error('No user found')
    }

    res.json({
        status:'success',
        users
    })

    }catch(err){
        res.json({
            status:'failed',
            error:err.message
        })
    }
})

//@desc update user
//@route PUT /api/v1/users/:id
//@access public
app.put('/api/v1/users/:id', async(req,res)=> {
    const {id} = req.params;

    const {name,age} = req.body;
    console.log('id', id)
    try{
    const user = await User.findById({_id:id});

    if(!user){
        throw Error('No user found')
    }
  
     if(name){
        user.name = name;
     }

     if(age){
        user.age = age;
     }

    const updatedUser = await user.save();
        
    res.status(200).json({
        status:'success',
        updatedUser
    })

    }catch(err){
        res.status(400).json({
            status:'failed',
            error:err.message
        })
    }
})

//@desc delete user
//@route DELETE /api/v1/users/:id
//@access public
app.delete('/api/v1/users/:id', async(req,res)=> {
    const {id} = req.params;
    console.log('id', id)
    try{
    const user = await User.findById({_id:id});

    if(!user){
        throw Error('No user found')
    }
  
    await user.remove();
        
    res.status(200).json({
        status:'success',
        message:'User successfully deleted'
    })

    }catch(err){
        res.status(400).json({
            status:'failed',
            error:err.message
        })
    }
})

const start = async(PORT) => {
    try{
        //connect to database
        const conn = await connectDB()
       
        //application listening
        app.listen(PORT, (err)=> {
            if(err){
                console.log(err)
                return
            }
            console.log(`server is running on ${PORT}`.green.underline)
        })

        console.log(` Mongodb connect to ${conn.connection.host}`.yellow.underline)
    }catch(err){
      console.log(`${err.message}`.red.underline.bold)
    }
}
start(5000)
