import React from 'react';
import PropTypes from 'prop-types';

export default function Footer({ children }) {
  return (
    <footer className="bg-gray-900 bg-opacity-80 text-slate-400 p-4 text-center">
      <div className="container mx-auto">
        <p>{children}</p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};
