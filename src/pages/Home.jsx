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

    useEffect(()=>{
        console.log("SEARCH VALUE:", search);
        if(!search)return;
        const fetchMovies=async()=>{
            try{
                setError("");
                 const res = await axios.get(
                    `https://www.omdbapi.com/?s=${search}&page=${page}&type=${type}&apikey=9f6a1234`
                    );

                    console.log("API RESPONSE:", res.data); // DEBUG
                if(res.data.Response===false){
                    setMovies([]);
                    setError(res.data.Error);
                }else{
                    setMovies(res.data.Search);
                }
            }catch(err){
                setError("Something Went Wrong. Please try Again.");
            }
        };

            fetchMovies();
    },[search,page,type])
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
                <MovieList movies={movies}/>

            {movies.length > 0 && (
                <Pagination page={page} setPage={setPage} />
            )}
            
        </div>
    );
};

export default Home;