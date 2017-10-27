// @flow
import * as React from 'react';
import CityView from '../city-view';

import WarningLine from '../styled-components/warning';
import StyledList from '../styled-components/lists/full-viewed';

import type {
  City as CityType,
  toggleCity as toggleCityType
} from '../../../core/types';

type Props = {
  cities: CityType[],
  onTick: toggleCityType
};

const CitiesList = ({ cities, onTick }: Props): React.Node => (
  <StyledList>
    {cities !== null && cities.length ?
      cities.map((city: CityType): React.Element<typeof CityView> => (
        <CityView
          key={city.id}
          city={city}
          onTick={onTick}
        />
      )) :
      <li>
        <WarningLine>Warning: </WarningLine>
        No cities to be displayed
      </li>
    }

  </StyledList>
);

export default CitiesList;
