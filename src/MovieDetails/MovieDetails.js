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
  const cameBack = location.state?.from ?? '/';
  const searchParams = new URLSearchParams(location.search);
  const isCastOpen =
    searchParams.get('cast') === 'true' ||
    localStorage.getItem(`cast-${movieId}`) === 'true';
  const isReviewOpen =
    searchParams.get('review') === 'true' ||
    localStorage.getItem(`review-${movieId}`) === 'true';

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

  useEffect(() => {
    setShowCast(isCastOpen);
    setShowReview(isReviewOpen);
  }, [isCastOpen, isReviewOpen]);

  const toggleCast = () => {
    const newState = !showCast;
    setShowCast(newState);
    updateUrlState('cast', newState);
    localStorage.setItem(`cast-${movieId}`, newState.toString());
  };

  const toggleReview = () => {
    const newState = !showReview;
    setShowReview(newState);
    updateUrlState('review', newState);
    localStorage.setItem(`review-${movieId}`, newState.toString());
  };

  const updateUrlState = (section, isOpen) => {
    const search = new URLSearchParams(location.search);
    search.set(section, isOpen ? 'true' : 'false');
    const newPath = `${location.pathname}?${search.toString()}`;
    window.history.replaceState(null, '', newPath);
  };

  return (
    <div>
      <div className={styles.movie_details}>
        <Link to={cameBack} className={styles.goBackLink}>
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
          <Link
            to={`/movies/${movieId}/cast`}
            state={{ from: cameBack }}
            onClick={toggleCast}
          >
            Cast
          </Link>
          {showCast && <Cast movieId={movieId} />}
        </div>
        <div>
          <Link
            to={`/movies/${movieId}/reviews`}
            state={{ from: cameBack }}
            onClick={toggleReview}
          >
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
