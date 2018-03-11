import React, { Component } from 'react';
import { Jumbotron,Button,ButtonToolbar} from 'react-bootstrap';
import './index.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

const divStyle = {
    margin: '40px',
    padding :'10px',
    backgroundColor : 'white',
    borderRadius: '5px'
};

const titleStyle = {
    margin: '40px'
};

export default class BlogPost extends Component {
    constructor(props, context) {
        super(props, context);
    }

    delete = () => {
        confirmAlert({
          title: 'Delete It?',
          message: 'Are you sure you want to delete this thingy',
          buttons: [
            {
              label: 'OK',
              onClick: () => alert('Click Yes')
            },
            {
              label: 'Cancel',
              onClick: () => alert('Click No')
            }
          ]
        })
      };

    render() {
        return (
            <div>
                <h3 style={titleStyle}>{this.props.blog.title}</h3>
                <div class="well" style={divStyle}>
                    <p>{this.props.blog.desc}</p>
                    <ButtonToolbar>
                        <Button bsStyle="primary">Edit</Button>
                        <Button bsStyle="danger" onClick={this.delete}>Delete</Button>
                    </ButtonToolbar>
              </div>
            </div>  
        );
    }
}
