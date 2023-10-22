import React from 'react';
import PropTypes from 'prop-types';

export default function Paragraph({ children, customClass }) {
  return (
    <p
      className={`${customClass} block text-center mb-5 text-xl text-gray-900 dark:text-gray-400`}
    >
      {children}
    </p>
  );
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  customClass: PropTypes.string,
};

Paragraph.defaultProps = {
  customClass: '',
};
