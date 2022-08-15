import './myInput.css'

import React from 'react';

const MyInput = (props) => {
  return (
    <input {...props} className={'myInput-default-style ' + props.className}>
      {props.children}
    </input>
  );
};

export default MyInput;