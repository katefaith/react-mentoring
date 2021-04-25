import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../../components/Logo';
import { Footer } from '../../components/Footer';

import notFoundImage from '../../images/404.jpg';

import './notFoundPage.scss';

export const NotFoundPage = () => (
  <>
    <header className="not-found-page-header">
      <div className="wrapper">
        <Logo />
      </div>
    </header>
    <main className="not-found-page-main">
      <div className="wrapper">
        <div className="not-found-page-container">
          <img src={notFoundImage} alt="notFoundImage" />
          <Link to="/" className="not-found-page-link">go back to home</Link>
        </div>
      </div>
    </main>
    <Footer />
  </>
);
