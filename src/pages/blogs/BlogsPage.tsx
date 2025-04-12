import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { BlogPost } from '../../data/blogPosts';
import { allBlogPosts } from '../../data/blogPosts';
import { FEATURED_POSTS, LATEST_POSTS, TRENDING_POSTS } from '../../data/blogLists';
import { sortBlogPosts } from '../../data/blogUtils';
import '../../styles/blogs/blog-base-style.css';
import '../../styles/blogs/blog-layout-update.css';
import '../../styles/blogs/blog-content.css';
import '../../styles/blogs/featured-section.css';
import '../../styles/blogs/pagination-style.css';
import '../../styles/blogs/blog-list-style.css';

// Constants
const ITEMS_PER_PAGE = 30;

const BlogsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const getFeaturedBlogPosts = useCallback(() => {
    return FEATURED_POSTS
      .map(id => allBlogPosts.find(post => post.id === id))
      .filter((post): post is BlogPost => post !== undefined);
  }, []);

  const getTrendingPosts = useCallback(() => {
    return TRENDING_POSTS
      .map(id => allBlogPosts.find(post => post.id === id))
      .filter((post): post is BlogPost => post !== undefined)
      .slice(0, 5);
  }, []);

  const getLatestPosts = useCallback(() => {
    return LATEST_POSTS
      .map(id => allBlogPosts.find(post => post.id === id))
      .filter((post): post is BlogPost => post !== undefined)
      .slice(0, 5);
  }, []);

  const getInitialTag = useCallback(() => {
    const params = new URLSearchParams(location.search);
    return params.get('tag') || 'All';
  }, [location.search]);
  
  const [activeCategory, setActiveCategory] = useState<string>(getInitialTag());
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (activeCategory === 'All') {
      navigate('/blogs');
    } else {
      navigate(`/blogs?tag=${activeCategory}`);
    }
  }, [activeCategory, navigate]);

  const categories = useMemo(() => {
    const categoryOrder = [
      'All',
      'Fundamentals',
      'Prompt Engineering',
      'LLM Models',
      'Advanced Techniques',
      'AI-Driven IT',
      'Tools & Frameworks',
      'Agents'
    ];
    const tags = new Set(allBlogPosts.map(post => post.tag));
    return categoryOrder.filter(cat => cat === 'All' || tags.has(cat));
  }, []);

  const filteredBlogPosts = useMemo(() => {
    let posts = activeCategory === 'All' 
      ? allBlogPosts 
      : allBlogPosts.filter(post => post.tag === activeCategory);
    
    if (searchTerm) {
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return sortBlogPosts(posts);
  }, [activeCategory, searchTerm]);

  const totalPages = Math.ceil(filteredBlogPosts.length / ITEMS_PER_PAGE);
  
  const currentPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredBlogPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredBlogPosts, currentPage]);

  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  }, []);

  const handleTagClick = useCallback((tag: string, e: React.MouseEvent) => {
    e.preventDefault();
    handleCategoryChange(tag);
  }, [handleCategoryChange]);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  }, []);

  const goToPage = useCallback((page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [totalPages]);

  const renderPaginationButtons = useCallback(() => {
    if (totalPages <= 1) return null;

    return (
      <div className="pagination">
        <button 
          className="pagination-button prev" 
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ← Previous
        </button>
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        <button 
          className="pagination-button next" 
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>
    );
  }, [currentPage, totalPages, goToPage]);

  return (
    <div className="blog-layout">
      {/* Left Sidebar */}
      <aside className="blog-sidebar left">
        <div className="sidebar-section">
          <h2>Categories</h2>
          <nav className="category-nav">
            {categories.map(category => (
              <button 
                key={category}
                className={`category-link ${activeCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>

        <div className="sidebar-section">
          <h2>Latest Posts</h2>
          <div className="sidebar-posts">
            {getLatestPosts().map(post => (
              <Link to={post.link} key={post.id} className="sidebar-post-link">
                <h3>{post.title}</h3>
                <span className="post-meta">{post.publishDate} · {post.readingTime}</span>
              </Link>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="blog-main">
        <header className="blog-header">
          <h1>Unlock LLM Potential: Blog & Tutorials</h1>
          <p className="subtitle">
            Your guide to mastering LLM Agents, LLMs, and AI development.
          </p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
          </div>
        </header>

        <section className="featured-section">
          <h2>Featured Articles</h2>
          <div className="featured-grid">
            {getFeaturedBlogPosts().map(post => (
              <Link to={post.link} key={post.id} className="featured-card">
                <div className={`card-image ${post.imageClass}`}></div>
                <div className="card-content">
                  <span className="tag">{post.tag}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="card-meta">
                    <span>{post.publishDate}</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {filteredBlogPosts.length === 0 ? (
          <div className="no-results">
            <h2>No Articles Found</h2>
            <p>Try adjusting your search or browse all articles.</p>
            <button 
              className="reset-button"
              onClick={() => {
                setActiveCategory('All');
                setSearchTerm('');
              }}
            >
              View All Articles
            </button>
          </div>
        ) : (
          <section className="articles-section">
            <h2>All Articles</h2>
            <div className="articles-grid">
              {currentPosts.map(post => (
                <Link to={post.link} key={post.id} className="article-card">
                  <div className={`card-image ${post.imageClass}`}></div>
                  <div className="card-content">
                    <span 
                      className="tag" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleTagClick(post.tag, e);
                      }}
                    >
                      {post.tag}
                    </span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="card-meta">
                      <span>{post.publishDate}</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {renderPaginationButtons()}
          </section>
        )}
      </main>

      {/* Right Sidebar */}
      <aside className="blog-sidebar right">
        <div className="sidebar-section">
          <h2>Trending Now</h2>
          <div className="sidebar-posts">
            {getTrendingPosts().map(post => (
              <Link to={post.link} key={post.id} className="sidebar-post-link">
                <h3>{post.title}</h3>
                <span className="post-meta">{post.readingTime}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="sidebar-section newsletter">
          <h2>Stay Updated</h2>
          <p>Get the latest articles and tutorials delivered to your inbox.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>

        <div className="sidebar-section">
          <h2>Quick Links</h2>
          <nav className="quick-links">
            <Link to="/blogs/llm-getting-started-guide">Getting Started Guide</Link>
            <Link to="/blogs/openai-api-guide">OpenAI API Tutorial</Link>
            <Link to="/blogs/rag-tutorial">RAG Implementation</Link>
            <Link to="/blogs/llm-model-comparison">Model Comparison</Link>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default BlogsPage;