import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 97vh;

  padding: 26px 20px 100px 20px;
  margin: 0;
  font-family: ${p => p.theme.fonts.mainFamily};

  background: ${p => p.theme.colors.mainBackground};

  color: ${p => p.theme.colors.heading};

  @media screen and (min-width: 768px) {
    padding: 62px 32px 100px 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 39px 16px 200px 16px;
  }
`;

export const Title = styled.h2`
  text-align: center;

  font-size: 24px;
  line-height: 1.375;

  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;

  @media screen and (min-width: 768px) {
    padding-top: 68px;
    display: grid;
    justify-content: center;
    column-gap: 32px;
    row-gap: 60px;
    grid-template-columns: 336px 336px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 395px 395px 395px;
  }
`;
