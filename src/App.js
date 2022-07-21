import React, { useEffect, useState } from 'react'

import Calendar from './components/Calendar/Calendar'
import AddToDo from './components/AddToDo/AddToDo'
import Header from './components/Header/Header'
import ListItem from './components/ListItem/ListItem'

import './App.css'

function App() {

  const [todo,setToDo] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  )


  useEffect(() => {
    localStorage.setItem('items',JSON.stringify(todo))
  }, [todo])


  return (
    <div className="app">
      <Header />
      <AddToDo todo={todo} setToDo={setToDo}/>
      <ListItem todo={todo} setToDo={setToDo}/>
      <Calendar todo={todo} setToDo={setToDo} />
    </div>
  );
}

export default App;
