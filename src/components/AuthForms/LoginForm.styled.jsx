import styled from 'styled-components';
import { Form, Field } from 'formik';
import mobileBackground from '../../images/mobileAuthBackground.png';
import tabletBackground from '../../images/tableAuthBackground.png';
import desktopBackground from '../../images/desktopAuthBackground.png';

export const FormContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url(${mobileBackground});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 768px) {
    background-image: url(${tabletBackground});
  }
  @media (min-width: 1280px) {
    background-image: url(${desktopBackground});
  }
`;
export const Title = styled.h2`
  margin-bottom: 40px;
  margin-top: 0;
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
    margin-top: 169px;
    padding: 60px 0 40px 0;
    background-color: #fff;
    border-radius: 40px;
    -webkit-box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);
    -moz-box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);
    box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);
  }
  @media (min-width: 1280px) {
    width: 618px;
    margin-top: 46px;
    padding: 60px 0 60px 0;
  }
  > div {
    position: relative;
  }
`;

export const Input = styled(Field)`
  width: 264px;
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
    width: 414px;
    padding: 14px 0 13px 32px;
    font-size: 18px;
  }
  @media (min-width: 1280px) {
    width: 424px;
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
  cursor: pointer;
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
  @media (min-width: 768px) {
    width: 458px;
    font-size: 20px;
  }
`;
export const ErrBox = styled.div`
  position: absolute;
  white-space: nowrap;
  top: -18px;
  left: -55px;
  color: red;
`;
