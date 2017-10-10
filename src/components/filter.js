import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ label, filterOn, onFilterChange }) => {
  const checkboxClassDefault = 'checkbox checkbox_theme_trigger';

  return (
    <div className="filter-section__checkbox-container">

      <input
        type="checkbox"
        checked={filterOn}
        id={label}
        onChange={onFilterChange}
      />

      <label
        htmlFor={label}
        className={filterOn ? `${checkboxClassDefault} checkbox_theme_trigger_checked` : checkboxClassDefault}
      >
        show { label === 'showVisited' ? 'visited' : 'unvisited'} places
      </label>

    </div>
  );
};

Filter.propTypes = {
  label: PropTypes.string.isRequired,
  filterOn: PropTypes.bool,
  onFilterChange: PropTypes.func.isRequired,
};

Filter.defaultProps = { filterOn: true };

export default Filter;
