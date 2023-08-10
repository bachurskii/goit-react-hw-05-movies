import React, { useState, useEffect } from 'react';
import styles from './SearchBar.module.css';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setSearchText(query);
      onSearch(query);
    }
  }, [searchParams, onSearch]);

  const handleSearchChange = event => {
    const value = event.target.value;
    setSearchText(value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: searchText });
    onSearch(searchText);
  };

  return (
    <div className={styles.search_bar}>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchText}
          onChange={handleSearchChange}
          className={styles.search_input}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
