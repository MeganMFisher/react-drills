import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      filtered: '',
      cities: ['Boston', 'Anchorage', 'London', 'Zurich', 'Salzburg', 'Munich', 'El Paso']
    }
  }

  handleChange(e) {
    this.setState({
      filtered: e
    })
  }

  render() {
    const cityList = this.state.cities.filter((e, i) => e.includes(this.state.filtered)).map((e, i) => <div key={i}><h1>{e}</h1></div>)

    return (
      <div>
        <input onChange={e => this.handleChange(e.target.value)}/>
        {cityList}
      </div>
    );
  }
}

export default App;
