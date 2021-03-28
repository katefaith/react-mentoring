import axios from 'axios';
import { put, call } from 'redux-saga/effects';
import { getMoviesError, getMoviesFinish, getMoviesStart } from './actions';

async function fetchMovies(request) {
  const response = await axios.get(`http://localhost:4000/movies?search=${request}&searchBy=title`);
  return response.data;
}

export function* getMoviesWorker({ payload }) {
  yield put(getMoviesStart());

  try {
    const response = yield call(fetchMovies, payload);
    yield put(getMoviesFinish(response.data));
  } catch (error) {
    yield put(getMoviesError(error));
  }
}
