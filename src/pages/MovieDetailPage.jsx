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
        className="container-fluid mt-4"
        style={{
          position: "relative",
          backgroundImage: `url(${IMAGE_URL}${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
          overflow: "hidden", // Ensures proper clipping
        }}
      >
        {/* Overlay for low-opacity effect */}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></div>

        {/* Content */}
        <div
          className="row align-items-center text-white"
          style={{
            position: "relative",
            zIndex: 1, // Ensures content stays above overlay
            padding: "20px", // Adjust padding for spacing
          }}
        >
          <div className="col-12 col-sm-4 col-md-3 mb-3">
            {movie.poster_path && (
              <img
                src={`${IMAGE_URL}${movie.poster_path}`}
                className="img-fluid rounded"
                alt={movie.title}
              />
            )}
          </div>
          <div className="col-12 col-sm-8 col-md-6">
            <h1 className="mb-3">{movie.title}</h1>
            <p>
              <strong>Rating:</strong> ⭐ {movie.vote_average.toFixed(1)}
            </p>
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Runtime:</strong> {movie.runtime} minutes
            </p>
            <p>
              <strong>Genres:</strong>{" "}
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
          <div className="col-12 mt-3">
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>

      {/* Cast Section */}
      <div className="container mt-4">
        <h3 className="text-white mb-3">Cast</h3>
        <div className="row">
          {cast.length > 0 ? (
            cast.slice(0, 5).map((actor) => (
              <div
                key={actor.id}
                className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4"
              >
                <div
                  className="card text-center bg-black"
                  style={{ width: "100%" }}
                >
                  {actor.profile_path ? (
                    <img
                      src={`${IMAGE_URL}${actor.profile_path}`}
                      alt={actor.name}
                      className="card-img-top"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "200px",
                        backgroundColor: "#555",
                      }}
                    ></div>
                  )}
                  <div className="card-body">
                    <h5 className="card-title text-white">{actor.name}</h5>
                    <p className="card-text text-white">{actor.character}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No cast information available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetailPage;
