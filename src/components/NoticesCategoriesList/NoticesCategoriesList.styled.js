import styled from 'styled-components';


export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${p => p.theme.media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
