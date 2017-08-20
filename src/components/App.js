import React, { Component } from 'react'
import logo from '../images/logo.svg'
import '../styles/App.css'

import { connect } from 'react-redux'

import * as actions from '../actions'
import Calculator from './calculator'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    console.log('event.target.value', event.target.value)
    let value = event.target.value
    
    switch(value) {
      case '=':
        this.state.question &&
        this.props.addAnswer(
          eval(this.state.question).toString() // eslint-disable-line no-eval
        )
      break

      case 'del':
        throw 42
      break

      case 'clr':
        this.setState((state, props) => {
          return {
            question: ''
          }}, () => {
            this.props.addQuestion(this.state.question)
            this.props.addAnswer('')
          })
      break

      case '÷':
        value = '/'
      // eslint-disable-line no-fallthrough

      default: 
        this.setState((state, props) => {
          return {
            question: state.question + value
          }}, () => this.props.addQuestion(this.state.question)
        )
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">Simple calculator in React with Redux</p>
        <div>
          <Calculator 
            handleClick={this.handleClick} 
            question={this.props.question}
            answer={this.props.answer}
          />
        </div>
      </div>
    )
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
