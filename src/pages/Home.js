// src/pages/Home.js
import React from 'react';
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

const movies = [
  { id: 1, title: 'Inception' },
  { id: 2, title: 'Interstellar' },
  { id: 3, title: 'Dunkirk' }
];

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
