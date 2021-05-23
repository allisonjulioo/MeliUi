import React, {StrictMode, Suspense} from 'react';
import {render} from 'react-dom';
import 'configs/i18n';
import reportWebVitals from './reportWebVitals';
import {App} from 'App';
import {worker} from 'mocks/browser';

const {REACT_APP_ENABLE_MOCK} = process.env;

if (REACT_APP_ENABLE_MOCK === 'on') {
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
