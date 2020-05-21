import posts from "../mock/posts";
import { INCREMENT, SUBMIT_FORM } from "../actions/types";

const INITIAL_STORE = {
    list: [...posts],
    loading: false,
    errors: {},
    count: 0,
};

export default (store = INITIAL_STORE, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...store,
                count: action.payload,
            };
            case SUBMIT_FORM:
                const newPost = action.payload;
                newPost.id = store.list[store.list.length - 1].id + 1;
                return {
                    ...store,
                    list: [...store.list, newPost],
                };
                default:
                    return store;
    }
};