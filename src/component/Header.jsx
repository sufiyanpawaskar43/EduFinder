import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">EduFinder <span className="emoji">📖</span></div>
      
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/Contact" className="nav-link">Contact</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/login" className="nav-link">Login</Link></li>
      </ul>

      <Link to="/Premium">
        <button className="btn-success">Buy Premium</button>
      </Link>

    </nav>
  );
}

export default Header;
