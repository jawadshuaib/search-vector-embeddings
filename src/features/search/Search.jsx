import React from 'react';
import Form from '../form/Form';
import Results from '../results/Results';
import H1 from '../../ui/H1';
import Paragraph from '../../ui/Paragraph';
import { setSampleQuery } from './searchSlice';
import { useDispatch } from 'react-redux';

export default function Search() {
  const sampleQuery = 'Wireless headphones';
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSampleQuery(sampleQuery));
  };

  return (
    <>
      <H1 customClass="mb-5">Search Vector</H1>
      <Paragraph>
        Experiment searching an electronics store. For example, search for{' '}
        <span
          onClick={handleClick}
          className="cursor-pointer bg-yellow-300 rounded p-0.5 text-slate-500 hover:text-slate-600 hover:bg-yellow-400"
        >
          {sampleQuery}
        </span>
      </Paragraph>
      <Paragraph>
        This project demonstrates that vectorized search yields qualitatively
        better results than traditional SQL queries. SQL uses exact string
        comparisons to find relevant results. While, vector based search
        achieves the same using dimensional similarity between strings. The
        later technique is more flexible as it does not rely on exact word
        matchings.
      </Paragraph>
      <Paragraph>Toggle to compare results with SQL.</Paragraph>
      <Form />
      <Results />
    </>
  );
}
