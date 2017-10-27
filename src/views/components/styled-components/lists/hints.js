import StyledList from './default-list';

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

export default HintList;
