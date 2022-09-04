import './App.css'

import React, { useEffect, useState, useCallback } from 'react'

import Calendar from './components/Calendar/Calendar'
import AddToDo from './components/AddToDo/AddToDo'
import Header from './components/Header/Header'
import ToDoList from './components/ToDoList/ToDoList'
import { getTodayDayId } from './components/utils/data'

function App() {
  const [todo, setToDo] = useState(() => JSON.parse(localStorage.getItem('items')) || {})
  const [selectedDay, setSelectedDay] = useState(() => getTodayDayId())

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(todo))
  }, [todo])

  const addTask = useCallback(
    (newTask) => {
      const selectedDayTasks = todo[selectedDay]
      const newDayTask = selectedDayTasks ? [...selectedDayTasks, newTask] : [newTask]
      setToDo({ ...todo, [selectedDay]: newDayTask })
    },
    [todo, selectedDay],
  )

  const deleteTaskFromSelectedDay = useCallback(
    (task) => {
      const newSelectDayToDo = todo[selectedDay].filter(({ id }) => {
        return id !== task.id
      })
      setToDo({ ...todo, [selectedDay]: newSelectDayToDo })
    },
    [todo, selectedDay],
  )

  const updateTask = useCallback(
    (taskId, changes) => {
      const newSelectedDayToDo = todo[selectedDay].map((task) => {
        if (task.id !== taskId) {
          return task
        }
        return { ...task, ...changes }
      })

      setToDo({ ...todo, [selectedDay]: newSelectedDayToDo })
    },
    [todo, selectedDay],
  )

  const deleteSelectedDayAllTasks = useCallback(() => {
    setToDo({ ...todo, [selectedDay]: [] })
  }, [todo, selectedDay])

  const deleteAllTasks = useCallback(() => {
    setToDo({})
  }, [])

  return (
    <div className="app">
      <Header deleteSelectedDayAllTasks={deleteSelectedDayAllTasks} deleteAllTasks={deleteAllTasks} />
      <AddToDo selectedDay={selectedDay} addTask={addTask} />
      <ToDoList updateTask={updateTask} selectedDay={selectedDay} todo={todo} deleteTask={deleteTaskFromSelectedDay} />
      <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} todo={todo} />
    </div>
  )
}

export default React.memo(App)
