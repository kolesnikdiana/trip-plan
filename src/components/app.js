import React, { Component } from 'react';
import Home from './home';
import '../css/components/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [
        { id: '1', name: 'London' },
        { id: '2', name: 'Paris' },
        { id: '3', name: 'Minsk' },
        { id: '41', name: 'Barcelona' },
        { id: '5', name: 'Tokyo' },
        { id: '6', name: 'Beijing' },
      ],
    };
  }

  addCity = (name) => (
    this.state.cities.push({
      id: this.state.cities.length + 1,
      name: name
    })
  );

  render() {
    return (
      <div className="app-root">
        <div className="header app-root__header">
          <h1 className="app-root__title">TripPlan</h1>
        </div>
        <Home
          cities={this.state.cities}
          addCity={this.addCity} />
      </div>
    );
  }
}

export default App;
