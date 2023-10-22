import React from 'react';
import Result from './Result';
import { useSelector } from 'react-redux';

export default function Results() {
  const { results } = useSelector((state) => state.search);
  return (
    <div>
      {results.length > 0 && (
        <div className="absolute mt-2 w-full overflow-hidden rounded-md bg-white dark:bg-slate-200">
          {results.map((result) => (
            <Result key={result.id}>{result.name.split('|')[0]}</Result>
          ))}
        </div>
      )}
    </div>
  );
}
