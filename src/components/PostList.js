import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, changeQuery } from "../actions";
import Post from "./Post";


class PostList extends Component {

  componentDidMount = () => {
    console.log('mount');
    if (this.props.search.list.length === 0) {
      this.props.changeQuery("", this.props.posts.list)
    }
  }

  componentWillUnmount = () => {
    console.log('unmount');
  }

  componentDidUpdate = () => {
    console.log('update')
  }

  handleChange = (e) => {
    const query = e.target.value;

    this.props.changeQuery(query, this.props.posts.list);
  };

  handleClick = () => {
    this.props.increment(this.props.posts.count);
  };

  renderPosts = () => {

    const display = this.props.search.list.map((post) => {
      return <Post post={post} key={post.id} />;
    });
    return display;
  };

  render() {
    return (
      <div>
        <div style={myStyles.searchBar}>
          <p>
            <input
              style={myStyles.input}
              type="text"
              placeholder="🔍search titles"
              value={this.props.search.query}
              onChange={this.handleChange}
            />
          </p>
        </div>
        <div className="postList">{this.renderPosts()}</div>
        <div className="footer">
          <button onClick={this.handleClick}>increase</button>
          <p>{this.props.posts.count}</p>
        </div>
      </div>
    );
  }
}

const myStyles = {
  searchBar: {
    flex: 1,
    flexDirection: "row",
    marginLeft: "30%",
    marginRight: "30%",
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
    search: store.search
  };
};

const mapActionsToProps = () => {
  return {
    increment,
    changeQuery
  };
};

export default connect(mapStoreToProps, mapActionsToProps())(PostList);