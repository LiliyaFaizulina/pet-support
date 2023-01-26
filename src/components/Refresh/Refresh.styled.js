import styled from "styled-components";
import { HiPencil } from 'react-icons/hi';

export const RefreshBtn = styled.button`
  position: absolute;
  left: 12px;
  bottom: 20px;
  display: inline-flex;
  align-items: center;
  margin-left: auto;
  /* margin-bottom: 8px; */

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
    left: 50%;
    bottom: 24px;
    width: 90px;
    height: 22px;
    margin: 0;
    padding: 0;
  }
  @media ${p => p.theme.media.desktop} {
    left: 70%;
  }
`;
export const RefreshIcon = styled(HiPencil)`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  color: ${p => p.theme.colors.accent};
`;