import React from 'react';
import Form from '../form/Form';
import Results from '../results/Results';
import H1 from '../../ui/H1';
import Paragraph from '../../ui/Paragraph';
import { setSampleQuery } from './searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { defaults } from '../../utils/settings';

export default function Search() {
  const sampleQuery = defaults.sampleQuery;
  const { results, query } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSampleQuery(sampleQuery));
  };

  return (
    <>
      <H1 customClass="mb-5">Search Vector</H1>
      <Paragraph customClass="sm:flex" fontSize="text-xl md:text-lg">
        This project demonstrates that vectorized search yields qualitatively
        better results than SQL.
      </Paragraph>
      <Form />
      <Results />
      {results.length === 0 && query === null && (
        <Paragraph customClass="mt-3" fontSize="text-md" margin="mb-0">
          Example Search:{' '}
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
