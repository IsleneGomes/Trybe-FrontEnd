import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      pokemons.map((pok, index) => <Pokemon info={pok} key={index} />)
    )
  }
}

export default Pokedex;