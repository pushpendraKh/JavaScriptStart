import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  constructor() {
    super();
    
    this.state = {
      size: 'yes',
      value: '',
      name: '',
    };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.getTextField = this.getTextField.bind(this);
      this.handleTextField = this.handleTextField.bind(this);
  }

  handleChange(event) {
    this.setState({
      size: event.target.value
    });
  }

  handleTextField(event) {
    console.log(event.target.value)
    this.setState(() => ({ name: event.target.value }));
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`You chose the ${this.state.size} option.`);
  }

  getTextField() {
    if (this.state.size == 'yes') {
      return (
        <form onSubmit={this.handleSubmit}>
          <p>Select Option:</p>

        <div>
          <label>
                <input
                  type="radio"
                  value="yes"
                  checked={this.state.size === "yes"}
                  onChange={this.handleChange}
                />
                Yes
          </label>

          <label>
                <input
                  type="radio"
                  value="no"
                  checked={this.state.size === "no"}
                  onChange={this.handleChange}
                />
                No
            </label>

          </div> 

          <div>
              <input
                type = "text"
                value = {this.state.name}
                placeholder = 'Enter text'
                onChange = {this.handleTextField}
              />

          </div>   
     
          <div>
          <button type="submit">Make your choice</button>
          </div>
        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <p>Select Option:</p>


        <div>
          <label>
                <input
                  type="radio"
                  value="yes"
                  checked={this.state.size === "yes"}
                  onChange={this.handleChange}
                />
                Yes
          </label>

          <label>
                <input
                  type="radio"
                  value="no"
                  checked={this.state.size === "no"}
                  onChange={this.handleChange}
                />
                No
            </label>

          </div> 
        </form>
      );
    }
    
  }

  render() {
    return this.getTextField();
  }
}