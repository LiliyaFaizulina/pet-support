import styled from "styled-components";
import { StyledButton } from "../Button/Button.styled";
import { ReactComponent as ImageCross } from "../../img/image_cross.svg";

export const Form = styled.form`
  @media ${p => p.theme.media.tablet} {
    padding: 0px 60px;
  }
  @media ${p => p.theme.media.tablet} {
    padding: 0px 60px;
  }
`;
export const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  line-height: 1.37;

  color: ${p => p.theme.colors.primaryText};
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 40px;
    font-size: 36px;
  }
`;
export const SubTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: ${p => p.theme.fontWeights.heading};
  line-height: 1.37;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.black};
  @media ${p => p.theme.media.tablet} {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const Label = styled.label`
  display: block;
  :not(:first-child) {
    margin-top: ${p => (p.textarea ? "20px" : "16px")};
  }
  margin-right: ${p => (p.textarea ? "auto" : "0px")};
  margin-bottom: 8px;
  font-size: 18px;
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.primaryText};

  @media ${p => p.theme.media.tablet} {
    font-size: 24px;
    line-height: 1.08;
    margin-bottom: 12px;
    :not(:first-child) {
      margin-top: ${p => (p.textarea ? "40px" : "28px")};
    }
    margin-left: ${p => (p.textarea ? "27px" : "0px")};
  }
`;

export const Input = styled.input`
  width: 100%;
  :not(:last-child) {
    margin-bottom: 2px;
  }
  padding: 11px 14px;
  background: ${p => p.theme.colors.background};
  border: 1px solid ${p => p.theme.colors.inputModal};
  border-radius: 40px;
  @media ${p => p.theme.media.tablet} {
    padding: 11px 16px;
    height: 44px;
  }
  :focus {
    outline-color: ${p => p.theme.colors.inputModal};
  }
`;

export const ErrorText = styled.p`
  margin-left: 10px;
  &:not(:last-of-type) {
    margin-bottom: 14px;
  }
  font-size: 10px;
  color: red;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-style: italic;

  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes.xs};
  }
`;

export const BtnBox = styled.div`
  margin-top: 40px;
  @media ${p => p.theme.media.tablet} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }
`;

export const BtnCancel = styled(StyledButton)`
  @media ${p => p.theme.media.mobileM} {
    width: 100%;
    display: block;
  }
  @media ${p => p.theme.media.tablet} {
    margin-right: 20px;
    width: 180px;
    height: 44px;
  }
`;
export const BtnNext = styled(StyledButton)`
  @media ${p => p.theme.media.mobileM} {
    width: 100%;
    margin-bottom: 12px;
    display: block;
  }
  @media ${p => p.theme.media.tablet} {
    width: 180px;
    height: 44px;
  }
`;
export const BtnBack = styled(StyledButton)`
  @media ${p => p.theme.media.mobileM} {
    display: block;
    width: 100%;
  }
  @media ${p => p.theme.media.tablet} {
    margin-right: 20px;
    width: 180px;
    height: 44px;
  }
`;

export const BtnDone = styled(StyledButton)`
  @media ${p => p.theme.media.mobileM} {
    margin-bottom: 12px;
    width: 100%;

    display: block;
  }
  @media ${p => p.theme.media.tablet} {
    width: 180px;
    height: 44px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Textarea = styled.textarea`
  width: 100%;

  padding: 12px 14px;
  background: ${p => p.theme.colors.background};
  border: 1px solid ${p => p.theme.colors.inputModal};
  border-radius: 20px;
  @media ${p => p.theme.media.mobileM} {
    width: 240px;
    height: 100px;
  }

  @media ${p => p.theme.media.tablet} {
    width: 394px;
    height: 116px;
    display: flex;
    margin-left: 27px;
  }
`;
export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 208px;
  height: 208px;
  background-color: ${p => p.theme.colors.background};
  border-radius: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid ${p => p.theme.colors.inputModal};
  @media ${p => p.theme.media.tablet} {
    width: 182px;
    height: 182px;
  }
`;

export const InputsNames = styled.p`
  margin-bottom: 8px;
  font-size: ${p => p.theme.fontSizes.n};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.heading};
  &.icon_name {
    margin: 0px;
  }
  &.icon_header {
    margin-bottom: 18px;
    @media ${p => p.theme.media.tablet} {
      margin-bottom: 31px;
    }
  }
  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes.ml};
    margin-bottom: 12px;
  }
  & span {
    color: ${p => p.theme.colors.accent};
    @media ${p => p.theme.media.tablet} {
      font-size: ${p => p.theme.fontSizes.ml};
    }
  }
`;

export const MyImageCross = styled(ImageCross)``;

export const ImageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;

  & input {
    position: absolute;
    width: 0px;
    height: 0px;
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
`;

export const CommentLabel = styled(Label)`
  margin-top: 20px;
`;