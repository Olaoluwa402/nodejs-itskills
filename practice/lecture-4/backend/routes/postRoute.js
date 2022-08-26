import express from "express";
const router = express.Router();
import {getPosts, createPost, getSinglePost,updatePost,deletePost } from '../controllers/postController.js'

router.route('/').get(getPosts).post(createPost);
//get post
router.route('/:id')
    .get(getSinglePost )
    .put(updatePost)
    .delete(deletePost);


//other way of doing same thing
// router.get('/', (req,res){
    
// })

export default router