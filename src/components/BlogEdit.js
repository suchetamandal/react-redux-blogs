import React, { Component } from 'react';
import { Jumbotron,Button,ButtonToolbar, FormGroup, ControlLabel} from 'react-bootstrap';

export default class BlogEdit extends Component {
    constructor(props, context) {
      super(props, context);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        desc: this.props.blog.desc
      };
    }
  
    handleChange(e) {
      this.setState({ desc: e.target.value });
    }
  
    render() {
      return (
        <form>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>{this.props.blog.title}</ControlLabel>
            <FormControl
              type="text"
              value= {this.state.desc}
              placeholder="Edit Blog Description"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
      );
    }
}
