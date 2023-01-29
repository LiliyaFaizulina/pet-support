import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${p => p.theme.colors.secondaryBackground};
  border-radius: ${p => p.theme.radii.secondaryBorderRadius};
  padding: 60px 20px 40px;
  width: 280px;

  @media screen and (min-width: 768px) {
    padding: 32px 20px;
    width: 704px;
  }
`;

export const StyledWrapper = styled.div`
  flex-shrink: 0;
  flex-grow: 1;
`;

export const FlexContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
    flex-grow: 1;
    flex-shrink: 0;
  }
`;

export const BtnContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 12px;
    margin-right: 16px;
    align-items: end;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 34px;
  height: 34px;
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.mainBackground};
  backdrop-filter: blur(2px);
  color: ${p => p.theme.colors.black};

  svg {
    width: 19px;
    height: 19px;
    fill: currentColor;
  }
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
  transition: transform ${p => p.theme.transition},
    color transform ${p => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.05);
    color: ${p => p.theme.colors.accent};
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  border-radius: 0 0 40px 40px;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    width: 288px;
    height: 328px;
    margin-bottom: 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.p`
  position: absolute;
  top: 20px;
  left: 0;
  width: 158px;
  padding: 6px 20px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
  border-radius: 0 40px 40px 0;
  font-weight: 500;
  font-size: 12px;
  line-height: calc(16 / 12);
  letter-spacing: 0.04em;
  text-align: center;
`;

export const NoticeTitle = styled.h3`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: calc(33 / 24);
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 28px;
    line-height: calc(38 / 28);
    width: 320px;
  }
`;

export const NoticeInfoItem = styled.li`
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  font-weight: 600;
  font-size: 14px;
  line-height: calc(19 / 14);
  color: ${p => p.theme.colors.black};
  span {
    position: absolute;
    left: 118px;
    top: 0px;
    font-weight: 500;
    white-space: nowrap;
  }

  a {
    color: currentColor;
    text-decoration: none;
    position: absolute;
    left: 118px;
    top: 0px;
    font-weight: 500;
    white-space: nowrap;
    transition: color ${p => p.theme.transition};
    :hover,
    :focus {
      color: ${p => p.theme.colors.accent};
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(22 / 16);
  }
`;

export const Comment = styled.p`
  margin-top: 28px;
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(19 / 14);
  color: ${p => p.theme.colors.black};
  span {
    font-weight: 500;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const ContactLink = styled.a`
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.secondaryBackground};
  border-radius: ${p => p.theme.radii.mainBorderRadius};
  font-weight: 500;
  font-size: 16px;
  line-height: calc(22 / 16);
  letter-spacing: 0.04em;
  margin-bottom: 12px;
  transition: transform 0.5s;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
  }
  :hover:before {
    left: 100%;
    @media screen and (max-width: 767px) {
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
    @media screen and (max-width: 767px) {
      visibility: hidden;
    }
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    transition: all 650ms;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 160px;
  }
`;

const chooseColor = ({ isFavorite, theme }) =>
  isFavorite ? theme.colors.hoverBtn : theme.colors.accent;

export const ToggleFavoriteBtn = styled.button`
  cursor: pointer;
  background-color: ${p => p.theme.colors.secondaryBackground};
  border: 2px solid ${chooseColor};
  border-radius: ${p => p.theme.radii.mainBorderRadius};
  color: ${chooseColor};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: calc(22 / 16);
  letter-spacing: 0.04em;
  transition: transform 0.5s;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
  }
  :hover:before {
    left: 100%;
    @media screen and (max-width: 767px) {
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
    @media screen and (max-width: 767px) {
      visibility: hidden;
    }
    background: linear-gradient(
      120deg,
      transparent,
      rgba(245, 146, 86, 0.9),
      transparent
    );
    transition: all 650ms;
  }
  @media screen and (min-width: 768px) {
    width: 160px;
  }
`;
