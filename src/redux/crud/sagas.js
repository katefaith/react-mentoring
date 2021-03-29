import axios from 'axios';
import { call } from 'redux-saga/effects';

async function addMovie(movie) {
  await axios.post('http://localhost:4000/movies', movie);
}

export function* addMovieWorker({ payload }) {
  try {
    yield call(addMovie, payload);
  } catch (error) {
    console.log(error);
  }
}
