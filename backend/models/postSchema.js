import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    }
})

const Post = mongoose.model('Post', postSchema)

export default Post