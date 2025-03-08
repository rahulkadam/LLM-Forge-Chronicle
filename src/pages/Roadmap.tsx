import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Roadmap.css';

const Roadmap: React.FC = () => {
  return (
    <div className="roadmap">
      <header className="roadmap-header">
        <h1>LLM Development Learning Path</h1>
        <p className="subtitle">Your journey to becoming an LLM expert starts here</p>
      </header>

      <div className="roadmap-container">
        {/* Foundation Stage */}
        <section className="roadmap-stage">
          <div className="stage-header foundation">
            <h2>1. Foundation</h2>
            <span className="difficulty">Beginner</span>
          </div>
          <div className="stage-content">
            <div className="milestone">
              <h3>Python Fundamentals</h3>
              <ul>
                <li>Basic Python syntax and data structures</li>
                <li>Object-oriented programming</li>
                <li>Package management with pip</li>
                <Link to="/python-module" className="stage-link">Start Learning →</Link>
              </ul>
            </div>
            <div className="milestone">
              <h3>AI/ML Basics</h3>
              <ul>
                <li>Introduction to Machine Learning</li>
                <li>Neural Networks fundamentals</li>
                <li>Natural Language Processing basics</li>
                <Link to="/AITutorial" className="stage-link">Explore AI Basics →</Link>
              </ul>
            </div>
          </div>
        </section>

        {/* Intermediate Stage */}
        <section className="roadmap-stage">
          <div className="stage-header intermediate">
            <h2>2. LLM Fundamentals</h2>
            <span className="difficulty">Intermediate</span>
          </div>
          <div className="stage-content">
            <div className="milestone">
              <h3>Understanding LLMs</h3>
              <ul>
                <li>Transformer architecture</li>
                <li>Attention mechanisms</li>
                <li>Tokenization and embeddings</li>
                <Link to="/LLMAgent" className="stage-link">Learn LLM Basics →</Link>
              </ul>
            </div>
            <div className="milestone">
              <h3>Working with LLM APIs</h3>
              <ul>
                <li>OpenAI API integration</li>
                <li>Prompt engineering</li>
                <li>API best practices</li>
                <Link to="/Tutorial" className="stage-link">API Tutorial →</Link>
              </ul>
            </div>
          </div>
        </section>

        {/* Advanced Stage */}
        <section className="roadmap-stage">
          <div className="stage-header advanced">
            <h2>3. Advanced Implementation</h2>
            <span className="difficulty">Advanced</span>
          </div>
          <div className="stage-content">
            <div className="milestone">
              <h3>Building LLM Applications</h3>
              <ul>
                <li>Custom LLM agent development</li>
                <li>Fine-tuning strategies</li>
                <li>System prompts and chain-of-thought</li>
                <Link to="/BuildingLLMAgent" className="stage-link">Build Agents →</Link>
              </ul>
            </div>
            <div className="milestone">
              <h3>Professional Development</h3>
              <ul>
                <li>Production deployment</li>
                <li>Performance optimization</li>
                <li>Scaling LLM applications</li>
                <Link to="/Professional" className="stage-link">Go Pro →</Link>
              </ul>
            </div>
          </div>
        </section>

        {/* Expert Stage */}
        <section className="roadmap-stage">
          <div className="stage-header expert">
            <h2>4. Expert Level</h2>
            <span className="difficulty">Expert</span>
          </div>
          <div className="stage-content">
            <div className="milestone">
              <h3>Advanced Topics</h3>
              <ul>
                <li>Custom model architecture</li>
                <li>Research and innovation</li>
                <li>Enterprise solutions</li>
                <Link to="/Expert" className="stage-link">Become Expert →</Link>
              </ul>
            </div>
            <div className="milestone">
              <h3>Specialization</h3>
              <ul>
                <li>Domain-specific applications</li>
                <li>Multi-modal LLMs</li>
                <li>Ethical AI development</li>
                <Link to="/DSGuidance" className="stage-link">Specialize →</Link>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section className="resources-section">
        <h2>Additional Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <h3>📚 Documentation</h3>
            <p>Comprehensive guides and API references</p>
          </div>
          <div className="resource-card">
            <h3>💻 Code Examples</h3>
            <p>Real-world implementation examples</p>
          </div>
          <div className="resource-card">
            <h3>👥 Community</h3>
            <p>Join our Discord community</p>
          </div>
          <div className="resource-card">
            <h3>📝 Blog</h3>
            <p>Latest updates and tutorials</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap; 