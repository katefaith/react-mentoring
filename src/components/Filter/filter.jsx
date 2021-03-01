import React from 'react';

import './filter.scss';

import { filterItems } from '../../mockedData';

export const Filter = () => (
  <div className="filter">
    {filterItems.map((item) => (
      <div className="filter__item" key={item}>{item}</div>
    ))}
  </div>
);
