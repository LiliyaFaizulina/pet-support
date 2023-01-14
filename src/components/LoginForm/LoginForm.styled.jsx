import styled from 'styled-components';
import { Form, Field } from 'formik';
export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h2`
  margin-bottom: 40px;
`;
export const Form1 = styled(Form)`
  position: relative;
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    background: #000;
  }
`;

export const Input = styled(Field)`
  max-width: 264px;
  width: 100%;
  padding: 11px 0 12px 14px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  &:focus,
  &:hover {
    outline: none;
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
  cursor: pointer;
`;
