import React, { useState, useEffect } from 'react'
import './Game.css'
import Field from '../Field/Field'
import { calculateWinner } from '../../healper'

const Game = ({ isAgainstTheComputer, xIsRunMenu, xIsRun, setxIsRun, turn, setTurn }) => {
  const [field, setField] = useState(Array(9).fill(null))
  const [scoreX, setScoreX] = useState(0)
  const [scoreO, setScoreO] = useState(0)
  const [scoreDraw, setScoreDraw] = useState(0)

  let winner = calculateWinner(field)

  const changeTheScore = () => {
    if (winner === 'X') {
      let scoreXCopy = scoreX
      scoreXCopy++
      setScoreX(scoreXCopy)
    } else if (winner === 'O') {
      let scoreOCopy = scoreO
      scoreOCopy++
      setScoreO(scoreOCopy)
    }
    if (turn.length === 9 && !winner) {
      let scoreDrawCopy = scoreDraw
      scoreDrawCopy++
      setScoreDraw(scoreDrawCopy)
    }
  }

  useEffect(() => {
    changeTheScore()
  }, [turn.length, winner])


  const handleClick = index => {
    const fieldCopy = [...field]
    // ?game-over, ?click
    if (winner || fieldCopy[index]) {
      return null
    }
    // X ? Y
    fieldCopy[index] = xIsRun ? 'X' : 'O'
    // update state
    setField(fieldCopy)
    setxIsRun(!xIsRun)

    const newTurn = turn
    newTurn.push(fieldCopy[index])
    setTurn(newTurn)
    if (newTurn.length === 9) {
      if (winner) {
        return null
      }
    }
  }

  const computerTurn = (clickIndex, fieldAfterPlayer) => {
    let fieldCopy = [...fieldAfterPlayer]
    let computerTurn = Math.floor(Math.random() * 9)
    const newTurn = turn

    while (clickIndex === computerTurn || fieldCopy[computerTurn] !== null) {
      computerTurn = Math.floor(Math.random() * 9)
    }
    if (winner || fieldCopy[computerTurn]) return null
    fieldCopy[computerTurn] = !xIsRun ? 'X' : 'O'
    console.log(`computerTurn: ${computerTurn}`)
    setField(fieldCopy)
    newTurn.push(fieldCopy[computerTurn])
    console.log(newTurn)
  }

  const playerTurn = (index) => {
    let fieldCopy = [...field]
    const newTurn = turn
    // ?game-over, ?click
    if (winner || fieldCopy[index]) return null
    // X ? Y
    fieldCopy[index] = xIsRun ? 'X' : 'O'
    setField(fieldCopy)
    newTurn.push(fieldCopy[index])
    setTurn(newTurn)

    if (newTurn.length === 9) {
      if (winner) {
        return null
      }
    } else {
      computerTurn(index, fieldCopy)
    }
  }

  const startNewGame = () => {
    return (
      <button className='start-game__btn'
        onClick={() =>
            setField(Array(9).fill(null),
            setTurn([]),
            setxIsRun(xIsRunMenu)
          )}>Start New Game</button>
    )
  }

  return (
    <div className='game-wrapper'>
      <div className="score">
        <div className="score_descr">
          <div>X</div>
          <div>Draw</div>
          <div>O</div>
        </div>
        <div className="score_item">
          <div>{scoreX}</div>
          <div>{scoreDraw}</div>
          <div>{scoreO}</div>
        </div>
      </div>
      {startNewGame()}
      <Field cells={field} handleClick={isAgainstTheComputer ? playerTurn : handleClick} />
      <p className="field__info">
        {
          winner ? `${winner} is the winner!` : (turn.length === 9 ? `Draw!` : `Your turn: ${xIsRun ? 'X' : 'O'}`)
        }
      </p>
    </div>

  )
}

export default Game