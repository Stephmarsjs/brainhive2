import React from 'react';
import { connect } from 'react-redux';
import { increment, changeQuery } from '../actions';
import Post from './Post';


const PostList = (props) => {
// console.log(props.posts.list)
  const handleChange = (e) => {
    const query = e.target.value;

    props.changeQuery(query, props.posts.list);
  };

  const handleClick = () => {
   props.increment(props.posts.count);
  }

  const renderPosts = () => {
    const display = props.search.list.map((post) => {
      return <Post
        post={post}
        key={post.Id}
        handleSelect={props.handleSelect} />
    });
    return display;
  };

    return (
      <div>
        <div style={myStyles.searchBar}>
          <input style={myStyles.input}
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </div>
        <div className="postList">{renderPosts()}</div>
        <div className="footer">
          <button onClick={handleClick}>increase</button>
          <p>{props.posts.count}</p>
        </div>
      </div>
    );
};

const myStyles = {
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '30%',
    marginRight: '30%',
    marginBottom: 16,
    height: 32
  },
  input: {
    width: "70%",
    height: 32,
    fontSize: 20,
    marginBottom: 4,
  }
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

export default connect(mapStoreToProps, mapActionsToProps()
)(PostList); 