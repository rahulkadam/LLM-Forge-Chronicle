import React, { ReactNode, useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Comments from '../Comments';
import { 
  getAllBlogPosts, 
  getFeaturedBlogPosts, 
  BLOG_CATEGORIES,
  type BlogCategory,
  getPostsByCategory
} from '../../data/blogData';
import '../../styles/blogs/blog-base-style.css';
import '../../styles/blogs/mobile-navigation.css';

interface BlogPostProps {
  title: string;
  date: string;
  readTime: string;
  category?: BlogCategory;
  tableOfContents: Array<{ id: string; title: string }>;
  children: ReactNode;
  className?: string;
}

const BlogTemplate: React.FC<BlogPostProps> = ({
  title,
  date,
  readTime,
  category = 'Fundamentals',
  tableOfContents,
  children,
  className = ''
}) => {
  const location = useLocation();
  const allPosts = useMemo(() => getAllBlogPosts(), []);
  const featuredPosts = useMemo(() => getFeaturedBlogPosts(), []);
  
  // Initialize with all categories expanded - create a mutable copy
  const [expandedCategories, setExpandedCategories] = useState<BlogCategory[]>(['Fundamentals']);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const postsByCategory = useMemo(() => 
    getPostsByCategory(allPosts), [allPosts]
  );

  // Filter posts based on search term
  const filteredPosts = useMemo(() => {
    if (!searchTerm.trim()) return null;
    
    const searchLower = searchTerm.toLowerCase();
    return allPosts.filter(post => 
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower) ||
      post.tag.toLowerCase().includes(searchLower)
    );
  }, [allPosts, searchTerm]);

  const toggleCategory = (categoryName: BlogCategory) => {
    setExpandedCategories(prev => 
      prev.includes(categoryName)
        ? prev.filter(c => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  const CategoryList = () => (
    <div className="category-list">
      {BLOG_CATEGORIES.map(categoryName => {
        const posts = postsByCategory.get(categoryName) || [];
        const isExpanded = expandedCategories.includes(categoryName);

        if (posts.length == 0) {
          return ;
        }

        return (
          <div key={categoryName} className="category-section">
            <button 
              className={`category-toggle ${isExpanded ? 'expanded' : ''}`}
              onClick={() => toggleCategory(categoryName)}
            >
              <span>{categoryName}</span>
              <span className="post-count">{posts.length}</span>
            </button>
            <ul className={`category-posts ${isExpanded ? 'expanded' : ''}`}>
              {posts.map(post => (
                <li key={post.id}>
                  <Link 
                    to={post.link}
                    className={isActive(post.link) ? 'active' : ''}
                    onClick={closeMobileSidebar}
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );

  const SearchBox = () => (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <span className="search-icon" role="img" aria-label="search">🔍</span>
      {searchTerm && (
        <button
          className="clear-search"
          onClick={() => setSearchTerm('')}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );

  const SearchResults = () => (
    filteredPosts && (
      filteredPosts.length === 0 ? (
        <div className="no-results">
          <div className="no-results-icon">🔍</div>
          <p>No blogs found matching "{searchTerm}"</p>
        </div>
      ) : (
        <div className="search-results">
          <div className="category-header">
            <span className="category-title">Search Results</span>
            <span className="category-count">{filteredPosts.length}</span>
          </div>
          <ul className="blog-list">
            {filteredPosts.map(post => (
              <li key={post.id}>
                <Link 
                  to={post.link} 
                  className={`blog-list-item ${isActive(post.link) ? 'active' : ''}`}
                  onClick={closeMobileSidebar}
                >
                  <div className="blog-list-content">
                    <div className="blog-list-title">{post.title}</div>
                    <div className="blog-list-meta">
                      <span className="blog-list-category">{post.tag}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )
    )
  );

  return (
    <>
      <div className={`blog-layout ${className}`}>
        {/* Left Sidebar */}
        <aside className="blog-sidebar left">
          <SearchBox />
          {searchTerm && filteredPosts ? (
            <SearchResults />
          ) : (
            <CategoryList />
          )}
        </aside>

        {/* Main Content */}
        <main className="blog-main">
          <header className="blog-header">
            <div className="blog-navigation">
              <span className="blog-category-tag">{category}</span>
            </div>
            <h1 className="blog-title">{title}</h1>
            <div className="blog-meta">
              <span className="publish-date">Published on {date}</span>
              <span className="reading-time">{readTime} read</span>
            </div>
          </header>

          <div className="table-of-contents">
            <h2>Table of Contents</h2>
            <ul>
              {tableOfContents.map(item => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="blog-content">
            {children}
          </div>

          <div className="blog-footer">
            <Link to="/blogs" className="back-link">← Back to All Blogs</Link>
          </div>

          <div className="blog-comments">
            <h2>Comments</h2>
            <Comments />
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="blog-sidebar right">
          <h2 className="sidebar-title">Featured Articles</h2>
          <div className="featured-posts">
            {featuredPosts.map((post) => (
              <div key={post.id} className="featured-blog-card">
                <div className="featured-blog-banner" />
                <div className="featured-blog-content">
                  <span className="blog-tag">{post.tag}</span>
                  <h3 className="featured-blog-title">
                    <Link to={post.link}>{post.title}</Link>
                  </h3>
                  <p className="featured-blog-excerpt">
                    {post.excerpt.length > 120 ? `${post.excerpt.substring(0, 120)}...` : post.excerpt}
                  </p>
                  <div className="featured-blog-meta">
                    <span>{post.readingTime}</span>
                    <Link to={post.link} className="read-more-link">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Mobile Navigation */}
      <button 
        className="mobile-nav-button"
        onClick={() => setIsMobileSidebarOpen(true)}
        aria-label="Open navigation"
      >
        ☰
      </button>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`mobile-sidebar-overlay ${isMobileSidebarOpen ? 'visible' : ''}`}
        onClick={closeMobileSidebar}
      />

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isMobileSidebarOpen ? 'visible' : ''}`}>
        <div className="mobile-sidebar-content">
          <div className="mobile-sidebar-header">
            <h2 className="mobile-sidebar-title">More Blogs</h2>
            <button 
              className="mobile-close-button"
              onClick={closeMobileSidebar}
              aria-label="Close navigation"
            >
              ✕
            </button>
          </div>
          <SearchBox />
          {searchTerm && filteredPosts ? (
            <SearchResults />
          ) : (
            <CategoryList />
          )}
        </div>
      </div>
    </>
  );
};

export default BlogTemplate;