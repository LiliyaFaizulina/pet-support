import styled from "styled-components";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

export const LogOut = styled.button`
  position: absolute;
  right: 12px;
  bottom: 20px;
  display: inline-flex;
  align-items: center;
  margin-left: auto;

  border: none;
  background-color: transparent;
  color: ${p => p.theme.colors.inputText};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  :hover svg,
  :focus svg {
    fill: ${p => p.theme.colors.hoverBtn};
  }

  @media ${p => p.theme.media.tablet} {
    left: 45%;
    bottom: 24px;
    width: 90px;
    height: 22px;
    margin: 0;
    padding: 0;
  }
  @media ${p => p.theme.media.desktop} {
    left: 75%;
  }
`;
export const LogOutIcon = styled(HiArrowRightOnRectangle)`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  color: ${p => p.theme.colors.accent};
`;