import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${p => p.theme.colors.secondaryBackground};
  border-radius: ${p => p.theme.radii.secondaryBorderRadius};
  width: 280px;
  padding: 60px 20px 40px;
  position: relative;
  @media screen and (min-width: 768px) {
    padding: 32px 20px;
    width: 704px;
  }
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
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.mainBackground};
  backdrop-filter: blur(2px);
  svg {
    width: 19px;
    height: 19px;
  }
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
  transition: transform ${p => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 0 0 40px 40px;
  overflow: hidden;
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
  }
`;

export const NoticeInfoItem = styled.li`
  position: relative;
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
  width: 240px;
  height: 40px;
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.secondaryBackground};
  border-radius: ${p => p.theme.radii.mainBorderRadius};
  font-weight: 500;
  font-size: 16px;
  line-height: calc(22 / 16);
  letter-spacing: 0.04em;
  margin-bottom: 12px;
  transition: box-shadow ${p => p.theme.transition};
  &:hover,
  &:focus {
    box-shadow: 1px 1px 1px 1px ${p => p.theme.colors.hoverBtn};
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
  width: 240px;
  height: 40px;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: calc(22 / 16);
  letter-spacing: 0.04em;
  transition: box-shadow ${p => p.theme.transition};
  &:hover,
  &:focus {
    box-shadow: 1px 1px 1px 1px ${p => p.theme.colors.accent};
  }
  @media screen and (min-width: 768px) {
    width: 160px;
  }
`;
