import React, { Component } from 'react';
import './App.css';
import Post from './components/Post';

class App extends Component{
    post = {
      posterName: 'Stephanie',
      resourceAuthor: 'Tim Cook',
      skillLevel: 'Avdanced',
      cohort: '0',
      title: 'How to async-ronize',
      technology: 'Javascript',
      summary: 'This is imformative stuff about async.',
      link: 'www.google.com/TimCook',
      resourceType: 'Article',
      datePublished: '2017-11-15.00:00z',
      length: '4 minutes',
      rating: '3',
      comments: 'It could have been better.'

    }
  render() {
  return (
    <div className="App">
     <Post post={this.post}/>
    </div>
    );
   }
  }
export default App;
