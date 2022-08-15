import './ToDoItem.css';

import React, { useState } from 'react';

import iconCross from '../../../icon/cross.svg';
import { ReactComponent as Done } from '../../../icon/done.svg';
import iconEdit from '../../../icon/edit.svg';
import save from '../../../icon/save.svg';


const ToDoItem = ({ item, index, todo, setToDo, selectDayStr }) => {

  const [value, setValue] = useState('');
  const [editingId, setEditingId] = useState(null);

  function deleteToDo(id) {
    const todoCopy = JSON.parse(JSON.stringify(todo));
    todoCopy[selectDayStr] = todo[selectDayStr].filter(
      (obj) => obj.id !== id
    );
    setToDo(todoCopy);
  }

  function isCompletedToDo(id) {
    const todoCopy = JSON.parse(JSON.stringify(todo));
    todoCopy[selectDayStr] = todo[selectDayStr].map((obj) => {
      if (obj.id === id) {
        obj.isCompleted = !obj.isCompleted;
      }
      return obj;
    });
    setToDo(todoCopy);
  }

  function editToDo(id, title) {
    setEditingId(id);
    setValue(title);
  }

  function saveToDo(id) {
    const todoCopy = JSON.parse(JSON.stringify(todo));
    todoCopy[selectDayStr] = todo[selectDayStr].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setToDo(todoCopy);
    setEditingId(null);
  }


  return (
    <div className="list-item" style={ { backgroundColor: item.color } }>
      { editingId === item.id ? (
        <div>
          { index + 1 }.
          <input
            className="list-item-input-change"
            onChange={ (e) => setValue(e.target.value) }
            value={ value }
          />
        </div>
      ) : (
        <div
          className={
            item.isCompleted
              ? "list-item-title-nochange item-done"
              : "list-item-title-nochange"
          }
        >
          { index + 1 }. { item.title }
        </div>
      ) }
      { editingId === item.id ? (
        <div>
          <button
            className="list-item-button"
            onClick={ () => saveToDo(item.id) }
          >
            <img
              src={ save }
              alt="close"
              width="15px"
              height="15px"
            />
          </button>
        </div>
      ) : (
        <div>
          <button
            className="list-item-button"
            onClick={ () => deleteToDo(item.id) }
          >
            <img
              src={ iconCross }
              alt="close"
              width="15px"
              height="15px"
            />
          </button>
          <button
            className="list-item-button"
            onClick={ () => editToDo(item.id, item.title) }
          >
            <img
              src={ iconEdit }
              alt="close"
              width="15px"
              height="15px"
            />
          </button>
          <button
            className="list-item-button"
            onClick={ () => isCompletedToDo(item.id) }
          >
            <Done width="15px" height="15px" />
          </button>
        </div>
      ) }
    </div>
  );
};

export default ToDoItem;