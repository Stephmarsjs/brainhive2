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
                <div className="box">
                 <p>{comments.commenter}</p>
                 <p>{comments.text}</p>   
                </div>
            )
        })
    };

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

export default withRouter(ViewPosts);