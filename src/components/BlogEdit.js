import React, { Component } from 'react';
import { Jumbotron,Button,ButtonToolbar, FormGroup,FormControl, ControlLabel} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class BlogEdit extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        desc: 'Now Testing Initial'
      };
    }
  
    handleChange(e) {
      this.setState({ desc: e.target.value });
    }
  
    render() {
      return (
        <div>
          <Jumbotron>
        <form>
            <ControlLabel>Testing Title of Blog</ControlLabel>
            <FormControl
              type="text"
              value= 'Ha ha ha '
              placeholder="Edit Blog Description"
              onChange={this.handleChange}
            />
          <ButtonToolbar>
            <Button bsStyle="primary">Cancel</Button>   
            <Link to="/">
              <Button bsStyle="danger">Save</Button>
            </Link>  
          </ButtonToolbar>
        </form>
        </Jumbotron>
        </div>
      );
    }
}
