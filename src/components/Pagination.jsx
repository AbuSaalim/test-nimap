import React from "react";
import "../../src/App";

const Pagination = ({ currentPage, onPageChange }) => {
  const totalPages = 8;
  const visiblePages = [1, 2, 3];

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <ul className="pagination pb-2 mx justify-content-center">
      <li className="page-item">
        <button
          className="page-link custom-btn rounded-pill"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
      </li>

      {visiblePages.map((page) => (
        <li
          key={page}
          className={`page-item ${page === currentPage ? "active" : ""}`}
        >
          <button
            className="page-link custom-btn rounded-pill"
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        </li>
      ))}

      <li className="page-item">
        <button
          className="page-link custom-btn rounded-pill"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
