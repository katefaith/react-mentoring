import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

import './css/base/normalize.css';
import './css/styles.css';

const app = (
  <App
    Router={BrowserRouter}
  />
);

hydrate(app, document.getElementById('app-root'));
