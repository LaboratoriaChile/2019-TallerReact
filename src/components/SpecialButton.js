import React, { Component } from 'react';

export class SpecialButton extends React.Component{
  constructor(props){
    super(props);

    console.log("Props > "+JSON.stringify(props.color));
  }

  render(){
    return (<button style={{color : this.props.color}}>{this.props.children}</button>);
  }
}