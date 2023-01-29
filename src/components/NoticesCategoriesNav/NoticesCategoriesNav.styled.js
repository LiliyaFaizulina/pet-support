import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
  margin-bottom: 30px;

  @media ${p => p.theme.media.tablet} {
    width: 75%;
    gap: 16px 12px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Item = styled.li`
  @media ${p => p.theme.media.desktop} {
    :nth-child(3) {
      order: -1;
    }
  }
`;

export const LinkNav = styled(NavLink)`
  display: block;
  padding: 8px 28px;

  background-color: ${p => p.theme.colors.secondaryBackground};
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: 40px;

  font-weight: 500;
  font-size: 14px;
  line-height: calc(19 / 14);
  letter-spacing: 0.04em;
  text-decoration: none;
  color: ${p => p.theme.colors.heading};

  transform: scale(1);
  transition: transform 0.5s;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  :hover:before {
    left: 100%;
    @media screen and (max-width: 767.98px) {
      visibility: visible;
    }
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
    @media screen and (max-width: 767.98px) {
      visibility: hidden;
    }
  }

  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.secondaryBackground};

    :before {
      background: linear-gradient(
        120deg,
        transparent,
        rgba(255, 255, 255, 0.6),
        transparent
      );

      @media screen and (max-width: 767.98px) {
        visibility: hidden;
      }
    }
  }

  @media ${p => p.theme.media.tablet} {
    padding: 10px 28px;
    font-size: 20px;
  }
`;
