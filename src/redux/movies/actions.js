import { MoviesActionsTypes } from './types';

export const getMovies = (request, sortParam) => ({
  type: MoviesActionsTypes.GET_MOVIES,
  request,
  sortParam,
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

export const setCurrentRequest = (request) => ({
  type: MoviesActionsTypes.SET_CURRENT_REQUEST,
  request,
});

export const setSortParam = (sortParam) => ({
  type: MoviesActionsTypes.SET_SORT_PARAM,
  sortParam,
});
