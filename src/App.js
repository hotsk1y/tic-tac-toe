import React, { useState } from 'react'
import './App.css'
import Game from './components/Game/Game'
import Menu from './components/Menu/Menu'

function App() {
  const [menuActive, setMenuActive] = useState(false)
  const [isAgainstTheComputer, setIsAgainstTheComputer] = useState(true)
  const [xIsRunMenu, setxIsRunMenu] = useState(true)
  const [xIsRun, setxIsRun] = useState(xIsRunMenu)
  const [turn, setTurn] = useState([])

  let disabledInput = false;
  if (turn.length >= 1) {
    disabledInput = true
  } else {
    disabledInput = false
  }

  return (
    <div className="main-page">
      <div className="menu__settings-logo" onClick={() => setMenuActive(!menuActive)}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/768px-Windows_Settings_app_icon.png" alt="" />
      </div>
      <div className={menuActive ? 'main-menu active' : 'main-menu'}>
        <Menu
          menuActive={menuActive}
          disabledInput={disabledInput}
          setMenuActive={setMenuActive}
          setIsAgainstTheComputer={setIsAgainstTheComputer}
          isAgainstTheComputer={isAgainstTheComputer}
          xIsRunMenu={xIsRunMenu}
          setxIsRunMenu={setxIsRunMenu}
          xIsRun={xIsRun}
          setxIsRun={setxIsRun}
        />
      </div>
      <Game
        isAgainstTheComputer={isAgainstTheComputer}
        xIsRunMenu={xIsRunMenu}
        xIsRun={xIsRun}
        setxIsRun={setxIsRun}
        turn={turn}
        setTurn={setTurn}
      />
    </div>
  )
}

export default App;
