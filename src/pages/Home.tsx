import React from 'react';
import '../styles/Page.css';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import AdSense from '../components/AdSense';

const Home: React.FC = () => {
  return (
    <div className="page">
      <div className="page-content home-content">
        <section className="hero">
          <img src="/llm-logo2.png" alt="LLM Forge Logo" className="hero-logo" />
          <h1>LLM Forge Chronicle</h1>
          <p className="subtitle">
            Your Expert Guide to Building AI-Powered Applications with LLMs
          </p>
          <div className="cta-buttons">
            <Link to="/roadmap" className="cta-button primary">Start Learning</Link>
            <Link to="/blogs" className="cta-button secondary">Explore Tutorials</Link>
          </div>
        </section>

        <section className="quick-access">
          <h2>Quick Access</h2>
          <div className="quick-links-container">
            <Link to="/llm-fundamentals" className="quick-link-card">
              <div className="quick-link-icon">🔍</div>
              <h3>LLM Fundamentals</h3>
            </Link>
            <Link to="/prompt-engineering" className="quick-link-card">
              <div className="quick-link-icon">💡</div>
              <h3>Prompt Engineering</h3>
            </Link>
            <Link to="/llm-agent" className="quick-link-card">
              <div className="quick-link-icon">🤖</div>
              <h3>LLM Agents</h3>
            </Link>
          </div>
        </section>
        
        <section className="latest-blogs">
          <h2>Latest Tutorials & Guides</h2>
          <div className="blog-preview-grid">
            <div className="blog-preview-card">
              <div className="blog-preview-image llm-terminology-image"></div>
              <h3>Understanding LLM Terminology</h3>
              <p>A comprehensive guide to essential terms and concepts in Large Language Models.</p>
              <Link to="/blogs/llm-technology-guide" className="blog-link">Read Guide →</Link>
            </div>
            <div className="blog-preview-card">
              <div className="blog-preview-image openai-image"></div>
              <h3>Connecting to OpenAI API</h3>
              <p>Step-by-step instructions to set up and use the OpenAI API in your applications.</p>
              <Link to="/blogs/openai-api-guide" className="blog-link">Read Guide →</Link>
            </div>
            <div className="blog-preview-card">
              <div className="blog-preview-image openrouter-image"></div>
              <h3>OpenRouter Integration Guide</h3>
              <p>Access multiple LLM models through a single, unified API with OpenRouter.</p>
              <Link to="/blogs/openrouter-platform-guide" className="blog-link">Read Guide →</Link>
            </div>
          </div>
          <div className="blog-cta">
            <Link to="/blogs" className="cta-button secondary">Browse All Tutorials</Link>
          </div>
        </section>
        
        <section className="join-community">
          <div className="community-content">
            <h2>Join Our Community</h2>
            <p>Connect with other LLM developers, share knowledge, and stay updated on the latest developments.</p>
            <Link to="/community" className="community-button">Join the Community</Link>
          </div>
        </section>
        
        <AdSense adSlot="1234567890" className="adsense-footer" />
      </div>
    </div>
  );
};

export default Home;