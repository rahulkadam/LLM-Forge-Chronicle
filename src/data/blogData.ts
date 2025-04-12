import type { BlogPost } from './blogPosts';
import { allBlogPosts } from './blogPosts';
import { FEATURED_POSTS } from './blogLists';

// Get featured blog posts with proper type checking
export const getFeaturedBlogPosts = (): BlogPost[] => {
  return FEATURED_POSTS
    .map(id => allBlogPosts.find(post => post.id === id))
    .filter((post): post is BlogPost => post !== undefined)
    .slice(0, 3);
};

// Get all blog posts with proper sorting
export const getAllBlogPosts = (): BlogPost[] => {
  return [...allBlogPosts].sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
};

// Categories in a specific order
export const BLOG_CATEGORIES = [
  'Fundamentals',
  'Prompt Engineering',
  'LLM Models',
  'Advanced Techniques',
  'AI-Driven IT',
  'Tools & Frameworks',
  'Agents',
  'Technical',
   'About',
] as const;

// Category type
export type BlogCategory = typeof BLOG_CATEGORIES[number];

// Helper function to get posts by category
export const getPostsByCategory = (posts: BlogPost[]): Map<BlogCategory, BlogPost[]> => {
  const grouped = new Map<BlogCategory, BlogPost[]>();
  
  BLOG_CATEGORIES.forEach(category => {
    grouped.set(category, posts.filter(post => post.tag === category));
  });
  
  return grouped;
};