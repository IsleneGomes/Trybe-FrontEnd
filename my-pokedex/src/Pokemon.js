import React from 'react';

class Pokemon extends React.Component {
  render() {
  const { name, type, averageWeight, image } = this.props.info;
  const { value, measurementUnit } = averageWeight;
    return (
      <div className='pok'>
        <li>Nome: {name}</li>
        <li>Tipo: {type}</li>
        <li>Peso: {value} {measurementUnit}</li>
        <img src={image} alt={'Pokemon'} />
      </div>
    )
  }
}

export default Pokemon;