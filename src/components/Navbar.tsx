import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleDropdown = (dropdownId: string) => {
    if (activeDropdown === dropdownId) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownId);
    }
  };

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.navbar')) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          <img src="/llm-logo.png" alt="LLM Chronicle Logo" className="nav-logo" />
          <span>Mastering LLM</span>
        </Link>
      </div>
      
      <button 
        className="hamburger"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
          setActiveDropdown(null);
        }}
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>
      
      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        {/* Getting Started (Roadmap) - single link */}
        <li>
          <Link to="/roadmap" className={`nav-link ${isActive('/roadmap')}`}>
            Getting Started
          </Link>
        </li>
        
        {/* Fundamentals dropdown */}
        <li className="dropdown">
          <button 
            className="dropdown-trigger"
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('fundamentals');
            }}
          >
            AI Principles <span className="arrow">▾</span>
          </button>
          <div className={`dropdown-content ${activeDropdown === 'fundamentals' ? 'show' : ''}`}>
            <Link to="/ai-basics" className={`nav-link ${isActive('/ai-basics')}`}>
              AI Basics
            </Link>
            <Link to="/llm-agent" className={`nav-link ${isActive('/llm-agent')}`}>
              LLM Introduction
            </Link>
            <Link to="/ai-basics/chatgpt-guide" className={`nav-link ${isActive('/ai-basics/chatgpt-guide')}`}>
              ChatGPT Guide
            </Link>
          </div>
        </li>
        
        {/* LLM Development dropdown */}
        <li className="dropdown">
          <button 
            className="dropdown-trigger"
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('llm-dev');
            }}
          >
            Development <span className="arrow">▾</span>
          </button>
          <div className={`dropdown-content ${activeDropdown === 'llm-dev' ? 'show' : ''}`}>
            <Link to="/prompt-engineering" className={`nav-link ${isActive('/prompt-engineering')}`}>
              Prompt Engineering
            </Link>
            <Link to="/BuildingLLMAgent" className={`nav-link ${isActive('/BuildingLLMAgent')}`}>
              Building LLM Agents
            </Link>
            <Link to="/professional" className={`nav-link ${isActive('/professional')}`}>
              Professional Implementation
            </Link>
            <Link to="/expert" className={`nav-link ${isActive('/expert')}`}>
              Advanced Techniques
            </Link>
          </div>
        </li>
        
        {/* Resources dropdown */}
        <li className="dropdown">
          <button 
            className="dropdown-trigger"
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('resources');
            }}
          >
            Resources <span className="arrow">▾</span>
          </button>
          <div className={`dropdown-content ${activeDropdown === 'resources' ? 'show' : ''}`}>
            <Link to="/ai-tools" className={`nav-link ${isActive('/ai-tools')}`}>
              Tools & References
            </Link>
            <a href="#" className="nav-link">
              Community
            </a>
            <a href="#" className="nav-link">
              Additional Materials
            </a>
          </div>
        </li>
        
        {/* About - single link */}
        <li>
          <Link to="/about" className={`nav-link ${isActive('/about')}`}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
