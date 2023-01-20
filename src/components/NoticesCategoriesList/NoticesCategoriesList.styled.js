import styled from 'styled-components';

export const ErrorText = styled.h2`
  text-align: center;
  font-size: 28px;
  line-height: calc(38 / 28);
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.hoverBtn};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${p => p.theme.media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
