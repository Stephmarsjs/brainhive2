import React, { Component } from 'react';
import './App.css';
import Post from './components/Post';
import posts from './mock/posts';

import PostForm from "./components/PostForm";

class App extends Component{
   renderPosts = () => {
     const display = posts.map((post) => {
       return <Post post={post} />;
     });
     // [<Post post=[0/>, <Post post[1]/>, <Post post[2]/>]
     return display;
   }
  render() {
    return (
      <div className="App">
        <h1 id="text">Welcome to BrainHive!</h1>
          <div className="postList">{this.renderPosts()}</div>
          <PostForm />
      </div>
    );
   }
  }
export default App;
