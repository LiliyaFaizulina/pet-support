import styled from 'styled-components';
import { Form, Field } from 'formik';
import MaskedInput from 'react-text-mask';
import mobileBackground from '../../images/mobileAuthBackground.png';
import tabletBackground from '../../images/tableAuthBackground.png';
import desktopBackground from '../../images/desktopAuthBackground.png';

export const FormContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 58px);
  background-image: url(${mobileBackground});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 768px) {
    background-image: url(${tabletBackground});
    padding-top: 184px;
    padding-bottom: 268px;
    min-height: calc(100vh - 64px);
  }
  @media (min-width: 1280px) {
    background-image: url(${desktopBackground});
    padding-top: 50px;
    padding-bottom: 147px;
  }
`;
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 40px;
  margin-top: 0;
  @media (min-width: 768px) {
    font-size: 36px;
    font-weight: 500;
  }
`;
export const Form1 = styled(Form)`
  position: relative;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 44px;
  padding-bottom: 40px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 608px;
    margin: 0 auto;
    padding: 60px 0 40px 0;
    background-color: #fff;
    border-radius: 40px;
    -webkit-box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);
    -moz-box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);
    box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);
  }
  @media (min-width: 1280px) {
    width: 618px;
    padding: 60px 0 60px 0;
  }
  > div {
    position: relative;
  }
  :last-child {
    font-size: 12px;
  }
`;

export const Input = styled(Field)`
  width: 280px;
  font-size: 14px;
  line-height: 1.3;
  padding: 11px 0 12px 14px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 16px;
  &:focus,
  &:hover {
    outline: none;
  }
  @media (min-width: 768px) {
    width: 448px;
    font-size: 18px;
    padding: 14px 0 13px 32px;
  }
  @media (min-width: 1280px) {
    width: 458px;
  }
`;
export const PhoneInput = styled(MaskedInput)`
  width: 280px;
  padding: 11px 0 12px 14px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 16px;
  &:focus,
  &:hover {
    outline: none;
  }
  @media (min-width: 768px) {
    width: 448px;
    padding: 14px 0 13px 32px;
    font-size: 18px;
  }
  @media (min-width: 1280px) {
    width: 458px;
  }
`;
export const Button = styled.button`
  width: 100%;
  padding: 11px 0 12px 14px;
  text-align: center;
  color: #fff;
  background: #f59256;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin: 24px 0 40px 0;
  transform: scale(1);
  transition: transform 0.5s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  :hover:before {
    left: 100%;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
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
  @media (min-width: 768px) {
    width: 458px;
    font-size: 20px;
  }
`;
export const BackButton = styled.button`
  width: 100%;
  padding: 11px 0 12px 14px;
  text-align: center;
  color: #000;
  background: #fff;
  border: 1px solid #f59256;
  border-radius: 40px;
  margin: -26px 0 40px 0;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.5s;
  overflow: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  :hover:before {
    left: 100%;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(245, 146, 86, 0.9),
      transparent
    );
    transition: all 650ms;
  }
  @media (min-width: 768px) {
    width: 458px;
    font-size: 20px;
  }
`;
export const ErrBox = styled.div`
  position: absolute;
  white-space: nowrap;
  bottom: 0px;
  left: 15px;
  color: red;
  font-size: 14px;
  font-style: italic;
  @media (min-width: 768px) {
    left: 33px;
  }
`;
