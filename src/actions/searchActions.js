import {CHANGE_QUERY} from './types';

export const changeQuery = (query, postList) => (dispatch) => {
    const newPosts = postList.filter(
        (post) =>
            post.title.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
            post.summary.toLowerCase().indexOf(query.toLowerCase()) > 0
    )
    dispatch({
        type: CHANGE_QUERY,
        payload: {
            query,
            list: newPosts
        }
    })
}