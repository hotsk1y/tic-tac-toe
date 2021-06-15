import React, { useState, useEffect } from 'react'
import './Game.css'
import Field from '../Field/Field'
import { calculateWinner } from '../../healper'

const Game = ({ isAgainstTheComputer, xIsRunMenu, xIsRun, setxIsRun, turn, setTurn }) => {
  const [field, setField] = useState(Array(9).fill(null))
  const [scoreX, setScoreX] = useState(0)
  const [scoreO, setScoreO] = useState(0)
  const [scoreDraw, setScoreDraw] = useState(0)
  let aiPlayer, humanPlayer = undefined

  if (xIsRun) {
    aiPlayer = 'O'
    humanPlayer = 'X'
  } else {
    aiPlayer = 'X'
    humanPlayer = 'O'
  }

  let fieldWithIndex = field.slice()
  for (let i = 0; i < field.length; i++) {
    if (fieldWithIndex[i] === null) {
      fieldWithIndex[i] = i
    }
  }

  const checkWinner = (board, player) => {
    if (board[0] === player && board[1] === player && board[2] === player ||
      board[3] === player && board[4] === player && board[5] === player ||
      board[6] === player && board[7] === player && board[8] === player ||
      board[0] === player && board[3] === player && board[6] === player ||
      board[1] === player && board[4] === player && board[7] === player ||
      board[2] === player && board[5] === player && board[8] === player ||
      board[0] === player && board[4] === player && board[8] === player ||
      board[2] === player && board[4] === player && board[6] === player) {
      return true
    }
    return false
  }

  const findEmptyCells = (board) => {
    return board.filter(s => s != "O" && s != "X");
  }

  let winner = calculateWinner(field)

  const changeTheScore = () => {
    if (winner === 'X') {
      setScoreX(scoreX + 1)
    } else if (winner === 'O') {
      setScoreO(scoreO + 1)
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
  }

  const computerTurn = (fieldAfterPlayer) => {
    let fieldCopy = [...fieldAfterPlayer]    
    let newTurn = turn
    
    fieldWithIndex = [...fieldCopy]
    for (let i = 0; i < fieldCopy.length; i++) {
      if (fieldCopy[i] === null) {
        fieldWithIndex[i] = i
      }
    }

    let bestMove = searchAlgorithm(fieldWithIndex, aiPlayer)
    if (winner || fieldCopy[bestMove.idx]) return null

    fieldCopy[bestMove.idx] = !xIsRun ? 'X' : 'O'
    setField(fieldCopy)
    newTurn.push(fieldCopy[bestMove.idx])
    // setTurn(newTurn)
  }

  const playerTurn = (index) => {
    let fieldCopy = [...field]
    let newTurn = turn
    // ?game-over, ?click
    if (winner || fieldCopy[index]) return null
    // X ? Y
    fieldCopy[index] = xIsRun ? 'X' : 'O'
    setField(fieldCopy)
    newTurn.push(fieldCopy[index])
    // setTurn(newTurn)

    if (newTurn.length === 9) {
      if (winner) {
        return null
      }
    } else {
      computerTurn(fieldCopy)
    }
  }

  const searchAlgorithm = (board, player) => {
    const emptyCells = findEmptyCells(board)
    if (checkWinner(board, humanPlayer)) {
      return { score: -1 }
    } else if (checkWinner(board, aiPlayer)) {
      return { score: 1 }
    } else if (emptyCells.length === 0) {
      return { score: 0 }
    }

    let moves = []

    for (let i = 0; i < emptyCells.length; i++) {
      let move = []
      board[emptyCells[i]] = player
      move.idx = emptyCells[i]
      if (player === humanPlayer) {
        const payload = searchAlgorithm(board, aiPlayer)
        move.score = payload.score
      }
      if (player === aiPlayer) {
        const payload = searchAlgorithm(board, humanPlayer)
        move.score = payload.score
      }
      board[emptyCells[i]] = move.idx
      moves.push(move)
    }

    let bestMove = null

    if (player === aiPlayer) {
      let bestScore = -Infinity
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score
          bestMove = i
        }
      }
    } else {
      let bestScore = Infinity
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score
          bestMove = i
        }
      }
    }

    return moves[bestMove]
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
      <button className='start-game__btn'
        onClick={() =>
          setField(Array(9).fill(null),
            setTurn([]),
            setxIsRun(xIsRunMenu)
          )}>Start New Game</button>
      <Field cells={field} handleClick={isAgainstTheComputer ? playerTurn : handleClick} />
      <p className="field__info">
        {
          winner
            ? `${winner} is the winner!`
            : (turn.length === 9 ? `Draw!` : `Your turn: ${xIsRun ? 'X' : 'O'}`)
        }
      </p>
    </div>

  )
}

export default Game