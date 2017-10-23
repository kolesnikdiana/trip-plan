import styled from 'styled-components';
import Checkbox from './input-checkbox';

const Trigger = styled.div`
  display: inline-block;
  margin-right: 30px;
`;

Trigger.Label = Checkbox.Label.extend`
  color: #666;
`;

Trigger.Controller = Checkbox.Controller;

// Define what props.theme will look like
export const triggerTheme = {
  width: '20px',
  leftIndent: '10px',
  backgroundColor: '#96261E',
  borderColor: '#96261E',
  checked: {
    backgroundColor: '#3C891B',
    borderColor: '#3C891B'
  }
};

export default Trigger;
