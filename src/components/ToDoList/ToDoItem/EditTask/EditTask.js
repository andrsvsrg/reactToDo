import React from 'react';
import MyInput from '../../../UI/input/MyInput';
import MyButton from '../../../UI/button/MyButton';
import save from '../../../../icon/save.svg';

const EditTask = ({value, item, index, selectDayStr, setEditingId, onInputChange, changeTaskTitle }) => {


  function saveToDo(item, value, selectDayStr) {
    changeTaskTitle(item, value, selectDayStr)
    setEditingId(null);
  }

  function handlerTitleChange(e) {
    onInputChange(e.target.value)
  }

  return (
    <div className="list-item" style={ { backgroundColor: item.color } }>
      <div>
        { index + 1 }.
        <MyInput
          className="list-item-input-change"
          onChange = {handlerTitleChange}
          value={ value }
        />
      </div>
      <MyButton
        className="list-item-button"
        onClick={ () => saveToDo(item, value, selectDayStr) }
      >
        <img
          src={ save }
          alt="close"
          width="15px"
          height="15px"
        />
      </MyButton>
    </div>
  );
};

export default EditTask;