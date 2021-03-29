import axios from 'axios';
import { put, call } from 'redux-saga/effects';
import { getMoviesError, getMoviesFinish, getMoviesStart } from './actions';

async function fetchMovies(request, sortParam, filterParam) {
  const response = await axios.get(`http://localhost:4000/movies?sortBy=${sortParam}&sortOrder=desc&search=${request}&searchBy=title&filter=${filterParam}`);
  return response.data;
}

export function* getMoviesWorker({ request, sortParam, filterParam }) {
  yield put(getMoviesStart());

  try {
    const response = yield call(fetchMovies, request, sortParam, filterParam);
    yield put(getMoviesFinish(response.data));
  } catch (error) {
    yield put(getMoviesError(error));
  }
}
