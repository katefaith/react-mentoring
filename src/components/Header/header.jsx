import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { Search } from '../Search';
import { MovieDetails } from '../MovieDetails';
import { Modal } from '../Modal';
import { MovieForm } from '../Forms/Form';
import { addMovie } from '../../redux/crud/actions';

import searchIcon from '../../images/search.svg';

import styles from './header.css';

export const Header = ({ selectedMovie, setSelectedMovie }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(addMovie(values));
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Logo />
          {selectedMovie ? (
            <Link to="/" className={styles.searchButton} onClick={() => setSelectedMovie(null)}>
              <img src={searchIcon} alt="search" />
            </Link>
          ) : (
            <button
              className={styles.addButton}
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
        <MovieForm title="add movie" btnText="submit" onSubmit={onSubmit} />
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
