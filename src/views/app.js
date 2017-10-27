// @flow
import React from 'react';
import { Route } from 'react-router';

import Home from './containers/home';
import Overview from './pages/overview';
import Header from './components/header';

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
    <Header
      location={props.location}
      onSearch={props.onSearch}
      searchLine={props.searchLine}
    />

    <Route exact path="/" component={Home} />
    <Route
      path="/overview"
      render={(): React.Node => (
        <Overview
          cities={props.cities}
        />
      )}
    />

  </div>
);

export default App;
