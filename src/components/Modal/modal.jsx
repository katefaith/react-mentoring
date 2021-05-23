import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styles from './modal.css';

import closeIcon from '../../images/cancel.svg';

export const Modal = ({ closeModal, children }) => {
  const modal = (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <button
          className={styles.closeBtn}
          type="button"
          onClick={closeModal}
        >
          <img src={closeIcon} alt="close" />
        </button>
        <div className={styles.content}>
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
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
