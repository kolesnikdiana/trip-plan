// @flow
import * as React from 'react';
import type { City as CityType, toggleCity as toggleCityType } from './types';

type Props = {
  city: CityType,
  onTick: toggleCityType
};

const CityView = ({ city, onTick }: Props): React.Node => {
  const checkboxClassDefault = 'checkbox checkbox_theme_default';

  return (
    <li className="cities-list__city">

      <input
        type="checkbox"
        id={city.id}
        onChange={onTick}
      />

      <label
        htmlFor={city.id}
        className={city.isVisited ? `${checkboxClassDefault} checkbox_theme_default_checked` : checkboxClassDefault}
      >
        {city.name}
      </label>

      <button className="cities-list__map-view-link">Map view</button>

    </li>
  );
};

export default CityView;
