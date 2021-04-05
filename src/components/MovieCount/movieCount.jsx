import React from 'react';
import PropTypes from 'prop-types';

import './movieCount.scss';

export const MovieCount = ({ moviesCount }) => (
  <p className="movie-count">
    <span>{moviesCount}</span>
    {' '}
    movies found
  </p>
);

MovieCount.propTypes = {
  moviesCount: PropTypes.number.isRequired,
};
