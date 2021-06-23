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
        <Menu />
      </div>
      <Game />
    </div>
  )
}

export default App
