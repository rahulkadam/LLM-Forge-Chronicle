import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Foundation.css';

const Foundation: React.FC = () => {
  return (
    <div className="foundation-track">
      <section className="track-header">
        <h1>Understanding LLMs</h1>
        <p className="track-description">
          A beginner-friendly guide to Large Language Models (LLMs) and how to use them effectively.
          Start your AI journey here.
        </p>
      </section>

      <section className="what-is-llm">
        <h2>What is an LLM?</h2>
        <div className="explanation-card">
          <p>
            A Large Language Model (LLM) is an AI that can understand and generate human-like text.
            Think of it as a very advanced chatbot that can help you with writing, analysis, and problem-solving.
          </p>
          <div className="example-box">
            <h3>Real Example:</h3>
            <p>You can ask an LLM to:</p>
            <ul>
              <li>Write an email</li>
              <li>Explain a concept</li>
              <li>Help with research</li>
              <li>Solve problems</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="popular-llms">
        <h2>Popular LLMs You Can Use Today</h2>
        <div className="llm-grid">
          <div className="llm-card">
            <h3>🤖 ChatGPT</h3>
            <p>Most popular and versatile LLM</p>
            <ul>
              <li>Free to start</li>
              <li>Easy to use</li>
              <li>Great for beginners</li>
            </ul>
            <Link to="/ai-basics/chatgpt-guide" className="llm-link">Learn More →</Link>
          </div>

          <div className="llm-card">
            <h3>🧠 Claude</h3>
            <p>Advanced reasoning and analysis</p>
            <ul>
              <li>Excellent for research</li>
              <li>Good for long documents</li>
              <li>Strong analysis skills</li>
            </ul>
            <Link to="/ai-basics/claude-guide" className="llm-link">Learn More →</Link>
          </div>

          <div className="llm-card">
            <h3>📝 Bard</h3>
            <p>Google's AI assistant</p>
            <ul>
              <li>Free to use</li>
              <li>Good for general tasks</li>
              <li>Easy integration</li>
            </ul>
            <Link to="/ai-basics/bard-guide" className="llm-link">Learn More →</Link>
          </div>
        </div>
      </section>

      <section className="getting-started">
        <h2>How to Get Started</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Choose Your Tool</h3>
            <p>Start with ChatGPT - it's the most beginner-friendly option</p>
            <Link to="/ai-basics/chatgpt-guide" className="step-link">Start with ChatGPT →</Link>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Learn Basic Prompts</h3>
            <p>Simple ways to get better results from AI</p>
            <Link to="/ai-basics/prompt-basics" className="step-link">Learn Prompting →</Link>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Try Real Examples</h3>
            <p>Practice with common use cases</p>
            <Link to="/ai-basics/examples" className="step-link">View Examples →</Link>
          </div>
        </div>
      </section>

      <section className="common-uses">
        <h2>Common Ways to Use LLMs</h2>
        <div className="uses-grid">
          <div className="use-card">
            <h3>📧 Writing Help</h3>
            <p>Emails, reports, content creation</p>
            <Link to="/examples/writing">See Examples →</Link>
          </div>

          <div className="use-card">
            <h3>📚 Learning</h3>
            <p>Research, explanations, study help</p>
            <Link to="/examples/learning">See Examples →</Link>
          </div>

          <div className="use-card">
            <h3>💡 Problem Solving</h3>
            <p>Analysis, brainstorming, solutions</p>
            <Link to="/examples/problem-solving">See Examples →</Link>
          </div>
        </div>
      </section>

      <section className="next-steps">
        <h2>Ready to Learn More?</h2>
        <div className="next-steps-content">
          <p>Once you're comfortable with the basics, explore these advanced topics:</p>
          <div className="next-steps-grid">
            <Link to="/advanced/prompt-engineering" className="next-step-card">
              <h3>Advanced Prompting</h3>
              <p>Learn to write better prompts</p>
            </Link>

            <Link to="/advanced/tools" className="next-step-card">
              <h3>More AI Tools</h3>
              <p>Explore other useful AI tools</p>
            </Link>

            <Link to="/advanced/business" className="next-step-card">
              <h3>Business Applications</h3>
              <p>Use AI in your work</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Foundation;