// src/pages/Movie.js
// Use useParams to get the movie ID from the URL and fetch the movie details.
import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

const movies = [
  { id: 1, title: 'Inception', time: '148 min', genres: ['Action', 'Sci-Fi'] },
  { id: 2, title: 'Interstellar', time: '169 min', genres: ['Adventure', 'Drama'] },
  { id: 3, title: 'Dunkirk', time: '106 min', genres: ['Action', 'Drama'] }
];

const Movie = () => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre, index) => (
        <span key={index}>{genre} </span>
      ))}
    </div>
  );
};

export default Movie;
