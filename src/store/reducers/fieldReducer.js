/* eslint-disable no-case-declarations */
/* eslint-disable indent */
const defaultFieldState = {
  field: Array(9).fill(null),
}

export const START_NEW_GAME = 'START_NEW_GAME'
export const CHANGE_FIELD = 'CHANGE_FIELD'

export const fieldReducer = (state = defaultFieldState, action) => {
  switch (action.type) {
    case START_NEW_GAME:
      return { ...state, field: defaultFieldState.field }

    case CHANGE_FIELD:
      let newField = [...state.field]
      newField[action.index] = action.payload
      return { ...state, field: newField }

    default:
      return state
  }
}

export const startNewGameAction = (payload) => ({
  type: START_NEW_GAME,
  payload,
})

export const changeFieldAction = (payload, index) => ({
  type: CHANGE_FIELD,
  payload,
  index,
})
