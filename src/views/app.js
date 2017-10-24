import React from 'react';
import { connect } from 'react-redux';

import searchActions from '../core/search/actions';

import Home from './pages/home';

import Panel from './components/styled-components/containers/panel';
import Title from './components/styled-components/title';
import SearchLine from './components/search-line/search-line';

const App = props => (
  <div>

    <Panel header>
      <Title>TripPlan</Title>
      <SearchLine
        onSearch={props.onSearch}
      />
    </Panel>

    <Home />

  </div>
);

// =====================================
//  CONNECT
// -------------------------------------
const mapStateToProps = state => ({ cities: state.cities });

const mapDispatchToProps = { onSearch: searchActions.sortByInput };

export default connect(mapStateToProps, mapDispatchToProps)(App);
