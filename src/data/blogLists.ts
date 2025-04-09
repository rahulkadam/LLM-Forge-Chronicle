export const FEATURED_POSTS = [
  'llm-getting-started',    // Start with fundamentals
  'developer-efficiency',   // Show practical application
  'ai-it-transformation'    // Show big picture impact
] as const;

export const LATEST_POSTS = [
  'grok-model',             // Latest model
  'developer-prompts',      // Latest practical guide
  'enterprise-integrations', // Latest enterprise feature
  'code-migration-llm'      // Latest case study
] as const;

export const TRENDING_POSTS = [
  'vector-database-guide',  // Hot topic
  'rag-tutorial',          // Popular architecture
  'model-comparison',       // Important decision guide
  'langchain'              // Essential tool
] as const;

// Reordered blog display sequence
export const BLOG_DISPLAY_ORDER = [
  // Fundamentals - Start Here
  'llm-getting-started',
  'llm-terminology',
  'openai-api',
  'openrouter',
  
  // Prompt Engineering - Learn to Communicate
  'prompt-engineering-basics',
  'prompt-intermediate',
  'prompt-advanced',
  'developer-prompts',
  
  // LLM Models - Understand Options
  'model-comparison',
  'grok-model',
  'gemini-model',
  'claude-model',
  'chatgpt-model',
  'mistral-model',
  'llama-model',
  'deepseek-model',
  'manus-model',
  
  // Advanced Techniques - Deep Dive
  'vector-database-guide',
  'rag-tutorial',
  'model-context-server',
  
  // AI-Driven IT - Real World Applications
  'ai-it-transformation',
  'developer-efficiency',
  'enterprise-integrations',
  'code-migration-llm',
  
  // Tools & Frameworks - Build Something
  'langchain',
  'cursor-workflows',
  'ai-tools',
  'llm-resources',
  
  // Agent Development - Advanced Applications
  'agent-basic',
  'agent-market',
  'agent-sport',
  'agent-book'
] as const;