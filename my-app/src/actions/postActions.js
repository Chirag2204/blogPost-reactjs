import { CREATE_POST_FAIL, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, DELETE_POST_FAIL, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, SHOW_POSTS_FAIL, SHOW_POSTS_REQUEST, SHOW_POSTS_SUCCESS, SHOW_POST_FAIL, SHOW_POST_REQUEST, SHOW_POST_SUCCESS, UPDATE_POST_FAIL, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS } from "../constants/postConstants";
import axios from 'axios'

export const createPost = (title,content, imageUrl) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_POST_REQUEST })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/post', { title,content, imageUrl }, config);

        dispatch({
            type: CREATE_POST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_POST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const listPosts = () => async (dispatch) => {
    try {
        dispatch({ type: SHOW_POSTS_REQUEST })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.get('/api/post', config);

        dispatch({
            type: SHOW_POSTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SHOW_POSTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getPost = (id) => async (dispatch) => {
    try {
        dispatch({ type: SHOW_POST_REQUEST })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.get(`/api/post/${id}`, config);

        dispatch({
            type: SHOW_POST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SHOW_POST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const updatePost = (id, title,content,imageUrl) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_POST_REQUEST })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/post/${id}`, { title,content,imageUrl}, config);

        dispatch({
            type: UPDATE_POST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_POST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_POST_REQUEST })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.delete(`/api/post/${id}`, config);

        dispatch({
            type: DELETE_POST_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: DELETE_POST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}