import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, setCurrentRequest } from '../../redux/movies/actions';
import { getCurrentSortParam, getCurrentFilterParam } from '../../redux/movies/selectors';

import styles from './search.css';

export const Search = () => {
  const [request, setRequest] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const sortParam = useSelector(getCurrentSortParam);
  const filterParam = useSelector(getCurrentFilterParam);
  const { searchRequest } = useRouteMatch().params;

  useEffect(() => {
    if (searchRequest) {
      dispatch(getMovies(searchRequest, sortParam, filterParam));
      dispatch(setCurrentRequest(searchRequest));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getMovies(request, sortParam, filterParam));
    dispatch(setCurrentRequest(request));
    history.push(`/search/${request}`);
  };

  return (
    <div className={styles.search}>
      <h1 className={styles.title}>Find your movie</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="What do you want to watch?"
          required
          onChange={(event) => setRequest(event.target.value)}
        />
        <button className={styles.button} type="submit">search</button>
      </form>
    </div>
  );
};
