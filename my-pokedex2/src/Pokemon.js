import React from 'react';

class Pokemon extends React.Component {
  render() {
  const { pokemon: { name, type, averageWeight, image } } = this.props;
  const { value, measurementUnit } = averageWeight;
    return (
      <div className='pok'>
      <img className="image" src={image} alt={'Pokemon'} />
        <div>
          <li><strong>Nome: </strong>{name}</li>
          <li><strong>Tipo: </strong>{type}</li>
          <li><strong>Peso: </strong>{value} {measurementUnit}</li>
        </div>       
      </div>
    )
  }
}

export default Pokemon;