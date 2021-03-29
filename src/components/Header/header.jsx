import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../Logo';
import { Search } from '../Search';
import { MovieDetails } from '../MovieDetails';
import { Modal } from '../Modal';
import { Form } from '../Forms/Form';

import searchIcon from '../../images/search.svg';

import './header.scss';

export const Header = ({ selectedMovie, setSelectedMovie }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__container">
          <Logo />
          {selectedMovie ? (
            <button className="header__search-button" type="button" onClick={() => setSelectedMovie(null)}>
              <img src={searchIcon} alt="search" />
            </button>
          ) : (
            <button
              className="header__add-button"
              type="button"
              onClick={() => setIsAddModalOpen(true)}
            >
              + add movie
            </button>
          )}
        </div>
        {selectedMovie ? <MovieDetails movie={selectedMovie} /> : <Search />}
      </div>

      {isAddModalOpen && (
      <Modal closeModal={() => setIsAddModalOpen(false)}>
        <Form title="add movie" btnText="submit" />
      </Modal>
      )}
    </header>
  );
};

Header.propTypes = {
  selectedMovie: PropTypes.shape(),
  setSelectedMovie: PropTypes.func.isRequired,
};

Header.defaultProps = {
  selectedMovie: null,
};
