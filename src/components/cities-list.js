import React from 'react';
import PropTypes from 'prop-types';
import CityView from './city-view';

import '../css/components/cities-list.css';

const CitiesList = ({ cities, onTick: handleTick, showCities, visitedList }) => {
  const defaultMessage = (
    <li className="cities-list__city">
      No places to be displayed
    </li>
  );

  if (showCities.showVisited && showCities.showUnvisited) {
    /* TODO: TBD - m.b it's better to return as {visited} and {unvisited}
     blocks with permanent filtering on render?
     */

    // display all cities when both of filters are turned on (prevent extra filtering)
    return (
      <ul className="cities-list">
        {cities.map(city => (
          <CityView
            key={city.id}
            city={city}
            onTick={handleTick}
            ticked={visitedList.includes(city.id)}
          />
        ))}
      </ul>
    );
  } else if (showCities.showVisited) {
    // due to visitedList provides us with IDs only
    // we have to find appropriate cities at CitiesList by filtering it
    return (
      <ul className="cities-list">
        {cities.filter(city => visitedList.includes(city.id)).length ?
          cities.filter(city => visitedList.includes(city.id)).map(visited => (<CityView
            key={visited.id}
            city={visited}
            onTick={handleTick}
            ticked={true}
          />)) : defaultMessage
        }
      </ul>
    );
  } else if (showCities.showUnvisited) {
    return (
      <ul className="cities-list">
        {cities.filter(city => !visitedList.includes(city.id)).length ?
          cities.filter(city => !visitedList.includes(city.id)).map(unvisited => (
            <CityView
              key={unvisited.id}
              city={unvisited}
              onTick={handleTick}
              ticked={false}
            />)) : defaultMessage
        }
      </ul>
    );
  }
  return (
    <ul className="cities-list">
      <li className="cities-list__city">
        <span className="warning">warning: </span>
        filters are <span className="warning">turned off</span>
      </li>
    </ul>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object),
  showCities: PropTypes.objectOf(PropTypes.bool),
  visitedList: PropTypes.arrayOf(PropTypes.string),
  onTick: PropTypes.func,
};

CitiesList.defaultProps = {
  cities: [
    { id: 1, name: 'London' },
    { id: 2, name: 'Paris' },
    { id: 3, name: 'Minsk' },
  ],
  showCities: {
    showVisited: true,
    showUnvisited: true,
  },
  visitedList: ['1'],
  onTick() {
    return new Error('onTick - has no implementation');
  },
};

export default CitiesList;
