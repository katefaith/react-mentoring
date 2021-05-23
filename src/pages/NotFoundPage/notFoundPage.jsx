import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../../components/Logo';
import { Footer } from '../../components/Footer';

import notFoundImage from '../../images/404.jpg';

import styles from './notFoundPage.css';

export const NotFoundPage = () => (
  <div className={styles.page}>
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
      </div>
    </header>
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img src={notFoundImage} alt="notFoundImage" />
          <Link to="/" className={styles.link}>go back to home</Link>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);
