// @flow
import React from 'react';
import { Route } from 'react-router';

import Home from './containers/home';
import Overview from './pages/overview';
import Details from './pages/details';
import Header from './components/header';

import type {
  City as CityType,
  setFocusState as setFocusStateType,
  SearchLineType,
  searchOnline
} from '../core/types';

type Props = {
  location: { ...mixed },
  searchLine: SearchLineType,
  cities: CityType[],
  onSearch: searchOnline,
  setFocusState: setFocusStateType
};

const App = (props: Props): React.Node => (
  <div>
    <Header
      pathname={props.location.pathname}
      onSearch={props.onSearch}
      setFocusState={props.setFocusState}
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
    <Route path="/details" component={Details} />

  </div>
);

export default App;
