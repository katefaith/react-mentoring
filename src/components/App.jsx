import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { ErrorBoundary } from './ErrorBoundary';
import { Results } from './Results';
import { Footer } from './Footer';

import './App.scss';

import { moviesData } from '../mockedData';

export const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => setMovies(moviesData), []);

  return (
    <>
      <Header selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
      <ErrorBoundary>
        <Results movies={movies} setSelectedMovie={setSelectedMovie} />
      </ErrorBoundary>
      <Footer />
    </>
  );
};
