import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        textAlign: "center"
      }}
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"}
        alt={movie.Title}
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>

      <Link to={`/movie/${movie.imdbID}`}>
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
