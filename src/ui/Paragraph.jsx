import React from 'react';
import PropTypes from 'prop-types';

export default function Paragraph({ children, customClass, align }) {
  return (
    <p
      className={`${customClass} ${align} block mb-5 text-xl text-gray-900 dark:text-gray-400`}
    >
      {children}
    </p>
  );
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  customClass: PropTypes.string,
  align: PropTypes.string,
};

Paragraph.defaultProps = {
  customClass: '',
  align: 'text-center',
};
