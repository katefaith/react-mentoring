import React from 'react';
import { Header } from './Header';
import { ErrorBoundary } from './ErrorBoundary';
import { Results } from './Results';
import { Footer } from './Footer';

import './App.scss';

export const App = () => (
  <>
    <Header />
    <ErrorBoundary>
      <Results />
    </ErrorBoundary>
    <Footer />
  </>
);
