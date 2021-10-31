import mongoose from "mongoose";
import asyncHandler from 'express-async-handler'
import Post from "../models/postSchema.js";

//@desc To create post
//@route POST /api/post

export const createPost = asyncHandler(async (req, res) => {

    const { title,content, imageUrl } = req.body

    const post = await Post.create({
        title: title,
        content: content,
        imageUrl: imageUrl

    })
    if (post) {
        res.status(201).json({
            _id: post._id,
            title: post.title,
            content: post.content,
            imageUrl: post.imageUrl
        })
    } else {
        res.status(400)
        throw new Error('Post Not Created')
    }

})

//@desc To like post
//@route PUT /api/post/:id
export const updatePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if (post) {

        const { title, content, imageUrl } = req.body
        post.title = title
        post.content = content
        post.imageUrl = imageUrl

        const updatedPost = await post.save()
        res.json({
           _id: updatedPost._id,
            title: updatedPost.title,
            content: updatedPost.content,
            imageUrl: updatedPost.imageUrl
        })

    } else {
        res.status(404)
        throw new Error('Post Not Found')
    }
})


//@desc To get all post
//@route GET /api/post

export const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({})
    res.json(posts)
})

//@desc To get a post
//@route GET /api/post/:id

export const getPost = asyncHandler(async (req, res) => {
    const post= await Post.findById(req.params.id)
    res.json(post)
})

//@desc To delete a post
//@route GET /api/post/:id

export const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)
    
    if (post) {
        await post.remove()
        res.send({ message: 'User Deleted' })
    } else {
        res.status(404)
        throw new Error('User Not Found')
    }
})



