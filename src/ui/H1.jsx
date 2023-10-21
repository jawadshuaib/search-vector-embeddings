import React from 'react';
import PropTypes from 'prop-types';

export default function H1({ children, customClass }) {
  return (
    <div
      className={`${customClass} text-3xl font-bold grid place-items-center dark: text-gray-200`}
    >
      {children}
    </div>
  );
}

H1.propTypes = {
  children: PropTypes.node.isRequired,
  customClass: PropTypes.string,
};

H1.defaultProps = {
  customClass: null,
};
