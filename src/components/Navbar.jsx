import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import { FaBell, FaShoppingCart, FaSearch } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [levelFilter, setLevelFilter] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handleLevelChange = (e) => {
    setLevelFilter(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          Learnify
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/quizzes">Quizzes</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="navbar-center">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="search-button" aria-label="Search">
            <FaSearch />
          </button>
          <select value={categoryFilter} onChange={handleCategoryChange} className="filter-select">
            <option value="">All Categories</option>
            <option value="development">Development</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
            <option value="business">Business</option>
          </select>
          <select value={levelFilter} onChange={handleLevelChange} className="filter-select">
            <option value="">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>

      <div className="navbar-right">
        <div className="icon-button notification-icon" aria-label="Notifications">
          <FaBell />
          <span className="badge-dot"></span>
        </div>
        <div className="icon-button cart-icon" aria-label="Cart">
          <FaShoppingCart />
          <span className="badge-count">3</span>
        </div>
        <Profile />
      </div>
    </nav>
  );
};

export default Navbar;
 