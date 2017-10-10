import React from 'react';
import PropTypes from 'prop-types';

const CityView = ({ city, ticked: isChecked, onTick }) => {
  const checkboxClassDefault = 'checkbox checkbox_theme_default';

  return (
    <li className="cities-list__city">

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
  city: PropTypes.objectOf(PropTypes.any),
  ticked: PropTypes.bool,
  onTick: PropTypes.func,
};

CityView.defaultProps = {
  city: { id: '000', name: 'Default City' },
  ticked: false,
  onTick() {
    return new Error('onTick - has no implementation');
  },
};

export default CityView;
