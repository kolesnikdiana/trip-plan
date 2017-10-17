import React from 'react';
import PropTypes from 'prop-types';

const CityView = ({ city, onTick }) => {
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

CityView.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    isVisited: PropTypes.bool
  }).isRequired,
  onTick: PropTypes.func.isRequired,
};

export default CityView;
