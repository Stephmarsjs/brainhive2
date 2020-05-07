import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class ViewPosts extends Component {
    state = {
        showComments: false,
    };

    clickHandler = () => {
        this.setState({
            showComments: !this.state.showComments
        });
    };

    renderComments = (post) => {
        return post.comments.map((comments) => {
            return (
                <div key={comments.commenter} className="box">
                 <p>{comments.commenter}</p>
                 <p>{comments.text}</p>   
                </div>
            )
        })
    };

    renderStars = (post) => {
        const rating = post.rating
    }
        render() {
     const { postId } = this.props.match.params;
        const { post } = this.props;
        return (
           <center> <div>
              <h3>{post.title}</h3>
              <h5>{post.resourceAuthor}</h5>
              <p>{post.summary}</p>
              <p>{post.link}</p>          
              <button onClick={() => this.clickHandler()}> 
              {this.state.showComments ? "Hide Comments" : "Show Comments"}
              </button>
              {this.state.showComments ? this.renderComments(post) : null}
            </div> </center>
        );
    }
}

const myStyles = {
    row: {
        marginRight: "8%",
        marginLeft: "8%",
        display: "flex",
        

    }
}

export default withRouter(ViewPosts);