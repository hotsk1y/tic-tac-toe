import React, { useState } from 'react'
import './App.css';
import Game from './components/Game/Game'
import Menu from './components/Menu/Menu'

function App() {
  const [menuActive, setMenuActive] = useState(false)
  const [isAgainstTheComputer, setIsAgainstTheComputer] = useState(false)
  const [xIsRunMenu, setxIsRunMenu] = useState(true)
  const [xIsRun, setxIsRun] = useState(xIsRunMenu)
  const [turn, setTurn] = useState([])

  return (
    <div className="main-page">
      <div className="menu__settings-logo" onClick={() => setMenuActive(!menuActive)}>
        <img src="images/settings.svg" alt=""/>
      </div>
      <div className={menuActive ? "main-menu active" : "main-menu"}>
        <Menu menuActive={menuActive} 
        setMenuActive={setMenuActive} 
        setIsAgainstTheComputer={setIsAgainstTheComputer}
        isAgainstTheComputer={isAgainstTheComputer}
        xIsRunMenu={xIsRunMenu}
        setxIsRunMenu={setxIsRunMenu}
        xIsRun={xIsRun}
        setxIsRun={setxIsRun}
        turn={turn} />
      </div>
      <Game 
        isAgainstTheComputer={isAgainstTheComputer}
        xIsRunMenu={xIsRunMenu}
        xIsRun={xIsRun}
        setxIsRun={setxIsRun}
        turn={turn}
        setTurn={setTurn} />        
    </div>
  );
}

export default App;