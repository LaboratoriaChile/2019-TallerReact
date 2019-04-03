import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {SpecialButton} from './components/SpecialButton';
import { evolucionarPokemon } from './actions/pokemonAction';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      showMessage : false,
      buttonColor : 'purple',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(newColor){
    this.setState({
      ...this.state,
      buttonColor: newColor,
      showMessage : !this.state.showMessage,
    });

    this.props.evolucionarPokemonAccion();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {!this.state.showMessage && (
            <p>
            Holo, soy un taller de react
          </p>
          )}
          {this.state.showMessage && (
            <p>Holo, me presionaron el botón</p>
          )}
          <SpecialButton color={this.state.buttonColor} onClickHandler={this.handleClick}>Press me!</SpecialButton>
          {this.props.pokemonReducer && (
            <h2>Pokemon : {this.props.pokemonReducer.name}</h2>)}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  evolucionarPokemonAccion : evolucionarPokemon.bind(null, dispatch)
});

export default 
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
