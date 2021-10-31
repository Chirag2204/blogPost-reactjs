import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postCreateReducer, postDeleteReducer, postUpdateReducer, showPostReducer, showPostsReducer } from './reducers/postReducers';


const reducer = combineReducers({
    postCreate: postCreateReducer,
    postUpdate: postUpdateReducer,
    showPosts: showPostsReducer,
    showPost: showPostReducer,
    postDelete:postDeleteReducer
})

const initialState = {

}
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
