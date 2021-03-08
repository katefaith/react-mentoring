import React from 'react';
import { MovieCard } from '../MovieCard';

import './movieList.scss';

import { movies } from '../../mockedData';

export const MovieList = () => (
  <div className="movie-list">
    {movies.map((movie) => <MovieCard movie={movie} key={movie.imdbID} />)}
  </div>
);
