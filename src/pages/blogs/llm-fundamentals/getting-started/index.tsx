import React from 'react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection } from '../../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../../data/blogData';
import '../../../../styles/blogs/blog-base-style.css';


const GettingStarted: React.FC = () => {
  const category: BlogCategory = 'Technical';
  
  const tableOfContents = [
    { id: 'intro', title: 'Introduction' },
    { id: 'fundamentals', title: 'LLM Fundamentals' },
    { id: 'prompting', title: 'Prompt Engineering' },
    { id: 'development', title: 'Development & Implementation' },
    { id: 'tools', title: 'Tools & Resources' },
    { id: 'popular', title: 'Popular Starting Points' },
    { id: 'search', title: 'Resource Directory' }
  ];

  return (
    <BlogTemplate
      title="ChronoPrompt Resource Directory"
      date="April 12, 2025"
      readTime="10 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="intro" title="Welcome to ChronoPrompt">
        <div className="content-card">
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
          <img src="llm/LLM-title3.png" alt="LLM Illustration" className="feature-image" />
        </div>
      </BlogSection>

      <BlogSection id="fundamentals" title="LLM Fundamentals">
        <p>Essential knowledge to build a strong foundation in LLM technology</p>
        
        <div className="content-grid">
          <div className="content-card">
            <h3>Introduction to LLMs</h3>
            <p>Core concepts and introduction to Large Language Models</p>
            <div className="link-group">
              <Link to="/llm-fundamentals" className="tag">LLM Fundamentals</Link>
              <Link to="/blogs?tag=LLM%20Models" className="tag">LLM Models</Link>
              <Link to="/llm-technical" className="tag">Technical Deep Dive</Link>
            </div>
          </div>
          
          <div className="content-card">
            <h3>Use Cases & Applications</h3>
            <p>Practical applications and capabilities of language models</p>
            <div className="link-group">
              <Link to="/llm-agent" className="tag">LLM Capabilities</Link>
              <Link to="/llm-fundamentals/chatgpt-guide" className="tag">ChatGPT Guide</Link>
              <Link to="/ai-basics/chatgpt-guide" className="tag">Use Cases</Link>
            </div>
          </div>
          
          <div className="content-card">
            <h3>Getting Started for Developers</h3>
            <p>Practical guides for developers new to LLM implementation</p>
            <div className="link-group">
              <Link to="/llm-fundamentals/developer-quick-start" className="tag">Quick Start</Link>
              <Link to="/blogs/llm-getting-started-guide" className="tag">Getting Started</Link>
              <Link to="/blogs/llm-technology-guide" className="tag">Terminology</Link>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="prompting" title="Prompt Engineering">
        <p>Master the art of crafting effective prompts for optimal LLM results</p>
        
        <div className="content-grid">
          <div className="content-card">
            <h3>Prompt Engineering Fundamentals</h3>
            <p>Essential techniques for effective prompting</p>
            <div className="link-group">
              <Link to="/prompt-engineering" className="tag">Overview</Link>
              <Link to="/ai-basics/prompt-basics" className="tag">Basics</Link>
            </div>
          </div>
          
          <div className="content-card">
            <h3>Advanced Prompting</h3>
            <p>Sophisticated techniques for complex tasks</p>
            <div className="link-group">
              <Link to="/prompt-engineering/intermediate" className="tag">Intermediate</Link>
              <Link to="/prompt-engineering/advanced" className="tag">Advanced</Link>
              <Link to="/ai-basics/examples" className="tag">Examples</Link>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="development" title="Development & Implementation">
        <p>Practical guides for building applications with LLMs</p>
        
        <div className="content-grid">
          <div className="content-card">
            <h3>LLM Integration</h3>
            <p>Connect your applications to language models</p>
            <div className="link-group">
              <Link to="/blogs/openai-api-guide" className="tag">OpenAI API</Link>
              <Link to="/blogs/openrouter-platform-guide" className="tag">OpenRouter</Link>
              <Link to="/blogs?tag=AI-Driven%20IT" className="tag">Enterprise AI</Link>
            </div>
          </div>
          
          <div className="content-card">
            <h3>Agent Development</h3>
            <p>Build autonomous AI assistants and agents</p>
            <div className="link-group">
              <Link to="/BuildingLLMAgent" className="tag">Building Agents</Link>
              <Link to="/llm-agent/basic" className="tag">Basic Agent</Link>
              <Link to="/blogs/model-context-server" className="tag">Context Server</Link>
            </div>
          </div>
          
          <div className="content-card">
            <h3>Advanced Techniques</h3>
            <p>Sophisticated LLM implementation patterns</p>
            <div className="link-group">
              <Link to="/blogs/rag-tutorial" className="tag">RAG Tutorial</Link>
              <Link to="/blogs/langchain-introduction" className="tag">LangChain</Link>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="tools" title="Tools & Resources">
        <p>Discover tools, frameworks, and community resources</p>
        
        <div className="content-grid">
          <div className="content-card">
            <h3>Development Tools</h3>
            <p>Tools to enhance your LLM development workflow</p>
            <div className="link-group">
              <Link to="/ai-tools" className="tag">AI Tools</Link>
              <Link to="/blogs/cursor-custom-workflows" className="tag">Cursor</Link>
              <Link to="/resources" className="tag">Resources</Link>
            </div>
          </div>
          
          <div className="content-card">
            <h3>Community & Support</h3>
            <p>Connect with other developers and get help</p>
            <div className="link-group">
              <Link to="/community" className="tag">Community</Link>
              <Link to="/about" className="tag">About Us</Link>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="popular" title="Popular Starting Points">
        <p>Not sure where to begin? Here are some of our most accessed resources for different learning paths:</p>
        
        <div className="content-grid">
          <div className="content-card">
            <h3>🔰 For Beginners</h3>
            <div className="link-group">
              <Link to="/llm-fundamentals" className="tag highlight">LLM Fundamentals</Link>
              <Link to="/blogs/llm-getting-started-guide" className="tag">Getting Started</Link>
              <Link to="/llm-fundamentals/chatgpt-guide" className="tag">ChatGPT Guide</Link>
            </div>
          </div>
          
          <div className="content-card">
            <h3>💻 For Developers</h3>
            <div className="link-group">
              <Link to="/llm-fundamentals/developer-quick-start" className="tag highlight">Quick Start</Link>
              <Link to="/blogs/openai-api-guide" className="tag">OpenAI API</Link>
              <Link to="/BuildingLLMAgent" className="tag">Building Agents</Link>
            </div>
          </div>
          
          <div className="content-card">
            <h3>🚀 For Advanced Users</h3>
            <div className="link-group">
              <Link to="/blogs/rag-tutorial" className="tag highlight">RAG Tutorial</Link>
              <Link to="/prompt-engineering/advanced" className="tag">Advanced Prompting</Link>
              <Link to="/blogs/model-context-server" className="tag">Context Server</Link>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="search" title="Resource Directory">
        <p>Browse all our content categorized by type:</p>
        
        <div className="content-grid">
          <Link to="/blogs" className="content-card link-card">
            <span className="card-icon">📚</span>
            <h3>All Blog Articles</h3>
          </Link>
          
          <Link to="/ai-tools" className="content-card link-card">
            <span className="card-icon">🔧</span>
            <h3>Tools & References</h3>
          </Link>
          
          <Link to="/prompt-engineering" className="content-card link-card">
            <span className="card-icon">📝</span>
            <h3>Prompt Engineering</h3>
          </Link>
          
          <Link to="/resources" className="content-card link-card">
            <span className="card-icon">🔍</span>
            <h3>Additional Resources</h3>
          </Link>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default GettingStarted;