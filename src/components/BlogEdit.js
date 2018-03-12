import React, { Component } from 'react';
import { Jumbotron,Button,ButtonToolbar, FormGroup,FormControl, ControlLabel} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export default class BlogEdit extends Component {
    constructor(props) {
      super(props);
      this.handleDescChange = this.handleDescChange.bind(this);
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.state = {
          title:'',
          desc:''
      };
    }
    componentDidMount(){
      if(!this.props.blog){
          const { blog } = this.props.match.params;
          const parsed = JSON.parse(blog);
          this.setState({
            title :parsed.title,
            desc : parsed.desc
          });
      } 
  }
  
    handleDescChange(e) {
      this.setState({ desc : e.target.value });
    }

    handleTitleChange(e) {
      this.setState({ title : e.target.value });
    }
  
    render() {
      return (
        <div>
          <Jumbotron>
        <form>
            <ControlLabel>
            <FormControl
              type="text"
              value= {this.state.title}
              placeholder="Edit Blog Title"
              onChange={this.handleTitleChange}
            />
            </ControlLabel>
            <FormControl
              type="text"
              value= {this.state.desc}
              placeholder="Edit Blog Description"
              onChange={this.handleDescChange}
            />
          <ButtonToolbar>
            <Link to="/">
             <Button bsStyle="danger">Cancel</Button> 
            </Link>   
            <Link to="/">
              <Button bsStyle="success">Save</Button>
            </Link>  
          </ButtonToolbar>
        </form>
        </Jumbotron>
        </div>
      );
    }
}
