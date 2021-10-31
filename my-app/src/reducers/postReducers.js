import { CREATE_POST_FAIL, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, DELETE_POST_FAIL, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, SHOW_POSTS_FAIL, SHOW_POSTS_REQUEST, SHOW_POSTS_SUCCESS, SHOW_POST_FAIL, SHOW_POST_REQUEST, SHOW_POST_RESET, SHOW_POST_SUCCESS, UPDATE_POST_FAIL, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS } from "../constants/postConstants"

export const postCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_POST_REQUEST:
            return { loading: true }

        case CREATE_POST_SUCCESS:
            return { loading: false, postInfo: action.payload }

        case CREATE_POST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const postUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_POST_REQUEST:
            return { loading: true }

        case UPDATE_POST_SUCCESS:
            return { loading: false,success:true, updatedPost: action.payload }

        case UPDATE_POST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const showPostsReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case SHOW_POSTS_REQUEST:
            return { loading: true, posts: [] }

        case SHOW_POSTS_SUCCESS:
            return {
                loading: false, posts: action.payload,
            }

        case SHOW_POSTS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const showPostReducer = (state = {  }, action) => {
    switch (action.type) {
        case SHOW_POST_REQUEST:
            return { loading: true }

        case SHOW_POST_SUCCESS:
            return {
                loading: false, post: action.payload,
            }

        case SHOW_POST_FAIL:
            return { loading: false, error: action.payload }
        
        case SHOW_POST_RESET:
            return {}

        default:
            return state
    }
}

export const postDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_POST_REQUEST:
            return { loading: true }

        case DELETE_POST_SUCCESS:
            return { loading: false, success: true }

        case DELETE_POST_FAIL:
            return { loading: false, success: false, error:action.payload }

        default:
            return state
    }
}
