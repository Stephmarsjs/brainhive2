import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'; // when clicked, the user will be redirected.

// Making Post.js a stateful component to be able to access the state so user gets redirected --

class Post extends Component {
  state = {
    clicked: false
  };

  handleClick = () => {
    this.props.handleSelect(this.props.post.id); // This sends back the ID of the post.
    this.SetState({clicked: true}) // Once an item is clicked, the state gets set to true.
};

render () {
  const { post } = this.props;
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
    )
  }
}


export default Post
