import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styles from './App.module.css';

const Home = lazy(() => import('../Home/Home'));
const Movies = lazy(() => import('../Movie/Movie'));
const MovieDetails = lazy(() => import('../MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Review/Review'));

const App = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav>
          <ul className={styles.nav}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/Movies" className={styles.navLink}>
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
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     ></div>
//   );
// };
