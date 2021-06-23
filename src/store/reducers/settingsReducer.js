const defaultState = {
  isAgainstTheComputer: true,
  menuActive: false,
  xIsRunMenu: true,
  xIsRun: true,
  turn: [],
}

export const BOT_ACTIVE = 'BOT_ACTIVE'
export const MENU_ACTIVE = 'MENU_ACTIVE'
export const X_IS_RUN_MENU = 'X_IS_RUN_MENU'
export const X_IS_RUN = 'X_IS_RUN'
export const SET_TURN = 'SET_TURN'

export const settingsReducer = (state = defaultState, action) => {
  switch (action.type) {
  case BOT_ACTIVE:
    return { ...state, isAgainstTheComputer: action.payload }

  case MENU_ACTIVE:
    return { ...state, menuActive: action.payload }

  case X_IS_RUN_MENU:
    return { ...state, xIsRunMenu: action.payload }

  case X_IS_RUN:
    return { ...state, xIsRun: action.payload }

  case SET_TURN:
    return { ...state, turn: action.payload }

  default:
    return state
  }
}

export const setIsAgainstTheComputerAction = (payload) => ({
  type: BOT_ACTIVE,
  payload,
})

export const setMenuActiveAction = (payload) => ({
  type: MENU_ACTIVE,
  payload,
})

export const setxIsRunMenuAction = (payload) => ({
  type: X_IS_RUN_MENU,
  payload,
})

export const setTurnAction = (payload) => ({
  type: SET_TURN,
  payload,
})

export const setxIsRunAction = (payload) => ({
  type: X_IS_RUN,
  payload,
})
