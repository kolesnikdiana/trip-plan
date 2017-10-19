// @flow
import * as React from 'react';
import type { addCity as addCityType } from '../../../core/types';

import './add-item.css';

type Props = {
  onItemAdd: addCityType
};

type State = {
  value: string,
  isValid: boolean
};

class AddItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.shouldUpdate = false;

    this.validate = this.validate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    value: '',
    isValid: true
  };

  shouldComponentUpdate(_, nextState): boolean {
    if (nextState.isValid === this.state.isValid && nextState.isValid === false) {
      return false;
    }
    if (this.shouldUpdateOnce) {
      this.shouldUpdateOnce = false;
      this.shouldUpdate = false;
      return true;
    }
    if (this.shouldUpdate) {
      return true;
    }
    return false;
  }

  validate() {
    this.shouldUpdateOnce = true;
    this.setState({ isValid: true });
  }

  handleChange(e: SyntheticInputEvent<HTMLInputElement>) {
    this.shouldUpdate = true;
    this.setState({ value: e.target.value });
  }

  handleClick() {
    const name = this.state.value;
    if (name.trim().length) {
      this.props.onItemAdd(name);
      this.setState({ value: '' });
    } else {
      this.setState({ isValid: false });
    }
    this.shouldUpdateOnce = true;
  }

  render(): React.Node {
    return (
      <div className="add-item-field">

        <div className="input-container add-item-field__input-container">

          <input
            className={!this.state.isValid ? 'add-item-field__input add-item-field__input_incorrect'
              : 'add-item-field__input'}
            type="text"
            id="input-value"
            placeholder="Add new place to visit"
            value={this.state.value}
            onChange={this.handleChange}
            onFocus={this.validate}
          />

          <button
            onClick={this.handleClick}
            className="add-item-field__button"
          />

        </div>

      </div>
    );
  }
}

export default AddItem;
