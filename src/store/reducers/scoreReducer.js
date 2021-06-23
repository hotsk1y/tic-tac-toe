const defaultScoreState = {
  draw: 0,
  scoreX: 0,
  scoreO: 0,
}

export const ADD_X = 'ADD_X'
export const ADD_O = 'ADD_O'
export const ADD_DRAW = 'ADD_DRAW'
export const RESET_SCORE = 'RESET_SCORE'

export const scoreReducer = (state = defaultScoreState, action) => {
  switch (action.type) {
  case ADD_X:
    return { ...state, scoreX: state.scoreX + 1 }
  case ADD_O:
    return { ...state, scoreO: state.scoreO + 1 }
  case ADD_DRAW:
    return { ...state, draw: state.draw + 1 }
  case RESET_SCORE:
    return { ...state, draw: (state.draw = 0), scoreX: 0, scoreO: 0 }

  default:
    return state
  }
}

export const setScoreDrawAction = (payload) => ({
  type: ADD_DRAW,
  payload,
})

export const setScoreXAction = (payload) => ({
  type: ADD_X,
  payload,
})

export const setScoreOAction = (payload) => ({
  type: ADD_O,
  payload,
})

export const resetScoreAction = (payload) => ({
  type: RESET_SCORE,
  payload,
})
