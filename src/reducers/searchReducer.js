import {CHANGE_QUERY} from '../actions/types'

const INITIAL_STORE = {
    list: [],
    query: "",
    loading: false,
    errors: {}
}

export default (store = INITIAL_STORE, action) => {
    switch(action.type) {
        case CHANGE_QUERY:
            return {
                ...store,
                query: action.payload.query,
                list: action.payload.list
            }
            default:
                return store;
    }
}