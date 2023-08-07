import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movie/Movie'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Review/Review'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Review />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

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
