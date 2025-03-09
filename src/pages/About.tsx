import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <h1>About LLM Forge Chronicle</h1>
      
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          LLM Forge Chronicle is a comprehensive platform dedicated to empowering developers 
          and AI enthusiasts in building, understanding, and deploying Large Language Model (LLM) 
          applications. We provide in-depth tutorials, practical guides, and expert insights into 
          the world of AI development.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Offer</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📚 Comprehensive Tutorials</h3>
            <p>Step-by-step guides covering everything from basic concepts to advanced LLM implementations.</p>
          </div>
          <div className="feature-card">
            <h3>🛠️ Practical Tools</h3>
            <p>Access to essential tools and frameworks for LLM development and deployment.</p>
          </div>
          <div className="feature-card">
            <h3>👥 Community Support</h3>
            <p>Join a growing community of AI developers and enthusiasts sharing knowledge and experiences.</p>
          </div>
          <div className="feature-card">
            <h3>💡 Expert Insights</h3>
            <p>Learn from industry experts about best practices and emerging trends in AI development.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Technology Stack</h2>
        <p>Built with modern web technologies to provide the best learning experience:</p>
        <div className="tech-stack">
          <ul>
            <li>⚛️ Modern UI Framework - For building a dynamic and responsive UI</li>
            <li>📝 Type-Safe Languages - For maintainable and robust code</li>
            <li>🛣️ Advanced Routing - For seamless navigation</li>
            <li>🎨 CSS Modules - For modular and scoped styling</li>
            <li>📚 Markdown Processing - For rich content rendering</li>
            <li>🔧 Modern Build Tools - For optimal performance</li>
          </ul>
        </div>
      </section>

      <section className="about-section">
        <h2>Get Started</h2>
        <p>
          Whether you're a beginner looking to understand AI fundamentals or an experienced 
          developer aiming to master LLM applications, LLM Forge Chronicle has resources 
          for every skill level. Explore our tutorials, dive into practical examples, and 
          join our community to start your AI development journey.
        </p>
      </section>
    </div>
  );
};

export default About;