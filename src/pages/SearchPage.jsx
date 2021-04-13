import React, { useState } from 'react';

import { Header } from '../components/Header';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { Results } from '../components/Results';
import { Footer } from '../components/Footer';

export const SearchPage = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>
      <Header selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
      <ErrorBoundary>
        <Results setSelectedMovie={setSelectedMovie} />
      </ErrorBoundary>
      <Footer />
    </>
  );
};
