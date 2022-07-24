import moment from 'moment'
import React, { useEffect, useState } from 'react'

import Calendar from './components/Calendar/Calendar'
import AddToDo from './components/AddToDo/AddToDo'
import Header from './components/Header/Header'
import ListItem from './components/ListItem/ListItem'

import './App.css'

function App() {

  const [todo,setToDo] = useState(
    JSON.parse(localStorage.getItem('items')) || {}

  )

  useEffect(() => {
    localStorage.setItem('items',JSON.stringify(todo))
  }, [todo])

  const [selectedDay, setSelectedDay] = useState(moment())





  return (
    <div className="app">
      <Header />
      <AddToDo selectedDay={selectedDay}
               todo={todo}
               setToDo={setToDo}/>
      <ListItem selectedDay={selectedDay}
                todo={todo}
                setToDo={setToDo}/>
      <Calendar selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                todo={todo}/>
    </div>
  );
}

export default App;
