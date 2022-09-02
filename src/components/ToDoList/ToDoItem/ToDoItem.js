import './ToDoItem.css'

import Draggable from 'react-draggable'
import React, { useCallback, useState } from 'react'

import EditTask from './EditTask/EditTask'
import ShowTask from './ShowTask/ShowTask'

function ToDoItem({ item, index, deleteTask, updateTask }) {
  const [editingId, setEditingId] = useState(null)
  const [titleChangeInput, setTitleChangeInput] = useState('')

  const editToDo = useCallback((id, title) => {
    setEditingId(id)
    setTitleChangeInput(title)
  }, [])

  const handlerTitleChange = useCallback((newTitle) => {
    setTitleChangeInput(newTitle)
  }, [])

  return (
    <div>
      <Draggable
        key={item.id}
        position={null}
        defaultPosition={item.defaultPos}
        onStop={(e, data) => {
          updateTask(item.id, { defaultPos: { x: data.x, y: data.y } })
        }}
      >
        <div className="draggable-element">
          {editingId === item.id ? (
            <EditTask
              updateTask={updateTask}
              value={titleChangeInput}
              onInputChange={handlerTitleChange}
              setEditingId={setEditingId}
              item={item}
              index={index}
            />
          ) : (
            <ShowTask updateTask={updateTask} deleteTask={deleteTask} item={item} editToDo={editToDo} index={index} />
          )}
        </div>
      </Draggable>
    </div>
  )
}

export default React.memo(ToDoItem)
