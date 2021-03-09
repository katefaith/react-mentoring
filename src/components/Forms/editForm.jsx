/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

import { filterItems } from '../../mockedData';

export const EditForm = ({ movie }) => (
  <form className="form">
    <h1 className="form__title">Edit movie</h1>

    <div className="form__field">
      <label className="form__label" htmlFor="id">Movie ID</label>
      <input className="form__input" type="text" id="id" placeholder="Movie ID" disabled defaultValue={movie.imdbID} />
    </div>

    <div className="form__field">
      <label className="form__label" htmlFor="title">Title</label>
      <input className="form__input" type="text" id="title" placeholder="Movie Title" defaultValue={movie.title} />
    </div>

    <div className="form__field">
      <label className="form__label" htmlFor="release-date">Release date</label>
      <input className="form__input" type="date" id="release-date" placeholder="Select Date" />
    </div>

    <div className="form__field">
      <label className="form__label" htmlFor="url">Movie Url</label>
      <input className="form__input" type="text" id="url" placeholder="Movie URL here" defaultValue={movie.poster} />
    </div>

    <div className="form__field">
      <label className="form__label" htmlFor="genre">Genre</label>
      <select className="form__select">
        {filterItems.map((item) => <option value={item} key={item}>{item}</option>)}
      </select>
    </div>

    <div className="form__field">
      <label className="form__label" htmlFor="overview">Overview</label>
      <input className="form__input" type="text" id="overview" placeholder="Overview here" defaultValue={movie.plot} />
    </div>

    <div className="form__field">
      <label className="form__label" htmlFor="runtime">Runtime</label>
      <input className="form__input" type="text" id="runtime" placeholder="Runtime here" defaultValue={movie.runtime} />
    </div>

    <div className="form__buttons">
      <button className="form__button  form__button--reset" type="reset">reset</button>
      <button className="form__button  form__button--submit" type="submit">save</button>
    </div>
  </form>
);

EditForm.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    plot: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
  }),
};

EditForm.defaultProps = {
  movie: {
    imdbID: 'Missing ID',
    title: 'Missing Title',
    poster: 'Missing Poster',
    genre: 'Missing Genre',
    plot: 'Missing Plot',
    runtime: 'Missing Runtime',
  },
};
