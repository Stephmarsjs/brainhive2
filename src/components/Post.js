import React from 'react';

const Post = ({post}) => {

  // the paramater is doing this:
  // const {post} = props;

    return (  
        <div className={'box'}>
        <h2 id="text">{post.title}</h2>
        <p id="text">{post.resourceAuthor}</p>
        {post.videoLength ? (<p id="text">Length: {post.videoLength}</p>) : null }
        {/* {conditional ? true code : false code */}
        <p id="text">Rating: {post.rating}</p>
        <p id="text">Comments: {post.comments.length}</p>
       <p id="text">{post.length}</p>
        </div>
    )
  }



export default Post
