import React from 'react';

import './sorting.scss';

import { sortingItems } from '../../mockedData';

export const Sorting = () => (
  <div className="sorting">
    <span>sort by</span>
    <select>
      {sortingItems.map((item) => <option value={item}>{item}</option>)}
    </select>
  </div>
);
