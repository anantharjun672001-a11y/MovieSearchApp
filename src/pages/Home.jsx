import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import axios from 'axios';

const Home = () => {
    const[search,setSearch]=useState("");
    const[movies,setMovies]=useState([]);
    const[page,setPage]=useState(1);
    const[type,setType]=useState("");
    const[error,setError]=useState("");

    useEffect(() => {
        if (!search || search.length < 3) {
            setMovies([]);
            setError("");
            return;
        }

        const timer = setTimeout(() => {
            const fetchMovies = async () => {
            try {
                setError("");

                const res = await axios.get(
                `https://www.omdbapi.com/?s=${search}&page=${page}&type=${type}&apikey=4885446c`
                );

                console.log("API RESPONSE:", res.data);

                if (res.data.Response === "False") {
                setMovies([]);
                setError(res.data.Error);
                } else {
                setMovies(res.data.Search);
                }
            } catch (err) {
                setError("Something went wrong");
            }
            };

            fetchMovies();
        }, 600); 

    return () => clearTimeout(timer);
    }, [search, page, type]);


    return (
        <div>
            <h2>Movie Search</h2>
            <SearchBar
                onSearch={(value)=>{setSearch(value);setPage(1);}}
            />
            <FilterDropdown
                onChange={(value)=>{setType(value);setPage(1);}}
            />
           
            
            {error && <p>{error}</p>}

            {!error && movies.length > 0 && (
            <>
                <MovieList movies={movies} />
                <Pagination page={page} setPage={setPage} />
            </>
            )}


        </div>
    );
};

export default Home;