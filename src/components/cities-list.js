import React from 'react';
import PropTypes from 'prop-types';
import CityView from './city-view';

import '../css/components/cities-list.css';

const CitiesList = ({ cities, onTick: handleTick, showCities, visitedList }) => {
  // Case: both filters are turned off
  if (!showCities.showVisited && !showCities.showUnvisited) {
    return (
      <ul className="cities-list">

        <li className="cities-list__city">
          filters are <span className="warning">turned off</span>
        </li>

      </ul>
    );
  } else if ((showCities.showVisited && !showCities.showUnvisited
      && cities.every(city => !visitedList.includes(city.id))) ||
    (!showCities.showVisited && showCities.showUnvisited
      && cities.every(city => visitedList.includes(city.id)))) {
    // Case: cities list of chosen filter is empty
    return (
      <ul className="cities-list">

        <li className="cities-list__city">
          No places to be displayed
        </li>

      </ul>
    );
  }

  // Case: default rendering (all cities)
  return (
    <ul className="cities-list">

      {cities.map(city => (
        <CityView
          key={city.id}
          city={city}
          onTick={handleTick}
          ticked={visitedList.includes(city.id)}
          hidden={(showCities.showVisited && !showCities.showUnvisited
            && !visitedList.includes(city.id))
          || (showCities.showUnvisited && !showCities.showVisited
            && visitedList.includes(city.id))}
        />
      ))}

    </ul>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object),
  showCities: PropTypes.objectOf(PropTypes.bool),
  visitedList: PropTypes.arrayOf(PropTypes.string),
  onTick: PropTypes.func.isRequired
};

CitiesList.defaultProps = {
  cities: [
    { id: 1, name: 'London' },
    { id: 2, name: 'Paris' },
    { id: 3, name: 'Minsk' }
  ],
  showCities: {
    showVisited: true,
    showUnvisited: true
  },
  visitedList: ['1']
};

export default CitiesList;
