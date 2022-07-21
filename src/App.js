import moment from 'moment'
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

  const [currentWindowCalendar, setCurrentWindowCalendar] = useState(setValuesCurrWindow(moment().year(),moment().month()))

  function setValuesCurrWindow(year, month, day = 1) {

    const selectedDay = moment().set({ 'year': year, 'month': month, 'date': day })
    const startDay = selectedDay.clone().startOf('month').startOf('week')
    let currDay = startDay.subtract(1, 'day').clone();
    const resultArrAllDays = [...Array(42)].map(() => currDay.add(1, 'day').clone());

    return resultArrAllDays;
  }




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
