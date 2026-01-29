import React from 'react';

const SearchBar = ({onSearch}) => {
    return (
        <div>
            <input 
                type="text"
                placeholder='Search movies...'
                onChange={(e)=>onSearch(e.target.value)}
                />
        </div>
    );
};

export default SearchBar;