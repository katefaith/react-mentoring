import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, setCurrentRequest } from '../../redux/movies/actions';
import { getCurrentSortParam, getCurrentFilterParam } from '../../redux/movies/selectors';

import './search.scss';

export const Search = () => {
  const [request, setRequest] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const sortParam = useSelector(getCurrentSortParam);
  const filterParam = useSelector(getCurrentFilterParam);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getMovies(request, sortParam, filterParam));
    dispatch(setCurrentRequest(request));
    history.push(`/search/${request}`);
  };

  return (
    <div className="search">
      <h1 className="search__title">Find your movie</h1>
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          placeholder="What do you want to watch?"
          onChange={(event) => setRequest(event.target.value)}
        />
        <button className="search__button" type="submit">search</button>
      </form>
    </div>
  );
};
