import React from 'react';
import H1 from '../../ui/H1';
import Paragraph from '../../ui/Paragraph';

export default function PageNotFound() {
  return (
    <div>
      <H1>Page Not Found</H1>
      <Paragraph customClass="text-center">
        Sorry, the page you are looking for does not exist.
      </Paragraph>
    </div>
  );
}
