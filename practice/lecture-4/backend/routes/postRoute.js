import express from "express";
const router = express.Router();
import {getPosts, createPost, getSinglePost,updatePost,deletePost } from '../controllers/postController.js'
import {protect,authorizeUser} from '../middleware/auth.js'


router.route('/').get(getPosts).post(protect,authorizeUser(['admin','client']), createPost);
//get post
router.route('/:id')
    .get(getSinglePost) 
    .put(protect,updatePost)
    .delete(protect,deletePost);


//other way of doing same thing
// router.get('/', (req,res){
    
// })


export default router