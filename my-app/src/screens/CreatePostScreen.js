import React, { useState, useEffect } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { createPost } from '../actions/postActions'
import { Link } from 'react-router-dom'

const CreatePostScreen = ({ history }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const dispatch = useDispatch()
    const postCreate = useSelector(state => state.postCreate)
    const { loading, error, postInfo } = postCreate

    useEffect(() => {
        if (postInfo) {
            history.push('/')
        }

    }, [postInfo, history])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createPost(title,content,imageUrl));
    }

    return (
        <Container>
            <Button className='mx-1 my-3 py-2' variant='primary'><Link to='/' >Back</Link></Button>
            <h1 >Create Blog</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler} className='py-3'>
                <Form.Group controlId='title' className='py-3'>
                    <Form.Label>Blog Title</Form.Label>
                    <Form.Control type='text' placeholder='Enter Blog Title' value={title} onChange={(e) => { setTitle(e.target.value) }}></Form.Control>
                </Form.Group>
                <Form.Group controlId='content' className='py-3'>
                    <Form.Label>Blog content</Form.Label>
                    <Form.Control as='textarea' rows={7} type='text' placeholder='Enter Blog content' value={content} onChange={(e) => { setContent(e.target.value) }}></Form.Control>
                </Form.Group>
                <Form.Group controlId='imageUrl' className='py-3'>
                    <Form.Label>Event Image Url</Form.Label>
                    <Form.Control type='text' placeholder='Enter Image Url' value={imageUrl} onChange={(e) => { setImageUrl(e.target.value) }}></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary' onClick={submitHandler}>Post</Button>
            </Form>
        </Container>
    )
}

export default CreatePostScreen
