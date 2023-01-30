import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { store } from 'redux/store';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './utils';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
          <GlobalStyle />
          <ToastContainer />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
