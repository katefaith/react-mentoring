import React from 'react';
import PropTypes from 'prop-types';
import { getYear, printGenres } from '../../utils';

import './movieDetails.scss';

export const MovieDetails = ({ movie }) => (
  <div className="movie-details">
    <div className="movie-details__image">
      <img
        src={movie.poster_path}
        alt={movie.title}
      />
    </div>
    <div className="movie-details__content">
      <div className="movie-details__row">
        <h1 className="movie-details__title">{movie.title}</h1>
        <div className="movie-details__rating">{movie.vote_average}</div>
      </div>
      <p className="movie-details__genres">{printGenres(movie.genres)}</p>
      <div className="movie-details__row">
        <span className="movie-details__year">{getYear(movie.release_date)}</span>
        <span className="movie-details__runtime">
          {movie.runtime}
          {' '}
          min
        </span>
      </div>
      <p className="movie-details__plot">{movie.overview}</p>
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
