import React from 'react'

import { Button } from '../../../UI/my-button/index'
import iconCross from '../../../../icon/cross.svg'
import iconEdit from '../../../../icon/edit.svg'
import { ReactComponent as Done } from '../../../../icon/done.svg'
import { useDispatch } from 'react-redux'
import { deleteTask, updateTask } from '../../../../redux/actions/todos-actions'

function ShowTask({ item, index, editToDo }) {
  const dispatch = useDispatch()

  return (
    <div className="list-item" style={{ backgroundColor: item.color }}>
      <div className={item.isCompleted ? 'list-item-title-nochange item-done' : 'list-item-title-nochange'}>
        {index + 1}. {item.title}
      </div>
      <div>
        <Button className="list-item-button" onClick={() => dispatch(deleteTask(item))}>
          <img src={iconCross} alt="close" width="15px" height="15px" />
        </Button>
        <Button className="list-item-button" onClick={() => editToDo(item.id, item.title)}>
          <img src={iconEdit} alt="close" width="15px" height="15px" />
        </Button>
        <Button
          className="list-item-button"
          onClick={() => dispatch(updateTask(item.id, { isCompleted: !item.isCompleted }))}
        >
          <Done width="15px" height="15px" />
        </Button>
      </div>
    </div>
  )
}

export default React.memo(ShowTask)
