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
          <h1>LLM for Developers</h1>
          <p className="home-subtitle">
            Fast-track your journey from LLM basics to production-ready applications
          </p>
          <div className="cta-buttons">
            <Link to="/getting-started" className="cta-button primary">Get Started</Link>
            <Link to="/blogs" className="cta-button secondary">View Tutorials</Link>
          </div>
        </section>

        <section className="dev-resources">
          <h2>Developer Resources</h2>
          <div className="resources-grid">
            <Link to="/llm-fundamentals" className="resource-card">
              <div className="resource-icon">📘</div>
              <div className="resource-content">
                <h3>LLM Fundamentals</h3>
                <p>Core concepts, API integration, and basic implementation patterns</p>
              </div>
            </Link>
            <Link to="/prompt-engineering" className="resource-card">
              <div className="resource-icon">⚙️</div>
              <div className="resource-content">
                <h3>Prompt Engineering</h3>
                <p>Techniques to optimize your prompts for better, more consistent results</p>
              </div>
            </Link>
            <Link to="/llm-agent" className="resource-card">
              <div className="resource-icon">🤖</div>
              <div className="resource-content">
                <h3>Building LLM Agents</h3>
                <p>Create autonomous agents that can perform complex tasks</p>
              </div>
            </Link>
          </div>
        </section>

        <section className="latest-tutorials">
          <h2>Latest Developer Tutorials</h2>
          <div className="tutorial-grid">
            <Link to="/blogs/openai-api-guide" className="tutorial-card">
              <h3>Connecting to OpenAI API</h3>
              <div className="tutorial-tags">
                <span className="tag">API</span>
                <span className="tag">Integration</span>
              </div>
              <p>Set up and use the OpenAI API in your applications with authentication, rate limiting, and error handling.</p>
            </Link>
            <Link to="/blogs/openrouter-platform-guide" className="tutorial-card">
              <h3>OpenRouter Integration Guide</h3>
              <div className="tutorial-tags">
                <span className="tag">Multi-model</span>
                <span className="tag">API</span>
              </div>
              <p>Access multiple LLM models through a single, unified API with complete code examples.</p>
            </Link>
            <Link to="/blogs/rag-tutorial" className="tutorial-card">
              <h3>Building RAG Applications</h3>
              <div className="tutorial-tags">
                <span className="tag">RAG</span>
                <span className="tag">Vector DB</span>
              </div>
              <p>Implement retrieval-augmented generation for domain-specific applications.</p>
            </Link>
          </div>
          <div className="see-more">
            <Link to="/blogs" className="text-link">See all tutorials →</Link>
          </div>
        </section>

        <section className="quick-start">
          <h2>Quick Start</h2>
          <div className="code-snippet">
            <pre><code>{`# Install the OpenAI Python library
pip install openai

# Set up your API key
import openai
openai.api_key = "your-api-key"

# Make a completion request
response = openai.Completion.create(
  model="gpt-3.5-turbo-instruct",
  prompt="Write a function to calculate fibonacci numbers",
  max_tokens=150
)

print(response.choices[0].text.strip())`}</code></pre>
            <Link to="/llm-fundamentals/developer-quick-start" className="cta-button primary code-btn">Full Quick Start Guide</Link>
          </div>
        </section>

        <section className="join-community">
          <div className="community-content">
            <h2>Developer Community</h2>
            <p>Join our community to discuss LLM implementation challenges, share solutions, and stay updated with the latest developments.</p>
            <Link to="/community" className="community-button">Join Discord</Link>
          </div>
        </section>

        <AdSense adSlot="1234567890" className="adsense-footer"/>
      </div>
    </div>
  );
};

export default Home;