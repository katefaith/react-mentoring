import { all, takeEvery } from 'redux-saga/effects';
import { getMoviesWorker } from './movies/sagas';
import { MoviesActionsTypes } from './movies/types';

export function* rootSaga() {
  yield all([
    takeEvery(MoviesActionsTypes.GET_MOVIES, getMoviesWorker),
  ]);
}
