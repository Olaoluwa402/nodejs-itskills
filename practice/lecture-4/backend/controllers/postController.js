import {posts} from '../data.js'
//get posts
const getPosts = async(req,res)=>{
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
}

//creaate post
const createPost = async(req,res)=>{
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
}

//get post
const getSinglePost = async(req,res)=>{
    const {id} = req.params

    const post =  posts.find(item=> parseInt(item.id) === parseInt(id))
    
    res.status(200).json({
        post: post
    })
}

//update post
const updatePost = async(req,res)=>{
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
}

//delete post
const deletePost = async(req,res)=>{
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
}

export {getPosts, createPost, getSinglePost, updatePost, deletePost}