import React, { Component } from 'react';
import './App.css';
import Post from './components/Post';
import posts from './mock/posts';

import PostForm from "./components/PostForm";

class App extends Component {
  state = {
    posts: [...posts],
  };

  addPost = (postData) => {
    console.log('Hello', postData)
    this.setState({
      post: [...this.state.posts, postData],
    });
  };
  renderPosts = () => {
    const display = this.state.posts.map((post) => {
      return <Post post={post} />;
    });
    return display;
  };  
  render() {
    return (
      <div className="App">
        <div className="header">
        <h1 id="text">Welcome to BrainHive!</h1>
        <div id="navigation">
          <a href=">Add Post"></a>
          </div>
        </div>
          <div className="postList">{this.renderPosts()}</div>
          <postForm addPosr={this.addPost} />
          <PostForm />
      </div>
    );
   }
  }
export default App;
