import type { BlogPost } from './blogPosts';
import { allBlogPosts } from './blogPosts';
import { FEATURED_POSTS } from './blogLists';

// Get featured blog posts
export const getFeaturedBlogPosts = () => {
  return FEATURED_POSTS
    .map(id => allBlogPosts.find(post => post.id === id))
    .filter((post): post is BlogPost => post !== undefined)
    .slice(0, 3); // Only take top 3 featured posts
};

// Get all blog posts
export const getAllBlogPosts = () => {
  return allBlogPosts.sort((a, b) => {
    // Sort by date in descending order (newest first)
    return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
  });
};

// Categories in a specific order
export const BLOG_CATEGORIES = [
  'All',
  'Fundamentals',
  'Prompt Engineering',
  'LLM Models',
  'Advanced Techniques',
  'AI-Driven IT',
  'Tools & Frameworks',
  'Agents'
];