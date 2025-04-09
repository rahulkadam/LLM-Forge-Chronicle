import React, { useState, useMemo, Suspense } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { BlogPost, allBlogPosts } from '../data/blogPosts';
import '../styles/blogs/blogs-v2.css';

// Import all blog components
import OpenAIApiGuide from './blogs/openai-api-guide/openai-api-guide';
import OpenRouterPlatformGuide from "./blogs/openrouter-platform-guide/openrouter-platform-guide";
import LLMTechnologyGuide from "./blogs/llm-terms-guide/llm-technology-guide";
import LLMAgentGuide from './blogs/llm-agent-guide/llm-agent-guide';
import LLMGettingStartedGuide from './blogs/llm-getting-started-guide/llm-getting-started-guide';
import RAGTutorial from './blogs/rag-tutorial/rag-tutorial';
import LangchainIntroduction from './blogs/langchain-introduction/langchain-introduction';
import CursorCustomWorkflows from './blogs/cursor-custom-workflows/cursor-custom-workflows';
import ModelContextServer from './blogs/model-context-server/model-context-server';
import LLMModelComparison from './blogs/llm-model-comparison/llm-model-comparison';
import VectorDatabaseGuide from './blogs/vector-database-guide/vector-llm-guide';
import DeveloperPromptGuide from './blogs/prompt-engineering/developer-prompts';
import GrokModelGuide from './blogs/llm-models/grok';
import DeepSeekModelGuide from './blogs/llm-models/deepseek';
import MistralModelGuide from './blogs/llm-models/mistral';
import LlamaModelGuide from './blogs/llm-models/llama';
import ManusModelGuide from './blogs/llm-models/manus';
import ChatGPTModelGuide from './blogs/llm-models/chatgpt';
import ClaudeModelGuide from './blogs/llm-models/claude';
import GeminiModelGuide from './blogs/llm-models/gemini';
import DeveloperEfficiency from './blogs/ai-driven-it/developer-efficiency';
import CodeMigrationLLM from './blogs/ai-driven-it/code-migration';
import EnterpriseIntegrations from './blogs/ai-driven-it/enterprise-integrations';
import AIItTransformation from './blogs/ai-driven-it/ai-transformation';

// Map of blog IDs to their components
const blogComponents: { [key: string]: React.ComponentType } = {
  'openai-api': OpenAIApiGuide,
  'openrouter': OpenRouterPlatformGuide,
  'llm-terminology': LLMTechnologyGuide,
  'llm-agent': LLMAgentGuide,
  'llm-getting-started': LLMGettingStartedGuide,
  'rag-tutorial': RAGTutorial,
  'langchain': LangchainIntroduction,
  'cursor-workflows': CursorCustomWorkflows,
  'model-context-server': ModelContextServer,
  'model-comparison': LLMModelComparison,
  'vector-database-guide': VectorDatabaseGuide,
  'developer-prompts': DeveloperPromptGuide,
  'grok-model': GrokModelGuide,
  'deepseek-model': DeepSeekModelGuide,
  'mistral-model': MistralModelGuide,
  'llama-model': LlamaModelGuide,
  'manus-model': ManusModelGuide,
  'chatgpt-model': ChatGPTModelGuide,
  'claude-model': ClaudeModelGuide,
  'gemini-model': GeminiModelGuide,
  'developer-efficiency': DeveloperEfficiency,
  'code-migration-llm': CodeMigrationLLM,
  'enterprise-integrations': EnterpriseIntegrations,
  'ai-it-transformation': AIItTransformation,
};

const BlogsV2: React.FC = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Get unique categories
  const categories = useMemo(() => {
    const tags = allBlogPosts.map(post => post.tag);
    return ['All', ...Array.from(new Set(tags))];
  }, []);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    let posts = allBlogPosts;
    
    if (activeCategory !== 'All') {
      posts = posts.filter(post => post.tag === activeCategory);
    }
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.tag.toLowerCase().includes(searchLower)
      );
    }
    
    return posts;
  }, [activeCategory, searchTerm]);

  // Get currently selected blog
  const selectedBlog = useMemo(() => {
    if (!blogId) return null;
    return allBlogPosts.find(post => post.id === blogId);
  }, [blogId]);

  // Get the component for the selected blog
  const BlogComponent = selectedBlog ? blogComponents[selectedBlog.id] : null;

  // Handle category selection
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSearchTerm('');
  };

  return (
    <div className="blogs-v2-container">
      {/* Left Sidebar */}
      <div className="blogs-sidebar">
        <div className="sidebar-header">
          <h2>Blog Categories</h2>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`category-pill ${activeCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="blogs-list">
          {filteredPosts.map(post => (
            <Link 
              key={post.id}
              to={`/blogsv2/${post.id}`}
              className={`blog-list-item ${selectedBlog?.id === post.id ? 'active' : ''}`}
            >
              <div className="blog-list-content">
                <div className="blog-list-tag">{post.tag}</div>
                <h3 className="blog-list-title">{post.title}</h3>
                <div className="blog-list-meta">
                  <span>{post.readingTime}</span>
                  <span>{post.publishDate}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Content Area */}
      <div className="blog-content">
        <Suspense fallback={
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading content...</p>
          </div>
        }>
          {BlogComponent ? (
            <BlogComponent />
          ) : (
            <div className="no-selection">
              <h2>Welcome to LLM Blog & Tutorials</h2>
              <p>Select a blog post from the sidebar to start reading.</p>
              <div className="featured-posts">
                <h3>Featured Posts</h3>
                <div className="featured-grid">
                  {allBlogPosts.slice(0, 3).map(post => (
                    <div 
                      key={post.id} 
                      className="featured-card" 
                      onClick={() => navigate(`/blogsv2/${post.id}`)}
                    >
                      <div className={`featured-image ${post.imageClass}`}></div>
                      <h4>{post.title}</h4>
                      <span>{post.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default BlogsV2;