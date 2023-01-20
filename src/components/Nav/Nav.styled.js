import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NaviList = styled.ul`
  display: flex;
  gap: 80px;
`;

export const NaviLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: rgba(0, 0, 0, 1);

  &.active {
    color: rgba(245, 146, 86, 1);
    font-weight: 700;
  }
`;
