import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
::after,
::before {
  box-sizing: border-box;
}

html {
  -moz-tab-size: 4;
  tab-size: 4;
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}


body {
    margin: 0;
  font-family: 'Manrope', 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    background-color: ${p => p.theme.colors.mainBackground};
    &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 1px;
    background-color: ${p => p.theme.colors.mainBackground};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.accent};
    border-radius: 1px;
  }
}

.Toastify__toast-theme--light.Toastify__toast--info {
  color: ${p => p.theme.colors.accent};
  svg{
    fill: currentColor;
  }
}
.Toastify__progress-bar-theme--light.Toastify__progress-bar--info{
  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.accent};
}

ul, ol{
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

h1, h2, h3, h4, h5, p{
  margin-top: 0;
  margin-bottom: 0;
}

table {
  text-indent: 0;
  border-color: inherit;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button{
  cursor: pointer;
  border: none;
}
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 18px;
    padding-right: 18px;
    width: 1280px;
  }
`;

export const Section = styled.section`
  min-height: 97vh;
  padding-top: 42px;
  padding-bottom: 100px;

  color: ${p => p.theme.colors.heading};

  @media screen and (min-width: 768px) {
    padding-top: 88px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 60px;
  }
`;
