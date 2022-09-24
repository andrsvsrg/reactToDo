import './App.css'

import React, { useEffect } from 'react'

import Calendar from './components/Calendar/Calendar'
import AddToDo from './components/AddToDo/AddToDo'
import Header from './components/Header/Header'
import ToDoList from './components/ToDoList/ToDoList'

import { useSelector } from 'react-redux'
import { getTodo } from './redux/selectors/todo-selectors'

function App() {
  const todo = useSelector(getTodo)

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(todo))
  }, [todo])

  return (
    <div className="app">
      <Header />
      <AddToDo />
      <ToDoList />
      <Calendar />
    </div>
  )
}

export default React.memo(App)
