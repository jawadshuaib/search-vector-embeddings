import React from 'react';
import SearchBar from '../search/SearchBar';
import Toggle from '../search/Toggle';

export default function Form() {
  return (
    <form>
      <Toggle name="search-type" />
      <SearchBar />
    </form>
  );
}
