import React, { Component } from 'react';

export class SpecialButton extends React.Component{
  constructor(props){
    super(props);

    console.log("Props > "+JSON.stringify(props.color));
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.onClickHandler('orange');
  }

  render(){
    return (<button style={{color : this.props.color}} onClick={this.handleClick}>{this.props.children}</button>);
  }
}