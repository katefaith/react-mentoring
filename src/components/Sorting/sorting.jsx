import React from 'react';

import './sorting.scss';

export const Sorting = () => (
  <div className="sorting">
    <span>sort by</span>
    <select>
      <option value="value1" defaultValue>release date</option>
      <option value="value2">rating</option>
    </select>
  </div>
);
