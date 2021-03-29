import axios from 'axios';
import { call } from 'redux-saga/effects';

async function addMovie(movie) {
  await axios.post('http://localhost:4000/movies', movie);
}

async function deleteMovie(id) {
  await axios.delete(`http://localhost:4000/movies/${id}`);
}

async function editMovie(movie) {
  await axios.put('http://localhost:4000/movies', movie);
}

export function* addMovieWorker({ payload }) {
  try {
    yield call(addMovie, payload);
  } catch (error) {
    console.log(error);
  }
}

export function* deleteMovieWorker({ payload }) {
  try {
    yield call(deleteMovie, payload);
  } catch (error) {
    console.log(error);
  }
}

export function* editMovieWorker({ payload }) {
  try {
    yield call(editMovie, payload);
  } catch (error) {
    console.log(error);
  }
}
