import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const ChatGPTGuide: React.FC = () => {
  return (
    <div className="chatgpt-guide">
      <section className="guide-header">
        <h1>ChatGPT Guide for Beginners</h1>
        <p className="subtitle">
          Learn how to use ChatGPT effectively with practical examples and tips
        </p>
      </section>

      <section className="getting-started">
        <h2>Getting Started with ChatGPT</h2>
        <div className="setup-steps">
          <div className="step">
            <h3>1. Create an Account</h3>
            <p>Visit <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">chat.openai.com</a> and sign up</p>
          </div>
          <div className="step">
            <h3>2. Choose Your Plan</h3>
            <p>Start with the free version - it's powerful enough for most tasks</p>
          </div>
          <div className="step">
            <h3>3. Start Chatting</h3>
            <p>Type your question or request in the chat box</p>
          </div>
        </div>
      </section>

      <section className="basic-examples">
        <h2>Basic Examples to Try</h2>
        <div className="example-cards">
          <div className="example-card">
            <h3>📝 Writing Help</h3>
            <div className="prompt-example">
              <p className="prompt">"Help me write a professional email to my boss about a project update"</p>
              <p className="tip">Tip: Be specific about what you need</p>
            </div>
          </div>

          <div className="example-card">
            <h3>📚 Learning</h3>
            <div className="prompt-example">
              <p className="prompt">"Explain quantum computing in simple terms"</p>
              <p className="tip">Tip: Ask for simpler explanations</p>
            </div>
          </div>

          <div className="example-card">
            <h3>💡 Problem Solving</h3>
            <div className="prompt-example">
              <p className="prompt">"I'm having trouble organizing my work. Can you suggest some methods?"</p>
              <p className="tip">Tip: Provide context for better advice</p>
            </div>
          </div>
        </div>
      </section>

      <section className="best-practices">
        <h2>Best Practices</h2>
        <div className="practices-grid">
          <div className="practice-card">
            <h3>Be Specific</h3>
            <p>Instead of "Write about AI", try "Write a 300-word blog post about AI in healthcare"</p>
          </div>

          <div className="practice-card">
            <h3>Provide Context</h3>
            <p>Include relevant details like audience, tone, or purpose</p>
          </div>

          <div className="practice-card">
            <h3>Ask for Clarification</h3>
            <p>If the response isn't what you need, ask for adjustments</p>
          </div>
        </div>
      </section>

      <section className="common-uses">
        <h2>Common Use Cases</h2>
        <div className="use-cases-grid">
          <div className="use-case">
            <h3>Writing</h3>
            <ul>
              <li>Emails and reports</li>
              <li>Blog posts</li>
              <li>Social media content</li>
              <li>Resumes and cover letters</li>
            </ul>
          </div>

          <div className="use-case">
            <h3>Learning</h3>
            <ul>
              <li>Explaining concepts</li>
              <li>Research assistance</li>
              <li>Study guides</li>
              <li>Practice questions</li>
            </ul>
          </div>

          <div className="use-case">
            <h3>Problem Solving</h3>
            <ul>
              <li>Brainstorming ideas</li>
              <li>Decision making</li>
              <li>Technical troubleshooting</li>
              <li>Project planning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="next-steps">
        <h2>Ready to Learn More?</h2>
        <div className="next-steps-grid">
          <Link to="/ai-basics/prompt-basics" className="next-step-card">
            <h3>Learn Prompt Basics</h3>
            <p>Master the art of writing effective prompts</p>
          </Link>

          <Link to="/ai-basics/examples" className="next-step-card">
            <h3>View More Examples</h3>
            <p>Explore real-world use cases</p>
          </Link>

          <Link to="/ai-basics/tips" className="next-step-card">
            <h3>Advanced Tips</h3>
            <p>Get more out of ChatGPT</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ChatGPTGuide; 