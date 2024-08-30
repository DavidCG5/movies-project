import axios from "axios";

const apiKey = "6718451ecce89972cb04f725cf136c5b";
const apiBaseUrl = "https://api.themoviedb.org/3";
const language = "es-MX";

export const getPopularMovies = () => {
  return axios.get(`${apiBaseUrl}/movie/popular`, {
    params: {
      api_key: apiKey,
      language: language,
    },
  });
};
export const getMovieDetails = (id) => {
  return axios.get(`${apiBaseUrl}/movie/${id}`, {
    params: {
      api_key: apiKey,
      language: language,
    },
  });
};
export const searchMovies = (query) => {
  return axios.get(`${apiBaseUrl}/search/movie`, {
    params: {
      api_key: apiKey,
      query,
      language: language,
    },
  });
};

export const getSingleMovie = (id) => {
  return axios.get(`${apiBaseUrl}/movie/${id}`, {
    params: {
      api_key: apiKey,
      language: language,
    },
  });
};
