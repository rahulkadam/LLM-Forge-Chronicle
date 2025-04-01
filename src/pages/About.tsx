import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <h1>About ChronoPrompt</h1>
      
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          ChronoPrompt empowers developers with the knowledge and tools to master Large Language Model (LLM) applications. 
          We bridge the gap between theoretical AI concepts and practical implementation, making advanced LLM technologies 
          accessible to developers at all skill levels.
        </p>
      </section>

      <section className="about-section">
        <h2>Why We Started ChronoPrompt</h2>
        <p>
          We noticed a gap in practical, developer-focused resources for LLMs. Existing tutorials either oversimplified 
          complex concepts or presented advanced techniques without proper foundations.
        </p>
        <p>
          As developers, we experienced the frustration of piecing together knowledge from scattered resources. We envisioned 
          a centralized platform providing a structured learning path — from fundamentals to advanced techniques — designed 
          for developers integrating LLMs into real-world applications.
        </p>
        <p>
          Our goal is to democratize LLM expertise, enabling more developers to build innovative, responsible, and effective 
          AI-powered applications that solve meaningful problems.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Offer</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📚 Progressive Learning Path</h3>
            <p>Structured tutorials from foundational concepts to advanced implementation techniques.</p>
          </div>
          <div className="feature-card">
            <h3>🛠️ Code-First Approach</h3>
            <p>Practical, executable examples demonstrating real-world LLM integration patterns.</p>
          </div>
          <div className="feature-card">
            <h3>🔍 Best Practices</h3>
            <p>Industry-tested approaches to prompt engineering, context management, and system design.</p>
          </div>
          <div className="feature-card">
            <h3>💡 Architectural Patterns</h3>
            <p>Proven architectures for building scalable, reliable LLM-powered applications.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Our Technology Focus</h2>
        <p>We leverage and teach modern technologies:</p>
        <div className="tech-stack">
          <ul>
            <li>🤖 LLM Integration Techniques - OpenAI, Claude, open-source models</li>
            <li>⚛️ Modern Web Frameworks - For building responsive AI interfaces</li>
            <li>🔄 Agent Architectures - Design patterns for autonomous AI systems</li>
            <li>📊 RAG Systems - Retrieval-augmented generation for knowledge-based applications</li>
            <li>🧩 LangChain & LlamaIndex - Advanced frameworks for LLM application development</li>
            <li>📦 Vector Databases - For efficient semantic search and retrieval</li>
          </ul>
        </div>
      </section>
      
      <section className="about-section founder-section">
        <h2>About the Founder</h2>
        <div className="founder-container">
          <div className="founder-image">
            <img src="/founder-image.png" alt="Rahul Kadam" />
          </div>
          <div className="founder-bio">
            <h3>Rahul Kadam</h3>
            <p className="founder-title">Software Engineering Leader & AI Enthusiast</p>
            <p>
              Rahul is a seasoned software engineering leader passionate about bridging the gap between cutting-edge AI 
              technologies and practical software development. With extensive experience in building scalable applications 
              and leading engineering teams, Rahul founded ChronoPrompt to address the need for more developer-focused LLM resources.
            </p>
            <p>
              His approach combines technical depth with practical implementation strategies, helping developers navigate 
              the rapidly evolving landscape of AI tools and frameworks.
            </p>
            <div className="founder-links">
              <a href="https://www.linkedin.com/in/rahul-kadam-19211022/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <span>LinkedIn Profile</span>
              </a>
              <a href="mailto:kadamrahul581@gmail.com" className="social-link email">
                <span>Contact: kadamrahul581@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Our Vision for the Future</h2>
        <p>
          As LLM technology evolves rapidly, we're committed to growing ChronoPrompt into the most comprehensive and practical 
          resource for developers. Our roadmap includes:
        </p>
        <ul className="vision-list">
          <li>Expanding our tutorial library to cover emerging LLM techniques and use cases</li>
          <li>Building a searchable repository of proven patterns and architectures</li>
          <li>Hosting workshops and live coding sessions with industry experts</li>
          <li>Creating specialized tracks for vertical-specific LLM applications</li>
          <li>Developing evaluation tools and benchmarks for LLM application quality</li>
        </ul>
      </section>
      
      {/* Community Section */}
      <section className="about-section community-section">
        <h2>Join Our Community</h2>
        <p>
          We're building a vibrant community of forward-thinking developers passionate about creating the next generation 
          of intelligent applications. Whether you're just beginning your LLM journey or already building sophisticated AI systems, 
          we welcome your participation and insights.
        </p>
        
        <div className="community-platforms">
          <div className="platform-cards">
            <div className="platform-card">
              <div className="platform-icon">
                <img src="/discord-icon.png" alt="Discord Logo" />
              </div>
              <h3>Discord Community</h3>
              <p>
                Join our Discord server to connect with fellow developers, share insights, troubleshoot challenges, and collaborate on projects.
              </p>
              <a href="https://discord.gg/yuqWWdCc" className="platform-button" target="_blank" rel="noopener noreferrer">Join Discord</a>
            </div>

            <div className="platform-card">
              <div className="platform-icon">
                <img src="/github-icon.png" alt="GitHub Logo" />
              </div>
              <h3>GitHub Repository</h3>
              <p>
                Contribute to our open-source codebase, suggest improvements, or use our example projects as starting points for your own applications.
              </p>
              <a href="https://github.com/rahulkadam/LLM-Forge-Chronicle" className="platform-button" target="_blank" rel="noopener noreferrer">View GitHub</a>
            </div>

            <div className="platform-card">
              <div className="platform-icon">
                <img src="/email-icon.png" alt="Email Icon" />
              </div>
              <h3>Contact Directly</h3>
              <p>
                Have questions, partnership inquiries, or content suggestions? Reach out to Rahul directly via email.
              </p>
              <a href="mailto:kadamrahul581@gmail.com" className="platform-button">Email Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
