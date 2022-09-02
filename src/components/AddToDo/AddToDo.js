import './addToDo.css'

import { randomColor } from 'randomcolor'
import React, { useMemo, useState } from 'react'

import { v4 as uuid } from 'uuid'
import { Button } from '../UI/my-button/index'
import { Input } from '../UI/my-input/index'

import { fixSize, keyCode } from '../../constants'

const AddToDo = ({ addTask, selectedDay }) => {
  const [inputValue, setInputValue] = useState('')
  const selectedDayTitle = useMemo(() => selectedDay.format('DD.MM.YYYY'),[selectedDay])

  function onAddTask(e) {
    const code = e.charCode
    if (code === keyCode.ENTER) {
      addNewTask()
    }
  }

  function addNewTask() {
    const newTask = createNewTask(inputValue)
    addTask(newTask)
    setInputValue('')
  }

  const isDisabledButton = !inputValue.trim()

  return (
    <div className="add-task-container">
      <div className="add-todo-block">
        <Input
          className="add-todo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What to do?"
          type="text"
          onKeyPress={onAddTask}
        />
        <Button disabled={isDisabledButton} className="add-todo-button" onClick={addNewTask}>
          Add a task
        </Button>
      </div>
      <span className="add-todo-selected-date">{selectedDayTitle}</span>
    </div>
  )
}

export default React.memo(AddToDo)

function getRandomDefaultTaskPosition() {
  const width = document.documentElement.clientWidth
  const height = document.documentElement.clientHeight
  const defaultWidth = Math.floor(Math.random() * (width < fixSize.WIDTH_HEADER ? width : width - fixSize.WIDTH_HEADER))
  const defaultHeight = Math.floor(
    Math.random() * (height < fixSize.WIDTH_CALENDAR ? height : height - fixSize.WIDTH_CALENDAR),
  )

  return { x: defaultWidth, y: defaultHeight }
}

function createNewTask(titleOfNewTask) {
  return {
    id: uuid(),
    title: titleOfNewTask.trim(),
    isCompleted: false,
    defaultPos: getRandomDefaultTaskPosition(),
    color: randomColor({ luminosity: 'light' }),
  }
}
