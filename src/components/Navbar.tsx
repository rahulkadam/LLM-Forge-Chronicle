import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTutorials, setShowTutorials] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setShowTutorials(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.navbar')) {
        setIsOpen(false);
        setShowTutorials(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          LLM Forge Chronicle
        </Link>
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
            setShowTutorials(false);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
        
        <div className="dropdown">
          <button 
            className="dropdown-trigger"
            onClick={(e) => {
              e.stopPropagation();
              setShowTutorials(!showTutorials);
            }}
          >
            Tutorials <span className="arrow">▾</span>
          </button>
          <div className={`dropdown-content ${showTutorials ? 'show' : ''}`}>
            <Link to="/forge-tutorial" className={`nav-link ${isActive('/forge-tutorial')}`}>
              Forge Tutorial
            </Link>
            <Link to="/ai-tutorial" className={`nav-link ${isActive('/ai-tutorial')}`}>
              AI Tutorial
            </Link>
          </div>
        </div>

        <Link to="/llm-agent" className={`nav-link ${isActive('/llm-agent')}`}>
          LLM Agent
        </Link>
        <Link to="/about" className={`nav-link ${isActive('/about')}`}>
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;