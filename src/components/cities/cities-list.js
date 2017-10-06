import React from 'react';
import {CityView} from './city-view';

import '../../css/components/cities-list.css';

export const CitiesList = ({ cities, onTick: handleTick, showCities, visitedList }) => {
  if(showCities.showVisited && showCities.showUnvisited) {
    // TODO: TBD - m.b it's better to return as {visited} and {unvisited} blocks with permanent filtering on render?

    // display all cities if both of filters are turned on
    // (prevent extra filtering)
    return (
      <ul className="to-do-list cities-list">
        {cities.map((city) =>
          <CityView key={city.id} city={city} onTick={handleTick}
                    className={visitedList.includes(city.id) ? 'ticked' : ''}/>)}
      </ul>
    )
  }
  else if (showCities.showVisited) {
    // due to visitedList provides us with IDs only
    // we have to find appropriate cities at CITIES List by filtering the List
    return (
      <ul className="to-do-list cities-list">
        {cities.filter((city) => visitedList.includes(city.id))
          .map((visited) =>
            <CityView key={visited.id} city={visited} onTick={handleTick} className="ticked"/>)
        }
      </ul>
    )
  }
  else if (showCities.showUnvisited) {
    return (
      <ul className="to-do-list cities-list">
        {cities.filter((city) => !visitedList.includes(city.id))
          .map((unvisited) => <CityView key={unvisited.id} city={unvisited} onTick={handleTick}/>)
        }
      </ul>
    )
  }
  else {
    return (
      <ul className="to-do-list cities-list">
        <li>
          <span className="warning">warning: </span>
          No places to be displayed (filters are <span className="warning">turned off</span>)
        </li>
      </ul>
    )
  }
};

