/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

export const DeleteForm = ({ id }) => {
  const deteleMovie = (e) => {
    e.preventDefault();
    alert(`Deleting movie with ID ${id}`);
  };

  return (
    <form className="form">
      <h1 className="form__title">Delete movie</h1>
      <p>Are you sure you want to delete this movie?</p>

      <div className="form__buttons">
        <button className="form__button  form__button--submit" type="submit" onClick={deteleMovie}>confirm</button>
      </div>
    </form>
  );
};

DeleteForm.propTypes = {
  id: PropTypes.string.isRequired,
};
