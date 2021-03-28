import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, setCurrentRequest } from '../../redux/movies/actions';
import { getCurrentSortParam } from '../../redux/movies/selectors';

import './search.scss';

export const Search = () => {
  const [request, setRequest] = useState('');
  const dispatch = useDispatch();
  const sortParam = useSelector(getCurrentSortParam);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getMovies(request, sortParam));
    dispatch(setCurrentRequest(request));
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
