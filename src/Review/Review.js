import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styles from './Review.module.css';

const API_KEY = '1fe8270af09b2a2e2b930e18d767076b';

function Review() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
      )
      .then(response => {
        setReviews(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, [movieId]);

  return (
    <div className={styles['review-container']}>
      {reviews.length === 0 ? (
        <p>Sorry,but we don't have any reviews for this movie.</p>
      ) : (
        <ul className={styles['review-list']}>
          {reviews.map(review => (
            <li key={review.id} className={styles['review-item']}>
              <h3 className={styles['author']}>{review.author}</h3>
              <p className={styles['content']}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Review.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }.isRequired
    )
  ),
};

export default Review;
