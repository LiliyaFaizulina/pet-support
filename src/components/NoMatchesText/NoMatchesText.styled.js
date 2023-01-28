import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  padding: 70px 0;

  svg {
    width: 24px;
    height: 24px;
    color: ${p => p.theme.colors.hoverBtn};
  }

  @media ${p => p.theme.media.tablet} {
    gap: 10px;
    padding: 120px 0;

    svg {
      width: 38px;
      height: 38px;
    }
  }
`;

export const ErrorText = styled.h2`
  font-size: 18px;
  line-height: calc(38 / 28);
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.heading};

  @media ${p => p.theme.media.tablet} {
    font-size: 28px;
  }
`;
