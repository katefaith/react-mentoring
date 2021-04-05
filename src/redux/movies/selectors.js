export const getMoviesCount = (state) => state.movies.movies.length;
export const getMovies = (state) => state.movies.movies;
export const getIsFetching = (state) => state.movies.isFetching;
export const getCurrentRequest = (state) => state.movies.request;
export const getCurrentSortParam = (state) => state.movies.sortParam;
export const getCurrentFilterParam = (state) => state.movies.filterParam;
