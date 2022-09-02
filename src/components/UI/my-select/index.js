import './mySelect.css'

import React from 'react'

export const Select = ({ optionsObj, children, ...props }) => {
  const classNames = 'mySelect-default-style ' + props.className

  return (
    <select {...props} className={classNames}>
      {optionsObj
        ? Object.keys(optionsObj).map((keyValue) => {
            return (
              <option key={keyValue} value={keyValue}>
                {optionsObj[keyValue]}
              </option>
            )
          })
        : children}
    </select>
  )
}
