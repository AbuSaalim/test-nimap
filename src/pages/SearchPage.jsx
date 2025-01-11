import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovies } from "../api";
import MovieCard from "../components/MovieCard";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (query) {
      fetchMovies(`search/movie`, { query })
        .then((response) => {
          setMovies(response.data.results);
          setError(null);
        })
        .catch((err) => {
          console.error("Error fetching search results:", err);
          setError("Failed to load search results. Please try again.");
        });
    }
  }, [query]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Search Results for "{query}"</h1>
      {error && <p className="text-danger">{error}</p>}
      {movies.length === 0 && !error && (
        <p>No results found. Try searching for something else!</p>
      )}
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-3 mb-4" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
