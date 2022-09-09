//load env
import dotenv from 'dotenv'
dotenv.config();

import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import colors from 'colors'
import { db } from './config/db.js'


const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json({limit:'40mb'}))



app.get('/', (req,res)=> {
    res.send('welcome to node mysql')
})


//get all post
app.get('/api/v1/posts', async(req, res)=> {
    try{
        const getPostsQuery = 'SELECT * FROM posts'
        const posts = await db.query(getPostsQuery);

        res.status(200).json({
            status:'success',
            posts
        })
    }catch(err){
        res.status(400).json({
            status:'error',
            message:err.message
        })
    }
})

//reate post
app.post('/api/v1/posts', async(req, res)=> {
    const {name, age} = req.body;
    try{
        const createPostQuery = 'INSERT INTO posts (name,age) VALUE (?,?)'
        const createdQuery = 'SELECT * FROM posts WHERE id=?'
        const post = await db.query(createPostQuery, [name, age]);
        const createdPost = await db.query(createdQuery, [post.insertId] );

        res.status(200).json({
            status:'success',
            post:createdPost
        })
    }catch(err){
        res.status(400).json({
            status:'error',
            message:err.message
        })
    }
})

//get all post
app.put('/api/v1/posts/:id', async(req, res)=> {
    const {name, age} = req.body
    const {id} = req.params
    try{
        // const updatePostQuery = 'UPDATE posts SET (age,name) VALUES (?,?) WHERE id=?'
       if(name){
            const updatePostQuery = 'UPDATE posts SET name=? WHERE id=?'
            await db.query(updatePostQuery, [name,id]);
       }

       if(age){
        const updatePostQuery = 'UPDATE posts SET age=? WHERE id=?'
            await db.query(updatePostQuery, [age,id]);
    }
    
        res.status(200).json({
            status:'success',
            message: 'successfully updated'
        })
    }catch(err){
        res.status(400).json({
            status:'error',
            message:err.message
        })
    }
})

//get all post
app.get('/api/v1/posts/:id', async(req, res)=> {
    const {id} = req.params
    try{
        const getSinglePostQuery = 'SELECT * FROM posts WHERE id=?'
        const post = await db.query(getSinglePostQuery, [id]);

        res.status(200).json({
            status:'success',
            post
        })
    }catch(err){
        res.status(400).json({
            status:'error',
            message:err.message
        })
    }
})



app.listen(5000, (err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('server is running')
})


