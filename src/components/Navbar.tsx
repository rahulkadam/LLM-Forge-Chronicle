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

  const toggleDropdown = (e: React.MouseEvent, dropdownId: string) => {
    e.stopPropagation();
    if (activeDropdown === dropdownId) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownId);
    }
  };

  // Close mobile menu and dropdowns when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Close mobile menu and dropdowns when clicking outside
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
        <li>
          <Link 
            to="/getting-started" 
            className={`nav-link ${isActive('/getting-started')}`}
            onClick={() => setIsOpen(false)}
          >
            Getting Started
          </Link>
        </li>
        
        <li className="dropdown">
          <button 
            className="dropdown-trigger"
            onClick={(e) => toggleDropdown(e, 'fundamentals')}
            aria-expanded={activeDropdown === 'fundamentals'}
          >
            LLM Fundamentals <span className="arrow">▾</span>
          </button>
          <div className={`dropdown-content ${activeDropdown === 'fundamentals' ? 'show' : ''}`}>
            <div className="dropdown-header">Core Concepts</div>
            <Link 
              to="/ai-basics" 
              className={`nav-link ${isActive('/ai-basics')}`}
              onClick={() => setIsOpen(false)}
            >
              LLM Introduction
            </Link>
            <Link 
              to="/llm-agent" 
              className={`nav-link ${isActive('/llm-agent')}`}
              onClick={() => setIsOpen(false)}
            >
              LLM Capabilities
            </Link>
            <Link 
              to="/ai-basics/chatgpt-guide" 
              className={`nav-link ${isActive('/ai-basics/chatgpt-guide')}`}
              onClick={() => setIsOpen(false)}
            >
              ChatGPT & LLM Use Cases
            </Link>
            
            <div className="dropdown-divider"></div>
            <div className="dropdown-header">Prompt Engineering</div>
            <Link 
              to="/prompt-engineering" 
              className={`nav-link ${isActive('/prompt-engineering')}`}
              onClick={() => setIsOpen(false)}
            >
              Fundamentals
            </Link>
            <Link 
              to="/prompt-engineering/intermediate" 
              className={`nav-link ${isActive('/prompt-engineering/intermediate')}`}
              onClick={() => setIsOpen(false)}
            >
              Intermediate
            </Link>
            <Link 
              to="/prompt-engineering/advanced" 
              className={`nav-link ${isActive('/prompt-engineering/advanced')}`}
              onClick={() => setIsOpen(false)}
            >
              Advanced
            </Link>
          </div>
        </li>

        <li className="dropdown">
          <button 
            className="dropdown-trigger"
            onClick={(e) => toggleDropdown(e, 'agents')}
            aria-expanded={activeDropdown === 'agents'}
          >
            Agents <span className="arrow">▾</span>
          </button>
          <div className={`dropdown-content ${activeDropdown === 'agents' ? 'show' : ''}`}>
            <div className="dropdown-header">Agent Development</div>
            <Link 
              to="/llm-agent/basic" 
              className={`nav-link ${isActive('/llm-agent/basic')}`}
              onClick={() => setIsOpen(false)}
            >
              Basic LLM Agent
            </Link>
            <Link 
              to="/BuildingLLMAgent" 
              className={`nav-link ${isActive('/BuildingLLMAgent')}`}
              onClick={() => setIsOpen(false)}
            >
              File System Agent Example
            </Link>
            <Link 
              to="/agent/marketmind" 
              className={`nav-link ${isActive('/agent/marketmind')}`}
              onClick={() => setIsOpen(false)}
            >
              MarketMind AI
            </Link>
            <Link 
              to="/agent/athlete-insight" 
              className={`nav-link ${isActive('/agent/athlete-insight')}`}
              onClick={() => setIsOpen(false)}
            >
              AthleteInsight AI
            </Link>
          </div>
        </li>
        
        <li className="dropdown">
          <button 
            className="dropdown-trigger"
            onClick={(e) => toggleDropdown(e, 'blogs')}
            aria-expanded={activeDropdown === 'blogs'}
          >
            Blogs <span className="arrow">▾</span>
          </button>
          <div className={`dropdown-content ${activeDropdown === 'blogs' ? 'show' : ''}`}>
            <div className="dropdown-header">Categories</div>
            <Link 
              to="/blogs?tag=Fundamentals" 
              className={`nav-link ${isActive('/blogs?tag=Fundamentals')}`}
              onClick={() => setIsOpen(false)}
            >
              LLM Fundamentals
            </Link>
            <Link 
              to="/blogs?tag=Advanced%20Techniques" 
              className={`nav-link ${isActive('/blogs?tag=Advanced%20Techniques')}`}
              onClick={() => setIsOpen(false)}
            >
              Next-Gen AI Techniques
            </Link>
            <Link 
              to="/blogs?tag=LLM%20Models" 
              className={`nav-link ${isActive('/blogs?tag=LLM%20Models')}`}
              onClick={() => setIsOpen(false)}
            >
              LLM Models
            </Link>
            
            <div className="dropdown-divider"></div>
            <div className="dropdown-header">Featured</div>
            <Link 
              to="/blogs/rag-tutorial" 
              className={`nav-link ${isActive('/blogs/rag-tutorial')}`}
              onClick={() => setIsOpen(false)}
            >
              RAG Tutorial
            </Link>
            <Link 
              to="/blogs/model-context-server" 
              className={`nav-link ${isActive('/blogs/model-context-server')}`}
              onClick={() => setIsOpen(false)}
            >
              MCP Server Guide
            </Link>
            <Link 
              to="/blogs/vector-database-guide" 
              className={`nav-link ${isActive('/blogs/vector-database-guide')}`}
              onClick={() => setIsOpen(false)}
            >
              Vector DB Guide
            </Link>
            
            <div className="dropdown-divider"></div>
            <Link 
              to="/blogs" 
              className={`nav-link ${isActive('/blogs')}`}
              onClick={() => setIsOpen(false)}
            >
              All Blogs
            </Link>
          </div>
        </li>
        
        <li>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about')}`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;