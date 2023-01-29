import ScrollToTop from 'react-scroll-to-top';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 26px 20px 100px 20px;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  font-family: ${p => p.theme.fonts.mainFamily};

  color: ${p => p.theme.colors.heading};

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    padding: 62px 32px 100px 32px;
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    padding: 39px 16px 200px 16px;
    width: 1280px;
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

export const Scroll = styled(ScrollToTop)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  padding: 8px;
`;
