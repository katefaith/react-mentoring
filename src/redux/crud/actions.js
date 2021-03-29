import { crudActionsTypes } from './types';

export const addMovie = (movie) => ({
  type: crudActionsTypes.ADD_MOVIE,
  payload: movie,
});

export const deleteMovie = (id) => ({
  type: crudActionsTypes.DELETE_MOVIE,
  payload: id,
});

export const editMovie = (movie) => ({
  type: crudActionsTypes.EDIT_MOVIE,
  payload: movie,
});
