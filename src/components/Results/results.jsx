import React from 'react';
import { Filter } from '../Filter';
import { Sorting } from '../Sorting';
import { MovieCount } from '../MovieCount';
import { MovieList } from '../MovieList';

import './results.scss';

import { moviesData } from '../../mockedData';

export class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.setState({ movies: moviesData });
  }

  render() {
    const { movies } = this.state;

    return (
      <main className="results">
        <div className="wrapper">
          <div className="results__header">
            <Filter />
            <Sorting />
          </div>
          <MovieCount />
          <MovieList movies={movies} />
        </div>
      </main>
    );
  }
}
