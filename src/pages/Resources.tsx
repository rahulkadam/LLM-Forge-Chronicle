import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Resources.css';

const Resources: React.FC = () => {
  return (
    <div className="resources-page">
      <section className="resources-hero">
        <h1>LLM Resources & References</h1>
        <p className="subtitle">Curated collection of tools, services, and learning materials for LLM development</p>
      </section>

      <section className="resource-section1">
        <h2>🎯 Popular LLM Services</h2>
        <div className="resource-grid1">
          <div className="resource-card1">
            <h3>OpenAI GPT-4</h3>
            <p>State-of-the-art language model with advanced capabilities.</p>
            <ul className="resource-list">
              <li><a href="https://platform.openai.com/" target="_blank" rel="noopener noreferrer">Platform Dashboard</a></li>
              <li><a href="https://platform.openai.com/docs" target="_blank" rel="noopener noreferrer">API Documentation</a></li>
              <li><a href="https://cookbook.openai.com/" target="_blank" rel="noopener noreferrer">OpenAI Cookbook</a></li>
            </ul>
          </div>

          <div className="resource-card1">
            <h3>Anthropic Claude</h3>
            <p>Advanced AI with strong reasoning and safety features.</p>
            <ul className="resource-list">
              <li><a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer">Claude Console</a></li>
              <li><a href="https://docs.anthropic.com/claude/docs" target="_blank" rel="noopener noreferrer">Claude Documentation</a></li>
              <li><a href="https://docs.anthropic.com/claude/reference" target="_blank" rel="noopener noreferrer">API Reference</a></li>
            </ul>
          </div>

          <div className="resource-card1">
            <h3>Google Gemini</h3>
            <p>Google's advanced multi-modal LLM platform.</p>
            <ul className="resource-list">
              <li><a href="https://ai.google.dev/" target="_blank" rel="noopener noreferrer">Google AI Studio</a></li>
              <li><a href="https://cloud.google.com/vertex-ai" target="_blank" rel="noopener noreferrer">Vertex AI Platform</a></li>
              <li><a href="https://ai.google.dev/docs" target="_blank" rel="noopener noreferrer">Documentation</a></li>
            </ul>
          </div>

          <div className="resource-card1">
            <h3>Meta Llama</h3>
            <p>Open-source LLMs for research and development.</p>
            <ul className="resource-list">
              <li><a href="https://ai.meta.com/llama/" target="_blank" rel="noopener noreferrer">Llama Models</a></li>
              <li><a href="https://github.com/facebookresearch/llama" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
              <li><a href="https://huggingface.co/meta-llama" target="_blank" rel="noopener noreferrer">Model Hub</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resource-section2">
        <h2>🛠️ Development Tools</h2>
        <div className="resource-grid2">
          <div className="resource-card">
            <h3>OpenRouter</h3>
            <p>Unified API for multiple LLM providers.</p>
            <ul className="resource-list">
              <li><a href="https://openrouter.ai/" target="_blank" rel="noopener noreferrer">Platform</a></li>
              <li><a href="https://openrouter.ai/docs" target="_blank" rel="noopener noreferrer">Documentation</a></li>
              <li><Link to="/blogs/openrouter-platform-guide">Integration Guide</Link></li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>DeepSeek</h3>
            <p>Advanced code understanding and generation.</p>
            <ul className="resource-list">
              <li><a href="https://platform.deepseek.com/" target="_blank" rel="noopener noreferrer">Platform</a></li>
              <li><a href="https://coder.deepseek.com/" target="_blank" rel="noopener noreferrer">Coder</a></li>
              <li><a href="https://github.com/deepseek-ai/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>Manus AI</h3>
            <p>AI agents and automation platform.</p>
            <ul className="resource-list">
              <li><a href="https://www.manus.ai/" target="_blank" rel="noopener noreferrer">Platform</a></li>
              <li><a href="https://docs.manus.ai/" target="_blank" rel="noopener noreferrer">Documentation</a></li>
              <li><a href="https://github.com/manus-ai/" target="_blank" rel="noopener noreferrer">Examples</a></li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>Cursor IDE</h3>
            <p>AI-powered code editor for developers.</p>
            <ul className="resource-list">
              <li><a href="https://cursor.sh/" target="_blank" rel="noopener noreferrer">Website</a></li>
              <li><Link to="/blogs/cursor-custom-workflows">Custom Workflows</Link></li>
              <li><a href="https://cursor.sh/docs" target="_blank" rel="noopener noreferrer">Documentation</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resource-section1">
        <h2>🚀 Agent Projects</h2>
        <div className="resource-grid1">
          <div className="resource-card">
            <h3>Popular Frameworks</h3>
            <ul className="resource-list">
              <li><a href="https://github.com/yoheinakajima/babyagi" target="_blank" rel="noopener noreferrer">BabyAGI</a></li>
              <li><a href="https://github.com/AntonOsika/gpt-engineer" target="_blank" rel="noopener noreferrer">GPT Engineer</a></li>
              <li><a href="https://github.com/geekan/MetaGPT" target="_blank" rel="noopener noreferrer">MetaGPT</a></li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>Agent Examples</h3>
            <ul className="resource-list">
              <li><Link to="/llm-agent/basic">Basic Agent Tutorial</Link></li>
              <li><Link to="/BuildingLLMAgent">File System Agent</Link></li>
              <li><Link to="/blogs/llm-agent-guide">Agent Development Guide</Link></li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>Agent Tools</h3>
            <ul className="resource-list">
              <li><a href="https://github.com/hwchase17/langchain-hub" target="_blank" rel="noopener noreferrer">LangChain Hub</a></li>
              <li><a href="https://github.com/microsoft/semantic-kernel" target="_blank" rel="noopener noreferrer">Semantic Kernel</a></li>
              <li><a href="https://github.com/deepset-ai/haystack" target="_blank" rel="noopener noreferrer">Haystack</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resource-section1">
        <h2>📚 Learning Resources</h2>
        <div className="resource-grid1">
          <div className="resource-card">
            <h3>Guides & Tutorials</h3>
            <ul className="resource-list">
              <li><Link to="/llm-fundamentals">LLM Fundamentals</Link></li>
              <li><Link to="/prompt-engineering">Prompt Engineering</Link></li>
              <li><Link to="/blogs/llm-deployment-guide">Deployment Guide</Link></li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>Sample Projects</h3>
            <ul className="resource-list">
              <li><a href="https://github.com/openai/openai-cookbook" target="_blank" rel="noopener noreferrer">OpenAI Examples</a></li>
              <li><a href="https://github.com/langchain-ai/langchain/tree/master/templates" target="_blank" rel="noopener noreferrer">LangChain Templates</a></li>
              <li><a href="https://huggingface.co/spaces" target="_blank" rel="noopener noreferrer">Hugging Face Spaces</a></li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>Research & Papers</h3>
            <ul className="resource-list">
              <li><a href="https://arxiv.org/abs/2303.08774" target="_blank" rel="noopener noreferrer">GPT-4 Technical Report</a></li>
              <li><a href="https://arxiv.org/abs/2302.07842" target="_blank" rel="noopener noreferrer">Constitutional AI</a></li>
              <li><a href="https://arxiv.org/abs/2307.09288" target="_blank" rel="noopener noreferrer">Tree of Thoughts</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resource-section1">
        <h2>🌐 Community & Support</h2>
        <div className="resource-grid1">
          <div className="resource-card">
            <h3>Discussion Forums</h3>
            <ul className="resource-list">
              <li><a href="https://discord.gg/langchain" target="_blank" rel="noopener noreferrer">LangChain Discord</a></li>
              <li><a href="https://community.openai.com/" target="_blank" rel="noopener noreferrer">OpenAI Community</a></li>
              <li><a href="https://discuss.huggingface.co/" target="_blank" rel="noopener noreferrer">Hugging Face Forums</a></li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>Blogs & Newsletters</h3>
            <ul className="resource-list">
              <li><a href="https://www.assemblyai.com/blog/" target="_blank" rel="noopener noreferrer">AssemblyAI Blog</a></li>
              <li><a href="https://newsletter.theaiedge.io/" target="_blank" rel="noopener noreferrer">The AI Edge</a></li>
              <li><a href="https://huggingface.co/blog" target="_blank" rel="noopener noreferrer">Hugging Face Blog</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resource-section newsletter-section">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest LLM development resources and updates.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" aria-label="Email subscription" />
          <button type="submit">Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default Resources;