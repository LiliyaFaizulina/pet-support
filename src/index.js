import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { store } from 'redux/store';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './utils';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/pet-support/">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
          <GlobalStyle />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
