import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'

import Game from './components/Game/Game'
import Menu from './components/Menu/Menu'

import { setMenuActiveAction } from './store/reducers/settingsReducer'

function App() {
  const dispatch = useDispatch()

  const menuActive = useSelector((state) => state.settings.menuActive)
  const setMenuActive = (payload) => {
    dispatch(setMenuActiveAction(payload))
  }

  const turn = useSelector((state) => state.settings.turn)
  const xIsRun = useSelector((state) => state.settings.xIsRun)
  const isAgainstTheComputer = useSelector(
    (state) => state.settings.isAgainstTheComputer
  )

  let disabledInput = false
  if (turn.length >= 1) {
    disabledInput = true
  } else {
    disabledInput = false
  }
  if (turn.length === 1 && isAgainstTheComputer && !xIsRun) {
    disabledInput = false
  }

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
        <Menu disabledInput={disabledInput} />
      </div>
      <Game disabledInput={disabledInput} />
    </div>
  )
}

export default App
