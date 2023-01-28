import styled from 'styled-components';
import { Button } from 'components/ConfirmModal/ConfirmModal.styled';

export const Input = styled.input`
  width: 100%;
  font-size: 14px;
  line-height: 1.3;
  padding: 11px 0 12px 14px;
  background-color: #fdf7f2;
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
`;

export const Form = styled.form`
  display: flex;
  gap: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.secondaryBackground};
  border-radius: ${p => p.theme.radii.secondaryBorderRadius};
  width: calc(100% - 40px);
  padding: 40px 20px;

  position: absolute;
  top: 160px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 420px) {
    width: 380px;
  }

  @media screen and (min-width: 768px) {
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 32px 20px;
    width: 704px;
  }
  label {
    position: relative;
    width: 100%;
    @media screen and (min-width: 768px) {
      width: 448px;
      margin: 0 auto;
    }
  }
  p {
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.3;
    letter-spacing: 0.01em;
    color: ${p => p.theme.colors.black};
    @media screen and (min-width: 768px) {
      margin-bottom: 20px;
      font-size: 20px;
    }
    @media screen and (min-width: 768px) {
      width: 448px;
      margin: 0 auto;
    }
  }

  svg {
    fill: ${p => p.theme.colors.accent};
    font-size: 30px;
  }
`;

export const StyledButton = styled(Button)`
  @media screen and (max-width: 767px) {
    &:last-child {
      margin-top: 0;
    }
  }
  @media screen and (min-width: 768px) {
    width: 448px;
    height: 48px;
  }
`;
