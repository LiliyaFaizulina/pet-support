import styled from 'styled-components';

export const Form = styled.form`
  position: relative;

  padding-top: 28px;
  text-align: center;

  outline: 0ch;
  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;

  padding: 8px 12px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;

  letter-spacing: 0.04em;

  color: ${p => p.theme.colors.searchText};

  border-radius: 20px;
  border: 0;

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  @media screen and (min-width: 768px) {
    width: 608px;
    height: 44px;

    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const SearchButton = styled.button`
  background-color: transparent;
  padding: 0;
  margin: 0;
  font-size: 15px;

  position: absolute;
  right: 15.5px;
  bottom: 10.25px;

  cursor: auto;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    right: calc(50% - 290.5px);
  }

  animation-name: sunrise;
  animation-duration: 0.15s;
  animation-timing-function: linear;
  animation-iteration-count: 1;

  @keyframes sunrise {
    0% {
      transform: translateY(12px);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  padding: 0;
  margin: 0;
  font-size: 15px;

  position: absolute;
  right: 15.5px;
  bottom: 9.25px;

  &:hover,
  &:focus {
    scale: 1.4;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    right: calc(50% - 290.5px);
  }

  transition-property: background-color, transform;
  transition-duration: 500ms;
  transition-timing-function: linear;
  transition-delay: 0ms;

  animation-name: sunrise;
  animation-duration: 0.15s;
  animation-timing-function: linear;
  animation-iteration-count: 1;

  @keyframes sunrise {
    0% {
      transform: translateY(12px);
    }

    100% {
      transform: translateY(0);
    }
  }
`;
