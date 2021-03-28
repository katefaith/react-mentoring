import { MoviesActionsTypes } from './types';

export const getMovies = (request) => ({
  type: MoviesActionsTypes.GET_MOVIES,
  payload: request,
});

export const getMoviesStart = () => ({
  type: MoviesActionsTypes.GET_MOVIES_START,
});

export const getMoviesFinish = (movies) => ({
  type: MoviesActionsTypes.GET_MOVIES_FINISH,
  payload: movies,
});

export const getMoviesError = (error) => ({
  type: MoviesActionsTypes.GET_MOVIES_ERROR,
  error,
});
