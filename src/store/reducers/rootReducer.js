import { combineReducers } from 'redux'

import { scoreReducer } from './scoreReducer'
import { settingsReducer } from './settingsReducer'
import { fieldReducer } from './fieldReducer'

export const rootReducer =  combineReducers({
  score: scoreReducer,
  settings: settingsReducer,
  field: fieldReducer,
})