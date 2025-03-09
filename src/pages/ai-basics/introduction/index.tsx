import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Introduction: React.FC = () => {
  return (
    <div className="ai-basics-intro">
      <h1>Introduction to Artificial Intelligence</h1>

      <section className="intro-section">
        <h2>What is AI?</h2>
        <p>
          Artificial Intelligence (AI) is like teaching computers to think and learn. 
          Just as humans learn from experience, AI systems learn from data to help 
          solve problems and make our lives easier.
        </p>
        <div className="highlight-box">
          <h3>You Already Use AI Every Day!</h3>
          <ul>
            <li>When your phone recognizes your face to unlock</li>
            <li>When Netflix suggests movies you might like</li>
            <li>When your email filters out spam</li>
            <li>When you use Siri or Alexa</li>
          </ul>
        </div>
      </section>

      <section className="ai-types">
        <h2>Types of AI You'll Encounter</h2>
        <div className="types-grid">
          <div className="type-card">
            <h3>🤖 ChatBots</h3>
            <p>AI that can chat with you, like ChatGPT</p>
            <Link to="/ai-basics/chatgpt-guide" className="learn-more">
              Learn about ChatGPT →
            </Link>
          </div>

          <div className="type-card">
            <h3>🎨 Creative AI</h3>
            <p>AI that can create images, music, and art</p>
          </div>

          <div className="type-card">
            <h3>🔍 Smart Search</h3>
            <p>AI that helps find exactly what you're looking for</p>
          </div>

          <div className="type-card">
            <h3>📱 Personal Assistants</h3>
            <p>AI that helps manage your daily tasks</p>
          </div>
        </div>
      </section>

      <section className="benefits">
        <h2>How AI Can Help You</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Save Time ⏰</h3>
            <p>Automate repetitive tasks and get quick answers to your questions</p>
          </div>

          <div className="benefit-card">
            <h3>Learn Better 📚</h3>
            <p>Get personalized explanations and learning resources</p>
          </div>

          <div className="benefit-card">
            <h3>Work Smarter 💡</h3>
            <p>Use AI tools to enhance your productivity and creativity</p>
          </div>

          <div className="benefit-card">
            <h3>Solve Problems 🎯</h3>
            <p>Get help analyzing situations and finding solutions</p>
          </div>
        </div>
      </section>

      <section className="getting-started">
        <h2>Start Your AI Journey</h2>
        <div className="journey-steps">
          <div className="step">
            <h3>Step 1: Explore AI Tools</h3>
            <p>Start with user-friendly AI tools like ChatGPT</p>
            <Link to="/ai-basics/chatgpt-guide" className="step-link">
              ChatGPT Guide →
            </Link>
          </div>

          <div className="step">
            <h3>Step 2: Learn the Basics</h3>
            <p>Understand how AI can help in your specific needs</p>
          </div>

          <div className="step">
            <h3>Step 3: Practice Using AI</h3>
            <p>Try using AI tools for your daily tasks</p>
          </div>
        </div>
      </section>

      <section className="common-questions">
        <h2>Common Questions</h2>
        <div className="questions-grid">
          <div className="question-card">
            <h3>Is AI difficult to use?</h3>
            <p>
              Not at all! Many AI tools are designed to be as simple as having a 
              conversation. If you can chat or type, you can use AI.
            </p>
          </div>

          <div className="question-card">
            <h3>Do I need technical knowledge?</h3>
            <p>
              No technical knowledge is required for using most AI tools. They're 
              designed for everyone to use.
            </p>
          </div>

          <div className="question-card">
            <h3>Is AI safe to use?</h3>
            <p>
              When used responsibly and from reputable sources, AI tools are safe. 
              We'll teach you best practices for safe AI use.
            </p>
          </div>
        </div>
      </section>

      <section className="next-steps">
        <h2>Ready to Learn More?</h2>
        <div className="next-steps-grid">
          <Link to="/ai-basics/chatgpt-guide" className="next-step-card">
            <h3>ChatGPT Guide</h3>
            <p>Learn how to use the most popular AI chatbot</p>
          </Link>
          
          <div className="next-step-card coming-soon">
            <h3>AI Tools Guide</h3>
            <p>Coming soon: Discover more useful AI tools</p>
          </div>

          <div className="next-step-card coming-soon">
            <h3>AI Safety Guide</h3>
            <p>Coming soon: Learn to use AI responsibly</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction; 