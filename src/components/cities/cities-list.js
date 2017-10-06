import React from 'react';
import {CityView} from './city-view';

import '../../css/components/cities-list.css';

export const CitiesList = ({ cities, onTick: handleTick }) => (
  <ul className="to-do-list cities-list">
    {cities.map((city) => <CityView key={city.id} city={city} onTick={handleTick} />)}
  </ul>
);