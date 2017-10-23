import styled from 'styled-components';

const Panel = styled.div.attrs({
  background: props => props.header ? '#1E5799' : '#EEE',
  padding: props => props.header ? '20px 3%' : '20px 15%'
})`
  padding: ${props => props.padding};

  position: relative;

  background-color: ${props => props.background};
`;

export default Panel;
