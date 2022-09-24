import { combineReducers } from 'redux'
import { todosReducer } from './todos'
import { calendarReducer } from './calendar'

export const rootReducer = combineReducers({
  todosReducer,
  calendarReducer,
})
