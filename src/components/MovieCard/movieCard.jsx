import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal } from '../Modal';
import { DeleteForm } from '../Forms/deleteForm';
import { MovieForm } from '../Forms/Form';
import { getYear, printGenres } from '../../utils';
import { editMovie } from '../../redux/crud/actions';

import styles from './movieCard.css';

import menuIcon from '../../images/more.svg';
import closeIcon from '../../images/cancel.svg';

export const MovieCard = ({ movie, setSelectedMovie }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuBtnShown, setIsMenuBtnShown] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dispatch = useDispatch();

  const memoizedSelectdMovie = useCallback(
    () => setSelectedMovie(movie),
    [movie],
  );

  const onMouseLeave = () => {
    setIsMenuBtnShown(false);
    setIsMenuOpen(false);
  };

  const showEditModal = () => {
    setIsEditModalOpen(true);
    setIsMenuOpen(false);
  };

  const showDeleteModal = () => {
    setIsDeleteModalOpen(true);
    setIsMenuOpen(false);
  };

  const onSubmit = (values) => {
    dispatch(editMovie(values));
  };

  return (
    <div
      className={styles.movieCard}
      onMouseEnter={() => setIsMenuBtnShown(true)}
      onMouseLeave={onMouseLeave}
    >
      {isMenuBtnShown && (
        <button
          className={styles.menuBtn}
          type="button"
          onClick={() => setIsMenuOpen(true)}
        >
          <img src={menuIcon} alt="menu" />
        </button>
      )}

      {isMenuOpen && (
        <div className={styles.menu}>
          <button className={styles.menuCloseBtn} type="button" onClick={() => setIsMenuOpen(false)}>
            <img src={closeIcon} alt="close" />
          </button>
          <button className={styles.menuItem} type="button" onClick={showEditModal}>Edit</button>
          <button className={styles.menuItem} type="button" onClick={showDeleteModal}>Delete</button>
        </div>
      )}

      <img
        className={styles.image}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className={styles.info}>
        <div className={styles.descr}>
          <Link to={`/film/${movie.id}`} onClick={memoizedSelectdMovie}>
            <h2 className={styles.title}>{movie.title}</h2>
          </Link>
          <p>{printGenres(movie.genres)}</p>
        </div>
        <div className={styles.releaseDate}>{getYear(movie.release_date)}</div>
      </div>

      {isEditModalOpen && (
      <Modal closeModal={() => setIsEditModalOpen(false)}>
        <MovieForm title="edit movie" btnText="save" currentMovie={movie} onSubmit={onSubmit} />
      </Modal>
      )}

      {isDeleteModalOpen && (
      <Modal closeModal={() => setIsDeleteModalOpen(false)}>
        <DeleteForm id={movie.id} />
      </Modal>
      )}
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    release_date: PropTypes.string.isRequired,
  }),
  setSelectedMovie: PropTypes.func.isRequired,
};

MovieCard.defaultProps = {
  movie: {
    id: 'Missing ID',
    title: 'Missing Title',
    poster_path: 'Missing Poster',
    genres: 'Missing Genre',
    release_date: 'Missing Year',
  },
};
