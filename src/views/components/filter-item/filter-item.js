// @flow
import * as React from 'react';

import type { changeFilter } from '../../../core/types';
import './filter-item.css';

type Props = {
  label: string,
  isTurnedOn: boolean,
  toggleFilter: changeFilter
};

const FilterItem = ({ label, isTurnedOn, toggleFilter }: Props): React.Node => {
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

export default FilterItem;