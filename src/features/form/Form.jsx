import React from 'react';
import SearchBar from '../search/SearchBar';
import Toggle from '../search/Toggle';

export default function Form() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Toggle name="search-type" />
      <SearchBar />
    </form>
  );
}
