import React from 'react';
const Pagination = ({ page, setPage }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        style={{ marginRight: "10px" }}
      >
        Prev
      </button>

      <span>Page {page}</span>

      <button
        onClick={() => setPage(page + 1)}
        style={{ marginLeft: "10px" }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
