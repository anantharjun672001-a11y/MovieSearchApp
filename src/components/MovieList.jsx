import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px"
      }}
    >
     {movies.map((movie, index) => (
        <MovieCard
            key={`${movie.imdbID}-${index}`} 
            movie={movie}
        />
        ))}

    </div>
  );
};

export default MovieList;
