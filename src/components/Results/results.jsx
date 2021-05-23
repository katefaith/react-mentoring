import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Filter } from '../Filter';
import { Sorting } from '../Sorting';
import { MovieCount } from '../MovieCount';
import { MovieList } from '../MovieList';
import { getMoviesCount, getMovies, getIsFetching } from '../../redux/movies/selectors';

import styles from './results.css';

export const Results = ({ setSelectedMovie }) => {
  const moviesCount = useSelector(getMoviesCount);
  const movies = useSelector(getMovies);
  const isLoading = useSelector(getIsFetching);

  return (
    <main className={styles.results}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Filter />
          <Sorting />
        </div>
        {moviesCount > 0 ? (
          <MovieCount moviesCount={moviesCount} />
        ) : (
          <p className={styles.warning}>No movies found</p>
        )}
        {isLoading ? (
          <p className={styles.warning}>Loading...</p>
        ) : (
          <MovieList movies={movies} setSelectedMovie={setSelectedMovie} />
        )}
      </div>
    </main>
  );
};

Results.propTypes = {
  setSelectedMovie: PropTypes.func.isRequired,
};
