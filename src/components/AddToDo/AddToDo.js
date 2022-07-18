import React, {useState} from 'react';

import { v4 as uuid } from 'uuid'
import {randomColor} from 'randomcolor'

import './addToDo.css'

const AddToDo = ({ todo, setToDo }) => {

  const[value,setValue] = useState('')

  function saveToDo() {

    if(value.trim()) {
      setToDo([...todo, {
        id: uuid(),
        title: value,
        status: true,
        defaultPos: defaultPos(),
        color: randomColor({ luminosity: 'light' })
      }])

      setValue('')
    }
  }

 function defaultPos() {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    const defaultWidth = Math.floor(Math.random() * (width < 300 ? width : width -300)) + 1
    const defaultHeight = Math.floor(Math.random() *(height < 155 ? height: height - 155)) + 1 ;
    return {x: defaultWidth, y: defaultHeight};
  }


  return (
    <div className='addtodo_div' >
      <input  className='addtodo_input' value={value} onChange={(e) => setValue(e.target.value)} placeholder='What to do?' type="text"/>
      <button className='addtodo_button' onClick={saveToDo}>Add a task</button>
    </div>
  );
};

export default AddToDo;