import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import PropTypes from 'prop-types';

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = event => {
    setSearchText(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className={styles['search-bar']}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchText}
        onChange={handleSearchChange}
        className={styles['search-input']}
      />
    </div>
  );
}
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
