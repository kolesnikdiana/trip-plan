// @flow
import React from 'react';
import { Route, withRouter } from 'react-router';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import searchActions from '../core/search/actions';

import Home from './containers/home';
import Overview from './pages/overview';
import SearchLine from './components/search-line';

import Panel from './components/styled-components/containers/panel';
import Title from './components/styled-components/titles';
import Navigation, { NavigationLinkTheme } from './components/styled-components/navigation';
import Link, { LogoTheme } from './components/styled-components/link';

import type {
  City as CityType,
  searchOnline
} from '../core/types';

type Props = {
  cities: CityType[],
  onSearch: searchOnline
};

const App = (props: Props) => (
  <div>

    <Panel header>
      <Title>
        <Link theme={LogoTheme} href="/">TripPlan</Link>
      </Title>

      <Navigation>
         <li><Link theme={NavigationLinkTheme} href="/">Home</Link></li>
         <li><Link theme={NavigationLinkTheme} href="/overview">Overview</Link></li>
      </Navigation>

      <SearchLine
        onSearch={props.onSearch}
      />
    </Panel>

    <Route exact path="/" component={Home} />
    <Route
      path="/overview"
      render={(): React.Node =>
        (<Overview
          cities={props.cities}
        />)}
    />

  </div>
);

// =====================================
//  CONNECT
// -------------------------------------
const mapStateToProps = state => ({ cities: state.cities });

const mapDispatchToProps = { onSearch: searchActions.sortByInput };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
