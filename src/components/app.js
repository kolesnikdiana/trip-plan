import React, { Component } from 'react';
import {Home} from './home/home';
import '../css/components/app.css';

class App extends Component {
  render() {
    return (
      <div className="app-root">
        <div className="header">
          <h1 className="title">TripPlan</h1>
        </div>
        <Home/>
      </div>
    );
  }
}

export default App;
