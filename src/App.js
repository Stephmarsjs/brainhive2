import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import PostList from "./components/PostList";
import Navbar from "./components/Navbar";
import ViewPosts from "./components/ViewPosts";
import PostForm from "./components/PostForm";

// import INITIAL_POSTS from "./mock/posts";


const App = (props) => {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact>
            <PostList />
            </Route>
            <Route path="/add" exact>
            <PostForm />
            </Route>
            <Route path="/post/:postId">
              <ViewPosts />
            </Route>

          </Switch>
        </div>
      </BrowserRouter>
    );
  };

export default App;