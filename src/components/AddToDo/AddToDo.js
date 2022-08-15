import './addToDo.css';

import { randomColor } from 'randomcolor';
import React, { useMemo, useState } from 'react';

import { v4 as uuid } from 'uuid';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const AddToDo = ({ todo, setToDo, selectedDay }) => {

  const [inputValue, setInputValue] = useState('');
  const selectDayStr = useMemo(() => selectedDay.format('DDMMYYYY'), [selectedDay]);
  const selectedDayTitle = useMemo(() => selectedDay.format('DD.MM.YYYY'), [selectedDay]);

  function AddTask() {
    if (!inputValue.trim()) {
      setInputValue('');
      return;
    }

    const todoCopy = JSON.parse(JSON.stringify(todo));
    todoCopy[selectDayStr] = todoCopy[selectDayStr] || [];
    todoCopy[selectDayStr].push({
      id         : uuid(),
      title      : inputValue.trim(),
      isCompleted: false,
      defaultPos : getRandomDefaultTaskPosition(),
      color      : randomColor({ luminosity: 'light' })
    });
    setToDo(todoCopy);
    setInputValue('');
  }

  function onKeyPressAddTask(e) {
    const code = e.charCode;
    const ENTER_CODE = 13;
    if (code === ENTER_CODE) {
      AddTask();
    }
  }

  return (
    <div className="add-task-container">
      <div className="add-todo-block">
        <MyInput
          className="add-todo-input"
          value={ inputValue }
          onChange={ (e) => setInputValue(e.target.value) }
          placeholder="What to do?"
          type="text"
          onKeyPress={ onKeyPressAddTask }
        />
        <MyButton className="add-todo-button" onClick={ AddTask }>
          Add a task
        </MyButton>
      </div>
      <p className="add-todo-selected-date">
        { selectedDayTitle }
      </p>
    </div>
  );
};

export default AddToDo;

function getRandomDefaultTaskPosition() {
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  const WIDTH_HEADER = 300; // 300px - fix width header
  const WIDTH_CALENDAR = 580; // 580px - fix width footer
  const defaultWidth =
    Math.floor(Math.random() * (width < WIDTH_HEADER ? width : width - WIDTH_HEADER));
  const defaultHeight =
    Math.floor(Math.random() * (height < WIDTH_CALENDAR ? height : height - WIDTH_CALENDAR));

  return { x: defaultWidth, y: defaultHeight };
}
