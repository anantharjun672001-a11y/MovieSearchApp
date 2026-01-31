import MovieCard from "../components/MovieCard";

const Favorites = ({ favorites, setFavorites }) => {
  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <h2 style={{ marginBottom: "20px" }}>My Favorites</h2>

      {favorites.length === 0 && (
        <p>No favorites added yet</p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px"
        }}
      >
        {favorites.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            favorites={favorites}
            setFavorites={setFavorites}
            isFavoritesPage={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
