import styled from 'styled-components';

export const Modal = styled.div`
  z-index: 10;
  background-color: #ffffff;
  border-radius: ${p => p.theme.radii.secondaryBorderRadius};
  width: 280px;
  padding: 40px 20px;

  @media screen and (min-width: 768px) {
    border-radius: ${p => p.theme.radii.mainBorderRadius};
    padding: 40px 80px;
    width: 608px;
  }
`;

export const Form = styled.form`
  font-family: 'Manrope';
  font-weight: 500;
  color: #111111;
`;

export const FormWrapper = styled.div``;

export const SexLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  line-height: 1.3;
  cursor: pointer;
  transition: transform 250ms ease-in-out, color 100ms ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  color: ${p => p.checkedSex && '#F59256'};
`;

export const Label = styled.label`
  position: relative;
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  outline: none;
  width: 100%;
  height: 113px;
  padding: 11px 20px 12px 14px;
  background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  margin-top: 8px;
  margin-bottom: 20px;
  &[type='text'] {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.35;
    color: rgba(27, 27, 27, 0.6);
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.625;
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 12px;
    margin-bottom: 20px;
  }
  transition: transform 250ms ease-in-out;
  &:focus {
    transform: scale(1.03);
  }
`;

export const TextInput = styled.input`
  width: 240px;
  padding: 11px 20px 12px 14px;
  background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  outline: none;
  margin-top: 8px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    width: 100%;
    margin-top: 12px;
    margin-bottom: 28px;
  }

  &[type='text'],
  &[type='number'],
  &[type='date'] {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.35;
    color: rgba(27, 27, 27, 0.6);
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.625;
    }

    &[type='number']::-webkit-inner-spin-button,
    &[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  @media (max-width: 420px) {
    &[type='date'] {
      position: relative;
      height: 44px;

      &::after {
        content: ${p => (p.isEmpty ? `attr(placeholder)` : `""`)};
        color: rgba(27, 27, 27, 0.3);
        position: absolute;
        top: 12px;
        left: 14px;
        width: 150px;
      }
    }
  }

  transition: transform 250ms ease-in-out;
  &:focus {
    transform: scale(1.03);
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 12px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    column-gap: 12px;
    row-gap: 16px;
  }
`;

export const CategoryInput = styled.input``;
export const CategoryLabel = styled.label`
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  padding: 6px 25px;
  border: 2px solid #f59256;
  border-radius: 40px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  cursor: pointer;
  background-color: ${p => (p.checkedCategory ? '#F59256' : '#FFFFFF')};
  color: ${p => (p.checkedCategory ? '#FFFFFF' : '#111111')};
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
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

    background: ${p =>
      p.checkedCategory
        ? `linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent)`
        : `linear-gradient(
      120deg,
      transparent,
      rgba(245, 146, 86, 0.9),
      transparent
    )`};
    transition: all 650ms;
  }
`;

export const SexInput = styled.input``;

export const FileLabel = styled.label`
  width: 116px;
  margin-top: 8px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    margin-top: 12px;
    width: 140px;
  }
`;
export const FileInputWrapper = styled.div`
  position: relative;

  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  display: flex;
  flex-direction: column;
`;

export const FileInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const FileButton = styled.button`
  margin: 0;
  position: relative;
  width: 116px;
  height: 116px;
  background-color: #fdf7f2;
  border-radius: 20px;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 0;

  svg {
    width: 47px;
    height: 47px;
    fill: rgba(17, 17, 17, 0.6);
  }

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

export const FileImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;
  margin-top: 12px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 0;
  border: 2px solid #f59256;
  border-radius: 40px;
  background-color: ${p => (p.NotFillBtn ? '#FFFFFF' : '#F59256')};
  color: ${p => (p.NotFillBtn ? '#111111' : '#FFFFFF')};

  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 180px;
    height: 44px;
  }

  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
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

    background: ${p =>
      !p.NotFillBtn
        ? `linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent)`
        : `linear-gradient(
      120deg,
      transparent,
      rgba(245, 146, 86, 0.9),
      transparent
    )`};
    transition: all 650ms;
  }
  :disabled {
    opacity: 0.5;
    cursor: auto;
    transform: none;
    transition: none;
  }
  :disabled:before {
    transform: none;
    transition: none;
  }
`;

export const SexWrapper = styled.div`
  display: flex;
  gap: 80px;
  margin-top: 28px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: ${p => (p.Input ? '9px' : '-29px')};
  left: 14px;

  font-size: 12px;
  line-height: 1.2;
  font-weight: 400;
  color: #ff0000;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    bottom: ${p => (p.Input ? '9px' : '-32px')};
  }
`;

export const Required = styled.span`
  color: #f59256;
`;

export const FormLabel = styled.h2`
  font-size: 24px;
  line-height: 1.375;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 36px;
    line-height: 1.36;
  }
`;

export const FormText = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.35;
    margin-bottom: 28px;
  }
`;

export const FormCloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  width: 34px;
  height: 34px;
  border-radius: 50%;
  color: ${p => p.theme.colors.black};
  background-color: #fdf7f2;

  svg {
    fill: currentColor;
    width: 16px;
    height: 16px;
    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }

  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: #f59256;
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
