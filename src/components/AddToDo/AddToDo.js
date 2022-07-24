import { randomColor } from 'randomcolor'
import React, { useState } from 'react';

import { v4 as uuid } from 'uuid'

import './addToDo.css'

const AddToDo = ({ todo, setToDo, selectedDay }) => {

  const [value, setValue] = useState('')


  function saveToDo() {
    const selectDayStr = selectedDay.format('DDMMYYYY')
    if (value.trim()) {
      if(todo[selectDayStr]) {
        const todoCopy = JSON.parse(JSON.stringify(todo))
        todoCopy[selectDayStr].push({
          id: uuid(),
          title: value,
          status: true,
          defaultPos: defaultPos(),
          color: randomColor({ luminosity: 'light' })
        });
        setToDo(todoCopy);
      } else {
        const todoCopy = JSON.parse(JSON.stringify(todo))
        todoCopy[selectDayStr] = [{
          id: uuid(),
          title: value,
          status: true,
          defaultPos: defaultPos(),
          color: randomColor({ luminosity: 'light' })
        }]
        setToDo(todoCopy);
      }


      setValue('')
    }
  }

  function keyPressAddItem(e) {
    const code = e.keyCode || e.which
    if (code === 13) {
      saveToDo()
    }

  }

  function defaultPos() {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    const defaultWidth = Math.floor(Math.random() * (width < 300 ? width : width - 300)) + 1
    const defaultHeight = Math.floor(Math.random() * (height < 565 ? height : height - 565)) + 1;
    return { x: defaultWidth, y: defaultHeight };
  }


  return (
    <div>
      <div className="addtodo_div">
        <input className="addtodo_input"
               value={ value }
               onChange={ (e) => setValue(e.target.value) }
               placeholder="What to do?"
               type="text"
               onKeyPress={ (e) => keyPressAddItem(e) }
        />
        <button className="addtodo_button" onClick={ saveToDo }>Add a task</button>
      </div>
      <p className='addtodo_selected-date'> {selectedDay.format('DD.MM.YYYY')}</p>
    </div>
  );
};

export default AddToDo;