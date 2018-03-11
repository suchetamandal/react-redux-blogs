import './blogs.json';
import React, { Component } from 'react';
import { Jumbotron,Button } from 'react-bootstrap';
import fetch from 'isomorphic-fetch';
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
    console.log(this.state.blogList);
    return (
        <div>
        <Jumbotron>
        <h1>My Blog!</h1>
        <p>
          <Button bsStyle="primary">Learn more</Button>
        </p>
      </Jumbotron>
      </div>
    );
  }
}
