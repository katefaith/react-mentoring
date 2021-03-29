import { MoviesActionsTypes } from './types';

export const getMovies = (request, sortParam, filterParam) => ({
  type: MoviesActionsTypes.GET_MOVIES,
  request,
  sortParam,
  filterParam,
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

export const setFilterParam = (filterParam) => ({
  type: MoviesActionsTypes.SET_FILTER_PARAM,
  filterParam,
});
