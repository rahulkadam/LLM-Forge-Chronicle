import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          My React App
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/tutorial" className="nav-link">Tutorial</Link>
        <Link to="/ds-guidance" className="nav-link">DS Guide</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;