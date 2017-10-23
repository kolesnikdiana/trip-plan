// @flow
import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import type { changeFilter } from '../../../core/types';
import Trigger, { triggerTheme } from '../styled-components/inputs/trigger';

type Props = {
  label: string,
  isTurnedOn: boolean,
  toggleFilter: changeFilter
};

class FilterItem extends React.PureComponent<Props> {
  render(): React.Node {
    return (
      <Trigger>

        <Trigger.Controller
          type="checkbox"
          id={this.props.label}
          onChange={this.props.toggleFilter}
        />

        <ThemeProvider theme={triggerTheme}>
          <Trigger.Label
            htmlFor={this.props.label}
            checked={this.props.isTurnedOn}
          >
            show {this.props.label === 'showVisited' ? 'visited' : 'unvisited'} places
          </Trigger.Label>
        </ThemeProvider>

      </Trigger>
    );
  }
}

export default FilterItem;
