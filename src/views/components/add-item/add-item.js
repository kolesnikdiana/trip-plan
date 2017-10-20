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

class AddItem extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.validate = this.validate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    value: '',
    isValid: true
  };

  validate() {
    this.setState({ isValid: true });
  }

  handleChange(e: SyntheticInputEvent<HTMLInputElement>) {
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
