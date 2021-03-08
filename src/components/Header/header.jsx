import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../Logo';
import { Search } from '../Search';
import { Modal } from '../Modal';

import './header.scss';

export const Header = ({ isModalOpen, setIsModalOpen }) => (
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

    <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    >
      add movie
    </Modal>
  </header>
);

Header.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};
