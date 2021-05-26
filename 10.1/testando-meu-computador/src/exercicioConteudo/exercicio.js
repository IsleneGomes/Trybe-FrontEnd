import React from 'react';


const list = ['Comer', 'Rezar', "Amar", "Viver", "Sonhar"];

const Task = (value) => {
  return (
    list.map((element) => <li>{element}</li>)
  );
}
export default Task;