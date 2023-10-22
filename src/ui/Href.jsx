import React from 'react';
import PropTypes from 'prop-types';

export default function Href({ children, href, target }) {
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className="hover:text-blue-200"
    >
      {children}
    </a>
  );
}

Href.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
};

Href.defaultProps = {
  href: '',
  target: '_blank',
};
