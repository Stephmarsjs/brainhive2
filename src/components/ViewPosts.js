import React from 'react';
import { useParams } from 'react-router-dom';


const ViewPosts = (props) => {
    const { postId } = useParams();
    const { post } = props;
    return (
        <h3 id="text">{post.title}
        </h3>
    );
}

export default ViewPosts;