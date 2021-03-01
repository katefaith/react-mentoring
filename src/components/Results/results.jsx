import React from 'react';
import { Filter } from '../Filter';
import { Sorting } from '../Sorting';
import { MovieCount } from '../MovieCount';
import { MovieList } from '../MovieList';

import './results.scss';

export const Results = () => (
  <main className="results">
    <div className="wrapper">
      <div className="results__header">
        <Filter />
        <Sorting />
      </div>
      <MovieCount />
      <MovieList />
    </div>
  </main>
);
