import React from 'react';
import PropTypes from 'prop-types';

import styles from './movieCount.css';

export const MovieCount = ({ moviesCount }) => (
  <p className={styles.movieCount}>
    <span>{moviesCount}</span>
    {' '}
    movies found
  </p>
);

MovieCount.propTypes = {
  moviesCount: PropTypes.number.isRequired,
};
