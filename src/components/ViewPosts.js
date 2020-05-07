import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from "./common/Button";


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
            );
        });
    };

    renderStars = (post) => {
        const rating = post.rating;
        let stars = "";
        for (let i = 0; i < rating; i++){
            stars += "★ ";   
        }
        return stars;
    };

    renderYoutube = (post) => {
        if (post.link.indexOf("youtube") >= 0) {
            const videoIdIndex = post.link.indexOf("?v=");
            const videoId = post.link.substring(videoIdIndex + 3);
            console.log(videoId);
            return (
              <iframe
                title="video"
                width="560"
                height="315"
                src={`https://wwww.youtube.com/embed/${videoId}`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            );
        };
    };
        render() {
         const { postId } = this.props.match.params;
         const post = this.props.post[postId - 1];
         return (
              <div style={myStyles.container}>
              <h3>{post.title}</h3>
              <h5>{post.resourceAuthor}</h5>
              <div style={myStyles.row}>
              <div style={myStyles.cell}>
               <p>Shared by: {post.posterName}</p>
               </div>
               <div style={myStyles.cell}>
                <p>Cohort: {post.cohort}</p>
              </div>
             </div>   
              <p>{post.summary}</p>
              {this.renderYoutube(post)}
              <div style={myStyles.row}>
                <div style={myStyles.cell}>
                    <a href={post.link}>View Resource</a>
                </div>
              <div style={myStyles.cell}>
                <p style={{margin: 0}}>rating: {this.renderStars(post)}</p>
              </div> 
             </div>
             {post.categories.length ? (
                <div style={myStyles.row}>{post.categories.join}(", ")}</div>
             ) : null}
             <Button onClick={this.clickHandler} myStyle={myStyles.button}>
                 {this.state.showComments ? "Hide Comments" : "Show Comments"}
             </Button>
             {this.state.showComments ? this.renderComments(post) : null}
            </div> 
        );
    }
}

const myStyles = {
    row: {
        width:"100%",
        marginRight: "8%",
        marginLeft: "8%",
        display: "flex",
        flexDirection: "row",
        marginTop: "10px",
        marginBottom: "10px",
        selfAlign: "center",
        justifyContent: "space-evenly",
    },
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        height: "100vh",
        width: "80%",
        justifyContent: "flex-start",
        alignitems: "center",
        border: "1px solid brown",
        boxShadow: "5px 3px 5px brown",
        marginTop: 16,
        marginBottom: 16,
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: 16, 
        paddingBottom: 16,
    },
    button: {
        marginTop: 16,
        backgroundColor: "feb300",
        color: "white",
    },
  };

export default withRouter(ViewPosts);