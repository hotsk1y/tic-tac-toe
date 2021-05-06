import React from 'react'
import './Menu.css'

const Menu = ({ setMenuActive,
  isAgainstTheComputer,
  setIsAgainstTheComputer,
  setxIsRun,
  xIsRunMenu,
  setxIsRunMenu,
  turn
}) => {

  let disabledInput = false
  turn.length >=1 ? disabledInput = true : disabledInput = false

  return (
    <div className="menu">      
      <div className="close-menu__btn" onClick={() => setMenuActive(false)}>X</div>
      <div className="main-menu__content">
      <div className="title"><h1>Tic Tac Toe Settings</h1></div>
        <div className="content-item chekbox-content__item">
          <label htmlFor="computerTurn">Player VS Bot: </label>
          <input id="computerTurn" type="checkbox" disabled={disabledInput} checked={isAgainstTheComputer} onChange={(e) =>
            setIsAgainstTheComputer(e.target.checked)} />
        </div>
        <div className="content-item chekbox-content__item">
          <label htmlFor="xIsRun">X runs first: </label> 
          <input className='chekbox-content__item' id="xIsRun" type="checkbox" disabled={disabledInput} checked={xIsRunMenu}
            onChange={(e) => {
              setxIsRunMenu(e.target.checked)
              setxIsRun(e.target.checked)
            }} />
        </div>
      </div>
    </div>
  )
}

export default Menu