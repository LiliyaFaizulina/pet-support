import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: auto;
`;

export const AuthNavLink = styled(NavLink)`
  text-decoration: none;
  pointer-events: initial;
  height: 44px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  text-align: center;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 28px;
  gap: 10px;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  &.active {
    background: #f59256;
    border-radius: 40px;
    color: #ffffff;
  }
`;
