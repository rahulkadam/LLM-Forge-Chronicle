import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/blogs/blog-list-style.css';

// Define the interface for a blog post
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageClass: string;
  tag: string;
  readingTime: string;
  publishDate: string;
  link: string;
}

const Blogs: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get initial tag from URL query parameters if available
  const getInitialTag = () => {
    const params = new URLSearchParams(location.search);
    return params.get('tag') || 'All';
  };

  // State for the active category/tag filter and current page
  const [activeCategory, setActiveCategory] = useState<string>(getInitialTag());
  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 6;

  // Update URL when active category changes
  useEffect(() => {
    if (activeCategory === 'All') {
      navigate('/blogs');
    } else {
      navigate(`/blogs?tag=${activeCategory}`);
    }
  }, [activeCategory, navigate]);

  // Complete list of blog posts
  const allBlogPosts: BlogPost[] = [
    {
      id: 'model-context-server',
      title: 'Model Context Server (MCP): Efficient Context Management for LLMs',
      excerpt: 'Explore how Model Context Servers solve context window limitations in LLMs by efficiently managing, storing, and retrieving context to enable more coherent AI experiences.',
      imageClass: 'mcp-image',
      tag: 'Architecture',
      readingTime: '8 min read',
      publishDate: 'March 30, 2024',
      link: '/blogs/model-context-server'
    },
    {
      id: 'llm-terminology',
      title: 'Understanding LLM Terminology: A Comprehensive Guide',
      excerpt: 'A detailed guide to essential terms and concepts in Large Language Models, from tokens to fine-tuning, helping you navigate the world of AI language processing.',
      imageClass: 'llm-terminology-image',
      tag: 'Technical',
      readingTime: '8 min read',
      publishDate: 'March 21, 2024',
      link: '/blogs/llm-technology-guide'
    },
    {
      id: 'llm-getting-started',
      title: 'Getting Started with LLMs: A Beginner\'s Q&A Guide',
      excerpt: 'A friendly question-answer guide to help beginners understand and start using Large Language Models effectively without feeling overwhelmed.',
      imageClass: 'getting-started-image',
      tag: 'Beginner',
      readingTime: '7 min read',
      publishDate: 'March 25, 2024',
      link: '/blogs/llm-getting-started-guide'
    },
    {
      id: 'llm-agent',
      title: 'LLM Agents: Just Functions with a Fancy Name',
      excerpt: 'Demystifying LLM Agents - they\'re just functions that use language models to do specific tasks.',
      imageClass: 'llm-agent-image',
      tag: 'Technical',
      readingTime: '5 min read',
      publishDate: 'March 22, 2024',
      link: '/blogs/llm-agent-guide'
    },
    {
      id: 'openrouter',
      title: 'What is OpenRouter and Why Use It?',
      excerpt: 'Explore how OpenRouter can give you access to multiple LLMs through a unified API, simplifying your multi-model workflow and reducing integration complexity.',
      imageClass: 'openrouter-image',
      tag: 'Platform',
      readingTime: '6 min read',
      publishDate: 'July 3, 2023',
      link: '/blogs/openrouter-platform-guide'
    },
    {
      id: 'cursor-workflows',
      title: 'Mastering Cursor Custom Workflows: Automate Your Coding Tasks',
      excerpt: 'Learn how to create and optimize custom workflows in Cursor to automate coding tasks, improve productivity, and streamline your development process.',
      imageClass: 'cursor-workflows-image',
      tag: 'Developer Tools',
      readingTime: '8 min read',
      publishDate: 'March 25, 2024',
      link: '/blogs/cursor-custom-workflows'
    },
    {
      id: 'openai-api',
      title: 'Connecting to OpenAI API: A Complete Guide',
      excerpt: 'A step-by-step tutorial to set up and use OpenAI\'s API for your applications, including authentication, handling requests, and managing API limits.',
      imageClass: 'openai-image',
      tag: 'Tutorial',
      readingTime: '8 min read',
      publishDate: 'June 15, 2023',
      link: '/blogs/openai-api-guide'
    },
    {
      id: 'rag-tutorial',
      title: 'Building Your First RAG System',
      excerpt: 'A comprehensive tutorial on implementing Retrieval Augmented Generation (RAG) to enhance your LLMs with external data sources and improve response accuracy.',
      imageClass: 'rag-image',
      tag: 'Advanced',
      readingTime: '12 min read',
      publishDate: 'July 18, 2023',
      link: '/blogs/rag-tutorial'
    },
    {
      id: 'prompt-engineering',
      title: 'Advanced Prompt Engineering Patterns',
      excerpt: 'Learn advanced prompting strategies like chain-of-thought, few-shot learning, and structured outputs to maximize the capabilities of LLMs.',
      imageClass: 'prompt-image',
      tag: 'Technique',
      readingTime: '10 min read',
      publishDate: 'August 5, 2023',
      link: '/blogs/advanced-prompt-engineering'
    },
    {
      id: 'function-calling',
      title: 'Mastering Function Calling with LLMs',
      excerpt: 'How to use function calling capabilities in modern LLMs to create powerful applications that can interact with external tools and APIs.',
      imageClass: 'functions-image',
      tag: 'Development',
      readingTime: '9 min read',
      publishDate: 'August 22, 2023',
      link: '/blogs/function-calling-guide'
    },
    {
      id: 'langchain',
      title: 'Getting Started with LangChain',
      excerpt: 'An introduction to LangChain, a popular framework for developing applications powered by language models, with practical examples.',
      imageClass: 'langchain-image',
      tag: 'Framework',
      readingTime: '11 min read',
      publishDate: 'September 10, 2023',
      link: '/blogs/langchain-introduction'
    }
  ];

  // Extract unique categories from blog posts
  const categories = useMemo(() => {
    const tags = allBlogPosts.map(post => post.tag);
    return ['All', ...Array.from(new Set(tags))];
  }, [allBlogPosts]);

  // Filter blog posts based on active category
  const filteredBlogPosts = useMemo(() => {
    if (activeCategory === 'All') {
      return allBlogPosts;
    }
    return allBlogPosts.filter(post => post.tag === activeCategory);
  }, [allBlogPosts, activeCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlogPosts.length / ITEMS_PER_PAGE);
  
  // Get current page posts
  const currentPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredBlogPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredBlogPosts, currentPage]);

  // Handle category change
  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  }, []);

  // Handle tag click within blog card
  const handleTagClick = useCallback((tag: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default link behavior
    handleCategoryChange(tag);
  }, [handleCategoryChange]);

  // Handle pagination
  const goToPage = useCallback((page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top of page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [totalPages]);

  // Generate pagination buttons
  const renderPaginationButtons = () => {
    if (totalPages <= 1) return null;

    const buttons = [];
    
    // Previous button
    buttons.push(
      <button 
        key="prev" 
        className="pagination-button prev" 
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        ← Prev
      </button>
    );
    
    // Page number buttons
    const maxButtons = 3;
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);
    
    if (endPage - startPage + 1 < maxButtons) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button 
          key={i} 
          className={`pagination-button ${currentPage === i ? 'active' : ''}`}
          onClick={() => goToPage(i)}
          aria-label={`Page ${i}`}
          aria-current={currentPage === i ? 'page' : undefined}
        >
          {i}
        </button>
      );
    }
    
    // Next button
    buttons.push(
      <button 
        key="next" 
        className="pagination-button next" 
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        Next →
      </button>
    );
    
    return buttons;
  };

  return (
    <div className="blogs-page">
      <div className="blogs-header">
        <h1>LLM Blog & Tutorials</h1>
        <p className="blogs-subtitle">
          Practical guides, tutorials, and insights about Large Language Models and AI development
        </p>
      </div>

      <div className="blog-categories">
        {categories.map(category => (
          <button 
            key={category}
            className={`category-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredBlogPosts.length === 0 ? (
        <div className="no-results">
          <h2>No articles found</h2>
          <p>No articles matching the selected category. Try another category.</p>
          <button 
            className="category-button active"
            onClick={() => handleCategoryChange('All')}
          >
            View All Articles
          </button>
        </div>
      ) : (
        <>
          <div className="blogs-grid">
            {currentPosts.map(post => (
              <div className="blog-card" key={post.id}>
                <div className={`blog-card-image ${post.imageClass}`}></div>
                <div className="blog-card-content">
                  <div 
                    className="blog-tag" 
                    onClick={(e) => handleTagClick(post.tag, e)}
                    style={{ cursor: 'pointer' }}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleTagClick(post.tag, e as any);
                      }
                    }}
                  >
                    {post.tag}
                  </div>
                  <h2 className="blog-title-page">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-footer-page">
                    <div className="blog-meta">
                      <span className="reading-time">{post.readingTime}</span>
                      <span className="publish-date">{post.publishDate}</span>
                    </div>
                    <Link to={post.link} className="read-more-link">
                      Read Article →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="blogs-pagination">
            {renderPaginationButtons()}
          </div>
        </>
      )}

      <div className="blogs-newsletter">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>
            Subscribe to our newsletter to receive notifications about new articles, 
            tutorials, and resources about LLMs and AI development.
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" aria-label="Email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blogs;