import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './home.module.css';

const API_KEY = '1fe8270af09b2a2e2b930e18d767076b';

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(response => {
        setPopularMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching popular movies:', error);
      });
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {popularMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
