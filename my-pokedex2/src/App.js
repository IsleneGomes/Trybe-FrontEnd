import React from "react";
import "./App.css";
import data from "./data";
import Pokemon from "./Pokemon";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      position: 0,
      array: data,
    }
    this.NextPokemon = this.NextPokemon.bind(this)
    this.Filtro = this.Filtro.bind(this)
  }

  NextPokemon() {
    this.setState((estadoAnterior, _props) => ({
      position: this.state.position === this.state.array.length - 1? 0 : estadoAnterior.position + 1
    }))
  }

  Filtro(event) {
    const pokFilter = data.filter((item) => item.type.includes(event.target.innerText));
    this.setState((estadoAnterior, _props) => ({
      position: 0,
      array: pokFilter,
    }));
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">My Pokedex</h1>
        <Pokemon pokemon={this.state.array[this.state.position]} />
        <button onClick={this.NextPokemon}>Next</button>
        <button onClick={this.Filtro}>Fire</button>
        <button onClick={this.Filtro}>Psychic</button>
        <button onClick={this.Filtro}></button>
      </div>
    );
  }
 }

export default App;
