import React from 'react';
import PropTypes from 'prop-types';

import './movieDetails.scss';

export const MovieDetails = ({ movie }) => {
  const a = 6;

  return (
    <div className="movie-details">
      <div className="movie-details__image">
        <img
          src={movie.poster}
          alt={movie.title}
        />
      </div>
      <div className="movie-details__content">
        <div className="movie-details__row">
          <h1 className="movie-details__title">{movie.title}</h1>
          <div className="movie-details__rating">{movie.rating}</div>
        </div>
        <p className="movie-details__director">{movie.director}</p>
        <div className="movie-details__row">
          <span className="movie-details__year">{movie.year}</span>
          <span className="movie-details__runtime">{movie.runtime}</span>
        </div>
        <p className="movie-details__plot">{movie.plot}</p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
    plot: PropTypes.string.isRequired,
  }),
};

MovieDetails.defaultProps = {
  movie: {
    imdbID: 'Missing ID',
    title: 'Missing Title',
    rating: 'Missing Rating',
    poster: 'Missing Poster',
    genre: 'Missing Genre',
    year: 'Missing Year',
    director: 'Missing Director',
    runtime: 'Missing Runtime',
    plot: 'Missing Plot',
  },
};
