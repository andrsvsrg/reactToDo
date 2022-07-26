import React, { useState } from 'react';

import Draggable from 'react-draggable';

import iconCross from '../../icon/cross.svg'
import { ReactComponent as Done } from '../../icon/done.svg'
import iconEdit from '../../icon/edit.svg'
import save from '../../icon/save.svg'

import './listitemstyle.css'


const ListItem = ({ todo, setToDo , setSelectedDay, selectedDay}) => {

  const [edit, setEdit] = useState(null)
  const [value, setValue] = useState('')
  selectedDay = selectedDay.format('DDMMYYYY')

  function deleteToDo(id) {
    const todoCopy = JSON.parse(JSON.stringify(todo))
    todoCopy[selectedDay] = [...todo[selectedDay]].filter((obj) => obj.id !== id)
    setToDo(todoCopy);
  }

  function statusToDo(id) {
    const todoCopy = JSON.parse(JSON.stringify(todo))
    todoCopy[selectedDay] = [...todo[selectedDay]].filter((obj) => {
      if (obj.id === id) {
        obj.status = !obj.status
      }
      return obj;
    })
    setToDo(todoCopy)
  }

  function editToDo(id, title) {
    setEdit(id)
    setValue(title)
  }

  function saveToDo(id) {
    const todoCopy = JSON.parse(JSON.stringify(todo))
    todoCopy[selectedDay] = [...todo[selectedDay]].map((item) => {
      if (item.id === id) {
        item.title = value
      }
      return item;
    })
    setToDo(todoCopy);
    setEdit(null);
  }

  function updatePosition(data, index) {
    const todoCopy = JSON.parse(JSON.stringify(todo))
    todoCopy[selectedDay][index].defaultPos = { x: data.x, y: data.y }
    setToDo(todoCopy)
  }




  return (
    <div className='draggable_fild'>

      { todo[selectedDay] ?
        todo[selectedDay].map((item, index) => (

        <Draggable
          offsetParent={document.querySelector('.draggable_fild')}
          key={ item.id }
          position={ null }
          defaultPosition={ item.defaultPos }
          onStop={ (e, data) => {
            updatePosition(data, index)
          } }

        >
          <div className="list_item" style={ { backgroundColor: item.color } }>
            {
              edit === item.id ?
                <div>
                  { index + 1 }.
                  <input className="list_item-input-change"
                         onChange={ (e) => setValue((e.target.value)) }
                         value={ value }

                  />
                </div> :
                <div
                  className={ item.status ? 'list_item-title-nochange' : 'list_item-title-nochange item_done' }>{ index + 1 }. { item.title }</div>
            }
            {

              edit === item.id ?
                <div>
                  <button className="listitem_btn" onClick={ () => saveToDo(item.id) }>
                    <img src={ save } alt="close" width={ '15px' } height={ '15px' }/>
                  </button>
                </div> :

                <div>

                  <button className="listitem_btn" onClick={ () => deleteToDo(item.id) }>
                    <img src={ iconCross } alt="close" width={ '15px' } height={ '15px' }/>
                  </button>
                  <button className="listitem_btn" onClick={ () => editToDo(item.id, item.title) }>
                    <img src={ iconEdit } alt="close" width={ '15px' } height={ '15px' }/>
                  </button>
                  <button className="listitem_btn" onClick={ () => statusToDo(item.id) }>
                    <Done className="done_svg" width="15px" height="15px"/>
                  </button>
                </div>


            }


          </div>
        </Draggable>
      ))
      :
        <div style={{textAlign: 'center'}}>
          Tasks not found
        </div>
      }
    </div>

  );
};

export default ListItem;