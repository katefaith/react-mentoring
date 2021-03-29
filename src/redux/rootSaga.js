import { all, takeEvery } from 'redux-saga/effects';
import { addMovieWorker, deleteMovieWorker, editMovieWorker } from './crud/sagas';
import { crudActionsTypes } from './crud/types';
import { getMoviesWorker } from './movies/sagas';
import { MoviesActionsTypes } from './movies/types';

export function* rootSaga() {
  yield all([
    takeEvery(MoviesActionsTypes.GET_MOVIES, getMoviesWorker),
    takeEvery(crudActionsTypes.ADD_MOVIE, addMovieWorker),
    takeEvery(crudActionsTypes.DELETE_MOVIE, deleteMovieWorker),
    takeEvery(crudActionsTypes.EDIT_MOVIE, editMovieWorker),
  ]);
}
