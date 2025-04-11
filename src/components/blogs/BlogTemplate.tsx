import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Comments from '../Comments';
import { getAllBlogPosts, getFeaturedBlogPosts } from '../../data/blogData';
import '../../styles/blogs/blog-base-style.css';
import '../../styles/blogs/blog-viewport-fix.css';
import '../../styles/blogs/blog-banners.css';
import '../../styles/blogs/blog-three-column.css';

interface BlogPostProps {
  title: string;
  date: string;
  readTime: string;
  category?: string;
  bannerClassName: string;
  tableOfContents: Array<{ id: string; title: string }>;
  children: ReactNode;
  className?: string;
}

const BlogTemplate: React.FC<BlogPostProps> = ({
  title,
  date,
  readTime,
  category = 'Fundamentals',
  bannerClassName,
  tableOfContents,
  children,
  className = ''
}) => {
  const allPosts = getAllBlogPosts();
  const featuredPosts = getFeaturedBlogPosts();

  return (
    <div className={`blog-three-column-layout ${className}`}>
      {/* Left Sidebar - Blog List */}
      <aside className="blog-sidebar-left">
        <h2 className="blog-list-title">All Articles</h2>
        <ul className="blog-list">
          {allPosts.map((post) => (
            <li key={post.id}>
              <Link to={post.link}>{post.title}</Link>
            </li>
          ))}
        </ul>
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
          <div key={post.id} className="featured-blog-card">
            <div className={`featured-blog-image ${post.imageClass}`}></div>
            <div className="featured-blog-content">
              <span className="featured-blog-tag">{post.tag}</span>
              <h3>
                <Link to={post.link}>{post.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
              <div className="featured-blog-meta">
                <span className="reading-time">{post.readingTime}</span>
                <Link to={post.link} className="read-more-link">Read More →</Link>
              </div>
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default BlogTemplate;