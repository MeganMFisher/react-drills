import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      cities: ['Boston', 'Anchorage', 'London', 'Zurich', 'Salzburg', 'Munich', 'El Paso']
    }
  }

  render() {
    const cityList = this.state.cities.map((e, i) => <div key={i}><h1>{e}</h1></div>)

    return (
      <div>
        {cityList}
      </div>
    );
  }
}

export default App;
