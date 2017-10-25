import styled from 'styled-components';

const Link = styled.a`
  position: relative;

  text-decoration: none;
  color: ${props => props.theme.color};
  
  &:focus,
  &:active {
    outline: none;
  }
  
  &:hover::after {
    content: '';
  
    width: 100%;
    height: 1px;
  
    position: absolute;
    bottom: -3px;
    left: 0;
  
    background-color: ${props => props.theme.color};
  }


`;

Link.defaultProps = {
  theme: {
    color: '#154584',
    underlined: true
  }
};

export default Link;
