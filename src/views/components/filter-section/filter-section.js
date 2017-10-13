import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../filter';

import './filter-section.css';

const FilterSection = ({ filterValues, onFilterChange }) => (
  <div className="filter-section">
    <Filter
      label="showVisited"
      filterOn={filterValues.showVisited}
      onFilterChange={onFilterChange}
    />

    <Filter
      label="showUnvisited"
      filterOn={filterValues.showUnvisited}
      onFilterChange={onFilterChange}
    />
  </div>
);

FilterSection.propTypes = {
  filterValues: PropTypes.objectOf(PropTypes.any),
  onFilterChange: PropTypes.func.isRequired
};

FilterSection.defaultProps = { filterValues: { showVisited: true, showUnvisited: true } };

export default FilterSection;
