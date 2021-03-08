import React from 'react';
import PropTypes from 'prop-types';

import './modal.scss';

import closeIcon from '../../images/cancel.svg';

export const Modal = ({ setIsModalOpen, children }) => (
  <div className="modal">
    <div className="modal__wrapper">
      <button
        className="modal__close-btn"
        type="button"
        onClick={() => setIsModalOpen(false)}
      >
        <img src={closeIcon} alt="close" />
      </button>
      <div className="modal__content">
        {children}
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
