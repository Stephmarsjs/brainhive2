import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import addPostReducer from "./addPostReducer";
import searchReducer from './searchReducer';

export default combineReducers({
    posts: postsReducer,
    newPost: addPostReducer,
    search: searchReducer
});

const store = {
    posts: {
        list: [],
        loading: false,
        errors: {},
        count: 0
    },
    newPost: {
        form: {
            id: 0,
            posterName: "",
            resourceAuthor: "",
            jobSkillLevel: "",
            cohort: "",
            title: "",
            categories: "",
            summary: "",
            link: "",
            resourceType: "",
            datePublished: "",
            videoLength: "",
            timeToComplete: "",
            rating: "",
            comments:[],
        },
        loading: false,
        errors: null,
      },
      search: {
          list: [],
          loading: false,
          errors: {}
      }
    }