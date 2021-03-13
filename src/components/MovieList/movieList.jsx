import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

import './movieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movie-list">
    {movies.map((movie) => <MovieCard movie={movie} key={movie.imdbID} />)}
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
