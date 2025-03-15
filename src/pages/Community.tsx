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
        
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>🤝 Learn Together</h3>
            <p>Join other learners on their LLM journey</p>
          </div>
          <div className="benefit-card">
            <h3>💡 Share Knowledge</h3>
            <p>Contribute your insights and learn from others</p>
          </div>
          <div className="benefit-card">
            <h3>📚 Access Resources</h3>
            <p>Get early access to learning materials and guides</p>
          </div>
          <div className="benefit-card">
            <h3>🌱 Help Us Grow</h3>
            <p>Shape the community's direction and features</p>
          </div>
        </div>
      </section>

      <section className="community-platforms">
        <h2>Connect With Us</h2>
        
        <div className="platform-cards">
          <div className="platform-card">
            <div className="platform-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png" alt="Discord Logo" />
            </div>
            <h3>Discord Community</h3>
            <p>
              Join our Discord server to connect with other learners, share resources, 
              and participate in discussions about LLMs and AI development.
            </p>
            <div className="platform-features">
              <div className="feature">
                <span>✓</span> Connect with fellow learners
              </div>
              <div className="feature">
                <span>✓</span> Get help with your questions
              </div>
              <div className="feature">
                <span>✓</span> Share your learning journey
              </div>
            </div>
            <a href="https://discord.gg/yuqWWdCc" className="platform-button" target="_blank" rel="noopener noreferrer">Join Discord</a>
          </div>

          <div className="platform-card">
            <div className="platform-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/3488/3488426.png" alt="GitHub Logo" />
            </div>
            <h3>GitHub Repository</h3>
            <p>
              Explore our open-source project, contribute to the codebase, or help improve 
              the documentation. Every contribution matters!
            </p>
            <div className="platform-features">
              <div className="feature">
                <span>✓</span> Access learning resources
              </div>
              <div className="feature">
                <span>✓</span> Contribute to the project
              </div>
              <div className="feature">
                <span>✓</span> Report issues or suggestions
              </div>
            </div>
            <a href="https://github.com/rahulkadam/LLM-Forge-Chronicle" className="platform-button" target="_blank" rel="noopener noreferrer">View GitHub</a>
          </div>

          <div className="platform-card">
            <div className="platform-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email Icon" />
            </div>
            <h3>Email Us</h3>
            <p>
              Have questions or suggestions? Want to contribute or collaborate? 
              Feel free to reach out to us directly via email.
            </p>
            <div className="platform-features">
              <div className="feature">
                <span>✓</span> Get direct support
              </div>
              <div className="feature">
                <span>✓</span> Share your ideas
              </div>
              <div className="feature">
                <span>✓</span> Discuss collaboration
              </div>
            </div>
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