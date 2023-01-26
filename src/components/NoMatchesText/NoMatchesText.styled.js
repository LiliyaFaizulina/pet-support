import styled from 'styled-components';

export const ErrorText = styled.h2`
  position: relative;
  padding: 120px 0 70px 20px;

  text-align: center;
  font-size: 18px;
  line-height: calc(38 / 28);
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.heading};

  svg {
    position: absolute;
    top: 120px;
    left: 40px;
    width: 24px;
    height: 24px;
    color: ${p => p.theme.colors.hoverBtn};
  }

  @media ${p => p.theme.media.tablet} {
    font-size: 28px;

    svg {
      left: 190px;
      width: 38px;
      height: 38px;
    }
  }

  @media ${p => p.theme.media.desktop} {
    svg {
      left: 460px;
    }
  }
`;
