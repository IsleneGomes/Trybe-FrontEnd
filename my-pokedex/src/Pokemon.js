import React from 'react';

class Pokemon extends React.Component {
  render() {
  const { pokemon: { name, type, averageWeight, image } } = this.props;
  const { value, measurementUnit } = averageWeight;
    return (
      <div className='pok'>
        <li>Nome: {name}</li>
        <li>Tipo: {type}</li>
        <li>Peso: {value} {measurementUnit}</li>
        <img className="image" src={image} alt={'Pokemon'} />
      </div>
    )
  }
}

export default Pokemon;