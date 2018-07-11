// @flow
import * as React from 'react';

const City = ({ match }) => (
  <div>
    City: {match.params.cityId}
  </div>
);
export default City;
