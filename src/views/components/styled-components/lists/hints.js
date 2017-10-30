import styled from 'styled-components';
import StyledList from './default-list';
import Link from '../link';

const HintList = StyledList.extend`
  box-sizing: border-box;
  max-width: 94%;
  padding: 10px 20px 20px;

  position: absolute;
  z-index: 9;
  
  word-wrap: break-word;
  background: #FFF;
  box-shadow: 0 3px 5px 0 lightblue;
  
  li {
    margin-top: 5px;
    padding-bottom: 5px;
  }
`;

const Item = Link.extend`
  a {
    color: ${props => props.checked ? '#666' : '#3c3c3c'};
    text-decoration: ${props => props.checked ? 'line-through' : ''};
  }
`;

export const hintLinkTheme = {
  underlined: false
};

HintList.Link = Item;

export default HintList;
