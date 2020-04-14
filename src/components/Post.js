import React from 'react';

const Post = ({post}) => {

  // the paramater is doing this:
  // const {post} = props;

    return (  
        <div className={'box'}>
        <h2>{post.title}</h2>
        <p>{post.resourceAuthor}</p>
        {post.videoLength ? (<p>Length: {post.videoLength}</p>) : null }
        {/* {conditional ? true code : false code */}
        <p>Rating: {post.rating}</p>
        <p>Comments: {post.comments.length}</p>
       <p>{post.length}</p>
        </div>
    )
  }



export default Post
