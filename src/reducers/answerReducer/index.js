
import { ADD_ANSWER } from '../../constants/'

const initialState = {
  answer: 'answer'
}

export default function answerReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ANSWER:
      return Object.assign({}, state, {
        answer: action.answer
      })

    default:
      return state
  }
}
