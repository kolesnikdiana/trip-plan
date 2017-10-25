// @flow
import React from 'react';
import { Route, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import searchActions from '../core/search/actions';

import Home from './containers/home';
import Overview from './pages/overview';
import SearchLine from './components/search-line/search-line';

import Panel from './components/styled-components/containers/panel';
import Title from './components/styled-components/title';

import type { searchOnline } from '../core/types';

type Props = {
  onSearch: searchOnline
};

const App = (props: Props) => (
  <div>

    <Panel header>
      <Title>TripPlan</Title>
      <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/overview">Overview</Link></li>
      </ul>
      <SearchLine
        onSearch={props.onSearch}
      />
    </Panel>
    <Route exact path="/" component={Home} />
    <Route exact path="/overview" component={Overview} />

  </div>
);

// =====================================
//  CONNECT
// -------------------------------------
const mapStateToProps = state => ({ cities: state.cities });

const mapDispatchToProps = { onSearch: searchActions.sortByInput };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
