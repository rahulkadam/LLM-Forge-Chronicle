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

export const allBlogPosts: BlogPost[] = [
  // Fundamentals
  {
    id: 'llm-introduction',
    title: 'Understanding AI Fundamentals',
    excerpt: 'A comprehensive introduction to Artificial Intelligence, covering core concepts, types of AI, and their real-world applications.',
    imageClass: 'ai-basics-image',
    tag: 'Fundamentals',
    readingTime: '8 min read',
    publishDate: 'April 10, 2025',
    link: '/blogs/fundamentals/introduction'
  },
  {
    id: 'chatgpt-guide',
    title: 'Mastering ChatGPT: A Comprehensive Guide',
    excerpt: 'Deep dive into ChatGPT capabilities, best practices, and advanced techniques for optimal usage.',
    imageClass: 'chatgpt-guide-image',
    tag: 'Fundamentals',
    readingTime: '10 min read',
    publishDate: 'April 11, 2025',
    link: '/blogs/fundamentals/chatgpt-guide'
  },
  {
    id: 'llm-getting-started',
    title: "Getting Started with LLMs: A Beginner's Q&A Guide",
    excerpt: 'A friendly question-answer guide to help beginners understand and start using Large Language Models effectively.',
    imageClass: 'getting-started-image',
    tag: 'Fundamentals',
    readingTime: '7 min read',
    publishDate: 'March 25, 2025',
    link: '/blogs/fundamentals/getting-started'
  },
  {
    id: 'llm-terminology',
    title: 'Understanding LLM Terminology',
    excerpt: 'A detailed guide to essential terms and concepts in Large Language Models.',
    imageClass: 'llm-terminology-image',
    tag: 'Fundamentals',
    readingTime: '8 min read',
    publishDate: 'March 21, 2025',
    link: '/blogs/fundamentals/terminology'
  },
  {
    id: 'openai-api',
    title: 'Connecting to OpenAI API: A Complete Guide',
    excerpt: "A step-by-step tutorial to set up and use OpenAI's API for your applications.",
    imageClass: 'openai-image',
    tag: 'Fundamentals',
    readingTime: '8 min read',
    publishDate: 'January 20, 2025',
    link: '/blogs/fundamentals/openai-api'
  },
  {
    id: 'openrouter',
    title: 'What is OpenRouter and Why Use It?',
    excerpt: 'Explore how OpenRouter can give you access to multiple LLMs through a unified API.',
    imageClass: 'openrouter-image',
    tag: 'Fundamentals',
    readingTime: '6 min read',
    publishDate: 'January 15, 2025',
    link: '/blogs/fundamentals/openrouter'
  },

  // Prompt Engineering Series
  {
    id: 'prompt-engineering-basics',
    title: 'Prompt Engineering Basics',
    excerpt: 'Learn the fundamentals of prompt engineering, from basic syntax to best practices.',
    imageClass: 'prompt-basic-image',
    tag: 'Prompt Engineering',
    readingTime: '8 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/prompts/basics'
  },
  {
    id: 'prompt-engineering-intermediate',
    title: 'Advanced Prompt Patterns & Techniques',
    excerpt: 'Master intermediate prompt engineering concepts including context windows and chain-of-thought prompting.',
    imageClass: 'prompt-intermediate-image',
    tag: 'Prompt Engineering',
    readingTime: '12 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/prompts/intermediate'
  },
  {
    id: 'prompt-engineering-advanced',
    title: 'Expert Prompt Engineering',
    excerpt: 'Advanced techniques for prompt system design, including recursive prompting and multi-agent systems.',
    imageClass: 'prompt-advanced-image',
    tag: 'Prompt Engineering',
    readingTime: '15 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/prompts/advanced'
  },
  {
    id: 'developer-prompts',
    title: 'Practical Prompt Engineering for Developers',
    excerpt: 'A comprehensive guide to crafting effective prompts for development tasks.',
    imageClass: 'prompt-practical-image',
    tag: 'Prompt Engineering',
    readingTime: '15 min read',
    publishDate: 'April 8, 2025',
    link: '/blogs/prompts/developer-guide'
  },

  // LLM Models
  {
    id: 'grok-model',
    title: "Grok: X.AI's Innovative LLM Model",
    excerpt: "Explore Grok, the latest addition to X.AI's lineup.",
    imageClass: 'grok-model-image',
    tag: 'LLM Models',
    readingTime: '10 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/models/grok'
  },
  {
    id: 'deepseek-model',
    title: "DeepSeek: Next-Gen Open Source LLM",
    excerpt: "Explore DeepSeek's innovative approach to language modeling.",
    imageClass: 'deepseek-model-image',
    tag: 'LLM Models',
    readingTime: '10 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/models/deepseek'
  },
  {
    id: 'mistral-model',
    title: "Mistral AI: French Innovation in Language Models",
    excerpt: "Deep dive into Mistral AI's unique architecture.",
    imageClass: 'mistral-model-image',
    tag: 'LLM Models',
    readingTime: '10 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/models/mistral'
  },
  {
    id: 'llama-model',
    title: "Meta's Llama: Open Innovation in AI",
    excerpt: "Understanding Meta's Llama family of models.",
    imageClass: 'llama-model-image',
    tag: 'LLM Models',
    readingTime: '10 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/models/llama'
  },
  {
    id: 'chatgpt-model',
    title: "ChatGPT: OpenAI's Revolutionary LLM",
    excerpt: "Deep dive into ChatGPT's architecture and capabilities.",
    imageClass: 'chatgpt-model-image',
    tag: 'LLM Models',
    readingTime: '10 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/models/chatgpt'
  },
  {
    id: 'claude-model',
    title: "Claude: Anthropic's AI Assistant",
    excerpt: "Explore Claude's unique approach to AI safety and capabilities.",
    imageClass: 'claude-model-image',
    tag: 'LLM Models',
    readingTime: '10 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/models/claude'
  },
  {
    id: 'gemini-model',
    title: "Google's Gemini: The Next Generation AI Model",
    excerpt: "Understanding Gemini's multimodal capabilities and features.",
    imageClass: 'gemini-model-image',
    tag: 'LLM Models',
    readingTime: '10 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/models/gemini'
  },

  // Agents
  {
    id: 'llm-agent-intro',
    title: 'Introduction to LLM Agents',
    excerpt: 'Explore the world of LLM-powered agents, their architecture, and capabilities.',
    imageClass: 'llm-agent-image',
    tag: 'Agents',
    readingTime: '12 min read',
    publishDate: 'April 12, 2025',
    link: '/blogs/agents/introduction'
  },
  {
    id: 'building-llm-agent',
    title: 'Building Your First LLM Agent',
    excerpt: 'Step-by-step guide to building a custom LLM agent with practical code examples.',
    imageClass: 'build-agent-image',
    tag: 'Agents',
    readingTime: '15 min read',
    publishDate: 'April 12, 2025',
    link: '/blogs/agents/building-guide'
  },
  {
    id: 'agent-market',
    title: 'MarketMind AI: Market Analysis Agent',
    excerpt: 'Create an AI agent for market analysis and financial insights.',
    imageClass: 'agent-market-image',
    tag: 'Agents',
    readingTime: '12 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/agents/marketmind'
  },
  {
    id: 'agent-sport',
    title: 'AthleteInsight AI: Sports Analytics Agent',
    excerpt: 'Create an intelligent agent for sports data analysis and insights.',
    imageClass: 'agent-sport-image',
    tag: 'Agents',
    readingTime: '10 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/agents/athlete-insight'
  },
  {
    id: 'agent-book',
    title: 'BookBuddy: Your AI Reading Companion',
    excerpt: 'Build a personalized book recommendation and analysis agent.',
    imageClass: 'agent-book-image',
    tag: 'Agents',
    readingTime: '12 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/agents/bookbuddy'
  },

  // AI-Driven IT
  {
    id: 'ai-it-transformation',
    title: 'AI-Driven IT Transformation',
    excerpt: 'Discover how IT companies are leveraging AI and LLMs to revolutionize development.',
    imageClass: 'ai-transformation-image',
    tag: 'AI-Driven IT',
    readingTime: '12 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/ai-it/transformation'
  },
  {
    id: 'enterprise-integrations',
    title: 'LLM Integration Guide',
    excerpt: 'Learn how to integrate LLMs with enterprise tools and workflows.',
    imageClass: 'enterprise-tools-image',
    tag: 'AI-Driven IT',
    readingTime: '15 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/ai-it/enterprise-integrations'
  },
  {
    id: 'developer-efficiency',
    title: 'The LLM-Powered Developer',
    excerpt: 'Comprehensive guide to integrating LLMs into your development workflow.',
    imageClass: 'developer-efficiency-image',
    tag: 'AI-Driven IT',
    readingTime: '15 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/ai-it/developer-efficiency'
  },
  {
    id: 'code-migration-llm',
    title: 'LLM-Powered Code Migration',
    excerpt: 'Learn how companies are using LLMs to automate large-scale code migrations.',
    imageClass: 'ai-transformation-image',
    tag: 'AI-Driven IT',
    readingTime: '15 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/ai-it/code-migration'
  },

  // Advanced Techniques
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
  },

  // Tools & Frameworks
  {
    id: 'langchain',
    title: 'Getting Started with LangChain',
    excerpt: 'Introduction to LangChain framework with practical examples.',
    imageClass: 'langchain-image',
    tag: 'Tools & Frameworks',
    readingTime: '11 min read',
    publishDate: 'January 10, 2025',
    link: '/blogs/tools/langchain'
  },
  {
    id: 'cursor-workflows',
    title: 'Mastering Cursor Custom Workflows',
    excerpt: 'Create and optimize custom workflows in Cursor to automate coding tasks.',
    imageClass: 'cursor-workflows-image',
    tag: 'Tools & Frameworks',
    readingTime: '8 min read',
    publishDate: 'March 12, 2025',
    link: '/blogs/tools/cursor-workflows'
  },
  {
    id: 'ai-tools',
    title: 'AI-Powered Developer & Agent Tools',
    excerpt: 'Discover powerful tools for agent development and AI-assisted coding.',
    imageClass: 'ai-tools-image',
    tag: 'Tools & Frameworks',
    readingTime: '15 min read',
    publishDate: 'March 31, 2025',
    link: '/blogs/tools/overview'
  },
  {
    id: 'llm-resources',
    title: 'LLM Resources & References',
    excerpt: 'A curated collection of tools, services, and learning materials for LLM development.',
    imageClass: 'resources-image',
    tag: 'Tools & Frameworks',
    readingTime: '10 min read',
    publishDate: 'March 29, 2025',
    link: '/blogs/tools/resources'
  }
];