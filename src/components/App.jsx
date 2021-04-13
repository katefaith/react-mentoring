import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { store } from '../redux/store';

import './App.scss';
import { SearchPage } from '../pages/SearchPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <SearchPage />
        </Route>
        <Route path="/film/:id">
          <SearchPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  </Provider>
);
