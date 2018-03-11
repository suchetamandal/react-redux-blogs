import React, { Component } from 'react';

const divStyle = {
    backgroundColor : 'black',
    height: '50px',
    width:'100%',
    position: 'absolute',
    margin: '0 0 0 0 auto',
    top: '0',
    left: '0'
};

export default class Header extends Component {
    render() {
      return (<div style={divStyle}></div>);
    }
}