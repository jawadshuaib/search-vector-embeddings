import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ src, alt }) {
  return (
    <div className="flex items-center justify-center">
      <img className="auto-mx" src={src} alt={alt} />
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
