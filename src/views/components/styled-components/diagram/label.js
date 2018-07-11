import styled from 'styled-components';
import defaultTheme from './themes';

export const Wrapper = styled.div`
  margin-top: 30px;
  
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  span {
    font-weight: bold;
  }
`;

export const Line = styled.p`
  margin: 10px 0;
  padding-left: 10px;
  
  position: relative;
  
  &::before {
    content: '';
    display: inline-block;
    
    width: 15px;
    height: 15px;
    border-radius: 50%;
    
    position: relative;
    top: 1px;
    left: -10px;
    
    background: ${props => props.themeFor.color};
  }
`;

Line.defaultProps = defaultTheme;
