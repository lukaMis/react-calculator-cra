import React, { Component } from 'react'
import logo from '../images/logo.svg'
import '../styles/App.css'

import { connect } from 'react-redux'

import * as actions from '../actions'

class App extends Component {
  render() {
    return (
      <div className="App" onClick={()=> {
          this.props.addQuestion('Question ' + (Math.random() * 999).toFixed())
          this.props.addAnswer('Answer ' + (Math.random() * 999).toFixed())
        }}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <p>Question is: {this.props.question}</p>
        </div>
        <div>
          <p>Answer is: {this.props.answer}</p>
        </div>
      </div>
    );
  }
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
