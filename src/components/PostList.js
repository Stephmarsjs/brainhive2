import React, { Component } from 'react';
import { connect } from "react-redux";
import { increment } from "../actions";
import Post from './Post';
 

class PostList extends Component {
  state = {
    //state always needs to maintain the original posts
    query: "",
    filteredPosts: [...this.props.posts.list],
  };

  handleChange = (e) => {
    //pull updated text
    const query = e.target.value;

    const newPosts = this.props.posts.lists.filter(
      (post) =>
      //test to see if value is part of the title
        post.title.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
      //another condition
        post.summary.toLowerCase().indexOf(query.toLowerCase()) >= 0 
      );

    this.setState({
      query: query, 
      filteredPosts: newPosts,
    })
  }
  handleClick = () => {
    this.props.increment(this.props.posts.count);
  };

  renderPosts = () => {
    const display = this.state.filteredPosts.map((post) => {
      return <Post post={post} key={post.id} />
    });
    return display;
  };
  render() {
    return (
      <div>
        {/* TODO: add searchbar  */}
        <div style={myStyles.searchBar}>
         <p>
          <input style={myStyles.input}
            type="text"
            placeholder="Search"
            onChange={this.handleChange}
            />
         </p> 
        </div>
        <div className="postList">{this.renderPosts()}</div>
        <div className="footer">
          <button onClick={this.handleClick}>Increase</button>
          <p>{this.props.posts.count}</p>
        </div>
      </div>
    );
  }
}

const myStyles = {
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '30%',
    marginRight: '30%',
    marginBottom: 16,
  },
  input: {
    width: "70%",
    height: 32,
    fontSize: 20,
    marginBottom: 4,
  },
};

const mapStoreToProps = (store) => {
  return {
    posts: store.posts,
  };
};

const mapActionsToProps = () => {
  return {
    increment,
  };
};
export default connect(mapStoreToProps, mapActionsToProps())(PostList); 