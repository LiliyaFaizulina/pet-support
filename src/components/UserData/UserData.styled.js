import styled from "styled-components";

export const BoxTitleUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  margin-left: 32px;
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 40px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-left: 16px;
    margin-bottom: 24px;
  }
`;

export const TitleUser = styled.h2`
  color: ${p => p.theme.colors.primaryText};
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: 20px;
  letter-spacing: 0.04em;
  @media ${p => p.theme.media.tablet} {
    font-size: 28px;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 28px;
  }
`;

export const BoxBtnTablet = styled.div`
  display: none;
  @media ${p => p.theme.media.tablet} {
    display: inline-flex;
    align-items: center;
  }
  @media ${p => p.theme.media.desktop} {
    display: none;
  }
`;

export const TitleBtn = styled.p`
  margin-right: 15px;
  font-weight: 500;
  font-size: 20px;
`;