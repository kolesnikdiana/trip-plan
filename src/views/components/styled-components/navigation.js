import styled from 'styled-components';

const Navigation = styled.ul`
  display: inline-block;
  margin-bottom: 20px;
  
  li {
    display: inline-block;
    margin: 0 10px;
    padding: 0 10px;
  }
`;

export const NavigationLinkTheme = {
  color: '#FFF',
  underlined: true
};

export default Navigation;
