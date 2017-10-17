import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './add-item.css';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isValid: true
    };

    this.validate = this.validate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  validate() {
    this.setState({ isValid: true });
  }

  handleChange(e) {
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

  render() {
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

          <button onClick={this.handleClick} className="add-item-field__button" />

        </div>

      </div>
    );
  }
}

AddItem.propTypes = { onItemAdd: PropTypes.func.isRequired };

export default AddItem;
