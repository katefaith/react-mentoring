import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../Logo';
import { Search } from '../Search';

import './header.scss';

export const Header = ({ setIsModalOpen }) => (
  <header className="header">
    <div className="wrapper">
      <div className="header__container">
        <Logo />
        <button
          className="header__add-button"
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          + add movie
        </button>
      </div>
      <Search />
    </div>
  </header>
);

Header.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};
