import React from 'react';
import PropTypes from 'prop-types';

const AddItem = ({ onItemAdd, isValid, inputValue, onInputChange, onFocus }) => (
  <div className="add-item-field">

    <div className="input-container add-item-field__input-container">

      <input
        className={!isValid ? 'add-item-field__input add-item-field__input_incorrect'
          : 'add-item-field__input'}
        type="text"
        value={inputValue}
        placeholder="Add new place to visit"
        onChange={onInputChange}
        onFocus={onFocus}
      />

      <button onClick={onItemAdd} className="add-item-field__button" />

    </div>

  </div>
);

AddItem.propTypes = {
  onItemAdd: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
  isValid: PropTypes.bool
};

AddItem.defaultProps = {
  isValid: true,
  inputValue: ''
};

export default AddItem;
