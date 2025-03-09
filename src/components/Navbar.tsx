import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTutorials, setShowTutorials] = useState(false);
  const [showLLMAgents, setShowLLMAgents] = useState(false);
  const [showAIBasics, setShowAIBasics] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  useEffect(() => {
    setIsOpen(false);
    setShowTutorials(false);
    setShowLLMAgents(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.navbar')) {
        setIsOpen(false);
        setShowTutorials(false);
        setShowLLMAgents(false);
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
          setShowTutorials(false);
          setShowLLMAgents(false);
        }}
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>
      
      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        <li>
          <Link to="/roadmap" className={`nav-link ${isActive('/roadmap')}`}>
            Learning Path
          </Link>
        </li>
        
        <li className="dropdown">
          <button 
            className="dropdown-trigger"
            onClick={(e) => {
              e.stopPropagation();
              setShowTutorials(!showTutorials);
              setShowLLMAgents(false);
            }}
          >
            Learn <span className="arrow">▾</span>
          </button>
          <div className={`dropdown-content ${showTutorials ? 'show' : ''}`}>
            <Link to="/foundation" className={`nav-link ${isActive('/foundation')}`}>
              Foundations
            </Link>
            <Link to="/professional" className={`nav-link ${isActive('/professional')}`}>
              Professional
            </Link>
            <Link to="/expert" className={`nav-link ${isActive('/expert')}`}>
              Expert
            </Link>
            <Link to="/python-module" className={`nav-link ${isActive('/python-module')}`}>
              Python Essentials
            </Link>
          </div>
        </li>
        
        <li className="dropdown">
          <button 
            className="dropdown-trigger"
            onClick={(e) => {
              e.stopPropagation();
              setShowLLMAgents(!showLLMAgents);
              setShowTutorials(false);
            }}
          >
            LLM Development <span className="arrow">▾</span>
          </button>
          <div className={`dropdown-content ${showLLMAgents ? 'show' : ''}`}>
            <Link to="/llm-agent" className={`nav-link ${isActive('/llm-agent')}`}>
              LLM Basics
            </Link>
            <Link to="/BuildingLLMAgent" className={`nav-link ${isActive('/BuildingLLMAgent')}`}>
              Building Agents
            </Link>
            <Link to="/prompt-engineering" className={`nav-link ${isActive('/prompt-engineering')}`}>
              Prompt Engineering
            </Link>
            <Link to="/ai-tools" className={`nav-link ${isActive('/ai-tools')}`}>
              Tools & Resources
            </Link>
          </div>
        </li>
        
        <li className="dropdown">
          <button 
            className="dropdown-trigger"
            onClick={(e) => {
              e.stopPropagation();
              setShowAIBasics(!showAIBasics);
              setShowTutorials(false);
              setShowLLMAgents(false);
            }}
          >
            AI Basics <span className="arrow">▾</span>
          </button>
          <div className={`dropdown-content ${showAIBasics ? 'show' : ''}`}>
            <Link to="/ai-basics" className={`nav-link ${isActive('/ai-basics')}`}>
              Introduction
            </Link>
            <Link 
              to="/ai-basics/chatgpt-guide" 
              className={`nav-link ${isActive('/ai-basics/chatgpt-guide')}`}
            >
              ChatGPT Guide
            </Link>
          </div>
        </li>
        
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