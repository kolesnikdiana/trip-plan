// @flow
import * as React from 'react';

import type { changeFilter } from '../../../core/types';
import './filter-item.css';

type Props = {
  label: string,
  isTurnedOn: boolean,
  toggleFilter: changeFilter
};

class FilterItem extends React.PureComponent<Props> {
  render(): React.Node {
    const checkboxClassDefault = 'checkbox checkbox_theme_trigger';

    return (
      <div className="filter-section__checkbox-container">

        <input
          type="checkbox"
          id={this.props.label}
          onChange={this.props.toggleFilter}
        />

        <label
          htmlFor={this.props.label}
          className={this.props.isTurnedOn ? `${checkboxClassDefault} checkbox_theme_trigger_checked` : checkboxClassDefault}
        >
          show {this.props.label === 'showVisited' ? 'visited' : 'unvisited'} places
        </label>

      </div>
    );
  }
}

export default FilterItem;
