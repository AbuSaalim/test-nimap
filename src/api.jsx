import axios from "axios";

export const API_KEY =
  import.meta.env.API_KEY || "c45a857c193f6302f2b5061c3b85e743";
export const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const fetchMovies = (endpoint, params = {}) =>
  axios.get(`${BASE_URL}/${endpoint}`, {
    params: { api_key: API_KEY, language: "en-US", ...params },
  });
