import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Cast from 'Cast/Cast';
import Review from 'Review/Review';
import styles from './MovieDetails.module.css';

const API_KEY = '1fe8270af09b2a2e2b930e18d767076b';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [showCast, setShowCast] = useState(false);
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
      .then(response => {
        setMovieDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [movieId]);

  const toggleCast = () => {
    setShowCast(!showCast);
  };

  const toggleReview = () => {
    setShowReview(!showReview);
  };

  return (
    <div>
      <div className={styles.movie_details}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className={styles.movie_details_image}
        />
        <div className={styles.movie_details_content}>
          <div className={styles.movie_title}>{movieDetails.title}</div>
          <div className={styles.movie_info}>
            <p className={styles.movie_rating}>
              Rating: {movieDetails.vote_average}
            </p>
            <p className={styles.movie_genre}>
              Genre:{' '}
              {movieDetails.genres &&
                movieDetails.genres.map(genre => genre.name).join(', ')}
            </p>
          </div>
          <div className={styles.movie_overview}>{movieDetails.overview}</div>
        </div>
      </div>
      <div className={styles.additional_info}>
        <h2>Additional information</h2>
        <div>
          <h3 onClick={toggleCast} className={styles.additional_info_title}>
            Cast
          </h3>
          {showCast && <Cast movieId={movieId} />}
        </div>
        <div>
          <h3 onClick={toggleReview} className={styles.additional_info_title}>
            Review
          </h3>
          {showReview && <Review movieId={movieId} />}
        </div>
      </div>
    </div>
  );
}
export default MovieDetails;
