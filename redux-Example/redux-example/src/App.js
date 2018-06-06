import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Redux from './redux.js'
import { createStore } from 'redux'
//import reducer from './reducer'


const reducer = (action, state = "1") => {
  if (action == 'a') {
    return state + 1
  }
  return state
}

const store = createStore(reducer, "1")

class App extends Component {

  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit() {
    store.dispatch({type: 'a'})
  }
  
  render() {
    store.subscribe(App)
    return (
      <div className = "App">
        <CardView name={store.getState()} job='iOS Developer' age='21' submit={this.submit}/>
        <Redux style = {{ padding: '100px'}}/>
      </div>
      
    )
  }
}

export default App;


const CardView = (props) => {
    return (
      <div className = "Card">
        <div style = { { margin: '10px' }}> Name: {props.name} </div>
        <div style = { { margin: '10px' }}> Age: {props.age} </div>
        <div style = { { margin: '10px' }}> job: {props.job} </div>
        <button onClick={props.submit}> Submit </button>
      </div>
    )
}