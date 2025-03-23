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
            <Link to="/prompt-engineering" className={`nav-link ${isActive('/prompt-engineering')}`}>
              Prompt Engineering
            </Link>
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
              AI Basics
            </Link>
            <Link to="/llm-agent" className={`nav-link ${isActive('/llm-agent')}`}>
              LLM Introduction
            </Link>
            <Link to="/ai-basics/chatgpt-guide" className={`nav-link ${isActive('/ai-basics/chatgpt-guide')}`}>
              ChatGPT & LLM Use Cases
            </Link>
          </div>
        </li>
        
        {/* Blogs - single link */}
        <li>
          <Link to="/blogs" className={`nav-link ${isActive('/blogs')}`}>
            Blogs
          </Link>
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
            <Link to="/community" className={`nav-link ${isActive('/community')}`}>
              Community
            </Link>
            <Link to="/resources" className={`nav-link ${isActive('/resources')}`}>
              Resources
            </Link>
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