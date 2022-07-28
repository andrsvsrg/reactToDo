import "./addToDo.css";

import { randomColor } from "randomcolor";
import React, { useMemo, useState } from 'react';

import { v4 as uuid } from "uuid";

const AddToDo = ({ todo, setToDo, selectedDay }) => {

  const [value, setValue] = useState("");
  const selectDayStr = useMemo(() => selectedDay.format("DDMMYYYY") , [selectedDay]) ;
  const selectedDayTitle =  useMemo(() => selectedDay.format("DD.MM.YYYY") , [selectedDay]) ;

  function saveToDo() {

    if (value.trim()) {
      const todoCopy = JSON.parse(JSON.stringify(todo));
      todoCopy[selectDayStr] = todoCopy[selectDayStr] || []
      todoCopy[selectDayStr].push({
        id: uuid(),
        title: value.trim(),
        isCompleted: false,
        defaultPos: defaultPos(),
        color: randomColor({ luminosity: "light" }),
      })
      setToDo(todoCopy);
    }
    setValue("");
  }

  function onKeyPressAddItem(e) {
    const code = e.charCode ;
    const ENTER_CODE = 13;
    if (code === ENTER_CODE) {
      saveToDo();
    }
  }

  function defaultPos() {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    const defaultWidth =
      Math.floor(Math.random() * (width < 300 ? width : width - 300)) + 1;
    const defaultHeight =
      Math.floor(Math.random() * (height < 565 ? height : height - 565)) + 1;
    return { x: defaultWidth, y: defaultHeight };
  }

  return (
    <div className="add-task-container">
      <div className="add-todo_block">
        <input
          className="add-todo-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="What to do?"
          type="text"
          onKeyPress={onKeyPressAddItem}
        />
        <button className="add-todo-button" onClick={saveToDo}>
          Add a task
        </button>
      </div>
      <p className="add-todo-selected-date">
        {selectedDayTitle}
      </p>
    </div>
  );
};

export default AddToDo;
