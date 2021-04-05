import axios from 'axios';
import { call } from 'redux-saga/effects';
import { API } from '../../constants';

async function addMovie(movie) {
  await axios.post(`${API}/movies`, movie);
}

async function deleteMovie(id) {
  await axios.delete(`${API}/movies/${id}`);
}

async function editMovie(movie) {
  await axios.put(`${API}/movies`, movie);
}

export function* addMovieWorker({ payload }) {
  console.log('movie payload', payload);
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
