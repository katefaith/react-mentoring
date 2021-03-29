import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, setFilterParam } from '../../redux/movies/actions';
import { getCurrentRequest, getCurrentSortParam } from '../../redux/movies/selectors';
import { filterItems } from '../../mockedData';

import './filter.scss';

export const Filter = () => {
  const dispatch = useDispatch();
  const request = useSelector(getCurrentRequest);
  const sortParam = useSelector(getCurrentSortParam);

  const handleChange = (event) => {
    if (event.target.checked) {
      const filterParam = event.target.value;
      dispatch(getMovies(request, sortParam, filterParam));
      dispatch(setFilterParam(filterParam));
    }
  };

  return (
    <div className="filter">
      <input id="all" type="radio" name="filter" onChange={handleChange} defaultChecked value="" />
      <label htmlFor="all">all</label>
      {filterItems.map((item) => (
        <>
          <input id={item} type="radio" name="filter" onChange={handleChange} value={item} />
          <label htmlFor={item} key={item}>{item}</label>
        </>
      ))}
    </div>
  );
};
