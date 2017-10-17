import React from 'react';
import PropTypes from 'prop-types';

import './filter-item.css';

const FilterItem = ({ label, isTurnedOn, toggleFilter }) => {
  const checkboxClassDefault = 'checkbox checkbox_theme_trigger';

  return (
    <div className="filter-section__checkbox-container">

      <input
        type="checkbox"
        id={label}
        onChange={toggleFilter}
      />

      <label
        htmlFor={label}
        className={isTurnedOn ? `${checkboxClassDefault} checkbox_theme_trigger_checked` : checkboxClassDefault}
      >
        show {label === 'showVisited' ? 'visited' : 'unvisited'} places
      </label>

    </div>
  );
};

FilterItem.propTypes = {
  label: PropTypes.string.isRequired,
  isTurnedOn: PropTypes.bool,
  toggleFilter: PropTypes.func.isRequired
};

FilterItem.defaultProps = { isTurnedOn: true };

export default FilterItem;
