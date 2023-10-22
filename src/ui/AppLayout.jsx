import React from 'react';
import PropTypes from 'prop-types';

export default function AppLayout({ children }) {
  return (
    <div className="App flex min-h-screen justify-center dark:bg-slate-800">
      <div className="translate-y-1/3">
        <div className="relative w-128 max-w-lg mt-10">{children}</div>
      </div>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
