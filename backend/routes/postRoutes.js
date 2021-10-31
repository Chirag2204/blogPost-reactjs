import express from 'express'
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postControllers.js';

const router = express.Router();

router.route('/')
    .get(getPosts)
    .post(createPost)

router.route('/:id').put(updatePost).get(getPost).delete(deletePost)

export default router
