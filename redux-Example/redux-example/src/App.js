import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Redux from './redux.js'
import { createStore } from 'redux'
import reducer from './reducer'


const store = createStore(reducer)


class App extends Component {

  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.updateState = this.updateState.bind(this)
    store.subscribe(this.updateState)
    this.state = {
      reducer : store.getState()
    }
  }

  updateState(){
    console.log("update state");
    this.setState({
      reducer: store.getState()
    })
  }
  submit() {
    store.dispatch({type: 'ADD'})
  }
  
  render() {
    console.log("calling");
    return (
      <div className = "App">
        <Arrow/>
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

const Arrow = () => {
  return (
    <div className = "Box">
     
    </div>
    
  )
}