import './ToDolist.css'

import React from 'react'

import ToDoItem from './ToDoItem/ToDoItem'

function ToDoList({ todo, selectedDay, deleteTask, completedTask, changeTaskTitle, selectedDayTasksKey, updateTask }) {
  return (
    <div className="draggable-fild">
      {todo[selectedDayTasksKey]?.length ? (
        todo[selectedDayTasksKey].map((item, index) => (
          <ToDoItem
            updateTask={updateTask}
            key={item.id}
            changeTaskTitle={changeTaskTitle}
            completedTask={completedTask}
            deleteTask={deleteTask}
            selectedDay={selectedDay}
            item={item}
            index={index}
          />
        ))
      ) : (
        <div className="header-taskNotFound">Tasks not found</div>
      )}
    </div>
  )
}

export default React.memo(ToDoList)
