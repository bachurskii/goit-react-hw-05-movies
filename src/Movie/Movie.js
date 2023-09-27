import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Movie.module.css';

function Movies() {
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);
  const [searched, setSearched] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const API_KEY = '1fe8270af09b2a2e2b930e18d767076b';

  useEffect(() => {
    const queryParam = new URLSearchParams(location.search).get('query');
    if (queryParam) {
      setSearchText(queryParam);
      searchMovies(queryParam);
    }
  }, [location.search]);

  const searchMovies = query => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      )
      .then(response => {
        setMovies(response.data.results);
        setSearched(true);
      })
      .catch(error => {
        console.error('Error searching movies:', error);
      });
  };

  const handleSearchChange = event => {
    const value = event.target.value;
    setSearchText(value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    if (searchText) {
      setSearchText(searchText);
      searchMovies(searchText);
      navigate(`/movies?query=${searchText}`);
    }
  };

  return (
    <div className={styles.movieContainer}>
      <h1 className={styles.title_movies}>Search Movies</h1>
      <form className={styles.form_movies} onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchText}
          onChange={handleSearchChange}
          className={styles.search_input}
        />
        <button type="submit">Search</button>
      </form>
      {searched && movies.length === 0 && <p>No movies found.</p>}
      {movies.length > 0 && (
        <ul className={styles.movie_list}>
          {movies.map(movie => (
            <li key={movie.id} className={styles.movieItem}>
              <Link
                to={`/movies/${movie.id}`}
                state={{ from: location }}
                className={styles.movie_link}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};

export default Movies;
