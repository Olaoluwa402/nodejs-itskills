import Post from "../models/PostModel.js";
import { cloud } from "../config/cloudinary.js";
//get posts 
const getPosts = async(req,res)=>{

    try{ 

        const {title, userId} = req.query;
        const copy = await Post.find({}).sort({_id:-1})
    
        let searchResult = copy; 
    
        if(title){
            searchResult = searchResult.filter((item)=> item.title.startsWith(title))
        }

        if(userId){
            searchResult = searchResult.filter((item)=> item.userId.toString() === userId)
        }
        res.status(200).json({
            posts:searchResult  
        })
        
    }catch(err){
        res.status(400).json({
            status:'error',
            message:err.message
        })
    }
    
}

//creaate post
const createPost = async(req,res)=>{
    const {title,body, image} = req.body
    console.log(title,body,image) 
  
    //save the baase64Url to cloudinary and wait fot the returned url
   //save to database
 
   
   const post = await Post.create({ 
      author:req.user._id,
      title,
      body, 
      image,
   })

    res.status(200).json({
        post:post
    })
}

//get post
const getSinglePost = async(req,res)=>{
    const {id} = req.params

    const post =  await Post.findById(id)
    
    res.status(200).json({
        post: post
    })
}

//update post
const updatePost = async(req,res)=>{
    const {id} = req.params
    const {body,title} = req.body

    const post =  Post.findById(id)
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

    const post =  Post.findOne({_id:id})
    if(!post){
        res.status(400).json({
            msg:'No post found'
        })
    }
    const filteredPost = await post.remove()

    res.status(200).json({
        status:'success',
        filteredPost
    })
}

export {getPosts, createPost, getSinglePost, updatePost, deletePost}