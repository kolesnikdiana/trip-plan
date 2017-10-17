import React from 'react';
import { connect } from 'react-redux';

import Home from './pages/home';

import './app.css';

const App = () => (
  <div className="app-root">

    <div className="header app-root__header">
      <h1 className="app-root__title">TripPlan</h1>
    </div>

    <Home />

  </div>
);

// =====================================
//  CONNECT
// -------------------------------------
const mapStateToProps = state => ({ cities: state.cities });

export default connect(mapStateToProps, null)(App);
