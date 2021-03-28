import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, setSortParam } from '../../redux/movies/actions';

import './sorting.scss';

import { sortingItems } from '../../mockedData';
import { getCurrentRequest } from '../../redux/movies/selectors';

const dictionary = {
  rating: 'vote_average',
  'release date': 'release_date',
};

export const Sorting = () => {
  const dispatch = useDispatch();
  const request = useSelector(getCurrentRequest);

  const handleChange = (event) => {
    const sortParam = dictionary[event.target.value];
    dispatch(getMovies(request, sortParam));
    dispatch(setSortParam(sortParam));
  };

  return (
    <div className="sorting">
      <span>sort by</span>
      <select onChange={handleChange}>
        {sortingItems.map((item) => <option value={item} key={item}>{item}</option>)}
      </select>
    </div>
  );
};
