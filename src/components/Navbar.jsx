import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Import search icon

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <div className="container-fluid px-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand text-white" href="/">
          MovieApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/">
                Popular
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/top-rated">
                Top Rated
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/upcoming">
                Upcoming
              </NavLink>
            </li>
          </ul>
          <form
            className="d-flex align-items-center bg-light rounded px-2"
            onSubmit={handleSearch}
            style={{
              border: "1px solid #ced4da",
              width: "250px",
            }}
          >
            <input
              className="form-control border-0 bg-transparent"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                boxShadow: "none",
              }}
            />
            <button
              type="submit"
              className="btn border-0 bg-transparent p-0"
              style={{
                color: "#6c757d",
              }}
            >
              <FaSearch />
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
