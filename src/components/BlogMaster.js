import './blogs.json';
import React, { Component } from 'react';
import { Jumbotron,Button } from 'react-bootstrap';
import fetch from 'isomorphic-fetch';
import BlogPost from './BlogPost';
const blogData = require('./blogs.json');

export default class BlogMaster extends Component {
  constructor(props){
    super(props);
    this.state = {
      blogList: []
    };
  }

  componentWillMount() {
        this.setState({
          blogList: blogData
        });
  }  
   
  render() {
    return (
        <div>
        <Jumbotron>
        <h1>My Blog!</h1>
            {
              <BlogPost/>
            }
            {
              <BlogPost/>
            }
      </Jumbotron>
      </div>
    );
  }
}
