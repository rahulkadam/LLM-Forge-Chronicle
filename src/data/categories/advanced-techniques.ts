import type { BlogPost } from '../types';

export const advancedTechniquesPosts: BlogPost[] = [
  {
    id: 'vector-database-guide',
    title: 'Vector Databases for LLMs',
    excerpt: 'Learn how vector databases power modern AI applications.',
    imageClass: 'vector-db-image',
    tag: 'Advanced Techniques',
    readingTime: '10 min read',
    publishDate: 'April 3, 2025',
    link: '/blogs/advanced/vector-databases'
  },
  {
    id: 'rag-tutorial',
    title: 'Building Your First RAG System',
    excerpt: 'Implement Retrieval Augmented Generation (RAG) with LLMs.',
    imageClass: 'rag-image',
    tag: 'Advanced Techniques',
    readingTime: '12 min read',
    publishDate: 'February 18, 2025',
    link: '/blogs/advanced/rag-tutorial'
  },
  {
    id: 'model-context-server',
    title: 'Model Context Server (MCP)',
    excerpt: 'Learn how Model Context Servers solve context window limitations in LLMs.',
    imageClass: 'model-context-image',
    tag: 'Advanced Techniques',
    readingTime: '8 min read',
    publishDate: 'March 30, 2025',
    link: '/blogs/advanced/context-server'
  }
];