import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

import './App.scss';

export const App = () => (
  <>
    <Header />
    <main>
      <p className="app">movies list</p>
    </main>
    <Footer />
  </>
);
