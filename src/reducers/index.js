
import { combineReducers } from 'redux'

import answer from './answerReducer/'
import question from './questionReducer/'

export default combineReducers({
  answer,
  question
})
