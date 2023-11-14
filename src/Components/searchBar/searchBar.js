import React, { useState } from 'react';
import './SearchBar.css'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query); // This function could be a prop that handles the search logic
  };

  return (
    <form className = "SearchBar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: '200px', marginRight: '10px' }}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
