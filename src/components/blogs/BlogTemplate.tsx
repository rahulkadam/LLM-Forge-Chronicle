import React, { ReactNode, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Comments from '../Comments';
import { 
  getAllBlogPosts, 
  getFeaturedBlogPosts, 
  BLOG_CATEGORIES,
  type BlogCategory,
  getPostsByCategory
} from '../../data/blogData';
import type { BlogPost } from '../../data/blogPosts';
import '../../styles/blogs/blog-base-style.css';
import '../../styles/blogs/blog-viewport-fix.css';
import '../../styles/blogs/blog-banners.css';
import '../../styles/blogs/blog-three-column.css';
import '../../styles/blogs/blog-categories.css';
import '../../styles/blogs/featured-blog.css';

interface BlogPostProps {
  title: string;
  date: string;
  readTime: string;
  category?: BlogCategory;
  bannerClassName?: string;
  tableOfContents: Array<{ id: string; title: string }>;
  children: ReactNode;
  className?: string;
}

// Helper function to get banner text based on category
const getBannerText = (category: string): string => {
  switch (category) {
    case 'Fundamentals':
      return 'Master the Basics';
    case 'Prompt Engineering':
      return 'Craft Better Prompts';
    case 'LLM Models':
      return 'Explore LLM Models';
    case 'Advanced Techniques':
      return 'Advanced AI Concepts';
    case 'AI-Driven IT':
      return 'Transform IT with AI';
    case 'Tools & Frameworks':
      return 'Essential AI Tools';
    case 'Agents':
      return 'Build AI Agents';
    default:
      return 'Featured Article';
  }
};

const FeaturedBlogCard: React.FC<{ blog: BlogPost }> = ({ blog }) => (
  <div className="featured-blog-card">
    <div className={`featured-blog-banner banner-${blog.tag.replace(/\s+/g, '-')}`}>
      {getBannerText(blog.tag)}
    </div>
    <div className="featured-blog-content">
      <span className="featured-blog-tag">{blog.tag}</span>
      <h3>
        <Link to={blog.link}>{blog.title}</Link>
      </h3>
      <p>{blog.excerpt}</p>
      <div className="featured-blog-meta">
        <span className="reading-time">{blog.readingTime}</span>
        <Link to={blog.link} className="read-more-link">
          Read More
        </Link>
      </div>
    </div>
  </div>
);

const BlogTemplate: React.FC<BlogPostProps> = ({
  title,
  date,
  readTime,
  category = 'Fundamentals',
  bannerClassName = '',
  tableOfContents,
  children,
  className = ''
}) => {
  const allPosts = useMemo(() => getAllBlogPosts(), []);
  const featuredPosts = useMemo(() => getFeaturedBlogPosts(), []);
  
  // State to track expanded categories
  const [expandedCategories, setExpandedCategories] = useState<BlogCategory[]>([category]);

  // Group posts by category
  const postsByCategory = useMemo(() => 
    getPostsByCategory(allPosts), [allPosts]
  );

  // Toggle category expansion
  const toggleCategory = (category: BlogCategory) => {
    setExpandedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className={`blog-three-column-layout ${className}`}>
      {/* Left Sidebar - Collapsible Blog List */}
      <aside className="blog-sidebar-left">
        <h2 className="blog-list-title">Blog Categories</h2>
        <div className="blog-categories-list">
          {BLOG_CATEGORIES.map(categoryName => {
            const posts = postsByCategory.get(categoryName) || [];
            return (
              <div key={categoryName} className="blog-category-section">
                <button 
                  className={`category-toggle ${expandedCategories.includes(categoryName) ? 'expanded' : ''}`}
                  onClick={() => toggleCategory(categoryName)}
                >
                  <span className="category-name">{categoryName}</span>
                  <span className="post-count">{posts.length}</span>
                  <span className="toggle-icon"></span>
                </button>
                <ul className={`category-posts ${expandedCategories.includes(categoryName) ? 'expanded' : ''}`}>
                  {posts.map((post, index) => (
                    <li 
                      key={post.id}
                      style={{ '--item-index': index } as React.CSSProperties}
                    >
                      <Link 
                        to={post.link}
                        className={post.title === title ? 'active' : ''}
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
      </aside>

      {/* Main Content */}
      <main className="blog-content-main">
        <div className="blog-header">
          <div className="blog-category">
            <Link to="/blogs" className="back-to-blogs">← All Articles</Link>
            <span className="blog-tag">{category}</span>
          </div>
          <h1 className="blog-title">{title}</h1>
          <div className="blog-meta">
            <span className="publish-date">Published on {date}</span>
            <span className="reading-time">{readTime} read</span>
          </div>
        </div>

        <div className={`blog-banner ${bannerClassName}`}></div>

        <div className="table-of-contents-top">
          <h2>Table of Contents</h2>
          <ul className="toc-list">
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
          <Link to="/blogs" className="back-to-blogs">← Back to All Blogs</Link>
        </div>

        <div className="blog-comments">
          <h2>Comments</h2>
          <Comments />
        </div>
      </main>

      {/* Right Sidebar - Featured Blogs */}
      <aside className="blog-sidebar-right">
        <h2 className="featured-blogs-title">Featured Articles</h2>
        {featuredPosts.map((post) => (
          <FeaturedBlogCard key={post.id} blog={post} />
        ))}
      </aside>
    </div>
  );
};

export default BlogTemplate;