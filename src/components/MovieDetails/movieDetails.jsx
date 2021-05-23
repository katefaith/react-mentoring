import React from 'react';
import PropTypes from 'prop-types';
import { getYear, printGenres } from '../../utils';

import styles from './movieDetails.css';

export const MovieDetails = ({ movie }) => (
  <div className={styles.details}>
    <div className={styles.image}>
      <img
        src={movie.poster_path}
        alt={movie.title}
      />
    </div>
    <div className={styles.content}>
      <div className={styles.row}>
        <h1>{movie.title}</h1>
        <div className={styles.rating}>{movie.vote_average}</div>
      </div>
      <p>{printGenres(movie.genres)}</p>
      <div className={styles.row}>
        <span className={styles.year}>{getYear(movie.release_date)}</span>
        <span className={styles.runtime}>
          {movie.runtime}
          {' '}
          min
        </span>
      </div>
      <p>{movie.overview}</p>
    </div>
  </div>
);

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    release_date: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }),
};

MovieDetails.defaultProps = {
  movie: {
    imdbID: 'Missing ID',
    title: 'Missing Title',
    vote_average: 'Missing Rating',
    poster_path: 'Missing Poster',
    genres: 'Missing Genre',
    release_date: 'Missing Year',
    runtime: 'Missing Runtime',
    overview: 'Missing Overview',
  },
};
