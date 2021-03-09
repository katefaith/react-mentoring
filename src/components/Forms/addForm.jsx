/* eslint-disable react/button-has-type */
import React from 'react';

import './form.scss';

import { filterItems } from '../../mockedData';

export const AddForm = () => (
  <form className="form">
    <h1 className="form__title">Add movie</h1>

    <div className="form__field">
      <label className="form__label" htmlFor="title">Title</label>
      <input className="form__input" type="text" id="title" placeholder="Movie Title" />
    </div>

    <div className="form__field">
      <label className="form__label" htmlFor="release-date">Release date</label>
      <input className="form__input" type="date" id="release-date" placeholder="Select Date" />
    </div>

    <div className="form__field">
      <label className="form__label" htmlFor="url">Movie Url</label>
      <input className="form__input" type="text" id="url" placeholder="Movie URL here" />
    </div>

    <div className="form__field">
      <label className="form__label" htmlFor="genre">Genre</label>
      <select className="form__select">
        {filterItems.map((item) => <option value={item} key={item}>{item}</option>)}
      </select>
    </div>

    <div className="form__field">
      <label className="form__label" htmlFor="overview">Overview</label>
      <input className="form__input" type="text" id="overview" placeholder="Overview here" />
    </div>

    <div className="form__field">
      <label className="form__label" htmlFor="runtime">Runtime</label>
      <input className="form__input" type="text" id="runtime" placeholder="Runtime here" />
    </div>

    <div className="form__buttons">
      <button className="form__button  form__button--reset" type="reset">reset</button>
      <button className="form__button  form__button--submit" type="submit">submit</button>
    </div>
  </form>
);
