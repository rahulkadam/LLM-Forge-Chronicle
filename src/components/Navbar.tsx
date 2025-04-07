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
            <div className="dropdown-header">Core Concepts:</div>
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
            
            <div className="dropdown-divider"></div>
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
          </div>
        </li>

        {/* Agents dropdown */}
        <li className="dropdown">
          <button 
            className="dropdown-trigger"
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('agents');
            }}
          >
            Agents <span className="arrow">▾</span>
          </button>
          <div className={`dropdown-content ${activeDropdown === 'agents' ? 'show' : ''}`}>
            <div className="dropdown-header">Agent Development:</div>
            <Link to="/llm-agent/basic" className={`nav-link ${isActive('/llm-agent/basic')}`}>
              Basic LLM Agent
            </Link>
            <Link to="/BuildingLLMAgent" className={`nav-link ${isActive('/BuildingLLMAgent')}`}>
              File System Agent Example
            </Link>
            <Link to="/agent/marketmind" className={`nav-link ${isActive('/agent/marketmind')}`}>
              MarketMind AI
            </Link>
            <Link to="/agent/athlete-insight" className={`nav-link ${isActive('/agent/athlete-insight')}`}>
              AthleteInsight AI
            </Link>
            <Link to="/agent/bookbuddy" className={`nav-link ${isActive('/agent/bookbuddy')}`}>
              BookBuddy Agent
            </Link>
          </div>
        </li>
        
        {/* Blogs dropdown */}
        <li className="dropdown">
          <button 
            className="dropdown-trigger"
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('blogs');
            }}
          >
            Blogs <span className="arrow">▾</span>
          </button>
          <div className={`dropdown-content ${activeDropdown === 'blogs' ? 'show' : ''}`}>
            <div className="dropdown-header">Categories:</div>
            <Link to="/blogs?tag=Fundamentals" className={`nav-link ${isActive('/blogs?tag=Fundamentals')}`}>
              LLM Fundamentals
            </Link>
            <Link to="/blogs?tag=Advanced%20Techniques" className={`nav-link ${isActive('/blogs?tag=Prompts')}`}>
              Next-Gen AI Techniques
            </Link>
            <Link to="/blogs?tag=Agents" className={`nav-link ${isActive('/blogs?tag=Agents')}`}>
              AI Agents
            </Link>
            
            <div className="dropdown-divider"></div>
            <div className="dropdown-header">Featured:</div>
            <Link to="/blogs/rag-tutorial" className={`nav-link ${isActive('/blogs/rag-tutorial')}`}>
              RAG Tutorial
            </Link>
            <Link to="/blogs/model-context-server" className={`nav-link ${isActive('/blogs/model-context-server')}`}>
              MCP Server Guide
            </Link>
            <Link to="/blogs/vector-database-guide/vector-llm-guide" className={`nav-link ${isActive('/blogs/vector-database-guide/vector-llm-guide')}`}>
              Vector DB Guide
            </Link>
            
            <div className="dropdown-divider"></div>
            <Link to="/blogs" className={`nav-link ${isActive('/blogs')}`}>
              All Blogs
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