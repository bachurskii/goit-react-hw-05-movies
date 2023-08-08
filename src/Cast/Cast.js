import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';

const API_KEY = '1fe8270af09b2a2e2b930e18d767076b';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
      )
      .then(response => {
        setCast(response.data.cast);
      })
      .catch(error => {
        console.error('Error fetching cast:', error);
      });
  }, [movieId]);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {cast.map(actor => (
          <li key={actor.id} className={styles.item}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
              alt={actor.name}
              className={styles['actor-image']}
            />
            <p className={styles['actor-name']}>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }.isRequired
    )
  ),
};

export default Cast;
