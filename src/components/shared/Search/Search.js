import React from 'react';

import './Search.scss';

function Search() {
  return (
    <div className="search-container">
      <button className="search-button" type="button">
        Search
      </button>
      <input className="search-field" name="search" type="search" />
    </div>
  );
}

export default Search;
