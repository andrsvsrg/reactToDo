import './header.css'

import React from 'react'

import { Button } from '../UI/my-button/index'
import deleteDayTasksSVG from '../../icon/deleteDayTasks.svg'
import deleteAllTasksSVG from '../../icon/deleteAllTasks.svg'

function Header({ deleteSelectedDayAllTasks, deleteAllTasks }) {
  return (
    <div className="header">
      <div className="header-container">
        <Button
          data-for="deleteThisDay"
          tooltip="Delete tasks from this day"
          onClick={deleteSelectedDayAllTasks}
          className="header-buttons"
        >
          <img src={deleteDayTasksSVG} alt="delete day tasks" width="25px" height="25px" />
        </Button>

        <h1 className="header-title">To Do List</h1>
        <Button
          data-tip
          tooltip="Delete ALL tasks"
          data-for="deleteAll"
          onClick={deleteAllTasks}
          className="header-buttons"
        >
          <img src={deleteAllTasksSVG} alt="delete all tasks" width="25px" height="25px" />
        </Button>
      </div>
    </div>
  )
}

export default React.memo(Header)
