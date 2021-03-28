import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Filter } from '../Filter';
import { Sorting } from '../Sorting';
import { MovieCount } from '../MovieCount';
import { MovieList } from '../MovieList';
import { getMoviesCount, getMovies, getIsFetching } from '../../redux/movies/selectors';

import './results.scss';

export const Results = ({ setSelectedMovie }) => {
  const moviesCount = useSelector(getMoviesCount);
  const movies = useSelector(getMovies);
  const isLoading = useSelector(getIsFetching);

  return (
    <main className="results">
      <div className="wrapper">
        <div className="results__header">
          <Filter />
          <Sorting />
        </div>
        <MovieCount moviesCount={moviesCount} />
        {isLoading ? (
          <p className="results__warning">Loading...</p>
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
