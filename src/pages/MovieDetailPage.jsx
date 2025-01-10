import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovies, IMAGE_URL } from "../api";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    // Fetch movie details
    fetchMovies(`movie/${id}`).then((response) => setMovie(response.data));

    // Fetch movie cast
    fetchMovies(`movie/${id}/credits`).then((response) =>
      setCast(response.data.cast)
    );
  }, [id]);

  // Return loading state if movie is null
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        className="container-fluid mx-4 mt-4"
        style={{
          backgroundImage: `url(${IMAGE_URL}${movie.backdrop_path})`,
          backgroundSize: "cover",
          height: "100vh",
          backgroundPosition: "center",
          padding: "10px 10px",
          borderRadius: "10px",
        }}
      >
        <div className="row">
          <div className="col-md-2">
            {/* Check if poster_path exists */}
            {movie.poster_path && (
              <img
                src={`${IMAGE_URL}${movie.poster_path}`}
                className="img-fluid"
                alt={movie.title}
              />
            )}
          </div>
          <div className="col-md-4">
            <h1 className="text-white">{movie.title}</h1>
            <p className="text-white">
              <strong>Rating:</strong> ⭐ {movie.vote_average.toFixed(1)}
            </p>
            <p className="text-white">
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p className="text-white">
              <strong>Runtime:</strong> {movie.runtime} minutes
            </p>
            <p className="text-white">
              <strong>Genres:</strong>{" "}
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
          <p style={{ width: "50vw" }} className="text-white">
            {movie.overview}
          </p>
        </div>
      </div>
      {/* Cast Section */}
      <div className="row mt-3" style={{ marginTop: "30px" }}>
        <h3 className="text-white">Cast</h3>
        {cast.length > 0 ? (
          cast.slice(0, 5).map((actor) => (
            <div key={actor.id} className="col-md-2 mb-4">
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="card text-center bg-black"
                    style={{ width: "250px" }}
                  >
                    <img
                      src={`${IMAGE_URL}${actor.profile_path}`}
                      alt={actor.name}
                      className="card-img-top "
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-white">{actor.name}</h5>
                      <p className="card-text text-white">{actor.character}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No cast information available.</p>
        )}
      </div>
    </>
  );
};

export default MovieDetailPage;
