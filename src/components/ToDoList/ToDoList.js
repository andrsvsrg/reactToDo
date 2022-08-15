import './ToDolist.css';

import React, { useMemo } from 'react';

import Draggable from 'react-draggable';
import ToDoItem from './ToDoItem/ToDoItem';

const ToDoList = ({ todo, setToDo, selectedDay }) => {

  const selectDayStr = useMemo(() => selectedDay.format('DDMMYYYY'), [selectedDay]);

  function updateTaskPosition(data, index) {
    const todoCopy = JSON.parse(JSON.stringify(todo));
    todoCopy[selectDayStr][index].defaultPos = { x: data.x, y: data.y };
    setToDo(todoCopy);
  }

  return (
    <div className="draggable-fild">
      { todo[selectDayStr]?.length ? (
        todo[selectDayStr].map((item, index) => (

          <Draggable
            key={ item.id }
            position={ null }
            defaultPosition={ item.defaultPos }
            onStop={ (e, data) => {
              updateTaskPosition(data, index);
            } }
          >
            <div className="draggable-element">
              <ToDoItem selectDayStr={ selectDayStr } selectedDay={ selectedDay } todo={ todo } setToDo={ setToDo }
                        item={ item } index={ index } />
            </div>
          </Draggable>
        ))
      ) : (
        <div className="header-taskNotFound">Tasks not found</div>
      ) }
    </div>
  );
};

export default ToDoList;


