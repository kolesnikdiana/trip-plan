import styled from 'styled-components';
import * as Label from './label';
import defaultTheme from './themes';

const Diagram = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  
  margin: 0 auto;
  position: relative;
  
  background: ${props => props.themeFor.color};
  border: 4px solid #d0d0cd;
`;

const Portion = styled.div`
  width: 125px;
  height: 250px;

  overflow: hidden;
  position: absolute;
  
  &::before {
    content: '';
  
    width: 125px;
    height: 250px;
    border-radius: 125px 0 0 125px;
    transform-origin: right center;
    transform: rotate(${props => (180 - props.size)}deg);
    
    position: absolute;
    
    background: ${props => props.themeFor.color};
  }
`;

Diagram.defaultProps =
  Portion.defaultProps = defaultTheme;

Diagram.Portion = Portion;
Diagram.Label = Label.Wrapper;
Diagram.Line = Label.Line;

export default Diagram;