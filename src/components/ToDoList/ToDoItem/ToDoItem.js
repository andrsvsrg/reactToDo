import './ToDoItem.css'

import Draggable from 'react-draggable'
import React, { useCallback, useState } from 'react'

import EditTask from './EditTask/EditTask'
import ShowTask from './ShowTask/ShowTask'
import { useDispatch } from 'react-redux'
import { updateTask } from '../../../redux/actions/todos-actions'

function ToDoItem({ item, index }) {
  const [editingId, setEditingId] = useState(null)
  const [titleChangeInput, setTitleChangeInput] = useState('')

  const dispatch = useDispatch()

  const editToDo = useCallback((id, title) => {
    setEditingId(id)
    setTitleChangeInput(title)
  }, [])

  const handlerTitleChange = useCallback((newTitle) => {
    setTitleChangeInput(newTitle)
  }, [])

  function onStopDraggable(e, data) {
    dispatch(updateTask(item.id, { defaultPos: { x: data.x, y: data.y } }))
  }

  return (
    <div>
      <Draggable
        key={item.id}
        position={null}
        defaultPosition={item.defaultPos}
        onStop={(e, data) => {
          onStopDraggable(e, data)
        }}
      >
        <div className="draggable-element">
          {editingId === item.id ? (
            <EditTask
              value={titleChangeInput}
              onInputChange={handlerTitleChange}
              setEditingId={setEditingId}
              item={item}
              index={index}
            />
          ) : (
            <ShowTask item={item} editToDo={editToDo} index={index} />
          )}
        </div>
      </Draggable>
    </div>
  )
}

export default React.memo(ToDoItem)
