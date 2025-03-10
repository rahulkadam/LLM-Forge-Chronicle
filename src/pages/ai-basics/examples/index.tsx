import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Examples: React.FC = () => {
  return (
    <div className="examples">
      <section className="guide-header">
        <h1>Real-World AI Examples</h1>
        <p className="subtitle">
          See how people are using AI tools in their daily work and life
        </p>
      </section>

      <section className="business-examples">
        <h2>Business Use Cases</h2>
        <div className="example-grid">
          <div className="example-card">
            <h3>📧 Email Writing</h3>
            <div className="example-content">
              <p className="prompt">"Write a follow-up email to a client who hasn't responded to our proposal"</p>
              <div className="result">
                <h4>Example Response:</h4>
                <p>"Dear [Client Name],</p>
                <p>I hope this email finds you well. I wanted to follow up on the proposal we sent last week regarding [Project Name]...</p>
                <p>Would you have time for a brief call to discuss any questions you might have?</p>
                <p>Best regards,<br/>[Your Name]"</p>
              </div>
            </div>
          </div>

          <div className="example-card">
            <h3>📊 Report Analysis</h3>
            <div className="example-content">
              <p className="prompt">"Analyze these sales figures and identify three key trends"</p>
              <div className="result">
                <h4>Example Response:</h4>
                <ul>
                  <li>Q4 showed 25% growth in online sales</li>
                  <li>Customer retention improved by 15%</li>
                  <li>New product line exceeded expectations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="learning-examples">
        <h2>Learning & Research</h2>
        <div className="example-grid">
          <div className="example-card">
            <h3>📚 Concept Explanation</h3>
            <div className="example-content">
              <p className="prompt">"Explain quantum computing using a simple analogy"</p>
              <div className="result">
                <h4>Example Response:</h4>
                <p>"Think of quantum computing like a library where you can read all books at once, while classical computing is like reading one book at a time..."</p>
              </div>
            </div>
          </div>

          <div className="example-card">
            <h3>�� Research Summary</h3>
            <div className="example-content">
              <p className="prompt">"Summarize the key findings of this research paper about climate change"</p>
              <div className="result">
                <h4>Example Response:</h4>
                <ul>
                  <li>Global temperatures increased by 1.1°C since 1900</li>
                  <li>Main causes: greenhouse gas emissions</li>
                  <li>Key impacts: rising sea levels, extreme weather</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="creative-examples">
        <h2>Creative Writing</h2>
        <div className="example-grid">
          <div className="example-card">
            <h3>✍️ Blog Post</h3>
            <div className="example-content">
              <p className="prompt">"Write a blog post about the future of AI in healthcare"</p>
              <div className="result">
                <h4>Example Response:</h4>
                <p>"The Future of Healthcare: How AI is Transforming Patient Care</p>
                <p>In recent years, artificial intelligence has begun to revolutionize healthcare in ways we never imagined possible..."</p>
              </div>
            </div>
          </div>

          <div className="example-card">
            <h3>🎨 Content Ideas</h3>
            <div className="example-content">
              <p className="prompt">"Generate 5 creative ideas for a social media campaign about sustainability"</p>
              <div className="result">
                <h4>Example Response:</h4>
                <ul>
                  <li>"Day in the Life of a Zero-Waste Hero"</li>
                  <li>"Sustainable Swaps Challenge"</li>
                  <li>"Eco-Friendly DIY Tutorials"</li>
                  <li>"Green Tech Innovation Stories"</li>
                  <li>"Sustainable Living Tips"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="next-steps">
        <h2>Try These Examples</h2>
        <div className="next-steps-grid">
          <Link to="/ai-basics/chatgpt-guide" className="next-step-card">
            <h3>Start with ChatGPT</h3>
            <p>Try these examples with ChatGPT</p>
          </Link>

          <Link to="/ai-basics/prompt-basics" className="next-step-card">
            <h3>Learn Prompt Basics</h3>
            <p>Master the art of writing prompts</p>
          </Link>

          <Link to="/ai-basics/tips" className="next-step-card">
            <h3>Get More Tips</h3>
            <p>Learn advanced techniques</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Examples; 