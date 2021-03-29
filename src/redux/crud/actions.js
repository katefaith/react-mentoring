import { crudActionsTypes } from './types';

export const addMovie = (movie) => ({
  type: crudActionsTypes.ADD_MOVIE,
  payload: movie,
});
