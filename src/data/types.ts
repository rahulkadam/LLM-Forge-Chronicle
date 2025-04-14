// Blog post interface definition
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageClass: string;
  tag: string;
  readingTime: string;
  publishDate: string;
  link: string;
}

// Export blog categories type
export type BlogCategory = 'Fundamentals' | 'Prompt Engineering' | 'LLM Models' | 'Agents' | 'AI-Driven IT' | 'Advanced Techniques' | 'Tools & Frameworks';