import React from 'react'
import { Input } from '../../../UI/my-input/index'
import { Button } from '../../../UI/my-button/index'
import save from '../../../../icon/save.svg'
import { useDispatch } from 'react-redux'
import { updateTask } from '../../../../redux/actions/todos-actions'

function EditTask({ value, item, index, setEditingId, onInputChange }) {
  const dispatch = useDispatch()

  function saveToDo(id, value) {
    const newTitle = { title: value }
    dispatch(updateTask(id, newTitle))
    setEditingId(null)
  }

  function handlerTitleChange(e) {
    onInputChange(e.target.value)
  }

  return (
    <div className="list-item" style={{ backgroundColor: item.color }}>
      <div>
        {index + 1}.
        <Input className="list-item-input-change" onChange={handlerTitleChange} value={value} />
      </div>
      <Button className="list-item-button" onClick={() => saveToDo(item.id, value)}>
        <img src={save} alt="close" width="15px" height="15px" />
      </Button>
    </div>
  )
}

export default React.memo(EditTask)
