import React from 'react'
import './Cell.css'

const Cell = (props) => {
  return (
    <div className="cell" onClick={props.handleClick}>
      {props.value}
    </div>
  )
}

export default Cell
