import React from 'react';

import './search.scss';

export const Search = () => (
  <div className="search">
    <h1 className="search__title">Find your movie</h1>
    <form className="search__form">
      <input className="search__input" type="text" placeholder="What do you want to watch?" />
      <button className="search__button" type="submit">search</button>
    </form>
  </div>
);
