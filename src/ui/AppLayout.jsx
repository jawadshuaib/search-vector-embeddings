import React from 'react';
import PropTypes from 'prop-types';
import H1 from './H1';

export default function AppLayout({ heading, children }) {
  return (
    <div className="App flex min-h-screen justify-center dark:bg-slate-800">
      <div className="translate-y-1/3">
        <H1>{heading}</H1>
        <div className="relative w-96 max-w-lg mt-10">{children}</div>
      </div>
    </div>
  );
}

AppLayout.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
