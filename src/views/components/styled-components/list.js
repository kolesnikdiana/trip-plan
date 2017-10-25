import styled from 'styled-components';

const StyledList = styled.ul`
  padding: 0 15%;
  
  li {
    margin-top: 20px;
    padding-bottom: 20px;
  
    position: relative;
    
    &::after {
      content: '';
    
      display: block;
      width: 100%;
      height: 1px;
    
      position: absolute;
      bottom: 0;
    
      background-color: #EEE;
    }
  }
`;

export default StyledList;
