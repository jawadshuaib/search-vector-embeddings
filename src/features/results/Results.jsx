import React from 'react';
import Result from './Result';
import { useSelector } from 'react-redux';
import Explanation from './Explanation';

export default function Results() {
  const { results, query, method, isLoading } = useSelector(
    (state) => state.search,
  );

  return (
    <div>
      {results.length > 0 && !isLoading && (
        <div className="absolute mt-2 border-dashed border-2 p-2 overflow-hidden rounded-md bg-white dark:bg-slate-200">
          <h2 className="text-lg font-medium">Search Results using {method}</h2>
          {results.map((result) => (
            <Result
              key={result.id}
              customClass="cursor-pointer hover:bg-slate-100 dark:hover:text-black border-dotted border-b-2 border-slate-300"
            >
              {result.name.split('|')[0]}
            </Result>
          ))}

          <h2 className="text-lg font-medium">Explanation</h2>
          <Result allowClick={false}>
            <Explanation method={method} query={query} results={results} />
          </Result>
        </div>
      )}
      {query !== null && results.length === 0 && isLoading === false && (
        <div className="absolute mt-2 w-full overflow-hidden rounded-md bg-white dark:bg-slate-200">
          <Result allowClick={false}>No results found</Result>
        </div>
      )}
    </div>
  );
}
