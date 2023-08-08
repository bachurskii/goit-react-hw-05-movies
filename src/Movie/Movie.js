import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchBar from 'SeachBar/SerachBar';
import styles from './Movie.module.css';

const API_KEY = '1fe8270af09b2a2e2b930e18d767076b';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  useEffect(() => {
    setFilteredMovies(
      movies.filter(movie =>
        movie.title.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [movies, searchText]);

  const handleSearch = value => {
    setSearchText(value);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.movies_container}>
        {filteredMovies.map(movie => (
          <div key={movie.id} className={styles.movie_card}>
            <Link to={`/movies/${movie.id}`} className={styles.movie_link}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <div className={styles.movie_title}>{movie.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
Movies.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
};

export default Movies;
