import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      onChange={(e) => onSearch(e.target.value)}
      style={{
        width: "100%",
        padding: "12px",
        fontSize: "16px",
        marginBottom: "15px",
        borderRadius: "6px",
        border: "1px solid #ccc"
      }}
    />
  );
};

export default SearchBar;
