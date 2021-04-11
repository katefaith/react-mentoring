/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { filterItems } from '../../mockedData';
import { addMovie, editMovie } from '../../redux/crud/actions';
import { Input } from './Input';

import './form.scss';

const initialMovie = {
  title: '',
  release_date: '',
  poster_path: '',
  genres: [''],
  tagline: '',
  overview: '',
  runtime: '',
};

const Schema = Yup.object().shape({
  title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  release_date: Yup.string(),
  poster_path: Yup.string().url('Invalid URL').required('Required'),
  genres: Yup.array().of(Yup.string()).required('Required'),
  tagline: Yup.string(),
  overview: Yup.string().required('Required'),
  runtime: Yup.number().moreThan(0, 'Must be more than 0').required('Required'),
});

export const MovieForm = ({ title, btnText, currentMovie }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={currentMovie || initialMovie}
      validationSchema={Schema}
      onSubmit={(values) => {
        if (currentMovie) {
          dispatch(editMovie(values));
        } else {
          dispatch(addMovie(values));
        }
      }}
    >
      {({ errors, touched }) => (
        <Form className="form">
          <h1 className="form__title">{title}</h1>

          {currentMovie && <Input id="id" name="id" placeholder="Movie ID" label="Movie ID" errors={errors} touched={touched} disabled />}
          <Input id="title" name="title" placeholder="Movie Title" label="Title" errors={errors} touched={touched} />
          <Input type="date" id="release_date" name="release_date" placeholder="Select Date" label="Release date" errors={errors} touched={touched} />
          <Input id="poster_path" name="poster_path" placeholder="Movie URL here" label="Movie Url" errors={errors} touched={touched} />
          <div className="form__field">
            <label className="form__label" htmlFor="genres">Genre</label>
            <Field component="select" multiple className="form__select" id="genres" name="genres">
              {filterItems.map((item) => <option value={item} key={item}>{item}</option>)}
            </Field>
            {errors.genres && touched.genres && (<div className="form__error">{errors.genres}</div>)}
          </div>
          <Input id="tagline" name="tagline" placeholder="Tagline here" label="Tagline" errors={errors} touched={touched} />
          <Input id="overview" name="overview" placeholder="Overview here" label="Overview" errors={errors} touched={touched} />
          <Input type="number" id="runtime" name="runtime" placeholder="Runtime here" label="Runtime" errors={errors} touched={touched} />

          <div className="form__buttons">
            <button className="form__button  form__button--reset" type="reset">reset</button>
            <button className="form__button  form__button--submit" type="submit">{btnText}</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

MovieForm.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
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
