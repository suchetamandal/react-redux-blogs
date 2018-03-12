import React, { Component } from 'react';
import { Jumbotron,Button,ButtonToolbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import './styles.css';
import PropTypes from 'prop-types'

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
        this.deleteConfirm.bind(this); 
    }

    deleteConfirm = () => {
        confirmAlert({
                title: 'Confirm to Delete',
                message: 'Are you sure you want to delete this thingy?.',
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
                <div className="well" style={divStyle}>
                    <p>{this.props.blog.desc}</p>
                    <ButtonToolbar>
                        <Link to={`/blogs/${JSON.stringify(this.props.blog)}`}>
                            <Button bsStyle="primary" blog={this.props.blog}>Edit</Button>
                        </Link>    
                        <Button bsStyle="danger" onClick={this.deleteConfirm}>Delete</Button>
                    </ButtonToolbar>
              </div>
            </div>  
        );
    }
}
