import styled from 'styled-components';
import Input from './basic';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1920px;

  position: relative;
`;

const Line = styled(Input)
 .attrs({ type: 'text' })`  
    padding: 0 40px 0 20px;
    display: block;
    height: 30px;
    width: calc(100% - 60px);
  
    border-width: 0;
    color: #666;
    outline: ${props => props.isIncorrect ? '#96261E auto 5px' : ''};
    outline-offset: ${props => props.isIncorrect ? '-2px' : ''};
  `;

const Search = {
  Container,
  Line
};

export default Search;
