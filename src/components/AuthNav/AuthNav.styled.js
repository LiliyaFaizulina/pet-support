import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    gap: 20px;
    margin-left: auto;
    margin-right: 0;
  }
`;

export const AuthNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 28px;
  gap: 10px;
  align-items: center;
  pointer-events: initial;
  height: 44px;
  background: ${p => p.theme.colors.secondaryBackground};
  color: ${p => p.theme.colors.heading};

  border: 2px solid #f59256;
  border-radius: 40px;

  font-family: ${p => p.theme.fonts.mainFamily};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.04em;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.35;
  }

  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  :hover:before {
    left: 100%;
  }

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(245, 146, 86, 0.9),
      transparent
    );
    transition: all 650ms;
  }

  &.active {
    background: ${p => p.theme.colors.accent};
    border-radius: 40px;
    color: ${p => p.theme.colors.secondaryBackground};

    :hover:before {
      left: 100%;
    }

    :before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(255, 255, 255, 0.6),
        transparent
      );
      transition: all 650ms;
    }
  }
`;
