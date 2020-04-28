import React from 'react';
import { useParams } from 'react-router-dom';


const ViewPosts = (props) => {
    const { postId } = useParams();
    const { post } = props;
    return (
        <div className={'box'}>
        <h2 className="postTitle">{post.title}</h2>
        <p id="text">{post.resourceAuthor}</p>
        {post.videoLength ? (<p id="text">Length: {post.videoLength}</p>) : null }
        {/* {conditional ? true code : false code */}
        <p id="text">Rating: {post.rating}</p>
        <p id="text">Comments: {post.comments.length}</p>
       <p id="text">{post.length}</p>
        </div>
    );
}

export default ViewPosts;