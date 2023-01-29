import styled from 'styled-components';
import { HiPencil } from 'react-icons/hi';
import { HiCamera } from 'react-icons/hi2';
import { BsCheckLg } from 'react-icons/bs';

export const UserBlock = styled.div`
  display: flex;
  flex-direction: column;

  width: 280px;
  min-height: 537px;
  padding: 20px 12px 20px 16px;

  border-radius: ${p => p.theme.radii.mainBorderRadius};
  box-shadow: 7px 4px 14px ${p => p.theme.colors.shadowCard};
  background-color: ${p => p.theme.colors.secondaryBackground};
  @media ${p => p.theme.media.tablet} {
    position: relative;

    flex-direction: row-reverse;
    justify-content: space-between;
    width: 736px;
    min-height: 311px;
    padding: 24px 40px 24px 32px;

    border-radius: 0 ${p => p.theme.radii.mainBorderRadius}
      ${p => p.theme.radii.mainBorderRadius} 0;
  }
  @media ${p => p.theme.media.desktop} {
    flex-direction: column;
    justify-content: inherit;
    width: 411px;
    min-height: 580px;
    padding: 20px 16px 42px 16px;
  }
`;

export const BoxImg = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${p => p.theme.media.desktop} {
    margin-bottom: 36px;
  }
`;

export const ImageContainer = styled.div`
  & input {
    position: absolute;
    width: 0px;
    height: 0px;
    z-index: -1;
    opacity: 0;
  }
  & #image-label {
    @media ${p => p.theme.media.tablet} {
      margin-top: 0px;
    }
  }
`;

export const ImgUser = styled.img`
  width: 233px;
  height: 233px;

  border-radius: ${p => p.theme.radii.round};
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
  background-color: #e1e1e1;
`;
export const EditImgBtn = styled.button`
  display: inline-flex;
  align-items: center;
  margin-bottom: 32px;
  margin-left: auto;

  font-weight: ${p => p.theme.fontWeights.text};
  font-size: 12px;

  border: none;
  background-color: transparent;
  cursor: pointer;
  :hover svg,
  :focus svg {
    fill: ${p => p.theme.colors.hoverBtn};
  }
  @media ${p => p.theme.media.tablet} {
    position: absolute;
    bottom: 0;
    right: 0;

    margin: 0;
  }
`;

export const IconEditImgBtn = styled(HiCamera)`
  width: 20px;
  height: 20px;
  margin-right: 4px;
  margin-bottom: -5px;
  cursor: pointer;

  fill: ${p => p.theme.colors.accent};
`;

export const BoxInfo = styled.div`
  margin-bottom: 42px;
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 0;
    margin-right: 52px;
    margin-top: 16px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 46px;
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 8px;
    @media ${p => p.theme.media.desktop} {
      margin-bottom: 10px;
    }
  }
  @media ${p => p.theme.media.tablet} {
    width: 379px;
  }
`;

export const Title = styled.label`
  width: 64px;

  font-size: 12px;
  font-weight: ${p => p.theme.fontWeights.heading};
  @media ${p => p.theme.media.tablet} {
    width: 90px;
    font-size: 18px;
  }
`;
export const Text = styled.p`
  margin-left: 18px;

  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights.text};
  @media ${p => p.theme.media.tablet} {
    margin-left: 12px;
    font-size: 18px;
  }
`;
export const Block = styled.div`
  position: relative;
  display: flex;
  flex: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  column-gap: 5px;
  @media ${p => p.theme.media.tablet} {
    column-gap: 15px;
  }
`;
export const EditTextBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 20px;
  height: 20px;
  border-radius: ${p => p.theme.radii.round};
  border: none;
  background-color: ${p => p.theme.colors.mainBackground};
  color: ${p => p.theme.colors.accent};
  cursor: pointer;
  :hover,
  :focus {
    color: ${p => p.theme.colors.hoverBtn};
  }
  @media ${p => p.theme.media.tablet} {
    width: 32px;
    height: 32px;
  }
  :disabled {
    color: grey;
  }
`;

export const EditTextBtnIcon = styled(HiPencil)`
  width: 13px;
  height: 13px;

  fill: currentColor;
  @media ${p => p.theme.media.tablet} {
    width: 20px;
    height: 20px;
  }
`;

export const IconCheck = styled(BsCheckLg)`
  width: 10px;
  height: 8px;

  fill: currentColor;
  @media ${p => p.theme.media.tablet} {
    width: 17px;
    height: 13px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: auto;
  justify-content: space-between;
`;

export const UserDataInput = styled.input`
  padding: 4px 18px;

  width: 159px;
  height: 24px;

  background-color: ${p =>
    p.disabled
      ? p.theme.colors.secondaryBackground
      : p.theme.colors.mainBackground};
  border: ${p => (p.disabled ? 'none' : p.theme.borders.inputModal)};
  border-color: ${p => p.theme.colors.inputModal};
  color: ${p => p.theme.colors.heading};
  border-radius: 40px;

  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.text};

  :focus {
    outline-color: ${p => p.theme.colors.inputModal};
  }

  @media ${p => p.theme.media.tablet} {
    width: 240px;
    height: 32px;
    padding: 4px 12px;

    font-size: 18px;
  }
`;

export const ErrorText = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  &:not(:last-of-type) {
    margin-bottom: 14px;
  }
  font-size: 10px;
  color: red;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-style: italic;
  bottom: -12px;
  z-index: 2;
`;

export const Label = styled.label`
  cursor: pointer;
`;
