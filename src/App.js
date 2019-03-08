import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SpecialButton} from './components/SpecialButton';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      showMessage : false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      ...this.state,
      showMessage : !this.state.showMessage
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {!this.state.showMessage && (
            <p>
            Holo, soy un taller de react
            Y me actualizo con cada modificación
          </p>
          )}
          {this.state.showMessage && (
            <p>Holo, me presionaron el botón</p>
          )}
          <SpecialButton color={'purple'} onClick={this.handleClick}>Press me!</SpecialButton>
          <SpecialButton color={'blue'} onClick={this.handleClick}>Press me!</SpecialButton>
          <SpecialButton color={'red'} onClick={this.handleClick}>Press me!</SpecialButton>
          <SpecialButton color={'yellow'} onClick={this.handleClick}>Press me!</SpecialButton>
          <SpecialButton color={'green'} onClick={this.handleClick}>Press me!</SpecialButton>
          <SpecialButton color={'black'} onClick={this.handleClick}>Press me!</SpecialButton>
        </header>
      </div>
    );
  }
}

export default App;
