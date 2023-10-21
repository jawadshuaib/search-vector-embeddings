import React from 'react';
import PropTypes from 'prop-types';

export default function Result({ children }) {
  return (
    <div className="cursor-pointer py-2 px-3 text-black hover:bg-slate-100 dark:hover:text-black">
      {children}
    </div>
  );
}

Result.propTypes = {
  children: PropTypes.node.isRequired,
};
