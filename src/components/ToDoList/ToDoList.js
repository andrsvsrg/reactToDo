import './ToDolist.css';

import React, { useMemo } from 'react';

import Draggable from 'react-draggable';
import ToDoItem from './ToDoItem/ToDoItem';

const ToDoList = ({ todo, selectedDay, deleteTask, completedTask, updateTaskPosition, changeTaskTitle }) => {

  const selectDayStr = useMemo(() => selectedDay.format('DDMMYYYY'), [selectedDay]);

  return (
    <div className="draggable-fild">
      { todo[selectDayStr]?.length ? (
        todo[selectDayStr].map((item, index) => (

          <Draggable
            key={ item.id }
            position={ null }
            defaultPosition={ item.defaultPos }
            onStop={ (e, data) => {
              updateTaskPosition(data, index, selectDayStr);
            } }
          >
            <div className="draggable-element">
              <ToDoItem changeTaskTitle={ changeTaskTitle } completedTask={ completedTask }
                        deleteTask={ deleteTask }
                        selectDayStr={ selectDayStr } selectedDay={ selectedDay }
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


