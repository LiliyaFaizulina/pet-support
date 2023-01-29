import styled from 'styled-components';

export const SponsorLink = styled.a`
  display: block;
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: ${p => p.theme.colors.accent};
  text-align: center;
  transition: color ${p => p.theme.transition},
    transform ${p => p.theme.transition};

  :hover,
  :focus {
    color: ${p => p.theme.colors.hoverBtn};
    transform: scale(1.05);
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 27px;
  }
`;

export const FriendCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Time = styled.button`
  font: inherit;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: inherit;
  &.active {
    color: ${p => p.theme.colors.accent};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 19px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Text = styled.p`
  display: flex;
  justify-content: space-between;
  font: inherit;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 19px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 15px;
    line-height: 21px;
  }
`;

export const TextWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 12px;
`;

export const ContactLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 19px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Img = styled.img`
  margin-right: 12px;
  max-width: 110px;
  @media screen and (min-width: 768px) {
    max-width: 120px;
    margin-right: 14px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 158px;
    margin-right: 16px;
  }
`;

export const SponsorItem = styled.li`
  padding: 12px;
  background-color: ${p => p.theme.colors.secondaryBackground};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    padding: 16px;
    border-radius: 40px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 395px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`;

export const TimeList = styled.ul`
  position: absolute;
  top: 25px;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-color: white;
  border: ${p => `2px solid ${p.theme.colors.accent}`};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 12px;
  margin-bottom: -4px;
`;

export const TimeItem = styled.li`
  margin-bottom: 4px;
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
`;
