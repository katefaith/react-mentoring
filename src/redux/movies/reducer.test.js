import { moviesReducer } from './reducer';
import { MoviesActionsTypes } from './types';

describe('moviesReducer', () => {
  test('should return the initial state', () => {
    expect(moviesReducer(undefined, {})).toEqual({
      movies: [],
      isFetching: false,
      request: '',
      sortParam: 'release_date',
      filterParam: '',
    });
  });

  test('should handle GET_MOVIES_START', () => {
    expect(moviesReducer({
      movies: [],
      isFetching: false,
      request: '',
      sortParam: 'release_date',
      filterParam: '',
    },
    {
      type: MoviesActionsTypes.GET_MOVIES_START,
    })).toEqual({
      movies: [],
      isFetching: true,
      request: '',
      sortParam: 'release_date',
      filterParam: '',
    });
  });

  test('should handle GET_MOVIES_ERROR', () => {
    expect(moviesReducer({
      movies: [],
      isFetching: true,
      request: '',
      sortParam: 'release_date',
      filterParam: '',
    }, {
      type: MoviesActionsTypes.GET_MOVIES_ERROR,
      error: 'some error',
    })).toEqual({
      movies: [],
      isFetching: false,
      request: '',
      sortParam: 'release_date',
      filterParam: '',
      error: 'some error',
    });
  });

  test('should handle GET_MOVIES_FINISH', () => {
    expect(moviesReducer({
      movies: [],
      isFetching: true,
      request: '',
      sortParam: 'release_date',
      filterParam: '',
    }, {
      type: MoviesActionsTypes.GET_MOVIES_FINISH,
      payload: ['movie1', 'movie2'],
    })).toEqual({
      movies: ['movie1', 'movie2'],
      isFetching: false,
      request: '',
      sortParam: 'release_date',
      filterParam: '',
    });
  });

  test('should handle SET_CURRENT_REQUEST', () => {
    expect(moviesReducer({
      movies: ['movie1', 'movie2'],
      isFetching: false,
      request: '',
      sortParam: 'release_date',
      filterParam: '',
    }, {
      type: MoviesActionsTypes.SET_CURRENT_REQUEST,
      request: 'request',
    })).toEqual({
      movies: ['movie1', 'movie2'],
      isFetching: false,
      request: 'request',
      sortParam: 'release_date',
      filterParam: '',
    });
  });

  test('should handle SET_SORT_PARAM', () => {
    expect(moviesReducer({
      movies: ['movie1', 'movie2'],
      isFetching: false,
      request: '',
      sortParam: 'release_date',
      filterParam: '',
    }, {
      type: MoviesActionsTypes.SET_SORT_PARAM,
      sortParam: 'rating',
    })).toEqual({
      movies: ['movie1', 'movie2'],
      isFetching: false,
      request: '',
      sortParam: 'rating',
      filterParam: '',
    });
  });

  test('should handle SET_FILTER_PARAM', () => {
    expect(moviesReducer({
      movies: ['movie1', 'movie2'],
      isFetching: false,
      request: '',
      sortParam: 'release_date',
      filterParam: '',
    }, {
      type: MoviesActionsTypes.SET_FILTER_PARAM,
      filterParam: 'comedy',
    })).toEqual({
      movies: ['movie1', 'movie2'],
      isFetching: false,
      request: '',
      sortParam: 'release_date',
      filterParam: 'comedy',
    });
  });
});
