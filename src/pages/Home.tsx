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
          <h1>Mastering LLM</h1>
          <p className="subtitle">
            Build AI-powered applications with practical LLM guides
          </p>
          <div className="cta-buttons">
            <Link to="/roadmap" className="cta-button primary">Get Started</Link>
            <Link to="/blogs" className="cta-button secondary">View Tutorials</Link>
          </div>
        </section>

        <section className="journey-overview">
          <h2>Your Learning Pathway</h2>
          <div className="journey-steps">
            <div className="journey-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Learn Fundamentals</h3>
                <p>Understand AI basics, how LLMs work, and their capabilities</p>
                <Link to="/ai-basics" className="step-link">Start with AI Basics →</Link>
              </div>
            </div>
            <div className="journey-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Master Prompting</h3>
                <p>Learn the art of creating effective prompts for optimal results</p>
                <Link to="/prompt-engineering" className="step-link">Explore Prompt Engineering →</Link>
              </div>
            </div>
            <div className="journey-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Build Applications</h3>
                <p>Create practical, real-world solutions using LLM technology</p>
                <Link to="/BuildingLLMAgent" className="step-link">Build Your First Agent →</Link>
              </div>
            </div>
            <div className="journey-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Go Advanced</h3>
                <p>Implement sophisticated LLM applications for specific domains</p>
                <Link to="/professional" className="step-link">Professional Implementations →</Link>
              </div>
            </div>
          </div>
          <div className="journey-cta">
            <p>Need a structured learning plan? Check out our detailed roadmap:</p>
            <Link to="/roadmap" className="feature-link">View Complete Learning Roadmap →</Link>
          </div>
        </section>

        <section className="features">
          <h2>Key Learning Areas</h2>
          <div className="feature">
            <div className="feature-icon">🧠</div>
            <h3>AI Development</h3>
            <p>Learn how to build intelligent applications that leverage the power of modern AI models.</p>
            <Link to="/ai-tools" className="feature-link">Explore AI Tools →</Link>
          </div>
          <div className="feature">
            <div className="feature-icon">💬</div>
            <h3>Prompt Engineering</h3>
            <p>Master the art and science of crafting effective prompts for large language models.</p>
            <Link to="/prompt-engineering" className="feature-link">Learn Prompt Engineering →</Link>
          </div>
          <div className="feature">
            <div className="feature-icon">🤖</div>
            <h3>LLM Agents</h3>
            <p>Build powerful AI agents that can perform complex tasks through natural language.</p>
            <Link to="/llm-agent" className="feature-link">Explore LLM Agents →</Link>
          </div>
        </section>

        <section className="tech-deep-dive">
          <h2>Tech Deep Dive</h2>
          <div className="deep-dive-content">
            <div className="deep-dive-card">
              <div className="deep-dive-icon">⚡</div>
              <h3>LLM Internals</h3>
              <p>Explore the technical architecture, training process, and infrastructure behind Large Language Models.</p>
              <Link to="/llm-technical" className="deep-dive-link">Explore LLM Internals →</Link>
            </div>
            <div className="deep-dive-card">
              <div className="deep-dive-icon">📊</div>
              <h3>Latest Innovations</h3>
              <p>Stay updated with cutting-edge advancements and latest trends in AI and LLM technology.</p>
              <Link to="/blogs" className="deep-dive-link">Read Our Latest Blogs →</Link>
            </div>
          </div>
        </section>
        
        <section className="latest-blogs">
          <h2>Latest From Our Blog</h2>
          <p className="blog-intro">Discover tutorials, guides, and insights about LLM technology and implementations</p>
          <div className="blog-preview-grid">
            <div className="blog-preview-card">
              <div className="blog-preview-image llm-terminology-image"></div>
              <h3>Understanding LLM Terminology: A Comprehensive Guide</h3>
              <p>A detailed guide to essential terms and concepts in Large Language Models, from tokens to fine-tuning.</p>
              <Link to="/blogs/llm-terminology" className="blog-link">Read Article →</Link>
            </div>
            <div className="blog-preview-card">
              <div className="blog-preview-image openai-image"></div>
              <h3>Connecting to OpenAI API: A Complete Guide</h3>
              <p>Learn how to set up and use the OpenAI API for your applications with practical examples.</p>
              <Link to="/blogs/openai-connection-guide" className="blog-link">Read Article →</Link>
            </div>
            <div className="blog-preview-card">
              <div className="blog-preview-image openrouter-image"></div>
              <h3>What is OpenRouter and Why Use It?</h3>
              <p>Explore how OpenRouter can give you access to multiple LLMs through a single, unified API.</p>
              <Link to="/blogs/openrouter-introduction" className="blog-link">Read Article →</Link>
            </div>
          </div>
          <div className="blog-cta">
            <Link to="/blogs" className="cta-button secondary">Browse All Articles</Link>
          </div>
        </section>
        
        <AdSense adSlot="1234567890" className="adsense-footer" />
      </div>
    </div>
  );
};

export default Home;