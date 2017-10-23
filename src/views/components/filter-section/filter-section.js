// @flow
import * as React from 'react';

import FilterItem from '../filter-item/';

// styled components
import { SectionDivider } from '../styled-components/containers/sections';

// types definitions
import type {
  changeFilter as changeFilterType,
  FilterState as FilterStateType
} from '../../../core/types';

type Props = {
  onFilterChange: changeFilterType,
  filterState: FilterStateType
};

class FilterSection extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e: SyntheticInputEvent<HTMLInputElement>) {
    e.persist();
    this.props.onFilterChange({ [e.target.id]: !e.target.checked });
  }

  render(): React.Node {
    return (
      <SectionDivider>
        <FilterItem
          label="showVisited"
          isTurnedOn={this.props.filterState.showVisited}
          toggleFilter={this.handleFilterChange}
        />

        <FilterItem
          label="showUnvisited"
          isTurnedOn={this.props.filterState.showUnvisited}
          toggleFilter={this.handleFilterChange}
        />
      </SectionDivider>
    );
  }
}

export default FilterSection;
