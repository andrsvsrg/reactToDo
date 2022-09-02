import './App.css'

import moment from 'moment'
import React, { useEffect, useState, useMemo, useCallback } from 'react'

import Calendar from './components/Calendar/Calendar'
import AddToDo from './components/AddToDo/AddToDo'
import Header from './components/Header/Header'
import ToDoList from './components/ToDoList/ToDoList'

function App() {
  const [todo, setToDo] = useState(() => JSON.parse(localStorage.getItem('items')) || {})
  const [selectedDay, setSelectedDay] = useState(() => moment())
  const selectedDayTasksKey = useMemo(() => selectedDay.format('DDMMYYYY'), [selectedDay])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(todo))
  }, [todo])

  const addTask = useCallback(
    (newTask) => {
      const selectedDayTasks = todo[selectedDayTasksKey]
      const newDayTask = selectedDayTasks ? [...selectedDayTasks, newTask] : [newTask]
      setToDo({ ...todo, [selectedDayTasksKey]: newDayTask })
    },
    [todo, selectedDayTasksKey],
  )

  const deleteTaskFromSelectedDay = useCallback(
    (task) => {
      const newSelectDayToDo = todo[selectedDayTasksKey].filter(({ id }) => {
        return id !== task.id
      })
      setToDo({ ...todo, [selectedDayTasksKey]: newSelectDayToDo })
    },
    [todo, selectedDayTasksKey],
  )

  const updateTask = useCallback(
    (taskId, changes) => {
      const newSelectedDayToDo = todo[selectedDayTasksKey].map((task) => {
        if (task.id !== taskId) {
          return task
        }
        return { ...task, ...changes }
      })

      setToDo({ ...todo, [selectedDayTasksKey]: newSelectedDayToDo })
    },
    [todo, selectedDayTasksKey],
  )

  const deleteSelectedDayAllTasks = useCallback(() => {
    setToDo({ ...todo, [selectedDayTasksKey]: [] })
  }, [todo, selectedDayTasksKey])

  const deleteAllTasks = useCallback(() => {
    setToDo({})
  }, [])

  return (
    <div className="app">
      <Header deleteSelectedDayAllTasks={deleteSelectedDayAllTasks} deleteAllTasks={deleteAllTasks} />
      <AddToDo selectedDay={selectedDay} addTask={addTask} />
      <ToDoList
        updateTask={updateTask}
        selectedDay={selectedDay}
        todo={todo}
        deleteTask={deleteTaskFromSelectedDay}
        selectedDayTasksKey={selectedDayTasksKey}
      />
      <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} todo={todo} />
    </div>
  )
}

export default React.memo(App)
