import styled from "styled-components";
import { ReactComponent as IconMenu } from "../../images/cross.svg";

export const MyBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.colors.backdrop};
  backdrop-filter: blur(10px);

  z-index: 20;
  overflow-y: auto;
`;

export const ModalWindow = styled.div`
  position: relative;
  margin-top: ${props => (props.bigHeight ? "320px" : "40px")};
  margin-bottom: ${props => (props.bigHeight ? "20px" : "0px")};

  width: 280px;

  background-color: white;
  padding: 40px 20px 40px;

  border-radius: 20px;
  z-index: 20;

  background-color: ${p => p.theme.colors.white};

  @media ${p => p.theme.media.tablet} {
    padding: 32px 20px;

    width: ${props => (props?.tabletNoStandartWidth ? "704px" : "608px")};
  }
`;

export const Exit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 34px;
  height: 34px;

  border-radius: 50%;
  border: none;
  cursor: pointer;

  z-index: 10;
  background-color: ${p => p.theme.colors.background};

  @media ${p => p.theme.media.tablet} {
    width: 44px;
    height: 44px;
  }
  &:hover {
    border: 1px solid;
    border-color: ${p => p.theme.colors.accent};
  }
`;

export const ExitIcon = styled(IconMenu)`
  width: 16px;
  height: 16px;
  fill: ${p => p.theme.colors.black};

  @media ${p => p.theme.media.tablet} {
    width: 20px;
    height: 20px;
  }
`;