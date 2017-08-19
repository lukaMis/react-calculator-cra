
import * as constants from '../constants'

export function addAnswer(answer) {
  return {
    answer,
    type: constants.ADD_ANSWER
  }
}

export function addQuestion(question) {
  return {
    question,
    type: constants.ADD_QUESTION
  }
}
