import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super() 

    this.state = {
      input: ''
    }
  }

  handleChange(e) {
    this.setState({
      input: e
    })
  }

  render() {
    return (
      <div>
        <input onChange={e => this.handleChange(e.target.value)}/>
        {this.state.input}
      </div>
    );
  }
}

export default App;
