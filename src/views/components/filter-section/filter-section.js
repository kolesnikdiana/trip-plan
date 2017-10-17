import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { filterValues } from '../../../core/filter/actions';
import FilterItem from '../filter-item/';

import './filter-section.css';

class FilterSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showVisited: true,
      showUnvisited: true
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e) {
    e.persist();
    this.setState(({ [e.target.id]: prevState }) => ({ [e.target.id]: !prevState }));

    // Wait until state is changed (async)
    setTimeout(() => {
      let filterTag;
      if (this.state.showVisited && this.state.showUnvisited) {
        filterTag = filterValues.SHOW_ALL;
      } else if (this.state.showVisited) {
        filterTag = filterValues.SHOW_COMPLETED;
      } else if (this.state.showUnvisited) {
        filterTag = filterValues.SHOW_ACTIVE;
      } else {
        filterTag = filterValues.HIDE_ALL;
      }

      this.props.onFilterChange(filterTag);
    }, 0);
  }

  render() {
    return (
      <div className="filter-section">
        <FilterItem
          label="showVisited"
          isTurnedOn={this.state.showVisited}
          toggleFilter={this.handleFilterChange}
        />

        <FilterItem
          label="showUnvisited"
          isTurnedOn={this.state.showUnvisited}
          toggleFilter={this.handleFilterChange}
        />
      </div>
    );
  }
}

FilterSection.propTypes = { onFilterChange: PropTypes.func.isRequired };

export default FilterSection;
