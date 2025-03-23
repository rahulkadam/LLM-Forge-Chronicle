import React from 'react';
import '../styles/Community.css';

const Community: React.FC = () => {
  return (
    <div className="community-page">
      <section className="community-hero">
        <h1>Join Our Growing Community</h1>
        <p className="subtitle">
          Be one of the first members to shape our LLM learning community
        </p>
      </section>

      <section className="community-overview">
        <h2>We're Just Getting Started!</h2>
        <p>
          We're building a community of LLM enthusiasts, learners, and practitioners. 
          Join us in the early stages and help shape the future of this community. 
          Whether you're just starting with LLMs or you're an experienced practitioner, 
          your perspective and participation will be valuable.
        </p>
      </section>

      <section className="community-platforms">
        <h2>Connect With Us</h2>
        
        <div className="platform-cards">
          <div className="platform-card">
            <div className="platform-icon">
              <img src="/discord-icon.png" alt="Discord Logo" />
            </div>
            <h3>Discord Community</h3>
            <p>
              Join our Discord server to connect with other learners, share resources, 
              and participate in discussions about LLMs and AI development.
            </p>
            <a href="https://discord.gg/yuqWWdCc" className="platform-button" target="_blank" rel="noopener noreferrer">Join Discord</a>
          </div>

          <div className="platform-card">
            <div className="platform-icon">
              <img src="/github-icon.png" alt="GitHub Logo" />
            </div>
            <h3>GitHub Repository</h3>
            <p>
              Explore our open-source project, contribute to the codebase, or help improve 
              the documentation. Every contribution matters!
            </p>
            <a href="https://github.com/rahulkadam/LLM-Forge-Chronicle" className="platform-button" target="_blank" rel="noopener noreferrer">View GitHub</a>
          </div>

          <div className="platform-card">
            <div className="platform-icon">
              <img src="/email-icon.png" alt="Email Icon" />
            </div>
            <h3>Email Us</h3>
            <p>
              Have questions or suggestions? Want to contribute or collaborate? 
              Feel free to reach out to us directly via email.
            </p>
            <a href="mailto:kadamrahul581@gmail.com" className="platform-button">Contact Us</a>
          </div>
        </div>
      </section>

      <section className="community-join">
        <div className="join-container">
          <h2>Be Part of Something New</h2>
          <p>Join us in building a supportive community for LLM learning and development.</p>
          <div className="join-buttons">
            <a href="https://discord.gg/yuqWWdCc" className="primary-button" target="_blank" rel="noopener noreferrer">Join Discord</a>
            <a href="https://github.com/rahulkadam/LLM-Forge-Chronicle" className="secondary-button" target="_blank" rel="noopener noreferrer">View GitHub</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;