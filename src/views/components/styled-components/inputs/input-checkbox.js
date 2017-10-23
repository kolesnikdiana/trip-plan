import styled from 'styled-components';
import Input from './basic';

const Controller = Input.extend
  .attrs({ type: 'checkbox' })`
    display: none;
  `;

const Label = styled.label`
  padding: 0 5px 0 25px;
  position: relative;

  color: ${props => props.checked ? props.theme.checked.color : ''};

  &:hover {
    cursor: pointer;
  }

  &::before,
  &::after {
    content: '';
    display: inline-block;
    height: 10px;

    position: absolute;
    top: 50%;
    transform: translateY(-52%);

    border-radius: 10px;
    border: 1px solid;
  }

  &::before {
    width: ${props => props.theme.width};

    left: 0;

    background-color: #FFF;
    border-color: #888;
  }

  &::after {
    width: 10px;

    left: ${props => props.checked ? props.theme.leftIndent || 0 : 0};

    background-color: ${props => props.checked ? props.theme.checked.backgroundColor :
      props.theme.backgroundColor || ''};
    border-color: ${props => props.checked ? props.theme.checked.borderColor :
      props.theme.borderColor || 'transparent'};
  }
`;

// A default theme for checkbox-label that aren't wrapped in the ThemeProvider
Label.defaultProps = {
  theme: {
    width: '10px',
    checked: {
      backgroundColor: '#C67227',
      borderColor: '#C67227',
      color: '#666'
    }
  }
};

const Checkbox = {
  Controller,
  Label
};

export default Checkbox;
