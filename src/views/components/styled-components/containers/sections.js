import styled from 'styled-components';

const Section = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  
  position: relative;
`;

export const SectionDivider = Section.extend`
  padding-top: 20px;
`;

export const InnerPage = Section.extend`
  padding: 20px 3% 0;
`;

export default Section;
