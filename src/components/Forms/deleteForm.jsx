/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import styles from './form.css';
import { deleteMovie } from '../../redux/crud/actions';

export const DeleteForm = ({ id }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteMovie(id));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className={styles.title}>Delete movie</h1>
      <p>Are you sure you want to delete this movie?</p>

      <div className={styles.buttons}>
        <button className={styles.buttonSubmit} type="submit">confirm</button>
      </div>
    </form>
  );
};

DeleteForm.propTypes = {
  id: PropTypes.string.isRequired,
};
