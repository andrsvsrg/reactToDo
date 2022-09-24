import './myButton.css'

import React from 'react'
import ReactTooltip from 'react-tooltip'

export const Button = (props) => {
  const classNames = 'myButton-default-style ' + props.className

  if (props.tooltip) {
    const tooltipType = props['tooltip-type'] ? props['tooltip-type'] : 'error'

    return (
      <button {...props} data-tip className={classNames}>
        {props.children}
        <ReactTooltip id={props['data-for']} type={tooltipType} effect="solid">
          <span>{props.tooltip}</span>
        </ReactTooltip>
      </button>
    )
  }

  return (
    <button {...props} className={classNames}>
      {props.children}
    </button>
  )
}
