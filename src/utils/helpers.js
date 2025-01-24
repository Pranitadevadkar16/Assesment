import axios from "axios";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

/**
 * Fetch popular movies.
 * @param {number} page - Page number for pagination.
 * @returns {Promise} - Axios response with popular movies.
 */
export const getPopularMovies = async (page = 1) => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page,
    },
  });
  return response.data;
};

/**
 * Fetch top-rated movies.
 * @param {number} page - Page number for pagination.
 * @returns {Promise} - Axios response with top-rated movies.
 */
export const getTopRatedMovies = async (page = 1) => {
  const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page,
    },
  });
  return response.data;
};

/**
 * Fetch upcoming movies.
 * @param {number} page - Page number for pagination.
 * @returns {Promise} - Axios response with upcoming movies.
 */
export const getUpcomingMovies = async (page = 1) => {
  const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page,
    },
  });
  return response.data;
};

/**
 * Fetch movie details by ID.
 * @param {number} movieId - ID of the movie.
 * @returns {Promise} - Axios response with movie details.
 */
export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });
  return response.data;
};

/**
 * Fetch movie cast details by movie ID.
 * @param {number} movieId - ID of the movie.
 * @returns {Promise} - Axios response with movie cast details.
 */
export const getMovieCast = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });
  return response.data.cast;
};

/**
 * Fetch search results for a movie.
 * @param {string} query - Search query string.
 * @param {number} page - Page number for pagination.
 * @returns {Promise} - Axios response with search results.
 */
export const searchMovies = async (query, page = 1) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      query,
      page,
    },
  });
  return response.data;
};

/**
 * Get full image URL from the relative path.
 * @param {string} path - Relative image path.
 * @returns {string} - Full image URL.
 */
export const getImageUrl = (path) => `${IMAGE_BASE_URL}${path}`;
