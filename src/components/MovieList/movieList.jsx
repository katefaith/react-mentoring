import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

import styles from './movieList.css';

export const MovieList = ({ movies, setSelectedMovie }) => (
  <div className={styles.movieList}>
    {movies.map((movie) => (
      <MovieCard
        movie={movie}
        key={movie.id}
        setSelectedMovie={setSelectedMovie}
      />
    ))}
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
};
