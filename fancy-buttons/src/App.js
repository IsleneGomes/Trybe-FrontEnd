import React from 'react';
import './App.css';

function firstButton() {
  console.log('Clicou no primeiro botão!')
}

function secondButton() {
  console.log('Clicou no segundo botão!')
}

function thirdClick() {
  console.log('Clicou no terceiro botão!')
}

class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return (
      <div>
        <button onClick={firstButton}>Primeiro botão</button>
        <button onClick={secondButton}>Segundo botão</button>
        <button onClick={thirdClick}>Terceiro botão</button>
      </div>

    );
  }
}

export default App;