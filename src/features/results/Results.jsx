import React from 'react';
import Result from './Result';

export default function Results() {
  return (
    <div className="absolute mt-2 w-full overflow-hidden rounded-md bg-white dark:bg-slate-200">
      <Result>1 Lorem ipsum dolor sit amet, consectetur</Result>
      <Result>2 Lorem ipsum dolor sit amet, consectetur</Result>
      <Result>3 Lorem ipsum dolor sit amet, consectetur</Result>
      <Result>4 Lorem ipsum dolor sit amet, consectetur</Result>
    </div>
  );
}
