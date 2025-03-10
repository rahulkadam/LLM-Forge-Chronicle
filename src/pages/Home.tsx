import React from 'react';
import '../styles/Page.css';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import AdSense from '../components/AdSense';

const Home: React.FC = () => {
  return (
    <div className="page">
      <section className="hero">
        <h1>Welcome to LLM Forge Chronicle</h1>
        <p className="subtitle">
          Your complete guide to understanding and using AI tools - from basics to advanced applications
        </p>
        <div className="hero-message">
          <h2>Not Sure Where to Start?</h2>
          <p>
            Whether you're new to AI or looking to enhance your skills, we've got you covered. 
            Start with our AI Basics guide or jump directly to the tools you need.
          </p>
          <div className="cta-buttons">
            <Link to="/ai-basics" className="cta-button primary">Start with Basics</Link>
            <Link to="/roadmap" className="cta-button secondary">View Learning Path</Link>
          </div>
        </div>
      </section>

      <section className="learning-tracks">
        <h2>Choose Your Path</h2>
        <div className="tracks-grid">
          <div className="track-card beginner">
            <div className="track-header">
              <span className="level-badge">Beginner Friendly</span>
              <h3>New to AI?</h3>
            </div>
            <div className="track-content">
              <p>Start here if you're new to AI and want to understand the basics:</p>
              <ul>
                <li>Understanding AI in simple terms</li>
                <li>Getting started with ChatGPT</li>
                <li>Basic AI tools for everyday use</li>
                <li>Common AI applications</li>
              </ul>
              <Link to="/ai-basics" className="track-link">Begin Your Journey →</Link>
            </div>
          </div>

          <div className="track-card tools">
            <div className="track-header">
              <span className="level-badge">Practical</span>
              <h3>Looking for AI Tools?</h3>
            </div>
            <div className="track-content">
              <p>Discover and learn how to use popular AI tools:</p>
              <ul>
                <li>ChatGPT and other chatbots</li>
                <li>AI writing assistants</li>
                <li>Image generation tools</li>
                <li>Productivity enhancers</li>
              </ul>
              <Link to="/llm-development/tools" className="track-link">Explore Tools →</Link>
            </div>
          </div>

          <div className="track-card advanced">
            <div className="track-header">
              <span className="level-badge">Advanced</span>
              <h3>Want to Build with AI?</h3>
            </div>
            <div className="track-content">
              <p>Learn to develop and implement AI solutions:</p>
              <ul>
                <li>LLM development basics</li>
                <li>Building AI agents</li>
                <li>Prompt engineering</li>
                <li>AI integration guides</li>
              </ul>
              <Link to="/learn/foundation" className="track-link">Start Building →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-starts">
        <h2>Quick Start Guides</h2>
        <div className="guides-grid">
          <Link to="/ai-basics/chatgpt-guide" className="guide-card">
            <h3>🤖 ChatGPT Guide</h3>
            <p>Learn how to effectively use ChatGPT for your needs</p>
          </Link>
          
          <Link to="/llm-development/prompt-engineering" className="guide-card">
            <h3>✍️ Prompt Writing</h3>
            <p>Master the art of writing effective prompts</p>
          </Link>
          
          <Link to="/llm-development/tools" className="guide-card">
            <h3>🛠️ AI Tools Directory</h3>
            <p>Find the right AI tools for your tasks</p>
          </Link>
          
          <Link to="/learn/foundation" className="guide-card">
            <h3>📚 Learning Path</h3>
            <p>Structured learning path for AI development</p>
          </Link>
        </div>
      </section>

      <section className="use-cases">
        <h2>What Can You Do with AI?</h2>
        <div className="use-cases-grid">
          <div className="use-case">
            <h3>💼 Business</h3>
            <ul>
              <li>Automate repetitive tasks</li>
              <li>Generate content</li>
              <li>Analyze data</li>
              <li>Enhance customer service</li>
            </ul>
          </div>

          <div className="use-case">
            <h3>🎨 Creative</h3>
            <ul>
              <li>Generate images</li>
              <li>Write content</li>
              <li>Edit and enhance</li>
              <li>Get creative ideas</li>
            </ul>
          </div>

          <div className="use-case">
            <h3>📚 Learning</h3>
            <ul>
              <li>Explain complex topics</li>
              <li>Practice concepts</li>
              <li>Get instant feedback</li>
              <li>Find resources</li>
            </ul>
          </div>

          <div className="use-case">
            <h3>💻 Development</h3>
            <ul>
              <li>Code assistance</li>
              <li>Debug problems</li>
              <li>Build AI features</li>
              <li>Automate testing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="get-started">
        <h2>Ready to Begin?</h2>
        <div className="start-options">
          <Link to="/ai-basics" className="start-option">
            <h3>Learn AI Basics</h3>
            <p>Start with fundamental concepts and applications</p>
          </Link>
          
          <Link to="/roadmap" className="start-option">
            <h3>Follow Learning Path</h3>
            <p>Take a structured approach to mastering AI</p>
          </Link>
          
          <Link to="/llm-development/tools" className="start-option">
            <h3>Browse AI Tools</h3>
            <p>Find and learn about useful AI tools</p>
          </Link>
        </div>
      </section>
      
      <AdSense adSlot="1234567890" className="adsense-footer" />
    </div>
  );
};

export default Home;