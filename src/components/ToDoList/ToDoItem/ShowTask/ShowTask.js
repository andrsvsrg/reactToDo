import React from 'react';

import MyButton from '../../../UI/button/MyButton';
import iconCross from '../../../../icon/cross.svg';
import iconEdit from '../../../../icon/edit.svg';
import { ReactComponent as Done } from '../../../../icon/done.svg';

const ShowTask = React.memo(function ShowTask({ item, index, editToDo, deleteTask, completedTask }) {

  return (
    <div className="list-item" style={ { backgroundColor: item.color } }>
      <div
        className={
          item.isCompleted
            ? 'list-item-title-nochange item-done'
            : 'list-item-title-nochange'
        }
      >
        { index + 1 }. { item.title }
      </div>
      <div>
        <MyButton
          className="list-item-button"
          onClick={() => deleteTask(item) }
        >
          <img
            src={ iconCross }
            alt="close"
            width="15px"
            height="15px"
          />
        </MyButton>
        <MyButton
          className="list-item-button"
          onClick={ () => editToDo(item.id, item.title) }
        >
          <img
            src={ iconEdit }
            alt="close"
            width="15px"
            height="15px"
          />
        </MyButton>
        <MyButton
          className="list-item-button"
          onClick={ () => completedTask(item) }
        >
          <Done width="15px" height="15px" />
        </MyButton>
      </div>
    </div>
  );
})

export default ShowTask;