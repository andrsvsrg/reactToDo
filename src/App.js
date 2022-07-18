import React, { useEffect, useState } from 'react'

import AddToDo from './components/AddToDo/AddToDo'
import Header from './components/Header/Header'
import ListItem from './components/ListItem/ListItem'

import './App.css'

import { v4 as uuid } from 'uuid'
import {randomColor} from 'randomcolor'

function App() {

  const [todo,setToDo] = useState([
    { id: uuid(),
      title: 'Make todo',
      status: true,
      defaultPos: defaultPos(),
      color: randomColor({ luminosity: 'light' })
    },
    { id: uuid(),
      title: 'Make design',
      status: false,
      defaultPos:  defaultPos(),
      color: randomColor({ luminosity: 'light' })
    },
    { id: uuid(),
      title: 'Finished app',
      status: true,
      defaultPos: defaultPos(),
      color: randomColor({ luminosity: 'light' })
    }
  ])

  // const [items,setItems] = useState(
  //   JSON.parse(localStorage.getItem('items')) || []
  // )
  //
  // useEffect(() => {
  //   localStorage.setItem('items',JSON.stringify(items))
  // }, [items])

  function defaultPos() {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    const defaultWidth = Math.floor(Math.random() * (width < 300 ? width : width -300)) + 1
    const defaultHeight = Math.floor(Math.random() *(height < 155 ? height: height - 155)) + 2 ;
    return {x: defaultWidth, y: defaultHeight};
  }

  return (
    <div className="app">
      <Header />
      <AddToDo todo={todo} setToDo={setToDo}/>
      <ListItem todo={todo} setToDo={setToDo}/>
    </div>
  );
}

export default App;
