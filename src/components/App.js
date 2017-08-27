import React from 'react'
import logo from '../images/logo.svg'
import '../styles/App.css'

import { connect } from 'react-redux'

import * as actions from '../actions'
import Calculator from './calculator'

const App = (props) => {
  const handleClick = (evt) => {
    const value = evt.target.value
    console.log(value)
    switch(value) {

      case 'del':
        const question = props.question.slice(0, props.question.length -1)
        props.addQuestion(question)
      break

      case 'clr':
        props.addQuestion('')
        props.addAnswer('')
      break

      case '=':
        if(props.question) {
          try {
            props.addAnswer(
              eval(props.question).toString() // eslint-disable-line no-eval
            )
          } catch (err) {
            if (err instanceof SyntaxError || err instanceof Error) {
              console.log(err.message)
              alert(err.message)
            }
          }
        }
      break
      
      default:
      props.addQuestion(props.question + value)
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Calculator</h2>
      </div>
      <p className="App-intro">Simple calculator in React with Redux</p>
      <div>
        <Calculator 
          handleClick={handleClick} 
          question={props.question}
          answer={props.answer}
        />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    answer: state.answer.answer,
    question: state.question.question
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addAnswer: (newAnswer) => {
      return dispatch(actions.addAnswer(newAnswer))
    },
    addQuestion: (newQuestion) => {
      return dispatch(actions.addQuestion(newQuestion))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
