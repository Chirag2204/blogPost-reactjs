import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Image, Row, Button } from 'react-bootstrap'
import { deletePost, listPosts, updatePost } from '../actions/postActions'
import '../style.css'
import { Link } from 'react-router-dom'

const EventCard = (props) => {
    const id = props.id

    const dispatch = useDispatch()
    const postDelete = useSelector(state => state.postDelete)
    const {loading,success,error} = postDelete

    useEffect(() => () => {
        dispatch(listPosts());

    }, [dispatch,success])

    async function deleteHandler() {
      dispatch(deletePost(id))
    }

    return (
        <div>
            <Container className='blog-card'>
                    <div className='blog-image'>
                        <Image src={props.imageUrl} fluid />
                    </div>
                    <div className='blog-desc'>
                        <h2>{props.title}</h2>
                        <p>{props.content}</p>
                       
                    </div>
                        <span className='icons'>
                                 <div className="icon edit" onClick={() => deleteHandler()}><i class="fas fa-trash"></i></div>
                            
                                <div className="icon"><Link to={`/edit/${id}`}><i class="fas fa-edit"></i></Link></div>
                        </span>
            </Container>
        </div >
    )
}

export default EventCard
