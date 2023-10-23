import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setSampleQuery } from '../search/searchSlice';

export default function Result({ children, customClass, allowClick }) {
  const dispatch = useDispatch();
  function handleClick() {
    if (!allowClick) return;
    dispatch(setSampleQuery(children));
  }

  return (
    <div
      className={`${customClass} py-2 px-3 text-black rounded-md `}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}

Result.propTypes = {
  children: PropTypes.node.isRequired,
  customClass: PropTypes.string,
  allowClick: PropTypes.bool,
};

Result.defaultProps = {
  customClass: '',
  allowClick: true,
};
