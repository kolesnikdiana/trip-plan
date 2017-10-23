import React from 'react';
import { connect } from 'react-redux';

import Home from './pages/home';

import Panel from './components/styled-components/containers/panel';
import Title from './components/styled-components/title';

const App = () => (
  <div>

    <Panel header>
      <Title>TripPlan</Title>
    </Panel>

    <Home />

  </div>
);

// =====================================
//  CONNECT
// -------------------------------------
const mapStateToProps = state => ({ cities: state.cities });

export default connect(mapStateToProps, null)(App);
