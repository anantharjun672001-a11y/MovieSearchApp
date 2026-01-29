import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MovieDetails = () => {
    const {id}=useParams();
    const[movie,setMovie]=useState(null);
    const[error,setError]=useState("");

    useEffect(()=>{
        const fetchMoviesDetails=async ()=>{
            try {
                const res = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=4885446c`);
                 if(res.data.Response==="False"){
                    setError(res.data.Error)
                 }  else{
                    setMovie(rs.data)
                 } 

            } catch (err) {
                setError("Failed to load movie details");
            }
        };

        fetchMoviesDetails();
    },[id])
    return (
        <div>
            <img src={movie.Poster} alt={movie.Title}/>
            <h2>{movie.Title}</h2>
            <p><b>Year:</b>{movie.Year}</p>
            <p><b>Genre:</b>{movie.Genre}</p>
            <p><b>Plot:</b>{movie.Plot}</p>
            <p><b>Cast:</b>{movie.Actors}</p>
            <p><b>IMDB Rating:</b>{movie.imdbRating}</p>
        </div>
    );
};

export default MovieDetails;