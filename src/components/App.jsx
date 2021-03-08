import React, { useState } from 'react';
import { Header } from './Header';
import { ErrorBoundary } from './ErrorBoundary';
import { Results } from './Results';
import { Footer } from './Footer';

import './App.scss';

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <ErrorBoundary>
        <Results />
      </ErrorBoundary>
      <Footer />
    </>
  );
};
