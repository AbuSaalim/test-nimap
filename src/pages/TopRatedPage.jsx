import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getMovies } from "../features/moviesSlice";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const TopRatedPage = ({ second }) => {
  const dispatch = useDispatch();
  const { movies, status } = useSelector((state) => state.movies);
  const [currentPage, setCurrentPage] = React.useState(1);

  useEffect(() => {
    dispatch(getMovies({ endpoint: "movie/top_rated", page: currentPage }));
  }, [currentPage, dispatch]);

  return (
    <div className="container mt-4">
      <h1 className="text-white">Top Rated Movies</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "success" && (
        <>
          <div className="row">
            {movies.map((movie) => (
              <div className="col-md-3 mb-4" key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
          <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
        </>
      )}
      {status === "failed" && <p>Failed to load movies.</p>}
    </div>
  );
};

TopRatedPage.propTypes = {
  second: PropTypes.number, // Correct validation for the `second` prop
};

export default TopRatedPage;
