import React from 'react';
import PropTypes from 'prop-types';
import { Filter } from '../Filter';
import { Sorting } from '../Sorting';
import { MovieCount } from '../MovieCount';
import { MovieList } from '../MovieList';

import './results.scss';

export const Results = ({ movies, setSelectedMovie }) => (
  <main className="results">
    <div className="wrapper">
      <div className="results__header">
        <Filter />
        <Sorting />
      </div>
      <MovieCount />
      <MovieList movies={movies} setSelectedMovie={setSelectedMovie} />
    </div>
  </main>
);

Results.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
};
