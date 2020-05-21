import { combineReducers } from 'redux';
import postsReducer from "./postsReducer";
import addPostReducer from "./addPostReducer";
import searchReducer from './searchReducer';

export default combineReducers({
    posts: postsReducer,
    newPost: addPostReducer,
    search: searchReducer
});