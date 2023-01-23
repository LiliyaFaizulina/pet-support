import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  line-height: calc(33 / 24);
  text-align: center;
  color: ${p => p.theme.colors.heading};

  @media ${p => p.theme.media.tablet} {
    font-size: 48px;
  }
`;
