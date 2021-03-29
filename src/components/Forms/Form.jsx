/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { filterItems } from '../../mockedData';
import { addMovie, editMovie } from '../../redux/crud/actions';

import './form.scss';

const initialMovie = {
  title: '',
  release_date: '',
  poster_path: '',
  genres: [''],
  overview: '',
  runtime: '',
};

export const Form = ({ title, btnText, currentMovie }) => {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState(currentMovie || initialMovie);

  const handleInputChange = (event) => {
    const name = event.target.id;
    const value = (event.target.id === 'runtime') ? +event.target.value : event.target.value;
    setMovie({ ...movie, [name]: value });
  };

  const handleSelectChange = (event) => {
    const name = event.target.id;
    const value = [event.target.value];
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentMovie) {
      dispatch(editMovie(movie));
    } else {
      dispatch(addMovie(movie));
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__title">{title}</h1>

      {movie && (
        <div className="form__field">
          <label className="form__label" htmlFor="id">Movie ID</label>
          <input className="form__input" type="text" id="id" placeholder="Movie ID" disabled value={movie.id} />
        </div>
      )}

      <div className="form__field">
        <label className="form__label" htmlFor="title">Title</label>
        <input className="form__input" type="text" id="title" onChange={handleInputChange} placeholder="Movie Title" value={movie.title} />
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="release-date">Release date</label>
        <input className="form__input" type="date" id="release_date" onChange={handleInputChange} placeholder="Select Date" value={movie.release_date} />
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="poster_path">Movie Url</label>
        <input className="form__input" type="text" id="poster_path" onChange={handleInputChange} placeholder="Movie URL here" value={movie.poster_path} />
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="genres">Genre</label>
        <select className="form__select" id="genres" onChange={handleSelectChange} value={movie.genres[0]}>
          <option>Select Genre</option>
          {filterItems.map((item) => <option value={item} key={item}>{item}</option>)}
        </select>
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="overview">Overview</label>
        <input className="form__input" type="text" id="overview" onChange={handleInputChange} placeholder="Overview here" value={movie.overview} />
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="runtime">Runtime</label>
        <input className="form__input" type="text" id="runtime" onChange={handleInputChange} placeholder="Runtime here" value={movie.runtime} />
      </div>

      <div className="form__buttons">
        <button className="form__button  form__button--reset" type="reset">reset</button>
        <button className="form__button  form__button--submit" type="submit">{btnText}</button>
      </div>
    </form>
  );
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
  currentMovie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    overview: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
  }),
  btnText: PropTypes.string.isRequired,
};

Form.defaultProps = {
  currentMovie: {
    id: 0,
    title: '',
    poster_path: '',
    genres: [''],
    overview: '',
    runtime: 0,
  },
};
