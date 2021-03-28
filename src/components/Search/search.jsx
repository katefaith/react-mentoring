import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../redux/movies/actions';

import './search.scss';

export const Search = () => {
  const [request, setRequest] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getMovies(request));
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
