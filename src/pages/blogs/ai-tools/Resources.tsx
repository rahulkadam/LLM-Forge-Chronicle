import React from 'react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection } from '../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../data/blogData';
import '../../../styles/blogs/blog-base-style.css';
import '../../../styles/blogs/blog-content.css';
import '../../../styles/blogs/blog-layout-update.css';

const Resources: React.FC = () => {
  const category: BlogCategory = 'Technical';
  
  const tableOfContents = [
    { id: 'llm-services', title: 'LLM Services' },
    { id: 'dev-tools', title: 'Development Tools' },
    { id: 'agent-projects', title: 'Agent Projects' },
    { id: 'learning', title: 'Learning Resources' },
    { id: 'community', title: 'Community & Support' }
  ];

  return (
    <BlogTemplate
      title="LLM Resources & References"
      date="April 12, 2025"
      readTime="10 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="llm-services" title="Popular LLM Services">
        <div className="content-grid">
          <div className="content-card">
            <h3>OpenAI GPT-4</h3>
            <p>State-of-the-art language model with advanced capabilities.</p>
            <ul>
              <li><a href="https://platform.openai.com/" target="_blank" rel="noopener noreferrer">Platform Dashboard</a></li>
              <li><a href="https://platform.openai.com/docs" target="_blank" rel="noopener noreferrer">API Documentation</a></li>
              <li><a href="https://cookbook.openai.com/" target="_blank" rel="noopener noreferrer">OpenAI Cookbook</a></li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Anthropic Claude</h3>
            <p>Advanced AI with strong reasoning and safety features.</p>
            <ul>
              <li><a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer">Claude Console</a></li>
              <li><a href="https://docs.anthropic.com/claude/docs" target="_blank" rel="noopener noreferrer">Claude Documentation</a></li>
              <li><a href="https://docs.anthropic.com/claude/reference" target="_blank" rel="noopener noreferrer">API Reference</a></li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Google Gemini</h3>
            <p>Google's advanced multi-modal LLM platform.</p>
            <ul>
              <li><a href="https://ai.google.dev/" target="_blank" rel="noopener noreferrer">Google AI Studio</a></li>
              <li><a href="https://cloud.google.com/vertex-ai" target="_blank" rel="noopener noreferrer">Vertex AI Platform</a></li>
              <li><a href="https://ai.google.dev/docs" target="_blank" rel="noopener noreferrer">Documentation</a></li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="dev-tools" title="Development Tools">
        <div className="content-grid">
          <div className="content-card">
            <h3>OpenRouter</h3>
            <p>Unified API for multiple LLM providers.</p>
            <ul>
              <li><a href="https://openrouter.ai/" target="_blank" rel="noopener noreferrer">Platform</a></li>
              <li><a href="https://openrouter.ai/docs" target="_blank" rel="noopener noreferrer">Documentation</a></li>
              <li><Link to="/blogs/openrouter-platform-guide">Integration Guide</Link></li>
            </ul>
          </div>

          <div className="content-card">
            <h3>DeepSeek</h3>
            <p>Advanced code understanding and generation.</p>
            <ul>
              <li><a href="https://platform.deepseek.com/" target="_blank" rel="noopener noreferrer">Platform</a></li>
              <li><a href="https://coder.deepseek.com/" target="_blank" rel="noopener noreferrer">Coder</a></li>
              <li><a href="https://github.com/deepseek-ai/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="agent-projects" title="Agent Projects">
        <div className="content-grid">
          <div className="content-card">
            <h3>Popular Frameworks</h3>
            <ul>
              <li><a href="https://github.com/yoheinakajima/babyagi" target="_blank" rel="noopener noreferrer">BabyAGI</a></li>
              <li><a href="https://github.com/geekan/MetaGPT" target="_blank" rel="noopener noreferrer">MetaGPT</a></li>
              <li><a href="https://github.com/AntonOsika/gpt-engineer" target="_blank" rel="noopener noreferrer">GPT Engineer</a></li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Agent Examples</h3>
            <ul>
              <li><Link to="/llm-agent/basic">Basic Agent Tutorial</Link></li>
              <li><Link to="/BuildingLLMAgent">File System Agent</Link></li>
              <li><Link to="/blogs/llm-agent-guide">Agent Development Guide</Link></li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="learning" title="Learning Resources">
        <div className="content-grid">
          <div className="content-card">
            <h3>Guides & Tutorials</h3>
            <ul>
              <li><Link to="/llm-fundamentals">LLM Fundamentals</Link></li>
              <li><Link to="/prompt-engineering">Prompt Engineering</Link></li>
              <li><Link to="/blogs/llm-deployment-guide">Deployment Guide</Link></li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Sample Projects</h3>
            <ul>
              <li><a href="https://github.com/openai/openai-cookbook" target="_blank" rel="noopener noreferrer">OpenAI Examples</a></li>
              <li><a href="https://github.com/langchain-ai/langchain/tree/master/templates" target="_blank" rel="noopener noreferrer">LangChain Templates</a></li>
              <li><a href="https://huggingface.co/spaces" target="_blank" rel="noopener noreferrer">Hugging Face Spaces</a></li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="community" title="Community & Support">
        <div className="content-grid">
          <div className="content-card">
            <h3>Discussion Forums</h3>
            <ul>
              <li><a href="https://discord.gg/langchain" target="_blank" rel="noopener noreferrer">LangChain Discord</a></li>
              <li><a href="https://community.openai.com/" target="_blank" rel="noopener noreferrer">OpenAI Community</a></li>
              <li><a href="https://discuss.huggingface.co/" target="_blank" rel="noopener noreferrer">Hugging Face Forums</a></li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Blogs & Newsletters</h3>
            <ul>
              <li><a href="https://www.assemblyai.com/blog/" target="_blank" rel="noopener noreferrer">AssemblyAI Blog</a></li>
              <li><a href="https://newsletter.theaiedge.io/" target="_blank" rel="noopener noreferrer">The AI Edge</a></li>
              <li><a href="https://huggingface.co/blog" target="_blank" rel="noopener noreferrer">Hugging Face Blog</a></li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="newsletter" title="Stay Updated">
        <div className="content-card">
          <p>Subscribe to our newsletter for the latest LLM development resources and updates.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" aria-label="Email subscription" />
            <button type="submit" className="primary-button">Subscribe</button>
          </div>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default Resources;