// @flow
import * as React from 'react';

import filterActions from '../../../core/filter/actions';
import type { changeFilter } from '../types';
import FilterItem from '../filter-item/';

import './filter-section.css';

type Props = {
  onFilterChange: changeFilter
};

type State = {
  showVisited: boolean,
  showUnvisited: boolean
};

class FilterSection extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  state = {
    showVisited: true,
    showUnvisited: true
  };

  handleFilterChange(e: SyntheticInputEvent<HTMLInputElement>) {
    e.persist();
    this.setState(({ [e.target.id]: prevState }) => ({ [e.target.id]: !prevState }));

    // Wait until state is changed (async)
    setTimeout(() => {
      let filterTag: string;
      if (this.state.showVisited && this.state.showUnvisited) {
        filterTag = filterActions.SHOW_ALL;
      } else if (this.state.showVisited) {
        filterTag = filterActions.SHOW_COMPLETED;
      } else if (this.state.showUnvisited) {
        filterTag = filterActions.SHOW_ACTIVE;
      } else {
        filterTag = filterActions.HIDE_ALL;
      }

      this.props.onFilterChange(filterTag);
    }, 0);
  }

  render(): React.Node {
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

export default FilterSection;
