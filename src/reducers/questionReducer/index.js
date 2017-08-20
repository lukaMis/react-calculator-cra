
import { ADD_QUESTION } from '../../constants/'

const initialState = {
  question: ''
}

export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        question: action.question
      }

    default:
      return state
  }
}
