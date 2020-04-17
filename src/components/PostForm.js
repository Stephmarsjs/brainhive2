import React, { Component } from 'react';


class PostForm extends Component {
        state = {
            posterName: "",
            cohort: "",
            title: "",
            resourceAuthor: "",
            jobSkillLevel: ""
        };

    handleChange = (e) => {
        this.setState ({
            ...this.state,
            [e.target.id]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        alert(`${this.state.posterName} ${this.state.cohort} ${this.title} ${this.state.resourceAuthor} ${this.state.jobSkillLevel} ${this.length}`);
        e.preventDafault();
    }
    render() {
        return (
          <div>
            <form id="post-form">
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
    }

    export default PostForm;