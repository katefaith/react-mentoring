import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { store } from '../redux/store';

import { SearchPage } from '../pages/SearchPage';
import { NotFoundPage } from '../pages/NotFoundPage';

const App = ({ Router, location, context }) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <Switch>
        <Route exact path="/">
          <SearchPage />
        </Route>
        <Route path="/film/:id">
          <SearchPage />
        </Route>
        <Route path="/search/:searchRequest">
          <SearchPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

App.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
};
App.defaultProps = {
  location: null,
  context: null,
};

export default hot(module)(App);
