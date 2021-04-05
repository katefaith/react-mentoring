import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import { Header } from './Header';
import { ErrorBoundary } from './ErrorBoundary';
import { Results } from './Results';
import { Footer } from './Footer';

import './App.scss';

export const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <Provider store={store}>
      <Header selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
      <ErrorBoundary>
        <Results setSelectedMovie={setSelectedMovie} />
      </ErrorBoundary>
      <Footer />
    </Provider>
  );
};
