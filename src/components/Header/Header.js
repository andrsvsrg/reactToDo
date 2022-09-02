import './header.css'

import React from 'react'
import ReactTooltip from 'react-tooltip'

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
        <Button data-tip data-for="deleteAll" onClick={deleteAllTasks} className="header-buttons">
          <img src={deleteAllTasksSVG} alt="delete all tasks" width="25px" height="25px" />
        </Button>
        <ReactTooltip id="deleteAll" type="error" effect="solid">
          <span>Delete ALL tasks</span>
        </ReactTooltip>
      </div>
    </div>
  )
}

export default React.memo(Header)
