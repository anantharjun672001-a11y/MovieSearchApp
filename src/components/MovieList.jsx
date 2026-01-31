import MovieCard from "./MovieCard";

const MovieList = ({ movies , favorites, setFavorites }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "20px",
        marginBottom: "30px"
      }}
    >
      {movies.map((movie, index) => (
        <MovieCard
          key={`${movie.imdbID}-${index}`}
          movie={movie}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      ))}
    </div>
  );
};

export default MovieList;
