import styled from 'styled-components';

const Link = styled.a`
  position: relative;

  text-decoration: none;
  color: #154584;
  
  &:focus,
  &:active {
    outline: none;
  }

  &::after {
    content: '';
  
    width: 100%;
    height: 1px;
  
    position: absolute;
    bottom: -3px;
    left: 0;
  
    background-color: #154584;
  }
`;

export default Link;
