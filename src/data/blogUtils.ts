import type { BlogPost } from './blogPosts';
import { BLOG_DISPLAY_ORDER } from './blogLists';

type BlogId = (typeof BLOG_DISPLAY_ORDER)[number];

// Sort blog posts according to our defined display order
export const sortBlogPosts = (posts: BlogPost[]) => {
  // Create a type-safe map of blog IDs to their order
  const orderMap = new Map<string, number>();
  BLOG_DISPLAY_ORDER.forEach((id, index) => {
    orderMap.set(id, index);
  });
  
  return [...posts].sort((a, b) => {
    const orderA = orderMap.get(a.id) ?? Number.MAX_SAFE_INTEGER;
    const orderB = orderMap.get(b.id) ?? Number.MAX_SAFE_INTEGER;
    return orderA - orderB;
  });
};