import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
        alt={movie.Title}
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />

      <div style={{ padding: "10px" }}>
        <h3 style={{ fontSize: "16px" }}>{movie.Title}</h3>
        <p style={{ color: "#666" }}>{movie.Year}</p>

        <Link
          to={`/movie/${movie.imdbID}`}
          style={{ color: "#ff6600", textDecoration: "none" }}
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
