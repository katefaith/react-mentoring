import { MoviesActionsTypes } from './types';

const initialState = {
  movies: [],
  isFetching: false,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MoviesActionsTypes.GET_MOVIES_START:
      return { ...state, isFetching: true };
    case MoviesActionsTypes.GET_MOVIES_ERROR:
      return { ...state, isFetching: false, error: action.error };
    case MoviesActionsTypes.GET_MOVIES_FINISH:
      return { ...state, movies: action.payload, isFetching: false };
    default:
      return state;
  }
};
