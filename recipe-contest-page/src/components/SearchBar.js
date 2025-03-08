import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search for recipes..."
      value={query}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
