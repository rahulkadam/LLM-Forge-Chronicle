import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/GettingStarted.css';

const GettingStarted: React.FC = () => {
  return (
    <div className="getting-started">
      <header className="getting-started-header">
        <h1>ChronoPrompt Resource Directory</h1>
        <p className="subtitle">Your complete guide to all content on our platform</p>
      </header>

      <section className="intro-section">
        <div className="intro-content">
          <h2>Welcome to ChronoPrompt</h2>
          <p>
            ChronoPrompt is a comprehensive platform dedicated to empowering developers 
            with the knowledge and tools needed to master Large Language Model (LLM) 
            applications. This page serves as your complete directory to all our resources.
          </p>
          <p>
            Whether you're looking for fundamentals, prompt engineering techniques, agent development,
            or specialized tutorials, you'll find everything organized below to help you navigate
            our content efficiently.
          </p>
        </div>
        <div className="intro-image">
          <img src="llm/LLM-title3.png" alt="LLM Illustration" />
        </div>
      </section>

      <section className="content-directory">
        {/* Fundamentals Section */}
        <div className="directory-section">
          <div className="section-header foundation">
            <h2>LLM Fundamentals</h2>
            <p>Essential knowledge to build a strong foundation in LLM technology</p>
          </div>
          
          <div className="directory-grid">
            <div className="directory-card">
              <h3>Introduction to LLMs</h3>
              <p>Core concepts and introduction to Large Language Models</p>
              <div className="link-list">
                <Link to="/llm-fundamentals" className="directory-link">LLM Fundamentals</Link>
                <Link to="/ai-basics" className="directory-link">AI Basics</Link>
                <Link to="/llm-technical" className="directory-link">LLM Technical Deep Dive</Link>
              </div>
            </div>
            
            <div className="directory-card">
              <h3>Use Cases & Applications</h3>
              <p>Practical applications and capabilities of language models</p>
              <div className="link-list">
                <Link to="/llm-agent" className="directory-link">LLM Capabilities</Link>
                <Link to="/llm-fundamentals/chatgpt-guide" className="directory-link">ChatGPT Guide</Link>
                <Link to="/ai-basics/chatgpt-guide" className="directory-link">ChatGPT & LLM Use Cases</Link>
              </div>
            </div>
            
            <div className="directory-card">
              <h3>Getting Started for Developers</h3>
              <p>Practical guides for developers new to LLM implementation</p>
              <div className="link-list">
                <Link to="/llm-fundamentals/developer-quick-start" className="directory-link">Developer Quick Start</Link>
                <Link to="/blogs/llm-getting-started-guide" className="directory-link">LLM Getting Started Guide</Link>
                <Link to="/blogs/llm-terms-guide" className="directory-link">LLM Terminology Guide</Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Prompt Engineering Section */}
        <div className="directory-section">
          <div className="section-header intermediate">
            <h2>Prompt Engineering</h2>
            <p>Master the art of crafting effective prompts for optimal LLM results</p>
          </div>
          
          <div className="directory-grid">
            <div className="directory-card">
              <h3>Prompt Engineering Fundamentals</h3>
              <p>Essential techniques for effective prompting</p>
              <div className="link-list">
                <Link to="/prompt-engineering" className="directory-link">Prompt Engineering Overview</Link>
                <Link to="/prompt-engineering-basics" className="directory-link">Prompt Engineering Basics</Link>
                <Link to="/ai-basics/prompt-basics" className="directory-link">Prompt Basics</Link>
              </div>
            </div>
            
            <div className="directory-card">
              <h3>Advanced Prompting</h3>
              <p>Sophisticated techniques for complex tasks</p>
              <div className="link-list">
                <Link to="/prompt-engineering/intermediate" className="directory-link">Intermediate Prompt Engineering</Link>
                <Link to="/prompt-engineering/advanced" className="directory-link">Advanced Prompt Engineering</Link>
                <Link to="/ai-basics/examples" className="directory-link">Practical Examples</Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Development & Implementation Section */}
        <div className="directory-section">
          <div className="section-header advanced">
            <h2>Development & Implementation</h2>
            <p>Practical guides for building applications with LLMs</p>
          </div>
          
          <div className="directory-grid">
            <div className="directory-card">
              <h3>LLM Integration</h3>
              <p>Connect your applications to language models</p>
              <div className="link-list">
                <Link to="/blogs/openai-api-guide" className="directory-link">OpenAI API Guide</Link>
                <Link to="/blogs/openrouter-platform-guide" className="directory-link">OpenRouter Platform Guide</Link>
                <Link to="/python-module" className="directory-link">Python Integration</Link>
              </div>
            </div>
            
            <div className="directory-card">
              <h3>Agent Development</h3>
              <p>Build autonomous AI assistants and agents</p>
              <div className="link-list">
                <Link to="/BuildingLLMAgent" className="directory-link">Building LLM Agents</Link>
                <Link to="/BasicLLMAgent" className="directory-link">Basic LLM Agent</Link>
                <Link to="/blogs/model-context-server" className="directory-link">Model Context Server</Link>
                <Link to="/blogs/llm-agent-guide" className="directory-link">LLM Agents Guide</Link>
              </div>
            </div>
            
            <div className="directory-card">
              <h3>Advanced Techniques</h3>
              <p>Sophisticated LLM implementation patterns</p>
              <div className="link-list">
                <Link to="/blogs/rag-tutorial" className="directory-link">RAG (Retrieval Augmented Generation) Tutorial</Link>
                <Link to="/blogs/langchain-introduction" className="directory-link">LangChain Introduction</Link>
                <Link to="/professional" className="directory-link">Professional Techniques</Link>
                <Link to="/expert" className="directory-link">Expert Implementation</Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tools & Resources Section */}
        <div className="directory-section">
          <div className="section-header resources">
            <h2>Tools & Resources</h2>
            <p>Discover tools, frameworks, and community resources</p>
          </div>
          
          <div className="directory-grid">
            <div className="directory-card">
              <h3>Development Tools</h3>
              <p>Tools to enhance your LLM development workflow</p>
              <div className="link-list">
                <Link to="/ai-tools" className="directory-link">AI Tools Overview</Link>
                <Link to="/blogs/cursor-custom-workflows" className="directory-link">Cursor Custom Workflows</Link>
                <Link to="/resources" className="directory-link">LLM Resources & References</Link>
              </div>
            </div>
            
            <div className="directory-card">
              <h3>Community & Support</h3>
              <p>Connect with other developers and get help</p>
              <div className="link-list">
                <Link to="/community" className="directory-link">Community</Link>
                <Link to="/about" className="directory-link">About ChronoPrompt</Link>
              </div>
            </div>
            
            <div className="directory-card">
              <h3>Specialized Content</h3>
]              <p>Focused learning for specific use cases</p>
              <div className="link-list">
                <Link to="/ProfessionalExample" className="directory-link">Professional Example</Link>
                <Link to="/blogs" className="directory-link">All Blog Posts</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="popular-content">
        <h2>Popular Starting Points</h2>
        <p>Not sure where to begin? Here are some of our most accessed resources for different learning paths:</p>
        
        <div className="popular-grid">
          <div className="popular-card">
            <h3>🔰 For Beginners</h3>
            <div className="link-list">
              <Link to="/llm-fundamentals" className="directory-link highlight">LLM Fundamentals</Link>
              <Link to="/blogs/llm-getting-started-guide" className="directory-link">LLM Getting Started Guide</Link>
              <Link to="/llm-fundamentals/chatgpt-guide" className="directory-link">ChatGPT Guide</Link>
            </div>
          </div>
          
          <div className="popular-card">
            <h3>💻 For Developers</h3>
            <div className="link-list">
              <Link to="/llm-fundamentals/developer-quick-start" className="directory-link highlight">Developer Quick Start</Link>
              <Link to="/blogs/openai-api-guide" className="directory-link">OpenAI API Integration</Link>
              <Link to="/BuildingLLMAgent" className="directory-link">Building LLM Agents</Link>
            </div>
          </div>
          
          <div className="popular-card">
            <h3>🚀 For Advanced Users</h3>
            <div className="link-list">
              <Link to="/blogs/rag-tutorial" className="directory-link highlight">RAG Tutorial</Link>
              <Link to="/prompt-engineering/advanced" className="directory-link">Advanced Prompt Engineering</Link>
              <Link to="/blogs/model-context-server" className="directory-link">Model Context Server</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="search-resources">
        <h2>Looking for Something Specific?</h2>
        <p>Browse all our content categorized by type:</p>
        
        <div className="search-links">
          <Link to="/blogs" className="search-link">
            <span className="search-icon">📚</span>
            <span className="search-text">All Blog Articles</span>
          </Link>
          
          <Link to="/ai-tools" className="search-link">
            <span className="search-icon">🔧</span>
            <span className="search-text">Tools & References</span>
          </Link>
          
          <Link to="/prompt-engineering" className="search-link">
            <span className="search-icon">📝</span>
            <span className="search-text">Prompt Engineering Guides</span>
          </Link>
          
          <Link to="/resources" className="search-link">
            <span className="search-icon">🔍</span>
            <span className="search-text">Additional Resources</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GettingStarted;