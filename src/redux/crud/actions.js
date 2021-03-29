import { crudActionsTypes } from './types';

export const addMovie = (movie) => ({
  type: crudActionsTypes.ADD_MOVIE,
  payload: movie,
});

export const deleteMovie = (id) => ({
  type: crudActionsTypes.DELETE_MOVIE,
  payload: id,
});
