import React, { useEffect, useState } from "react";
import { getPopularMovies } from "../utils/api";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPopularMovies();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      {/* Render movie cards */}
    </div>
  );
};

export default Home;
