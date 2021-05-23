import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

import './css/base/normalize.css';
import './css/styles.css';

import configureStore from './redux/store';

const store = configureStore(window.PRELOADED_STATE);

const app = (
  <App
    Router={BrowserRouter}
    store={store}
  />
);

hydrate(app, document.getElementById('app-root'));
