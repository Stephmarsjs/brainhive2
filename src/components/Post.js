import React from 'react';

const Post = ({post}) => {

    return (  
        <div className={'box'}>
        <h1>{post.posterName}</h1>
        <p>{post.resourceAuthor}</p>
        <p>{post.title}</p>
       <p>{post.length}</p>
        </div>
    )
  }


export default Post
