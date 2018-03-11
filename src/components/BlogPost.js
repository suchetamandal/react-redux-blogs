import React, { Component } from 'react';
import { Jumbotron,Button,ButtonToolbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import './styles.css';

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
                title: 'Confirm to submit',
                message: 'Are you sure to do this.',
                buttons: [
                  {
                    label: 'Cancel',
                    onClick: () => {this.close}
                  },
                  {
                    label: 'Delete',
                    onClick: () => {this.close}
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
                        <Link to ={`/blogs/${this.props.blog.title}`}>
                            <Button bsStyle="primary">Edit</Button>
                        </Link>    
                        <Button bsStyle="danger" onClick={this.delete}>Delete</Button>
                    </ButtonToolbar>
              </div>
            </div>  
        );
    }
}
