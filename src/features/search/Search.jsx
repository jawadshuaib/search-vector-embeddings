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
      {/* 
      <Paragraph>Toggle to compare results with SQL.</Paragraph>
      <Paragraph>
        <div className="grid gap-1 md:grid-cols-2">
          <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              id="bordered-radio-1"
              type="radio"
              value=""
              name="bordered-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="bordered-radio-1"
              className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Vector query
            </label>
          </div>
          <div className="flex items-center  bg-green-300 pl-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              checked
              id="bordered-radio-2"
              type="radio"
              value=""
              name="bordered-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="bordered-radio-2"
              className="w-full py-4 ml-2 text-sm font-medium text-black dark:text-gray-300"
            >
              SQL query
            </label>
          </div>
        </div>
      </Paragraph> */}

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
