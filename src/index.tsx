import React, {StrictMode} from 'react';
import {render} from 'react-dom';
import {createGlobalStyle} from 'styled-components';

import 'configs/i18n.js';

import {App} from './App';
import reportWebVitals from './reportWebVitals';

const {REACT_APP_ENABLE_MOCK} = process.env;

if (REACT_APP_ENABLE_MOCK === 'on') {
  const {worker} = require('./mocks/browser.ts');
  worker.start();
}

const GlobalStyle = createGlobalStyle`
  body {
    background: #eee;
  }
`;

render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
