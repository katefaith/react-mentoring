import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

import './movieList.scss';

export const MovieList = ({ movies, setSelectedMovie }) => (
  <div className="movie-list">
    {movies.map((movie) => (
      <MovieCard
        movie={movie}
        key={movie.imdbID}
        selectMovie={() => setSelectedMovie(movie)}
      />
    ))}
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
};
