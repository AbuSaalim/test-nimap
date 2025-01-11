import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../features/moviesSlice";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const dispatch = useDispatch();
  const { movies, status } = useSelector((state) => state.movies);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getMovies({ endpoint: "movie/popular", page: currentPage }));
  }, [currentPage, dispatch]);

  return (
    <div className="container mt-4">
      <h1 className="text-white">Popular Movies</h1>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-3 mb-4" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};

export default HomePage;
