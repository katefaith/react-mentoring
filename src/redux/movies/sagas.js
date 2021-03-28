import axios from 'axios';
import { put, call } from 'redux-saga/effects';
import { getMoviesError, getMoviesFinish, getMoviesStart } from './actions';

async function fetchMovies(request, sortParam) {
  const response = await axios.get(`http://localhost:4000/movies?sortBy=${sortParam}&sortOrder=desc&search=${request}&searchBy=title`);
  return response.data;
}

export function* getMoviesWorker({ request, sortParam }) {
  yield put(getMoviesStart());

  try {
    const response = yield call(fetchMovies, request, sortParam);
    yield put(getMoviesFinish(response.data));
  } catch (error) {
    yield put(getMoviesError(error));
  }
}
