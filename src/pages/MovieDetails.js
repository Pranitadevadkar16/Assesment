import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    // Fetch movie details
    const fetchMovieDetails = async () => {
      const movieResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743`
      );
      const movieData = await movieResponse.json();
      setMovie(movieData);

      // Fetch cast information
      const castResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743`
      );
      const castData = await castResponse.json();
      setCast(castData.cast.slice(0, 10)); // Display top 10 cast members
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div style={{ backgroundColor: "#141414", color: "white", padding: "20px" }}>
      {/* Movie Header */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
  {/* Poster */}
  <img
    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
    alt={movie.title}
    style={{
      borderRadius: "10px",
      maxHeight: "400px",
      width: "auto",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    }}
  />

  {/* Movie Details */}
<div style={{ flex: 1 }}>
    <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>{movie.title}</h1>
    <p style={{ fontSize: "1.2rem", marginBottom: "5px" }}>
      <strong>Rating:</strong> {movie.vote_average} / 10
    </p>
    <p style={{ fontSize: "1.1rem", marginBottom: "5px" }}>
      <strong>Duration:</strong> {movie.runtime} min
    </p>
    <p style={{ fontSize: "1.1rem", marginBottom: "5px" }}>
      <strong>Genre:</strong> {movie.genres.map((genre) => genre.name).join(", ")}
    </p>
    <p style={{ fontSize: "1.1rem" }}>
      <strong>Release Date:</strong> {new Date(movie.release_date).toDateString()}
    </p>
  </div>
</div>


      {/* Overview */}
      <div
        style={{
          backgroundColor: "#1f1f1f",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h2>Overview</h2>
        <p>{movie.overview}</p>
      </div>

      {/* Cast Section */}
      <div>
        <h2>Cast</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "15px",
          }}
        >
          {cast.map((actor) => (
            <div key={actor.id} style={{ textAlign: "center" }}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                style={{
                  borderRadius: "10px",
                  width: "100%",
                  maxHeight: "180px",
                  objectFit: "cover",
                }}
              />
              <p>{actor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
