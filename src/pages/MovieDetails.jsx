import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=4885446c`
        );

        if (res.data.Response === "False") {
          setError(res.data.Error);
        } else {
          setMovie(res.data);
        }
      } catch (err) {
        setError("Failed to load movie details");
      }
    };

    fetchDetails();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!movie) return <p>Loading...</p>;

  return (
   
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
        <img
            src={movie.Poster}
            alt={movie.Title}
            style={{ width: "300px", float: "left", marginRight: "20px" }}
        />
      
      <h2>{movie.Title}</h2>
      <p><b>Year:</b> {movie.Year}</p>
      <p><b>Genre:</b> {movie.Genre}</p>
      <p><b>Plot:</b> {movie.Plot}</p>
      <p><b>Actors:</b> {movie.Actors}</p>
      <p><b>IMDB Rating:</b> {movie.imdbRating}</p>
    </div>
  );
};

export default MovieDetails;



