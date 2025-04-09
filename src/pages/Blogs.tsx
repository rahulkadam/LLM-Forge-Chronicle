import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { BlogPost } from '../data/blogPosts';
import { allBlogPosts } from '../data/blogPosts';
import { FEATURED_POSTS, LATEST_POSTS, TRENDING_POSTS } from '../data/blogLists';
import { sortBlogPosts } from '../data/blogUtils';
import '../styles/blogs/header-style.css';
import '../styles/blogs/featured-section.css';
import '../styles/blogs/pagination-style.css';
import '../styles/blogs/blog-list-style.css';

// Constants
const ITEMS_PER_PAGE = 30;

const Blogs: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const getFeaturedBlogPosts = useCallback(() => {
    return FEATURED_POSTS
      .map(id => allBlogPosts.find(post => post.id === id))
      .filter((post): post is BlogPost => post !== undefined);
  }, []);

  // Get initial tag from URL query parameters if available
  const getInitialTag = useCallback(() => {
    const params = new URLSearchParams(location.search);
    return params.get('tag') || 'All';
  }, [location.search]);
  
  const [activeCategory, setActiveCategory] = useState<string>(getInitialTag());
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Update URL when active category changes
  useEffect(() => {
    if (activeCategory === 'All') {
      navigate('/blogs');
    } else {
      navigate(`/blogs?tag=${activeCategory}`);
    }
  }, [activeCategory, navigate]);

  // Extract unique categories and sort them in a logical order
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

  // Filter and sort blog posts based on active category
  const filteredBlogPosts = useMemo(() => {
    const posts = activeCategory === 'All' 
      ? allBlogPosts 
      : allBlogPosts.filter(post => post.tag === activeCategory);
    return sortBlogPosts(posts);
  }, [activeCategory]);

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
    setCurrentPage(1);
  }, []);

  // Handle tag click
  const handleTagClick = useCallback((tag: string, e: React.MouseEvent) => {
    e.preventDefault();
    handleCategoryChange(tag);
  }, [handleCategoryChange]);

  // Handle pagination
  const goToPage = useCallback((page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [totalPages]);

  // Generate pagination buttons
  const renderPaginationButtons = useCallback(() => {
    if (totalPages <= 1) return null;

    const buttons = [];
    
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
        <h1>Unlock LLM Potential: Blog & Tutorials</h1>
        <p className="blogs-subtitle">
          Your guide to mastering LLM Agents, LLMs, and AI development.
        </p>
      </div>

      <div className="featured-section">
        <h2>Featured Posts</h2>
        <div className="featured-grid">
          {getFeaturedBlogPosts().map(post => (
            <div className="blog-card featured" key={post.id}>
              <div className={`blog-card-image ${post.imageClass}`}></div>
              <div className="blog-card-content">
                <div className="blog-tag">{post.tag}</div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <Link to={post.link} className="read-more-link">Read Article →</Link>
              </div>
            </div>
          ))}
        </div>
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