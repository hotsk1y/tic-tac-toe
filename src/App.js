<<<<<<< HEAD
import React from 'react'
=======
import React, { useState } from 'react'
>>>>>>> 28db3ea45c963e7b5aabb3fcb43d2d8e9a14927f
import { useSelector, useDispatch } from 'react-redux'
import './App.css'

import Game from './components/Game/Game'
import Menu from './components/Menu/Menu'
import {
  setScoreDrawAction,
  setScoreXAction,
  setScoreOAction,
  resetScoreAction,
} from './store/reducers/scoreReducer'

import {
  setIsAgainstTheComputerAction,
  setMenuActiveAction,
  setxIsRunMenuAction,
  setTurnAction,
  setxIsRunAction,
} from './store/reducers/settingsReducer'

import { setMenuActiveAction } from './store/reducers/settingsReducer'

function App() {
  const dispatch = useDispatch()

<<<<<<< HEAD
=======
  const isAgainstTheComputer = useSelector(
    (state) => state.settings.isAgainstTheComputer
  )
  const setIsAgainstTheComputer = (payload) => {
    dispatch(setIsAgainstTheComputerAction(payload))
  }

>>>>>>> 28db3ea45c963e7b5aabb3fcb43d2d8e9a14927f
  const menuActive = useSelector((state) => state.settings.menuActive)
  const setMenuActive = (payload) => {
    dispatch(setMenuActiveAction(payload))
  }
<<<<<<< HEAD
=======

  const xIsRunMenu = useSelector((state) => state.settings.xIsRunMenu)
  const setxIsRunMenu = (payload) => {
    dispatch(setxIsRunMenuAction(payload))
  }

  const turn = useSelector((state) => state.settings.turn)
  const setTurn = (payload) => {
    dispatch(setTurnAction(payload))
  }

  const xIsRun = useSelector((state) => state.settings.xIsRun)
  const setxIsRun = (payload) => {
    dispatch(setxIsRunAction(payload))
  }

  let disabledInput = false
  if (turn.length >= 1) {
    disabledInput = true
  } else {
    disabledInput = false
  }

  const scoreDraw = useSelector((state) => state.score.draw)
  const setScoreDraw = () => {
    dispatch(setScoreDrawAction())
  }

  const scoreX = useSelector((state) => state.score.scoreX)
  const setScoreX = () => {
    dispatch(setScoreXAction())
  }

  const scoreO = useSelector((state) => state.score.scoreO)
  const setScoreO = () => {
    dispatch(setScoreOAction())
  }

  const resetScore = () => {
    dispatch(resetScoreAction())
  }
>>>>>>> 28db3ea45c963e7b5aabb3fcb43d2d8e9a14927f

  return (
    <div className="main-page">
      <div
        className="menu__settings-logo"
        onClick={() => setMenuActive(!menuActive)}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/768px-Windows_Settings_app_icon.png"
          alt=""
        />
      </div>
      <div className={menuActive ? 'main-menu active' : 'main-menu'}>
<<<<<<< HEAD
        <Menu />
      </div>
      <Game />
=======
        <Menu
          disabledInput={disabledInput}
          setMenuActive={setMenuActive}
          isAgainstTheComputer={isAgainstTheComputer}
          setIsAgainstTheComputer={setIsAgainstTheComputer}
          xIsRunMenu={xIsRunMenu}
          setxIsRunMenu={setxIsRunMenu}
          setxIsRun={setxIsRun}
          setTurn={setTurn}
          resetScore={resetScore}
        />
      </div>
      <Game
        dispatch={dispatch}
        isAgainstTheComputer={isAgainstTheComputer}
        xIsRunMenu={xIsRunMenu}
        xIsRun={xIsRun}
        setxIsRun={setxIsRun}
        turn={turn}
        setTurn={setTurn}
        scoreDraw={scoreDraw}
        setScoreDraw={setScoreDraw}
        scoreX={scoreX}
        setScoreX={setScoreX}
        scoreO={scoreO}
        setScoreO={setScoreO}
      />
>>>>>>> 28db3ea45c963e7b5aabb3fcb43d2d8e9a14927f
    </div>
  )
}

export default App
