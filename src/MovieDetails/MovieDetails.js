import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './MovieDetails.module.css';
import Cast from '../Cast/Cast';
import Review from '../Review/Review';

const API_KEY = '1fe8270af09b2a2e2b930e18d767076b';

function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
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
        <Link to={location.state?.from || '/'} className={styles.goBackLink}>
          Go back
        </Link>
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
          <Link to={`/movies/${movieId}/cast`} onClick={toggleCast}>
            Cast
          </Link>
          {showCast && <Cast movieId={movieId} />}
        </div>
        <div>
          <Link to={`/movies/${movieId}/reviews`} onClick={toggleReview}>
            Reviews
          </Link>
          {showReview && <Review movieId={movieId} />}
        </div>
      </div>
      <Routes>
        <Route path="/movies/:movieId/*" element={<Cast />} />
        <Route path="/movies/:movieId/reviews/*" element={<Review />} />
      </Routes>
    </div>
  );
}

MovieDetails.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default MovieDetails;
