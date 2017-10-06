import React, { Component } from 'react';

export class AddItem extends Component {
  constructor(props) {
    super(props);
  }

  handleFocus = () => ( this.props.onFocus() );

  handleChange = (e) => ( this.props.onInputChange(e.target.value) );

  handleClick = (e) => ( this.props.onItemAdd(e) );

  render() {
    return (
      <div className="add-item-field">
        <div className="input-container">
          <input className={!this.props.isValid ? "incorrect" : ''} type="text" value={this.props.inputValue}
                 placeholder="Add new place to visit"
                 onChange={this.handleChange}
                 onFocus={this.handleFocus} />
          <button onClick={this.handleClick}></button>
        </div>
      </div>
    )
  }
}