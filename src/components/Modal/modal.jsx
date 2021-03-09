import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './modal.scss';

import closeIcon from '../../images/cancel.svg';

export const Modal = ({ setIsModalOpen, children }) => {
  const modal = (
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

  return ReactDOM.createPortal(
    modal,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
