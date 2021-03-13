import React, { useState } from 'react';
import { Logo } from '../Logo';
import { Search } from '../Search';
import { Modal } from '../Modal';
import { Form } from '../Forms/Form';

import './header.scss';

export const Header = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__container">
          <Logo />
          <button
            className="header__add-button"
            type="button"
            onClick={() => setIsAddModalOpen(true)}
          >
            + add movie
          </button>
        </div>
        <Search />
      </div>

      {isAddModalOpen && (
      <Modal closeModal={() => setIsAddModalOpen(false)}>
        <Form title="add movie" btnText="submit" />
      </Modal>
      )}
    </header>
  );
};
