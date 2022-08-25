import express from 'express'
import cors from 'cors';
import {posts} from './data.js';
const app = express()

//setup cors permission
app.use(cors());
app.use(express.json({limit:'50mb'}));

//hiome route
app.get('/', (req,res)=> {
    res.send("<h2>Home Page <a href='/api/v1/posts'>Get Posts</a></h2>")
})

//get all posts
app.get('/api/v1/posts', (req,res)=> {
    const {title, userId} = req.query;
    const copy = [...posts]
   
    let searchResult = copy;
 
    if(title){
        searchResult = searchResult .filter((item)=> item.title.startsWith(title))
    }

    if(userId){
        searchResult = searchResult .filter((item)=> item.userId.toString() === userId)
    }
    res.status(200).json({
        posts:searchResult
    })
})

//create post
app.post('/api/v1/posts', (req,res)=> {
    const {userId,title,id,body} = req.body
        console.log(userId,title,id,body)

    res.status(200).json({
        post:{
            userId,
            id,
            title,
            body
        }
    })
})

//find on user
app.get('/api/v1/posts/:id', (req,res)=> {
    const {id} = req.params

    const post =  posts.find(item=> parseInt(item.id) === parseInt(id))
    
    res.status(200).json({
        post: post
    })
})

//update post
app.put('/api/v1/posts/:id', (req,res)=> {
    const {id} = req.params
    const {body,title} = req.body

    const post =  posts.find(item=> parseInt(item.id) === parseInt(id))
    if(!post){
        res.status(400).json({
            msg:'No post found'
        })
    }
    if(body){
        post.body = body
    }
    if(title){
        post.title= title
    }
    res.status(200).json({
        post: post
    })
})

//delete post
app.delete('/api/v1/posts/:id', async(req,res)=> {
    const {id} = req.params

    const post =  posts.find(item=> parseInt(item.id) === parseInt(id))
    if(!post){
        res.status(400).json({
            msg:'No post found'
        })
    }
    const filteredPost = await posts.filter((item)=> item.id != post.id)

    res.status(200).json({
        status:'success',
        filteredPost
    })
})





























//

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

