import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UserNavLink = styled(Link)`
  text-decoration: none;
  margin-left: auto;

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
`;

export const UserNavBtnIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 12px;
`;
