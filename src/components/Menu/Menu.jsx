import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Menu.css'

import {
  setIsAgainstTheComputerAction,
  setMenuActiveAction,
  setxIsRunMenuAction,
  setTurnAction,
  setxIsRunAction,
} from '../../store/reducers/settingsReducer'

import { resetScoreAction } from '../../store/reducers/scoreReducer'
import { startNewGameAction } from '../../store/reducers/fieldReducer'

const Menu = () => {
  const dispatch = useDispatch()

  const { turn, isAgainstTheComputer } = useSelector((state) => state.settings)

  const setIsAgainstTheComputer = (payload) => {
    dispatch(setIsAgainstTheComputerAction(payload))
  }
  const setMenuActive = (payload) => {
    dispatch(setMenuActiveAction(payload))
  }

  const xIsRunMenu = useSelector((state) => state.settings.xIsRunMenu)
  const setxIsRunMenu = (payload) => {
    dispatch(setxIsRunMenuAction(payload))
  }

  const setxIsRun = (payload) => {
    dispatch(setxIsRunAction(payload))
  }
  const setTurn = (payload) => {
    dispatch(setTurnAction(payload))
  }

  const resetScore = () => {
    dispatch(resetScoreAction())
  }

  const startNewGame = () => {
    setxIsRun(xIsRunMenu)
    setTurn([])
    dispatch(startNewGameAction())
  }

  const xIsRun = useSelector((state) => state.settings.xIsRun)

  let disabledInput = false
  if (turn.length >= 1) {
    disabledInput = true
  } else {
    disabledInput = false
  }
  if (turn.length === 1 && isAgainstTheComputer && !xIsRun) {
    disabledInput = false
  }

  const handleComputerTurnClick = (e) => {
    setIsAgainstTheComputer(e.target.checked)
    setTurn([])
    resetScore()
    startNewGame()
  }
  const handleXIsRunClick = (e) => {
    setxIsRunMenu(e.target.checked)
    setxIsRun(e.target.checked)
    resetScore()
  }

  return (
    <div className="menu">
      <div className="close-menu__btn" onClick={() => setMenuActive(false)}>
        X
      </div>
      <div className="main-menu__content">
        <div className="title">
          <h1>Tic Tac Toe Settings</h1>
        </div>

        {disabledInput && (
          <div className="apply-changes">
            Please, start a new game to change the settings
          </div>
        )}
        
        <div className="content-item chekbox-content__item">
          <label htmlFor="computerTurn">Player VS Bot: </label>
          <input
            id="computerTurn"
            type="checkbox"
            disabled={disabledInput}
            checked={isAgainstTheComputer}
            onChange={handleComputerTurnClick}
          />
        </div>
        <div className="content-item chekbox-content__item">
          <label htmlFor="xIsRun">X runs first: </label>
          <input
            className="chekbox-content__item"
            id="xIsRun"
            type="checkbox"
            disabled={disabledInput}
            checked={xIsRunMenu}
            onChange={handleXIsRunClick}
            onClick={() => (turn.length === 1 ? startNewGame() : null)}
          />
        </div>
      </div>
    </div>
  )
}

export default Menu
