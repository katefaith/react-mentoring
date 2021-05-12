import * as actions from './actions';
import { MoviesActionsTypes } from './types';

describe('actions', () => {
  test('should create an action for fetching movies', () => {
    const request = 'movie name';
    const sortParam = 'rating';
    const filterParam = 'drama';
    const expectedAction = {
      type: MoviesActionsTypes.GET_MOVIES,
      request,
      sortParam,
      filterParam,
    };

    expect(actions.getMovies(request, sortParam, filterParam)).toEqual(expectedAction);
  });

  test('should create an action for starting fetching movies', () => {
    const expectedAction = {
      type: MoviesActionsTypes.GET_MOVIES_START,
    };

    expect(actions.getMoviesStart()).toEqual(expectedAction);
  });

  test('should create an action for finishing fetching movies', () => {
    const movies = 'some movies';
    const expectedAction = {
      type: MoviesActionsTypes.GET_MOVIES_FINISH,
      payload: movies,
    };

    expect(actions.getMoviesFinish(movies)).toEqual(expectedAction);
  });

  test('should create an action to get an error while fetching movies', () => {
    const error = 'some error';
    const expectedAction = {
      type: MoviesActionsTypes.GET_MOVIES_ERROR,
      error,
    };

    expect(actions.getMoviesError(error)).toEqual(expectedAction);
  });

  test('should create an action to set current request', () => {
    const request = 'movie name';
    const expectedAction = {
      type: MoviesActionsTypes.SET_CURRENT_REQUEST,
      request,
    };

    expect(actions.setCurrentRequest(request)).toEqual(expectedAction);
  });

  test('should create an action to set sorting param', () => {
    const sortParam = 'rating';
    const expectedAction = {
      type: MoviesActionsTypes.SET_SORT_PARAM,
      sortParam,
    };

    expect(actions.setSortParam(sortParam)).toEqual(expectedAction);
  });

  test('should create an action to set filter param', () => {
    const filterParam = 'drama';
    const expectedAction = {
      type: MoviesActionsTypes.SET_FILTER_PARAM,
      filterParam,
    };

    expect(actions.setFilterParam(filterParam)).toEqual(expectedAction);
  });
});
