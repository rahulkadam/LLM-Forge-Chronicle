import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleDropdown = (e: React.MouseEvent, dropdownId: string) => {
    e.stopPropagation();
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
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
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
        aria-label="Toggle navigation menu"
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>
      
      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        {/* Home */}
        <li>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/')}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>

        {/* Learn dropdown - Quick access to learning paths */}
        <li className="dropdown">
          <button 
            className="dropdown-trigger"
            onClick={(e) => toggleDropdown(e, 'learn')}
            aria-expanded={activeDropdown === 'learn'}
          >
            Learn <span className="arrow">▾</span>
          </button>
          <div className={`dropdown-content ${activeDropdown === 'learn' ? 'show' : ''}`}>
            <Link 
              to="/blogs/fundamentals/introduction" 
              className={`nav-link ${isActive('/blogs/fundamentals/introduction')}`}
              onClick={() => setIsOpen(false)}
            >
              Start Here
            </Link>
            <Link 
              to="/blogs/fundamentals/chatgpt-guide" 
              className={`nav-link ${isActive('/blogs/fundamentals/chatgpt-guide')}`}
              onClick={() => setIsOpen(false)}
            >
              ChatGPT Guide
            </Link>
            <Link 
              to="/blogs/prompts/basics" 
              className={`nav-link ${isActive('/blogs/prompts/basics')}`}
              onClick={() => setIsOpen(false)}
            >
              Prompt Engineering
            </Link>
            <Link 
              to="/blogs/agents/introduction" 
              className={`nav-link ${isActive('/blogs/agents/introduction')}`}
              onClick={() => setIsOpen(false)}
            >
              LLM Agents
            </Link>
          </div>
        </li>

        {/* Examples dropdown - Quick access to practical examples */}
        <li className="dropdown">
          <button 
            className="dropdown-trigger"
            onClick={(e) => toggleDropdown(e, 'examples')}
            aria-expanded={activeDropdown === 'examples'}
          >
            Examples <span className="arrow">▾</span>
          </button>
          <div className={`dropdown-content ${activeDropdown === 'examples' ? 'show' : ''}`}>
            <Link 
              to="/blogs/agents/building-guide" 
              className={`nav-link ${isActive('/blogs/agents/building-guide')}`}
              onClick={() => setIsOpen(false)}
            >
              Build an Agent
            </Link>
            <Link 
              to="/blogs/advanced/rag-tutorial" 
              className={`nav-link ${isActive('/blogs/advanced/rag-tutorial')}`}
              onClick={() => setIsOpen(false)}
            >
              RAG System
            </Link>
            <Link 
              to="/blogs/tools/langchain" 
              className={`nav-link ${isActive('/blogs/tools/langchain')}`}
              onClick={() => setIsOpen(false)}
            >
              LangChain
            </Link>
            <Link 
              to="/blogs/advanced/vector-databases" 
              className={`nav-link ${isActive('/blogs/advanced/vector-databases')}`}
              onClick={() => setIsOpen(false)}
            >
              Vector DBs
            </Link>
          </div>
        </li>

        {/* Resources */}
        <li>
          <Link 
            to="/blogs/tools/resources" 
            className={`nav-link ${isActive('/blogs/tools/resources')}`}
            onClick={() => setIsOpen(false)}
          >
            Resources
          </Link>
        </li>

        {/* Community */}
        <li>
          <Link 
            to="/community" 
            className={`nav-link ${isActive('/community')}`}
            onClick={() => setIsOpen(false)}
          >
            Community
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;