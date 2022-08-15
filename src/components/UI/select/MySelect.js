import './mySelect.css';

import React from 'react';

const MySelect = ({ optionsObj, children, ...props }) => {
  return (
    <select { ...props } className={ 'mySelect-default-style ' + props.className }>
      { optionsObj ?
        Object.keys(optionsObj).map((keyValue) => {
          return (
            <option key={ keyValue } value={ keyValue }>
              { optionsObj[keyValue] }
            </option>
          );
        }) :
        children
      }
    </select>
  );
};

export default MySelect;