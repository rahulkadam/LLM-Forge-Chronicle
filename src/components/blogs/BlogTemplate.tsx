import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/blogs/blog-base-style.css';
import '../../styles/blogs/blog-viewport-fix.css';
import '../../styles/blogs/blog-banners.css';

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
  category = 'Technical',
  bannerClassName,
  tableOfContents,
  children,
  className = ''
}) => {
  return (
    <div className={`blog-post ${className}`}>
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

      {/* Table of contents now at the top */}
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

      {/* Blog content is now full width */}
      <div className="blog-content-full">
        {children}
      </div>

      <div className="blog-footer">
        <Link to="/blogs" className="back-to-blogs">← Back to All Blogs</Link>
      </div>
    </div>
  );
};

export default BlogTemplate;