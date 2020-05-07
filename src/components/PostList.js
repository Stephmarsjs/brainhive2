import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
	state = {
		query: "",
		filteredPosts: [...this.props.posts],
	};

	handleChange = (e) => {
		const query = e.target.value;

		const newPosts = this.props.posts.filter(
			(post) =>
				post.title.toLowerCase().indexOf(query.toLowerCase()) >=0 ||
				post.summary.toLowerCase().indexOf(query.toLowerCase()) > 0
		);

		this.setState({
			query: query,
			filteredPosts: newPosts,
		});
	};

	renderPosts = () => {

		const display = this.state.filteredPosts.map((post) => {
			return (
				<Post 
					post={post}
					key={post.id}
					handleSelect={this.props.handleSelect}
				/>
			);
		});

		return display;
	};

	render() {    
		return (
			<div> 
			<div style={myStyles.searchBar}>
			 <p>
			 	<span role="img">🔍</span>
				<input 
					style={myStyles.input}
					type="text"
					placeholder="search titles"
					onChange={this.handleChange}
				/>
			</p>
		</div>
		<div className="postList">{this.renderPosts()}</div>
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
		marginBottom: "16",
		backgroundColor: "#feb300",
	},
	input: {
		width: "100%",
		height: 32,
		fontSize: 18,
		marginBottom: 4,
	}
}

export default PostList;