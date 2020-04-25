import React, { Component } from 'react';


class PostForm extends Component {
        state = {
            posterName: "",
            resourceAuthor: "",
            jobSkillLevel: "",
            cohort: "",
            title: "",
            categories: "",
            summary: "",
            link: "",
            resroucetype: "",
            datePublished: null,
            videoLength: "",
            timeToComplete: "",
            rating: "",
            comments: [],
        }
        };

    handleChange = (e) => {
        this.setState ({
            ...this.state,
            [e.target.id]: e.target.value,
        });
    };

    handleSubmit = (e) => {
      e.preventDafault();
      // add any form validation
      const postData = { ...this.state };
      postData.categories = postData.categories.split(",");
      this.props.addPost(postData);
      this.setState({
        posterName: "",
        resourceAuthor: "",
        jobSkillLevel: "",
        cohort: "",
        title: "",
        categories: "",
        summary: "",
        link: "",
        resourceType: "",   
        datePublished: null,
        videoLength: "",
        timeToComplete: "",
        rating: "",
        comments: [],  
      });
    };
    render() {
        return (
          <div>
            <form style={myStyles.form} onSubmit={(e) => this.handleSubmit()}>
              <input
                type="text"
                id="posterName"
                placeholder="Your Name"
                value={this.state.posterName}
                onChange={(e) => this.handleChange(e)}
                 />
              <input
                type="text"
                id="cohort"
                placeholder="Cohort #"
                value={this.state.cohort}
                onChange={(e) => this.handleChange(e)}
                 />  

               <input
                type="text"
                id="title"
                placeholder="Title"
                value={this.state.title}
                onChange={(e) => this.handleChange(e)}
                 />

               <input
                type="text"
                id="resourceAuthor" 
                placeholder="Resource Author" 
                value={this.state.resourceAuthor}
                onChange={(e) => this.handleChange(e)}
                 />

               <input
                type="text"
                id="jobSkillLevel"
                placeholder="Skill Level"
                value={this.state.jobSkillLevel}
                onChange={(e) => this.handleChange(e)}  
                 />
                  <button type="submit">Submit</button>
                    </form>
                </div>

            )
        }
    export default PostForm;