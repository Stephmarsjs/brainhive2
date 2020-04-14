import React, { Component } from 'react';
import './App.css';
import Post from './components/Post';
import posts from './mock/posts';

class App extends Component{
   renderPosts = () => {
     const display = posts.map((post) => {
       return <Posts post={post} />;
     });
     // [<Post post=[0/>, <Post post[1]/>, <Post post[2]/>]
     return display;
   }
  render() {
  return (
    <div className="App">
    <h1>Welcome to BrainHive!</h1>
    <div className="postList">{this.renderPosts()}</div>
    </div>
    );
   }
  }
export default App;
