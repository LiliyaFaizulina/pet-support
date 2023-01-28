import styled from 'styled-components';

export const Form = styled.form`
  position: relative;

  margin-top: 28px;
  text-align: center;

  outline: 0ch;

  @media ${p => p.theme.media.tablet} {
    margin-top: 40px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 9px 44px 9px 12px;

  font-weight: 500;
  font-size: 16px;
  line-height: calc(22 / 16);

  letter-spacing: 0.04em;

  color: ${p => p.theme.colors.primaryText};

  border-radius: 20px;
  border: 2px solid transparent;
  outline: none;

  box-shadow: 7px 4px 14px ${p => p.theme.colors.shadowCard};

  &::placeholder {
    color: ${p => p.theme.colors.searchText};
  }

  &:focus {
    border: 2px solid ${p => p.theme.colors.accent};
  }
  @media ${p => p.theme.media.tablet} {
    width: 608px;
    padding: 8px 56px 9px 20px;

    font-size: 20px;
    line-height: calc(27 / 20);
  }
`;

export const SearchButton = styled.div`
  position: absolute;
  right: 12px;
  bottom: 10px;
  display: flex;

  background-color: transparent;
  padding: 0;
  margin: 0;

  cursor: text;
  pointer-events: none;

  svg {
    width: 24px;
    height: 24px;
    color: ${p => p.theme.colors.primaryText};

    @media ${p => p.theme.media.tablet} {
      width: 24px;
      height: 24px;
    }
  }

  @media ${p => p.theme.media.tablet} {
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

export const RemoveButton = styled(SearchButton)`
  transition-property: background-color, transform;
  transition-duration: 500ms;
  transition-timing-function: linear;
  transition-delay: 0ms;

  cursor: pointer;
  pointer-events: auto;
  &:hover,
  &:focus {
    scale: 1.2;
  }
`;
