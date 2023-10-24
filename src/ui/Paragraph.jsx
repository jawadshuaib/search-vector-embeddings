import React from 'react';
import PropTypes from 'prop-types';

export default function Paragraph({
  children,
  customClass,
  align,
  margin,
  fontSize,
}) {
  return (
    <p
      className={`${customClass} ${align} ${fontSize} ${margin} block text-gray-900 dark:text-gray-400`}
    >
      {children}
    </p>
  );
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  customClass: PropTypes.string,
  align: PropTypes.string,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
};

Paragraph.defaultProps = {
  customClass: '',
  align: 'text-center',
  fontSize: 'text-xl',
  margin: 'mb-5',
};
