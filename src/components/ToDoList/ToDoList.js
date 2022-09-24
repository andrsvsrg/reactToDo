import './ToDolist.css'

import React from 'react'

import ToDoItem from './ToDoItem/ToDoItem'
import { useSelector } from 'react-redux'
import { getSelectedDayTasks } from '../../redux/selectors/todo-selectors'

function ToDoList() {
  const selectedDayTasks = useSelector(getSelectedDayTasks)

  return (
    <div className="draggable-fild">
      {selectedDayTasks?.length ? (
        selectedDayTasks.map((item, index) => <ToDoItem key={item.id} item={item} index={index} />)
      ) : (
        <div className="header-taskNotFound">Tasks not found</div>
      )}
    </div>
  )
}

export default React.memo(ToDoList)
