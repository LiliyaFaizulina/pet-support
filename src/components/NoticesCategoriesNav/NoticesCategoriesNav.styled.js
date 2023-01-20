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
    margin-top: 40px;
    margin-bottom: 60px;
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

  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.secondatyBtnText};
  }

  @media ${p => p.theme.media.tablet} {
    padding: 10px 28px;
    font-size: 20px;
  }
`;
