import React from 'react';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection } from '../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../data/blogData';
import '../../../styles/blogs/blog-base-style.css';


const Community: React.FC = () => {
  const category: BlogCategory = 'Technical';
  
  const tableOfContents = [
    { id: 'overview', title: 'Overview' },
    { id: 'platforms', title: 'Connect With Us' },
    { id: 'join', title: 'Get Involved' }
  ];

  return (
    <BlogTemplate
      title="Join Our Growing Community"
      date="April 12, 2025"
      readTime="5 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="overview" title="We're Just Getting Started!">
        <p>
          We're building a community of LLM enthusiasts, learners, and practitioners. 
          Join us in the early stages and help shape the future of this community. 
          Whether you're just starting with LLMs or you're an experienced practitioner, 
          your perspective and participation will be valuable.
        </p>
      </BlogSection>

      <BlogSection id="platforms" title="Connect With Us">
        <div className="content-grid">
          <div className="content-card">
            <img src="/discord-icon.png" alt="Discord Logo" className="platform-icon" />
            <h3>Discord Community</h3>
            <p>
              Join our Discord server to connect with other learners, share resources, 
              and participate in discussions about LLMs and AI development.
            </p>
            <a 
              href="https://discord.gg/yuqWWdCc" 
              className="tag" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Join Discord
            </a>
          </div>

          <div className="content-card">
            <img src="/github-icon.png" alt="GitHub Logo" className="platform-icon" />
            <h3>GitHub Repository</h3>
            <p>
              Explore our open-source project, contribute to the codebase, or help improve 
              the documentation. Every contribution matters!
            </p>
            <a 
              href="https://github.com/rahulkadam/LLM-Forge-Chronicle" 
              className="tag" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
          </div>

          <div className="content-card">
            <img src="/email-icon.png" alt="Email Icon" className="platform-icon" />
            <h3>Email Us</h3>
            <p>
              Have questions or suggestions? Want to contribute or collaborate? 
              Feel free to reach out to us directly via email.
            </p>
            <a href="mailto:kadamrahul581@gmail.com" className="tag">
              Contact Us
            </a>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="join" title="Get Involved">
        <div className="content-card">
          <h3>Be Part of Something New</h3>
          <p>
            Join us in building a supportive community for LLM learning and development. 
            Your participation can help shape the future of AI education and implementation.
          </p>
          <div className="button-group">
            <a 
              href="https://discord.gg/yuqWWdCc" 
              className="tag" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Join Discord
            </a>
            <a 
              href="https://github.com/rahulkadam/LLM-Forge-Chronicle" 
              className="tag" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
          </div>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default Community;