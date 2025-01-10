import { Link } from "react-router-dom";
import { IMAGE_URL } from "../api";

const MovieCard = ({ movie }) => (
  <div className="card h-100">
    <Link to={`/movie/${movie.id}`}>
      <img
        src={`${IMAGE_URL}${movie.poster_path}`}
        className="card-img-top"
        alt={movie.title}
      />
    </Link>
    <div className="card-body bg-dark">
      <h5 className="text-white card-title text-truncate">{movie.title}</h5>
      <p className="text-white">Rating: ⭐ {movie.vote_average}</p>
    </div>
  </div>
);

export default MovieCard;
