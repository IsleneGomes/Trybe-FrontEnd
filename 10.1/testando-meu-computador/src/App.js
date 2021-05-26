import React from 'react';
import './App.css';

const list = ['Comer', 'Rezar', "Amar"];

const Task = (value) => {
  return (
    list.map((element) => <li>{element}</li>)
  );
}


export default Task;