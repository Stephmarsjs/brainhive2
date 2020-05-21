import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'; // when clicked, the user will be redirected.

// Making Post.js a stateful component to be able to access the state so user gets redirected --

class Post extends Component {
  state = { 
   clicked: false,
  }
  
  handleClick = () => {
    // this.props.handleSelect(this.props.post.id);
    this.setState({clicked: true}) 
};

render () {
  const { post } = this.props;
    return (  
        <div className={"box"} onClick={() => this.handleClick()}>
        {this.state.clicked ? <Redirect to={`/post/${post.id}`} /> 
        : null}
        <h2 className="postTitle">{post.title}</h2>
        <p>{post.resourceAuthor}</p>
        {post.videoLength ? (<p>Length: {post.videoLength}</p>) : null }
        {/* {conditional ? true code : false code */}
        <p>Rating: {post.rating}</p>
        <p>Comments: {post.comments.length}</p>
       <p>{post.length}</p>
      </div>
    );
  }
 }
 
export default Post
