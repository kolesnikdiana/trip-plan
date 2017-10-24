// @flow
import * as React from 'react';

import AddButton from '../styled-components/buttons/button-add';
import Search from '../styled-components/inputs/input-search';

import type { addCity as addCityType } from '../../../core/types';

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
      <Search.Container>

        <Search.Line
          placeholder="Add new place to visit"
          isIncorrect={!this.state.isValid}
          value={this.state.value}
          onChange={this.handleChange}
          onFocus={this.validate}
        />

        <AddButton
          onClick={this.handleClick}
        />

      </Search.Container>
    );
  }
}

export default AddItem;
