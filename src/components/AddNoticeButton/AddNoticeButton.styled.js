import styled from 'styled-components';

export const BoxForButton = styled.div`
  font-size: 20px;
  font-weight: ${p => p.theme.fontWeights.heading};
  line-height: ${p => p.theme.lineHeights.heading};
  @media ${p => p.theme.media.tablet} {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

export const NoticeButton = styled.button`
  @media screen and (max-width: 767px) {
    position: fixed;
    right: 20px;
    top: 400px;
    z-index: 2;
  }
  border: none;
  width: 80px;
  height: 80px;
  padding: 16px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.secondaryBackground};
  @media ${p => p.theme.media.tablet} {
    width: 44px;
    height: 44px;
    padding: 10px;
  }

  svg {
    fill: currentColor;
    width: 28px;
    height: 28px;
    @media ${p => p.theme.media.tablet} {
      width: 24px;
      height: 24px;
    }
  }
`;

export const FlexContainer = styled.div`
  @media ${p => p.theme.media.tablet} {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 60px;
  }
  @media ${p => p.theme.media.desktop} {
    align-items: center;
  }
`;
