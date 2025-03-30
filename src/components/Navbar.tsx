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
          <Link to="/getting-started" className={`nav-link ${isActive('/getting-started')}`}>
            Getting Started
          </Link>
        </li>
        
        {/* Development dropdown */}
        <li className="dropdown">
          <button 
            className="dropdown-trigger"
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('llm-dev');
            }}
          >
            Develop LLMs <span className="arrow">▾</span>
          </button>
          <div className={`dropdown-content ${activeDropdown === 'llm-dev' ? 'show' : ''}`}>
            <div className="dropdown-header">Prompt Engineering:</div>
            <Link to="/prompt-engineering" className={`nav-link ${isActive('/prompt-engineering')}`}>
              Basics
            </Link>
            <Link to="/prompt-engineering/intermediate" className={`nav-link ${isActive('/prompt-engineering/intermediate')}`}>
              Intermediate
            </Link>
            <Link to="/prompt-engineering/advanced" className={`nav-link ${isActive('/prompt-engineering/advanced')}`}>
              Advanced
            </Link>
            <div className="dropdown-divider"></div>
            <div className="dropdown-header">LLM Applications:</div>
            {/* 'Build an Agent' link removed as requested */}
            <Link to="/llm-agent/basic" className={`nav-link ${isActive('/llm-agent/basic')}`}>
              Basic LLM Agent
            </Link>
            <Link to="/BuildingLLMAgent" className={`nav-link ${isActive('/BuildingLLMAgent')}`}>
              File System Agent Example
            </Link>
          </div>
        </li>
        
        {/* LLM Fundamentals dropdown */}
        <li className="dropdown">
          <button 
            className="dropdown-trigger"
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('fundamentals');
            }}
          >
            LLM Fundamentals <span className="arrow">▾</span>
          </button>
          <div className={`dropdown-content ${activeDropdown === 'fundamentals' ? 'show' : ''}`}>
            <Link to="/ai-basics" className={`nav-link ${isActive('/ai-basics')}`}>
              LLM Introduction
            </Link>
            <Link to="/llm-agent" className={`nav-link ${isActive('/llm-agent')}`}>
              LLM Capabilities
            </Link>
            <Link to="/ai-basics/chatgpt-guide" className={`nav-link ${isActive('/ai-basics/chatgpt-guide')}`}>
              ChatGPT & LLM Use Cases
            </Link>
            <Link to="/llm-fundamentals/developer-quick-start" className={`nav-link ${isActive('/llm-fundamentals/developer-quick-start')}`}>
              Developer Quick Start
            </Link>
          </div>
        </li>
        
        {/* Blogs - single link */}
        <li>
          <Link to="/blogs" className={`nav-link ${isActive('/blogs')}`}>
            Blogs
          </Link>
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