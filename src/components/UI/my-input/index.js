import './myInput.css'

import React from 'react'

export const Input = (props) => {
  const classNames = 'myInput-default-style ' + props.className

  return (
    <input {...props} className={classNames}>
      {props.children}
    </input>
  )
}
