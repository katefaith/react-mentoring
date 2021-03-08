import React from 'react';
import PropTypes from 'prop-types';

import './movieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img
      className="movie-card__image"
      src={movie.poster}
      alt={movie.title}
    />
    <div className="movie-card__info">
      <div className="movie-card__descr">
        <h2 className="movie-card__title">{movie.title}</h2>
        <p className="movie-card__genre">{movie.genre}</p>
      </div>
      <div className="movie-card__release-date">{movie.year}</div>
    </div>
  </div>
);

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }),
};

MovieCard.defaultProps = {
  movie: {
    title: 'Missing Title',
    poster: 'Missing Poster',
    genre: 'Missing Genre',
    year: 'Missing Year',
  },
};
