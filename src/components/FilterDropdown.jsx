import React from 'react';

const FilterDropdown = ({ onChange }) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: "10px",
        marginBottom: "20px",
        borderRadius: "6px"
      }}
    >
      <option value="">All</option>
      <option value="movie">Movie</option>
      <option value="series">Series</option>
      <option value="episode">Episode</option>
    </select>
  );
};

export default FilterDropdown;
