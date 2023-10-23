import React from 'react';
import Form from '../form/Form';
import Results from '../results/Results';
import H1 from '../../ui/H1';
import Paragraph from '../../ui/Paragraph';
import { setSampleQuery } from './searchSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Search() {
  const sampleQuery = 'Connector for TV';
  const { results } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSampleQuery(sampleQuery));
  };

  return (
    <>
      <H1 customClass="mb-5">Search Vector</H1>
      <Paragraph customClass="hidden sm:flex">
        This project demonstrates that vectorized search yields qualitatively
        better results than traditional SQL queries. SQL uses exact string
        comparisons while vector based search uses dimensional similarity
        between strings. The later method offers greater flexibility as it
        performs well even in absence of exact word matches.
      </Paragraph>
      <Form />
      <Results />
      {results.length === 0 && (
        <Paragraph customClass="mt-5">
          Experiment searching an electronics store. For example, search for{' '}
          <span
            onClick={handleClick}
            className="cursor-pointer bg-yellow-300 rounded p-0.5 text-slate-500 hover:text-slate-600 hover:bg-yellow-400"
          >
            {sampleQuery}
          </span>
        </Paragraph>
      )}
    </>
  );
}
