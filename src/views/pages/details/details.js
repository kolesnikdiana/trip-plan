// @flow
import * as React from 'react';
import { Route } from 'react-router';

import { InnerPage } from '../../components/styled-components/containers/sections';
import { Subtitle } from '../../components/styled-components/titles';
import WarningLine from '../../components/styled-components/warning';

import CityDetails from '../../components/city-details';

const Details = ({ match }) => (
  <InnerPage>
    <Subtitle>City details and map will appear here</Subtitle>

    <Route path={`${match.url}/:cityId`} component={CityDetails} />
    <Route
      exact
      path={match.url}
      render={(): React.Node => (
        <p>
          <WarningLine>Ooops ): </WarningLine>
          You haven&#39;t chosen any city to view its details
        </p>
      )}
    />
  </InnerPage>
);

export default Details;
