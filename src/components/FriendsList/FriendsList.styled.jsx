import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  margin-top: 40px;
  gap: 12px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 45px;
    gap: 32px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 60px;
  }
`;
