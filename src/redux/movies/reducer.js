import { MoviesActionsTypes } from './types';

const initialState = {
  movies: [],
  isFetching: false,
  request: '',
  sortParam: 'release_date',
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MoviesActionsTypes.GET_MOVIES_START:
      return { ...state, isFetching: true };
    case MoviesActionsTypes.GET_MOVIES_ERROR:
      return { ...state, isFetching: false, error: action.error };
    case MoviesActionsTypes.GET_MOVIES_FINISH:
      return { ...state, movies: action.payload, isFetching: false };
    case MoviesActionsTypes.SET_CURRENT_REQUEST:
      return { ...state, request: action.request };
    case MoviesActionsTypes.SET_SORT_PARAM:
      return { ...state, sortParam: action.sortParam };
    default:
      return state;
  }
};
