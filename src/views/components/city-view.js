import React from 'react';
import PropTypes from 'prop-types';

const CityView = ({ city, ticked: isChecked, onTick, hidden }) => {
  const checkboxClassDefault = 'checkbox checkbox_theme_default';

  return (
    <li className={hidden ? 'cities-list__city cities-list__city_hidden' : 'cities-list__city'}>

      <input
        type="checkbox"
        id={city.id}
        checked={isChecked}
        onChange={onTick}
      />

      <label
        htmlFor={city.id}
        className={isChecked ? `${checkboxClassDefault} checkbox_theme_default_checked` : checkboxClassDefault}
      >
        {city.name}
      </label>

      <a href="#" className="cities-list__map-view-link">Map view</a>

    </li>
  );
};

CityView.propTypes = {
  city: PropTypes.objectOf(PropTypes.any).isRequired,
  ticked: PropTypes.bool,
  onTick: PropTypes.func.isRequired,
  hidden: PropTypes.bool
};

CityView.defaultProps = {
  ticked: false,
  hidden: false
};

export default CityView;
