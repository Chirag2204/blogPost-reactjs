import React, {useState,useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from '../actions/postActions';
import EventCard from '../components/EventCard';
import Loader from '../components/Loader';
import Message from '../components/Message';
import '../style.css'

export const HomeScreen = () => {
    const [theme,setTheme] = useState('light')
    
    function changeTheme() {
        if (theme === 'light') {
            setTheme('dark')
            document.querySelector('body').classList.add('dark')
        } else {
            setTheme('light')
            document.querySelector('body').classList.remove('dark')
        }
    }


    const dispatch = useDispatch();
    const showPosts = useSelector(state => state.showPosts)
    const { loading, error, posts } = showPosts

    useEffect(() => {
        console.log("hello");
        dispatch(listPosts());
    }, [dispatch,theme])

    return (
        <div>
            <Button className='themechanger' onClick={()=>changeTheme()}>{theme === 'light' ?<i class="far fa-sun">Light Theme</i>:<i class="far fa-moon">Dark Theme</i>}</Button>
            <Button className='mx-3 my-3 py-3' variant='primary'><Link to='/createpost' ><i className='fas fa-plus'> Create a Blog</i></Link></Button>
            {loading ? <Loader /> : error ? <Message variant='success' children={error} /> : (
                <>
                    {posts.map(post => (
                        <EventCard 
                            key={post._id}
                            id={post._id}
                            title={post.title}
                            content={post.content}
                            imageUrl={post.imageUrl}
                        />
                    )
                    )
                    }
                </>
            )}
        </div>
    )
}
