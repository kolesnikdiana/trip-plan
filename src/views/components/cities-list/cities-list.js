// @flow
import * as React from 'react';

import type {
  City as CityType,
  toggleCity as toggleCityType
} from '../../../core/types';
import CityView from '../city-view';

import './cities-list.css';

type Props = {
  cities: CityType[],
  onTick: toggleCityType
};

const CitiesList = ({ cities, onTick }: Props): React.Node => (
  <ul className="cities-list">
    {cities !== null && cities.length ?
      cities.map((city: CityType): React.Element<typeof CityView> => (
        <CityView
          key={city.id}
          city={city}
          onTick={onTick}
        />
      )) :
      <li className="cities-list__city">
        <span className="warning">Warning: </span>
        No cities to be displayed
      </li>
    }

  </ul>
);

export default CitiesList;
