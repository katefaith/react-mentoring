/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import './form.scss';
import { deleteMovie } from '../../redux/crud/actions';

export const DeleteForm = ({ id }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteMovie(id));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__title">Delete movie</h1>
      <p>Are you sure you want to delete this movie?</p>

      <div className="form__buttons">
        <button className="form__button  form__button--submit" type="submit">confirm</button>
      </div>
    </form>
  );
};

DeleteForm.propTypes = {
  id: PropTypes.string.isRequired,
};
