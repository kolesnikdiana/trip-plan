// @flow
import * as React from 'react';
import type { City as CityType, toggleCity as toggleCityType } from '../../core/types';

type Props = {
  city: CityType,
  onTick: toggleCityType
};

class CityView extends React.PureComponent<Props> {
  render(): React.Node {
    const checkboxClassDefault = 'checkbox checkbox_theme_default';

    return (
      <li className="cities-list__city">

        <input
          type="checkbox"
          id={this.props.city.id}
          value={this.props.city.isVisited}
          onChange={(e: SynteticInputEvent<HTMLInputElement>): void =>
            this.props.onTick(e.target.id)}
        />

        <label
          htmlFor={this.props.city.id}
          className={this.props.city.isVisited ? `${checkboxClassDefault} checkbox_theme_default_checked` : checkboxClassDefault}
        >
          {this.props.city.name}
        </label>

        <button className="cities-list__map-view-link">Map view</button>

      </li>
    );
  }
}

export default CityView;
