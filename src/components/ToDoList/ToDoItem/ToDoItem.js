import './ToDoItem.css';

import React, { useState } from 'react';
import EditTask from './EditTask/EditTask';
import ShowTask from './ShowTask/ShowTask';

const ToDoItem = ({ item, index, selectDayStr, deleteTask, completedTask, changeTaskTitle }) => {

  const [editingId, setEditingId] = useState(null);
  const [titleChangeInput, setTitleChangeInput] = useState('');

  function editToDo(id, title) {
    setEditingId(id);
    setTitleChangeInput(title);
  }

  function handlerTitleChange(newTitle) {
    setTitleChangeInput(newTitle);
  }

  return (
    <div>
      { editingId === item.id ? (
        <EditTask changeTaskTitle={ changeTaskTitle }
                  value={ titleChangeInput }
                  onInputChange={ handlerTitleChange }
                  setEditingId={ setEditingId }
                  item={ item }
                  index={ index } selectDayStr={ selectDayStr } />
      ) : (
        <ShowTask completedTask={ completedTask }
                  deleteTask={ deleteTask }
                  item={ item }
                  editToDo={ editToDo }
                  index={ index }
                  selectDayStr={ selectDayStr } />
      ) }
    </div>
  );
};

export default ToDoItem;