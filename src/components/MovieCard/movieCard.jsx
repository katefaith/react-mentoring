import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal';
import { EditForm } from '../Forms/editForm';
import { DeleteForm } from '../Forms/deleteForm';

import './movieCard.scss';

import menuIcon from '../../images/more.svg';
import closeIcon from '../../images/cancel.svg';

export const MovieCard = ({ movie }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuBtnShown, setIsMenuBtnShown] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <div
      className="movie-card"
      onMouseEnter={() => setIsMenuBtnShown(true)}
      onMouseLeave={() => { setIsMenuBtnShown(false); setIsMenuOpen(false); }}
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
          <button className="movie-card__menu-item" type="button" onClick={() => { setIsEditModalOpen(true); setIsMenuOpen(false); }}>Edit</button>
          <button className="movie-card__menu-item" type="button" onClick={() => { setIsDeleteModalOpen(true); setIsMenuOpen(false); }}>Delete</button>
        </div>
      )}

      <img
        className="movie-card__image"
        src={movie.poster}
        alt={movie.title}
      />
      <div className="movie-card__info">
        <div className="movie-card__descr">
          <h2 className="movie-card__title">{movie.title}</h2>
          <p className="movie-card__genre">{movie.genre}</p>
        </div>
        <div className="movie-card__release-date">{movie.year}</div>
      </div>

      {isEditModalOpen && (
      <Modal setIsModalOpen={setIsEditModalOpen}>
        <EditForm movie={movie} />
      </Modal>
      )}

      {isDeleteModalOpen && (
      <Modal setIsModalOpen={setIsDeleteModalOpen}>
        <DeleteForm id={movie.imdbID} />
      </Modal>
      )}
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }),
};

MovieCard.defaultProps = {
  movie: {
    imdbID: 'Missing ID',
    title: 'Missing Title',
    poster: 'Missing Poster',
    genre: 'Missing Genre',
    year: 'Missing Year',
  },
};
