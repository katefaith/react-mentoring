import React from 'react';
import { Logo } from '../Logo';
import { Search } from '../Search';

import './header.scss';

export const Header = () => (
  <header className="header">
    <div className="wrapper">
      <div className="header__container">
        <Logo />
        <button className="header__add-button" type="button">+ add movie</button>
      </div>
      <Search />
    </div>
  </header>
);
