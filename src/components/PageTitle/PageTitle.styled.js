import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 22px;
  font-size: 24px;
  line-height: calc(33 / 24);
  text-align: center;
  color: ${p => p.theme.colors.heading};

  @media ${p => p.theme.media.tablet} {
    margin-top: 70px;
    font-size: 48px;
  }

  @media ${p => p.theme.media.desktop} {
    margin-top: 50px;
  }
`;
