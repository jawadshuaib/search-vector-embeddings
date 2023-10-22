import React from 'react';
import Form from '../form/Form';
import Results from '../results/Results';
import H1 from '../../ui/H1';

export default function Search() {
  return (
    <>
      <H1 customClass="mb-5">Vector Search</H1>
      <Form />
      <Results />
    </>
  );
}
