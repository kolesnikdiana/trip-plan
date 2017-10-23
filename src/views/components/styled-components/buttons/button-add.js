import styled from 'styled-components';

const AddButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;

  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);

  background-color: #1E5799;
  border-radius: 50%;
  border-width: 0;
  
  &:hover {
    cursor: pointer;
  }
  
  &::after,
  &::before {
    content: '';
    display: block;
    height: 50%;
    width: 3px;
  
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  
    background-color: #FFF;
  }
  
  &::before {
    height: 3px;
    width: 50%;
  }
`;

export default AddButton;
