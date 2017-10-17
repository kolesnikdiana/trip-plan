import React from 'react';
import PropTypes from 'prop-types';

import CityView from '../city-view';

import './cities-list.css';

const CitiesList = ({ cities, onTick }) => (
  <ul className="cities-list">

    {cities.length ? cities.map(city => (
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

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object),
  onTick: PropTypes.func.isRequired
};

CitiesList.defaultProps = {
  cities: [
    { id: 1, name: 'London' },
    { id: 2, name: 'Paris' },
    { id: 3, name: 'Minsk' }
  ]
};

export default CitiesList;
