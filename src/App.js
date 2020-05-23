import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import PostList from "./components/PostList";
import Navbar from "./components/Navbar";
import ViewPosts from "./components/ViewPosts";
import PostForm from "./components/PostForm";

 import INITIAL_POSTS from "./mock/posts";

class App extends Component {
  state = {
    posts: [...INITIAL_POSTS],
    selected: 1,
  };

  addPost = (postData) => {
    //this will add a unique key to our new post
    postData.id = this.state.posts.length + 1;
    this.setState({
      ...this.state,
      posts: [...this.state.posts, postData],
    });
  };

  handleSelect = (id) => {
    console.log('clicked', id);
    this.setState({
      ...this.state,
      selected: id,
    });
  };

  render() {
    return (
      //App.js mounts once because of BrowserRouter and Switch
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route path='/' exact>
              <PostList
                posts={this.state.posts}
                handleSelect={this.handleSelect}
              />
            </Route>
            <Route path='/add' exact>
              <PostForm addPost={this.addPost} />
            </Route>
            <Route path='/post/:postId'>
              {/* send post with the id that is selected in ViewPost route */}
              <ViewPosts post={this.state.posts[this.state.selected + 1]} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;