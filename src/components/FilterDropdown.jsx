import React from 'react';

const FilterDropdown = ({onChange}) => {
    return (
        <div>
            <select onChange={(e)=>onChange(e.target.value)}>
                <option  value="">All</option>
                <option value="movies">Movies</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>
            </select>
        </div>
    );
};

export default FilterDropdown;