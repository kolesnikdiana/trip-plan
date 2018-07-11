import styled from 'styled-components';

const Link = styled.p`
  position: relative;
  
  a {
    text-decoration: none;
    color: ${props => props.theme.color};
    
    &:focus,
    &:active {
      outline: none;
    }
    
    &:hover::after {
      content: '';
    
      width: 100%;
      height: ${props => props.theme.underlined ? '1px' : 0};
    
      position: absolute;
      bottom: -3px;
      left: 0;
    
      background-color: ${props => props.theme.color};
    }
  }
`;

export const LogoTheme = {
  color: '#FFF',
  underlined: false
};

Link.defaultProps = {
  theme: {
    color: '#154584',
    underlined: true
  }
};

export default Link;
