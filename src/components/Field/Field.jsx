import React from 'react'
import './Field.css'
import Cell from '../Cell/Cell'

const Field = ({ cells, handleClick }) => {
  return (
    <div className="field">
      {cells.map((cell, i) => {
        return <Cell key={i} value={cell} handleClick={() => handleClick(i)} />
      })}
    </div>
  )
}

export default Field
