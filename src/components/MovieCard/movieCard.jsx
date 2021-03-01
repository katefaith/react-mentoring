import React from 'react';
import PropTypes from 'prop-types';

import './movieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img
      className="movie-card__image"
      src={movie.Poster}
      alt={movie.Title}
    />
    <div className="movie-card__info">
      <div className="movie-card__descr">
        <h2 className="movie-card__title">{movie.Title}</h2>
        <p className="movie-card__genre">Comedy</p>
      </div>
      <div className="movie-card__release-date">{movie.Year}</div>
    </div>
  </div>
);

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
  }),
};

MovieCard.defaultProps = {
  movie: {
    Title: 'Missing Title',
    Poster: 'Missing Poster',
    Year: 'Missing Year',
  },
};
