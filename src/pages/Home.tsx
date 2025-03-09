import React from 'react';
import '../styles/Page.css';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import AdSense from '../components/AdSense';

const Home: React.FC = () => {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Welcome to LLM Forge Chronicle</h1>
      </header>
      <div className="page-content">
        <section className="hero">
          <h1>Mastering LLM</h1>
          <p className="subtitle">
            Your guide to AI tools, prompt engineering, and LLM applications
          </p>
          <div className="cta-buttons">
            <Link to="/roadmap" className="cta-button primary">Start Learning</Link>
            <Link to="/about" className="cta-button secondary">Learn More</Link>
          </div>
        </section>

        <section className="features">
          <div className="feature">
            <div className="feature-icon">🧠</div>
            <h2>AI Development</h2>
            <p>Learn how to build intelligent applications that leverage the power of modern AI models.</p>
            <Link to="/ai-tools" className="feature-link">Explore AI Tools →</Link>
          </div>
          <div className="feature">
            <div className="feature-icon">💬</div>
            <h2>Prompt Engineering</h2>
            <p>Master the art and science of crafting effective prompts for large language models.</p>
            <Link to="/prompt-engineering" className="feature-link">Learn Prompt Engineering →</Link>
          </div>
          <div className="feature">
            <div className="feature-icon">🤖</div>
            <h2>LLM Agents</h2>
            <p>Build powerful AI agents that can perform complex tasks through natural language.</p>
            <Link to="/llm-agent" className="feature-link">Explore LLM Agents →</Link>
          </div>
        </section>

        <section className="learning-paths">
          <h2>Learning Paths</h2>
          <div className="paths">
            <div className="path">
              <h3>Foundations</h3>
              <p>Core concepts and fundamentals for beginners</p>
              <Link to="/foundation" className="path-link">Start Here →</Link>
            </div>
            <div className="path">
              <h3>Practical Applications</h3>
              <p>Real-world implementations and case studies</p>
              <Link to="/professional" className="path-link">Build Projects →</Link>
            </div>
            <div className="path">
              <h3>Advanced Techniques</h3>
              <p>Cutting-edge methods for experienced developers</p>
              <Link to="/expert" className="path-link">Go Advanced →</Link>
            </div>
          </div>
        </section>
        
        <AdSense adSlot="1234567890" className="adsense-footer" />
      </div>
    </div>
  );
};

export default Home;