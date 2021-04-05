import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, setSortParam } from '../../redux/movies/actions';
import { getCurrentRequest, getCurrentFilterParam } from '../../redux/movies/selectors';
import { sortingItems } from '../../mockedData';

import './sorting.scss';

const sortParams = {
  rating: 'vote_average',
  'release date': 'release_date',
};

export const Sorting = () => {
  const dispatch = useDispatch();
  const request = useSelector(getCurrentRequest);
  const filterParam = useSelector(getCurrentFilterParam);

  const handleChange = (event) => {
    const sortParam = sortParams[event.target.value];
    dispatch(getMovies(request, sortParam, filterParam));
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
