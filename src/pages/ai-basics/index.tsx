import React from 'react';
import './styles.css';

const AIBasics: React.FC = () => {
  return (
    <div className="ai-basics">
      <h1>Understanding AI: A Beginner's Guide</h1>
      
      <section className="intro-section">
        <h2>What is Artificial Intelligence?</h2>
        <p>
          Artificial Intelligence (AI) is technology that enables computers to perform tasks 
          that typically require human intelligence. Think of it as teaching computers to 
          understand, learn, and make decisions - similar to how humans do.
        </p>
        <div className="example-box">
          <h3>Everyday AI Examples</h3>
          <ul>
            <li>Virtual assistants (Siri, Alexa)</li>
            <li>Netflix movie recommendations</li>
            <li>Gmail's smart email categorization</li>
            <li>Face recognition on smartphones</li>
          </ul>
        </div>
      </section>

      <section className="key-concepts">
        <h2>Key AI Concepts Made Simple</h2>
        <div className="concept-grid">
          <div className="concept-card">
            <h3>Machine Learning</h3>
            <p>
              Like how humans learn from experience, machines can learn from data to 
              make better decisions over time.
            </p>
            <div className="example">
              Example: Email spam filters learning to identify unwanted messages
            </div>
          </div>

          <div className="concept-card">
            <h3>Neural Networks</h3>
            <p>
              Computer systems inspired by human brain connections, helping AI process 
              complex information.
            </p>
            <div className="example">
              Example: Image recognition systems that can identify objects in photos
            </div>
          </div>

          <div className="concept-card">
            <h3>Large Language Models (LLMs)</h3>
            <p>
              AI systems that understand and generate human-like text, trained on vast 
              amounts of written content.
            </p>
            <div className="example">
              Example: ChatGPT helping write emails or answer questions
            </div>
          </div>
        </div>
      </section>

      <section className="ai-impact">
        <h2>How AI Impacts Our Daily Lives</h2>
        <div className="impact-areas">
          <div className="impact-card">
            <h3>🏥 Healthcare</h3>
            <ul>
              <li>Disease diagnosis assistance</li>
              <li>Personalized treatment recommendations</li>
              <li>Medical image analysis</li>
            </ul>
          </div>

          <div className="impact-card">
            <h3>🏦 Banking</h3>
            <ul>
              <li>Fraud detection</li>
              <li>Automated customer service</li>
              <li>Personal finance recommendations</li>
            </ul>
          </div>

          <div className="impact-card">
            <h3>🛒 Shopping</h3>
            <ul>
              <li>Product recommendations</li>
              <li>Virtual try-ons</li>
              <li>Price optimization</li>
            </ul>
          </div>

          <div className="impact-card">
            <h3>🚗 Transportation</h3>
            <ul>
              <li>Navigation systems</li>
              <li>Traffic prediction</li>
              <li>Self-driving features</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="getting-started">
        <h2>Getting Started with AI</h2>
        <div className="steps-container">
          <div className="step">
            <h3>1. Explore AI Tools</h3>
            <p>
              Start with user-friendly AI tools like ChatGPT, Google Lens, or AI art generators 
              to understand AI capabilities.
            </p>
          </div>

          <div className="step">
            <h3>2. Learn the Basics</h3>
            <p>
              Understand fundamental concepts through our beginner-friendly guides and tutorials.
            </p>
          </div>

          <div className="step">
            <h3>3. Stay Informed</h3>
            <p>
              Follow AI news and developments to understand how AI is evolving and impacting society.
            </p>
          </div>
        </div>
      </section>

      <section className="resources">
        <h2>Further Learning</h2>
        <div className="resource-links">
          <a href="/ai-basics/chatgpt" className="resource-link">
            Understanding ChatGPT →
          </a>
          <a href="/ai-basics/future" className="resource-link">
            The Future of AI →
          </a>
          <a href="/ai-basics/ethics" className="resource-link">
            AI Ethics & Safety →
          </a>
        </div>
      </section>
    </div>
  );
};

export default AIBasics; 