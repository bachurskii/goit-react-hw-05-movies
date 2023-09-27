import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styles from './App.module.css';

const Home = lazy(() => import('../Home/Home'));
const Movies = lazy(() => import('../Movie/Movie'));
const MovieDetails = lazy(() => import('../MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Review/Review'));
const NotFoundPage = lazy(() => import('../NotFoundPage/notFoundPage'));
const App = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.siteTitle}>Movie Hub</h1>
        <nav>
          <ul className={styles.nav}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/movies" className={styles.navLink}>
                Movies
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
