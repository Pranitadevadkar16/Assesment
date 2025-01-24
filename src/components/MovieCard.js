import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const imageBaseURL = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="movie-card">
      <img src={`${imageBaseURL}${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
};

export default MovieCard;