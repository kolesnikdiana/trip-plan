// @flow
import React from 'react';
import { Route, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import searchActions from '../core/search/actions';

import Home from './containers/home';
import SearchHint from './containers/search-hint';
import Overview from './pages/overview';
import SearchLine from './components/search-line';

import Panel from './components/styled-components/containers/panel';
import Title from './components/styled-components/titles';
import Navigation, { NavigationLinkTheme } from './components/styled-components/navigation';
import StyledLink, { LogoTheme } from './components/styled-components/link';

import type {
  City as CityType,
  searchOnline
} from '../core/types';

type Props = {
  location: string,
  searchLine: string,
  cities: CityType[],
  onSearch: searchOnline
};

const App = (props: Props): React.Node => (
  <div>
    <Panel header>
      <Title>
        <StyledLink theme={LogoTheme}>
          <Link to="/">TripPlan</Link>
        </StyledLink>
      </Title>

      <Navigation>
        <li>
          <StyledLink theme={NavigationLinkTheme}>
            <Link to="/">Home</Link>
          </StyledLink>
        </li>
        <li>
          <StyledLink theme={NavigationLinkTheme}>
            <Link to="/overview">Overview</Link>
          </StyledLink>
        </li>
      </Navigation>

      <SearchLine
        onSearch={props.onSearch}
      />
      {
        props.location.pathname === '/overview' &&
        props.searchLine &&
        <SearchHint />
      }
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
const mapStateToProps = state => ({
  cities: state.cities,
  searchLine: state.searchLine
});

const mapDispatchToProps = { onSearch: searchActions.sortByInput };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
