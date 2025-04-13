import React, { useState, useMemo, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { BlogPost } from '../data/blogPosts';
import { allBlogPosts } from '../data/blogPosts';
import { FEATURED_POSTS, LATEST_POSTS } from '../data/blogLists';
import '../styles/HomePage.css';

const getCategoryTheme = (category: string) => {
  const themeMap: { [key: string]: string } = {
    'Fundamentals': 'fundamentals',
    'Prompt Engineering': 'prompt-engineering',
    'LLM Models': 'llm-models',
    'Advanced Techniques': 'advanced-techniques',
    'AI-Driven IT': 'ai-driven-it',
    'Tools & Frameworks': 'tools-frameworks',
    'Agents': 'agents'
  };
  return themeMap[category] || 'default';
};

const getCategoryIcon = (category: string): string => {
  const iconMap: { [key: string]: string } = {
    'Fundamentals': '📚',
    'Prompt Engineering': '⚡',
    'LLM Models': '🤖',
    'Advanced Techniques': '🔧',
    'AI-Driven IT': '💻',
    'Tools & Frameworks': '🛠️',
    'Agents': '🤝'
  };
  return iconMap[category] || '📄';
};

const BlogCard: React.FC<{ post: BlogPost; featured?: boolean }> = ({ post, featured }) => (
  <div className={`blog-card ${featured ? 'featured' : ''}`}>
    <div className={`blog-card-image ${getCategoryTheme(post.tag)}`}>
      <span>{post.title.toUpperCase()}</span>
    </div>
    <div className="blog-card-content">
      <div className="blog-tag">{post.tag}</div>
      <h3 className="home-blog-title">{post.title}</h3>
      <p className="blog-excerpt">{post.excerpt}</p>
      <div className="blog-footer">
        <div className="blog-meta">
          <span>{post.readingTime}</span>
          <span>{post.publishDate}</span>
        </div>
        <Link to={post.link} className="read-more-link">
          Read Article →
        </Link>
      </div>
    </div>
  </div>
);

interface LearningPathCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  topics: string[];
}

const LearningPathCard: React.FC<LearningPathCardProps> = ({ title, description, icon, link, topics }) => {
  const getPathClass = () => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('fundamental')) return 'fundamentals';
    if (titleLower.includes('prompt')) return 'prompt-engineering';
    if (titleLower.includes('agent')) return 'agents';
    return '';
  };

  return (
    <div className={`learning-path-card ${getPathClass()}`}>
      <div className="learning-path-header">
        <div className="learning-path-header-content">
          <span className="learning-path-icon">{icon}</span>
          <h3>{title}</h3>
        </div>
      </div>
      <div className="learning-path-content">
        <p className="learning-path-description">{description}</p>
        <div className="learning-path-topics">
          {topics.map((topic, index) => (
            <span key={index} className="topic-tag">{topic}</span>
          ))}
        </div>
        <div className="learning-path-footer">
          <Link to={link} className="learning-path-link">
            Start Learning →
          </Link>
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get featured posts (limit to 3)
  const featuredPosts = useMemo(() => {
    return FEATURED_POSTS
      .slice(0, 3)
      .map(id => allBlogPosts.find(post => post.id === id))
      .filter((post): post is BlogPost => post !== undefined);
  }, []);

  // Get recent posts (limit to 3)
  const recentPosts = useMemo(() => {
    return LATEST_POSTS
      .slice(0, 3)
      .map(id => allBlogPosts.find(post => post.id === id))
      .filter((post): post is BlogPost => post !== undefined);
  }, []);

  const learningPaths = [
    {
      title: "LLM Fundamentals",
      description: "Master the basics of Large Language Models and understand how they work.",
      icon: "🎓",
      link: "/blogs/fundamentals",
      topics: ["Model Types", "Architecture", "Use Cases", "Best Practices"]
    },
    {
      title: "Prompt Engineering",
      description: "Learn the art of crafting effective prompts for optimal LLM responses.",
      icon: "⚡",
      link: "/blogs/prompts",
      topics: ["Prompt Patterns", "Context Design", "Response Optimization", "Chain of Thought"]
    },
    {
      title: "Agent Development",
      description: "Build intelligent AI agents that can perform complex tasks autonomously.",
      icon: "🤖",
      link: "/blogs/agents",
      topics: ["Agent Types", "Tools Integration", "Memory Systems", "Planning Strategies"]
    }
  ];

  return (
    <div className="blogs-page">
      {/* Header Banner */}
      <div className="blogs-header">
        <div className="banner-content">
          <h1>Master the World of LLM Development</h1>
          <p className="blogs-subtitle">
            Your guide to mastering LLM Agents, LLMs, and AI development.
          </p>
        </div>
      </div>

      {/* Featured Posts Section */}
      <section className="featured-section">
        <h2>Featured Articles</h2>
        <div className="featured-grid">
          {featuredPosts.map(post => (
            <BlogCard key={post.id} post={post} featured={true} />
          ))}
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="learning-paths-section">
        <h2>Start Your LLM Journey</h2>
        <div className="learning-paths-grid">
          {learningPaths.map((path, index) => (
            <LearningPathCard key={index} {...path} />
          ))}
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="recent-posts-section">
        <h2>Recent Articles</h2>
        <div className="featured-grid">
          {recentPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* View All Button */}
        <div className="view-all-section">
          <Link to="/blogs/all" className="view-all-button">
            View All Articles →
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
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

export default HomePage;