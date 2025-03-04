import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>AI Development Hub</h1>
        <p className="subtitle">
          Your comprehensive guide to AI development, LLM agents, and Forge tools
        </p>
      </section>

      <section className="features-overview">
        <div className="feature-cards">
          <Link to="/forge-tutorial" className="feature-card forge">
            <div className="card-content">
              <h2>🛠 Forge Tutorial</h2>
              <p>Master the Code Forge AI assistant and its powerful development tools</p>
              <ul>
                <li>File Operations</li>
                <li>Code Analysis</li>
                <li>Development Tools</li>
                <li>Best Practices</li>
              </ul>
              <div className="learn-more">Learn More →</div>
            </div>
          </Link>

          <Link to="/ai-tutorial" className="feature-card ai">
            <div className="card-content">
              <h2>🧠 AI Development</h2>
              <p>Comprehensive guide to AI development fundamentals and practices</p>
              <ul>
                <li>ML Frameworks</li>
                <li>Neural Networks</li>
                <li>Development Process</li>
                <li>Best Practices</li>
              </ul>
              <div className="learn-more">Learn More →</div>
            </div>
          </Link>

          <Link to="/llm-agent" className="feature-card llm">
            <div className="card-content">
              <h2>🤖 LLM Agents</h2>
              <p>Deep dive into Large Language Model agents and their applications</p>
              <ul>
                <li>Agent Architecture</li>
                <li>Implementation Guide</li>
                <li>Tool Integration</li>
                <li>Use Cases</li>
              </ul>
              <div className="learn-more">Learn More →</div>
            </div>
          </Link>
        </div>
      </section>

      <section className="quick-start">
        <h2>Quick Start Guides</h2>
        <div className="guide-grid">
          <div className="guide-card">
            <h3>Getting Started with Forge</h3>
            <ol>
              <li>Understanding Forge commands</li>
              <li>File operations basics</li>
              <li>Code analysis tools</li>
              <li>Development workflow</li>
            </ol>
            <div className="guide-links">
              <Link to="/forge-tutorial" className="guide-link">Start Learning →</Link>
            </div>
          </div>

          <div className="guide-card">
            <h3>AI Development Basics</h3>
            <ol>
              <li>ML fundamentals</li>
              <li>Framework selection</li>
              <li>Model development</li>
              <li>Deployment strategies</li>
            </ol>
            <div className="guide-links">
              <Link to="/ai-tutorial" className="guide-link">Start Learning →</Link>
            </div>
          </div>

          <div className="guide-card">
            <h3>Building LLM Agents</h3>
            <ol>
              <li>Agent architecture</li>
              <li>Tool integration</li>
              <li>Prompt engineering</li>
              <li>Testing & deployment</li>
            </ol>
            <div className="guide-links">
              <Link to="/llm-agent" className="guide-link">Overview →</Link>
              <Link to="/llm-agent/building" className="guide-link">Start Building →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="latest-updates">
        <h2>Latest Updates</h2>
        <div className="updates-grid">
          <div className="update-card">
            <span className="tag">New</span>
            <h3>Enhanced LLM Agent Documentation</h3>
            <p>Complete guide to building and deploying LLM agents with practical examples.</p>
          </div>

          <div className="update-card">
            <span className="tag">Updated</span>
            <h3>AI Development Best Practices</h3>
            <p>Latest guidelines and patterns for efficient AI development workflow.</p>
          </div>

          <div className="update-card">
            <span className="tag">Featured</span>
            <h3>Forge Command Reference</h3>
            <p>Comprehensive documentation of all Forge commands and their usage.</p>
          </div>
        </div>
      </section>

      <section className="resources">
        <h2>Additional Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <h3>Documentation</h3>
            <ul>
              <li>API References</li>
              <li>Implementation Guides</li>
              <li>Best Practices</li>
              <li>Code Examples</li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>Community</h3>
            <ul>
              <li>Discussion Forums</li>
              <li>Code Repository</li>
              <li>Issue Tracking</li>
              <li>Feature Requests</li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>Learning Path</h3>
            <ul>
              <li>Beginner Tutorials</li>
              <li>Advanced Topics</li>
              <li>Case Studies</li>
              <li>Video Guides</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Start?</h2>
        <p>Begin your AI development journey with our comprehensive guides</p>
        <div className="cta-buttons">
          <Link to="/forge-tutorial" className="cta-button primary">Get Started with Forge</Link>
          <Link to="/ai-tutorial" className="cta-button secondary">Explore AI Development</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;