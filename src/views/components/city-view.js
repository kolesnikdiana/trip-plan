/* eslint-disable jsx-a11y/anchor-is-valid */
// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import Checkbox from './styled-components/inputs/input-checkbox';
import ViewButton from './styled-components/buttons/button-view';

import type {
  City as CityType,
  toggleCity as toggleCityType
} from '../../core/types';

type Props = {
  city: CityType,
  onTick: toggleCityType
};

class CityView extends React.PureComponent<Props> {
  render(): React.Node {
    return (
      <li>

        <Checkbox.Controller
          id={this.props.city.id}
          value={this.props.city.isVisited}
          onChange={(e: SynteticInputEvent<HTMLInputElement>): void =>
            this.props.onTick(e.target.id)}
        />

        <Checkbox.Label
          htmlFor={this.props.city.id}
          checked={this.props.city.isVisited}
        >
          {this.props.city.name}
        </Checkbox.Label>

        <ViewButton>
          <Link to={`details/${this.props.city.id}`}>Map view</Link>
        </ViewButton>

      </li>
    );
  }
}

export default CityView;
