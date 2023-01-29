import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UserNavBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: 0;
  }
`;

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
      rgba(255, 255, 255, 0.6),
      transparent
    );
    transition: all 650ms;
  }
`;

export const UserNavIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 12px;
`;
