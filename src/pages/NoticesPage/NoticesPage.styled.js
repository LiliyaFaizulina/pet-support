import styled from 'styled-components';
import { Container } from 'utils/GlobalStyle';

export const CustomizedContainer = styled(Container)`
  padding-bottom: 100px;
  padding-top: 42px;

  @media ${p => p.theme.media.tablet} {
    padding-top: 88px;
  }

  @media ${p => p.theme.media.desktop} {
    padding-top: 59px;
    padding-bottom: 200px;
  }
`;
