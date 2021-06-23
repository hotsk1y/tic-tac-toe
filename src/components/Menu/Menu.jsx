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

const Menu = () => {
  const dispatch = useDispatch()

  const isAgainstTheComputer = useSelector(
    (state) => state.settings.isAgainstTheComputer
  )
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

  const turn = useSelector((state) => state.settings.turn)
  const setTurn = (payload) => {
    dispatch(setTurnAction(payload))
  }

  let disabledInput = false
  if (turn.length >= 1) {
    disabledInput = true
  } else {
    disabledInput = false
  }

  const resetScore = () => {
    dispatch(resetScoreAction())
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
        {disabledInput ? (
          <div className="apply-changes">
            Please, start a new game to change the settings
          </div>
        ) : (
          <></>
        )}
        <div className="content-item chekbox-content__item">
          <label htmlFor="computerTurn">Player VS Bot: </label>
          <input
            id="computerTurn"
            type="checkbox"
            disabled={disabledInput}
            checked={isAgainstTheComputer}
            onChange={(e) => {
              setIsAgainstTheComputer(e.target.checked)
              setTurn([])
              resetScore()
            }}
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
            onChange={(e) => {
              setxIsRunMenu(e.target.checked)
              setxIsRun(e.target.checked)
              resetScore()
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Menu
