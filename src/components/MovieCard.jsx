import { Link } from "react-router-dom";

const MovieCard = ({ movie, favorites, setFavorites, isFavoritesPage}) => {

  
  const isFavorite = favorites.some(
    (fav) => fav.imdbID === movie.imdbID
  );

  
  const addToFavorites = () => {
    if (!isFavorite) {
      setFavorites([...favorites, movie]);
    }
  };
  const removeFromFavorites = () => {
    const updated = favorites.filter(
        (fav) => fav.imdbID !== movie.imdbID
    );
    setFavorites(updated);
  };

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

        <br />

        {isFavoritesPage ? (
        <button
            onClick={removeFromFavorites}
            style={{
            marginTop: "8px",
            padding: "6px 10px",
            background: "#ef4444",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
            }}
        >
            Remove from Favorites 
        </button>
        ) : (
        <button
            onClick={addToFavorites}
            disabled={isFavorite}
            style={{
            marginTop: "8px",
            padding: "6px 10px",
            background: isFavorite ? "#22c55e" : "#ff6600",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: isFavorite ? "not-allowed" : "pointer",
            opacity: isFavorite ? 0.8 : 1
            }}
        >
            {isFavorite ? "Added to Favorites " : "Add to Favorites "}
        </button>
        )}

      </div>
    </div>
  );
};

export default MovieCard;
