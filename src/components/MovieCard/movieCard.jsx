import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal } from '../Modal';
import { DeleteForm } from '../Forms/deleteForm';
import { MovieForm } from '../Forms/Form';
import { getYear, printGenres } from '../../utils';
import { editMovie } from '../../redux/crud/actions';

import './movieCard.scss';

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
      className="movie-card"
      onMouseEnter={() => setIsMenuBtnShown(true)}
      onMouseLeave={onMouseLeave}
    >
      {isMenuBtnShown && (
        <button
          className="movie-card__menu-btn"
          type="button"
          onClick={() => setIsMenuOpen(true)}
        >
          <img src={menuIcon} alt="menu" />
        </button>
      )}

      {isMenuOpen && (
        <div className="movie-card__menu">
          <button className="movie-card__menu-close-btn" type="button" onClick={() => setIsMenuOpen(false)}>
            <img src={closeIcon} alt="close" />
          </button>
          <button className="movie-card__menu-item" type="button" onClick={showEditModal}>Edit</button>
          <button className="movie-card__menu-item" type="button" onClick={showDeleteModal}>Delete</button>
        </div>
      )}

      <img
        className="movie-card__image"
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className="movie-card__info">
        <div className="movie-card__descr">
          <Link to={`/film/${movie.id}`} onClick={memoizedSelectdMovie}>
            <h2 className="movie-card__title">{movie.title}</h2>
          </Link>
          <p className="movie-card__genre">{printGenres(movie.genres)}</p>
        </div>
        <div className="movie-card__release-date">{getYear(movie.release_date)}</div>
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
