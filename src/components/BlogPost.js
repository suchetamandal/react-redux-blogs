import React, { Component } from 'react';
import { Jumbotron,Button,ButtonToolbar,ButtonGroup } from 'react-bootstrap';

const divStyle = {
    margin: '40px',
    border: '5px',
    padding :'10px',
    backgroundColor : 'white',
    borderRadius: '5px'
  };

export default class BlogPost extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: '',
          desc:''
        };
    }

    render() {
        return (
                <div class="well" style={divStyle}>
                    <p>Here Post will be displayed</p>
                    <ButtonToolbar>
                        <Button bsStyle="primary">Edit</Button>
                        <Button bsStyle="danger">Delete</Button>
                    </ButtonToolbar>
              </div>
        );
    }
}
