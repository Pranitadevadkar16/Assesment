import React from "react";
import "./MovieList.css";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
          <h3 className="movie-title">{movie.title}</h3>
          <p className="movie-rating">Rating: {movie.vote_average}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
