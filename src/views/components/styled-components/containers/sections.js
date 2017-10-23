import styled from 'styled-components';

const Section = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

export const SectionDivider = Section.extend`
  padding-top: 20px;
`;

export default Section;
