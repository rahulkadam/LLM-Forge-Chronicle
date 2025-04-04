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
  const ITEMS_PER_PAGE = 10;

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
    // Getting Started & Fundamentals
    {
      id: 'llm-getting-started',
      title: "Getting Started with LLMs: A Beginner's Q&A Guide",
      excerpt: 'A friendly question-answer guide to help beginners understand and start using Large Language Models effectively without feeling overwhelmed.',
      imageClass: 'getting-started-image',
      tag: 'Tutorials & Guides',
      readingTime: '7 min read',
      publishDate: 'March 25, 2025',
      link: '/blogs/llm-getting-started-guide'
    },
    {
      id: 'llm-terminology',
      title: 'Understanding LLM Terminology: A Comprehensive Guide',
      excerpt: 'A detailed guide to essential terms and concepts in Large Language Models, from tokens to fine-tuning, helping you navigate the world of AI language processing.',
      imageClass: 'llm-terminology-image',
      tag: 'Fundamentals',
      readingTime: '8 min read',
      publishDate: 'March 21, 2025',
      link: '/blogs/llm-technology-guide'
    },
    {
      id: 'model-comparison',
      title: 'Comparing LLM Families: GPT vs Claude vs Llama vs Mistral',
      excerpt: 'In-depth comparison of major LLM families, their strengths, weaknesses, and ideal use cases. Help choose the right model for your needs.',
      imageClass: 'comparison-image',
      tag: 'Fundamentals',
      readingTime: '18 min read',
      publishDate: 'March 31, 2025',
      link: '/blogs/llm-model-comparison'
    },
    {
      id: 'openai-api',
      title: 'Connecting to OpenAI API: A Complete Guide',
      excerpt: "A step-by-step tutorial to set up and use OpenAI's API for your applications, including authentication, handling requests, and managing API limits.",
      imageClass: 'openai-image',
      tag: 'Tutorials & Guides',
      readingTime: '8 min read',
      publishDate: 'January 20, 2025',
      link: '/blogs/openai-api-guide'
    },

    // Advanced Techniques & Architecture
    {
      id: 'vector-database-guide',
      title: 'Vector Databases: The Backbone of Modern LLM Applications',
      excerpt: 'Learn how vector databases power modern AI applications, from fundamentals to implementation. Discover best practices for integrating vector search with LLMs.',
      imageClass: 'vector-db-image',
      tag: 'Advanced Techniques',
      readingTime: '10 min read',
      publishDate: 'April 3, 2025',
      link: '/blogs/vector-database-guide/vector-llm-guide'
    },
    {
      id: 'rag-tutorial',
      title: 'Building Your First RAG System',
      excerpt: 'A comprehensive tutorial on implementing Retrieval Augmented Generation (RAG) to enhance your LLMs with external data sources and improve response accuracy.',
      imageClass: 'rag-image',
      tag: 'Advanced Techniques',
      readingTime: '12 min read',
      publishDate: 'February 18, 2025',
      link: '/blogs/rag-tutorial'
    },
    {
      id: 'model-context-server',
      title: 'Model Context Server (MCP): Efficient Context Management for LLMs',
      excerpt: 'Explore how Model Context Servers solve context window limitations in LLMs by efficiently managing, storing, and retrieving context to enable more coherent AI experiences.',
      imageClass: 'mcp-image',
      tag: 'Architecture',
      readingTime: '8 min read',
      publishDate: 'March 30, 2025',
      link: '/blogs/model-context-server'
    },
    {
      id: 'model-quantization',
      title: 'LLM Quantization & Optimization Guide',
      excerpt: 'Learn how to optimize and compress LLMs for efficient deployment. Covers techniques like quantization, pruning, and model distillation.',
      imageClass: 'quantization-image',
      tag: 'Advanced Techniques',
      readingTime: '15 min read',
      publishDate: 'April 5, 2025',
      link: '/blogs/llm-quantization-guide'
    },
    {
      id: 'local-llm',
      title: 'Running LLMs Locally: A Complete Guide',
      excerpt: 'Step-by-step guide to running LLMs on your own hardware. From model selection to optimization techniques for resource-constrained environments.',
      imageClass: 'local-llm-image',
      tag: 'Advanced Techniques',
      readingTime: '20 min read',
      publishDate: 'April 4, 2025',
      link: '/blogs/local-llm-guide'
    },
    {
      id: 'fine-tuning',
      title: 'Fine-tuning LLMs: From Theory to Practice',
      excerpt: 'Master the art of fine-tuning language models. Learn about dataset preparation, training strategies, evaluation metrics, and best practices.',
      imageClass: 'fine-tuning-image',
      tag: 'Advanced Techniques',
      readingTime: '18 min read',
      publishDate: 'March 28, 2025',
      link: '/blogs/llm-fine-tuning-guide'
    },
    {
      id: 'multi-modal',
      title: 'Multi-Modal LLMs: Beyond Text',
      excerpt: 'Explore the world of multi-modal LLMs that can handle text, images, audio, and video. Learn about GPT-4V, Claude 3, and other multi-modal models.',
      imageClass: 'multi-modal-image',
      tag: 'Advanced Techniques',
      readingTime: '16 min read',
      publishDate: 'March 26, 2025',
      link: '/blogs/multi-modal-llms'
    },

    // Prompt Engineering & Development
    {
      id: 'prompt-engineering',
      title: 'Advanced Prompt Engineering Patterns',
      excerpt: 'Learn advanced prompting strategies like chain-of-thought, few-shot learning, and structured outputs to maximize the capabilities of LLMs.',
      imageClass: 'prompt-image',
      tag: 'Advanced Techniques',
      readingTime: '10 min read',
      publishDate: 'February 5, 2025',
      link: '/blogs/advanced-prompt-engineering'
    },
    {
      id: 'function-calling',
      title: 'Mastering Function Calling with LLMs',
      excerpt: 'How to use function calling capabilities in modern LLMs to create powerful applications that can interact with external tools and APIs.',
      imageClass: 'functions-image',
      tag: 'Advanced Techniques',
      readingTime: '9 min read',
      publishDate: 'February 22, 2025',
      link: '/blogs/function-calling-guide'
    },
    {
      id: 'llm-agent',
      title: 'LLM Agents: Just Functions with a Fancy Name',
      excerpt: "Demystifying LLM Agents - they're just functions that use language models to do specific tasks.",
      imageClass: 'llm-agent-image',
      tag: 'Fundamentals',
      readingTime: '5 min read',
      publishDate: 'March 22, 2025',
      link: '/blogs/llm-agent-guide'
    },

    // Production & Deployment
    {
      id: 'llm-deployment',
      title: 'Deploying LLMs in Production: A Complete Guide',
      excerpt: 'Learn how to effectively deploy LLM applications in production, including scaling, monitoring, and maintaining reliability. Best practices for production-ready AI systems.',
      imageClass: 'deployment-image',
      tag: 'Production',
      readingTime: '15 min read',
      publishDate: 'April 4, 2025',
      link: '/blogs/llm-deployment-guide'
    },
    {
      id: 'cost-optimization',
      title: 'LLM Cost Optimization Strategies',
      excerpt: 'Practical strategies for optimizing costs when working with LLMs. Learn about caching, batching, model selection, and other techniques to reduce API costs.',
      imageClass: 'cost-opt-image',
      tag: 'Production',
      readingTime: '12 min read',
      publishDate: 'April 2, 2025',
      link: '/blogs/llm-cost-optimization'
    },
    {
      id: 'llm-testing',
      title: 'Comprehensive LLM Testing Strategies',
      excerpt: 'Learn how to effectively test LLM applications, including unit testing, integration testing, and automated evaluation frameworks.',
      imageClass: 'testing-image',
      tag: 'Production',
      readingTime: '14 min read',
      publishDate: 'April 3, 2025',
      link: '/blogs/llm-testing-guide'
    },
    {
      id: 'model-evaluation',
      title: 'Evaluating LLM Performance: Metrics & Methods',
      excerpt: 'Comprehensive guide to evaluating LLM performance. Learn about evaluation metrics, testing strategies, and how to ensure model quality.',
      imageClass: 'evaluation-image',
      tag: 'Advanced Techniques',
      readingTime: '13 min read',
      publishDate: 'March 27, 2025',
      link: '/blogs/llm-evaluation-guide'
    },

    // Security & Ethics
    {
      id: 'llm-security',
      title: 'Security Best Practices for LLM Applications',
      excerpt: 'Comprehensive guide to securing your LLM applications. Learn about prompt injection, data privacy, authentication, and other security considerations.',
      imageClass: 'security-image',
      tag: 'Security & Safety',
      readingTime: '14 min read',
      publishDate: 'April 1, 2025',
      link: '/blogs/llm-security-guide'
    },
    {
      id: 'ai-governance',
      title: 'AI Governance & Compliance Guide',
      excerpt: 'Navigate the complex landscape of AI governance, compliance, and ethical considerations when deploying LLM applications.',
      imageClass: 'governance-image',
      tag: 'Security & Safety',
      readingTime: '16 min read',
      publishDate: 'April 2, 2025',
      link: '/blogs/ai-governance-guide'
    },
    {
      id: 'llm-ethics',
      title: 'Ethical Considerations in LLM Development',
      excerpt: 'Explore ethical challenges and best practices in LLM development, including bias mitigation, transparency, and responsible AI principles.',
      imageClass: 'ethics-image',
      tag: 'Security & Safety',
      readingTime: '12 min read',
      publishDate: 'April 1, 2025',
      link: '/blogs/llm-ethics-guide'
    },

    // Tools & Frameworks
    {
      id: 'langchain',
      title: 'Getting Started with LangChain',
      excerpt: 'An introduction to LangChain, a popular framework for developing applications powered by language models, with practical examples.',
      imageClass: 'langchain-image',
      tag: 'Tools & Frameworks',
      readingTime: '11 min read',
      publishDate: 'January 10, 2025',
      link: '/blogs/langchain-introduction'
    },
    {
      id: 'cursor-workflows',
      title: 'Mastering Cursor Custom Workflows: Automate Your Coding Tasks',
      excerpt: 'Learn how to create and optimize custom workflows in Cursor to automate coding tasks, improve productivity, and streamline your development process.',
      imageClass: 'cursor-workflows-image',
      tag: 'Tools & Frameworks',
      readingTime: '8 min read',
      publishDate: 'March 12, 2025',
      link: '/blogs/cursor-custom-workflows'
    },
    {
      id: 'openrouter',
      title: 'What is OpenRouter and Why Use It?',
      excerpt: 'Explore how OpenRouter can give you access to multiple LLMs through a unified API, simplifying your multi-model workflow and reducing integration complexity.',
      imageClass: 'openrouter-image',
      tag: 'Platforms & Services',
      readingTime: '6 min read',
      publishDate: 'January 15, 2025',
      link: '/blogs/openrouter-platform-guide'
    },

    // Resources & Tools
    {
      id: 'ai-tools',
      title: 'AI-Powered Developer & Agent Tools',
      excerpt: 'Discover powerful tools for agent development and AI-assisted coding to supercharge your workflow. From code generation to intelligent assistance, find the right tools for your needs.',
      imageClass: 'ai-tools-image',
      tag: 'Resources',
      readingTime: '15 min read',
      publishDate: 'March 31, 2025',
      link: '/ai-tools'
    },
    {
      id: 'llm-resources',
      title: 'LLM Resources & References',
      excerpt: 'A curated collection of tools, services, and learning materials for LLM development. Find the best resources for building and deploying language model applications.',
      imageClass: 'resources-image',
      tag: 'Resources',
      readingTime: '10 min read', 
      publishDate: 'March 29, 2025',
      link: '/resources'
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
  const renderPaginationButtons = useCallback(() => {
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
  }, [currentPage, totalPages, goToPage]);

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
            tutorials, and resources about LLM development.
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