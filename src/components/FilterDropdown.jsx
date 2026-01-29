import React from 'react';

const FilterDropdown = ({onChange}) => {
    return (
        <div>
            <select onChange={(e)=>onChange(e.target.value)}>
                <option  value="">All</option>
            </select>
        </div>
    );
};

export default FilterDropdown;