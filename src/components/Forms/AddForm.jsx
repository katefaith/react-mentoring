/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { filterItems } from '../../mockedData';
import { addMovie } from '../../redux/crud/actions';

import './form.scss';

export const AddForm = () => {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState({
    title: '',
    release_date: '',
    poster_path: '',
    genres: [],
    overview: '',
    runtime: '',
  });

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
    dispatch(addMovie(movie));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__title">add movie</h1>

      <div className="form__field">
        <label className="form__label" htmlFor="title">Title</label>
        <input className="form__input" type="text" id="title" onChange={handleInputChange} placeholder="Movie Title" />
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="release-date">Release date</label>
        <input className="form__input" type="date" id="release_date" onChange={handleInputChange} placeholder="Select Date" />
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="poster_path">Movie Url</label>
        <input className="form__input" type="text" id="poster_path" onChange={handleInputChange} placeholder="Movie URL here" />
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="genres">Genre</label>
        <select className="form__select" id="genres" onChange={handleSelectChange}>
          <option value="">Select Genre</option>
          {filterItems.map((item) => <option value={item} key={item}>{item}</option>)}
        </select>
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="overview">Overview</label>
        <input className="form__input" type="text" id="overview" onChange={handleInputChange} placeholder="Overview here" />
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="runtime">Runtime</label>
        <input className="form__input" type="text" id="runtime" onChange={handleInputChange} placeholder="Runtime here" />
      </div>

      <div className="form__buttons">
        <button className="form__button  form__button--reset" type="reset">reset</button>
        <button className="form__button  form__button--submit" type="submit">submit</button>
      </div>
    </form>
  );
};
