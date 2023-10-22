import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setSampleQuery } from '../search/searchSlice';

export default function Result({ children }) {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setSampleQuery(children));
  }

  return (
    <div
      className="cursor-pointer py-2 px-3 text-black hover:bg-slate-100 dark:hover:text-black"
      onClick={handleClick}
    >
      {children}
    </div>
  );
}

Result.propTypes = {
  children: PropTypes.node.isRequired,
};
