import React, {StrictMode, Suspense} from 'react';
import {render} from 'react-dom';
import 'configs/i18n.js';
import reportWebVitals from './reportWebVitals';
import {App} from 'App';

const {REACT_APP_ENABLE_MOCK} = process.env;

if (REACT_APP_ENABLE_MOCK === 'on') {
  const {worker} = require('./mocks/browser.ts');
  worker.start();
}

render(
  <StrictMode>
    <Suspense fallback={<></>}>
      <App />
    </Suspense>
  </StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
