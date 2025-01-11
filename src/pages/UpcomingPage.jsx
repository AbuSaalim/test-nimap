import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../features/moviesSlice";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const UpcomingPage = () => {
  const dispatch = useDispatch();
  const { movies, status } = useSelector((state) => state.movies);
  const [currentPage, setCurrentPage] = React.useState(1);

  useEffect(() => {
    dispatch(getMovies({ endpoint: "movie/upcoming", page: currentPage }));
  }, [currentPage, dispatch]);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-white">Upcoming Movies</h1>
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
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
      {status === "failed" && <p>Failed to load movies.</p>}
    </div>
  );
};

export default UpcomingPage;
