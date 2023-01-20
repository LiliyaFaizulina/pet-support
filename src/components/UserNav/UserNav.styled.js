import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UserNavLink = styled(Link)`
  display: flex;
  text-decoration: none;
  pointer-events: initial;
  width: 164px;
  height: 44px;
  background: #f59256;
  border-radius: 40px;
  font-family: ${p => p.theme.fonts.mainFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  text-align: center;
  justify-content: center;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: ${p => p.theme.colors.secondaryBackground};

  @media (min-width: 1280px) {
    margin-left: auto;
  }
`;

export const UserNavIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 12px;
`;
