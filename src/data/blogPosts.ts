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
  // Prompt Engineering Series
  {
    id: 'prompt-engineering-basics',
    title: 'Prompt Engineering Basics: Foundation for LLM Communication',
    excerpt: 'Learn the fundamentals of prompt engineering, from basic syntax to best practices. Perfect for beginners starting with LLMs.',
    imageClass: 'prompt-basic-image',
    tag: 'Prompt Engineering',
    readingTime: '8 min read',
    publishDate: 'April 7, 2025',
    link: '/prompt-engineering'
  },
  {
    id: 'prompt-engineering-intermediate',
    title: 'Advanced Prompt Patterns & Techniques',
    excerpt: 'Master intermediate prompt engineering concepts including context windows, few-shot learning, and chain-of-thought prompting.',
    imageClass: 'prompt-intermediate-image',
    tag: 'Prompt Engineering',
    readingTime: '12 min read',
    publishDate: 'April 7, 2025',
    link: '/prompt-engineering/intermediate'
  },
  {
    id: 'prompt-engineering-advanced',
    title: 'Expert Prompt Engineering: System Design & Optimization',
    excerpt: 'Advanced techniques for prompt system design, including recursive prompting, multi-agent systems, and performance optimization.',
    imageClass: 'prompt-advanced-image',
    tag: 'Prompt Engineering',
    readingTime: '15 min read',
    publishDate: 'April 7, 2025',
    link: '/prompt-engineering/advanced'
  },
  {
    id: 'developer-prompts',
    title: 'Practical Prompt Engineering for Developers',
    excerpt: 'A comprehensive guide to crafting effective prompts for development tasks, including code generation, documentation, testing, and debugging.',
    imageClass: 'prompt-practical-image',
    tag: 'Prompt Engineering',
    readingTime: '15 min read',
    publishDate: 'April 8, 2025',
    link: '/blogs/prompt-engineering/developer-prompts'
  },

  // LLM Models
  {
    id: 'grok-model',
    title: "Grok: X.AI's Innovative LLM Model",
    excerpt: "Explore Grok, the latest addition to X.AI's lineup, combining real-time data access with advanced language processing capabilities.",
    imageClass: 'grok-model-image',
    tag: 'LLM Models',
    readingTime: '10 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/llm-models/grok'
  },
  {
    id: 'deepseek-model',
    title: "DeepSeek: Next-Gen Open Source LLM",
    excerpt: "Explore DeepSeek's innovative approach to language modeling, its open-source nature, and how it's pushing the boundaries of AI accessibility.",
    imageClass: 'deepseek-model-image',
    tag: 'LLM Models',
    readingTime: '10 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/llm-models/deepseek'
  },
  {
    id: 'mistral-model',
    title: "Mistral AI: French Innovation in Language Models",
    excerpt: "Deep dive into Mistral AI's unique architecture, its European roots, and how it's challenging the status quo in the LLM landscape.",
    imageClass: 'mistral-model-image',
    tag: 'LLM Models',
    readingTime: '10 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/llm-models/mistral'
  },
  {
    id: 'llama-model',
    title: "Meta's Llama: Open Innovation in AI",
    excerpt: "Understanding Meta's Llama family of models, their impact on open-source AI, and how they're democratizing access to powerful language models.",
    imageClass: 'llama-model-image',
    tag: 'LLM Models',
    readingTime: '10 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/llm-models/llama'
  },
  {
    id: 'manus-model',
    title: "Manus AI: Specialized Task Automation",
    excerpt: "Discover how Manus AI is revolutionizing task automation with its specialized language models and unique approach to AI problem-solving.",
    imageClass: 'manus-model-image',
    tag: 'LLM Models',
    readingTime: '10 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/llm-models/manus'
  },
  {
    id: 'chatgpt-model',
    title: "ChatGPT: A Comprehensive Guide to OpenAI's Revolutionary LLM",
    excerpt: "Deep dive into ChatGPT's architecture, capabilities, and impact. Understanding how OpenAI's breakthrough model works and how to leverage it effectively.",
    imageClass: 'chatgpt-model-image',
    tag: 'LLM Models',
    readingTime: '10 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/llm-models/chatgpt'
  },
  {
    id: 'claude-model',
    title: "Claude: Anthropic's Advanced AI Assistant",
    excerpt: "Explore Claude's unique approach to AI safety, its constitutional AI framework, and how it differs from other leading language models.",
    imageClass: 'claude-model-image',
    tag: 'LLM Models',
    readingTime: '10 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/llm-models/claude'
  },
  {
    id: 'gemini-model',
    title: "Google's Gemini: The Next Generation AI Model",
    excerpt: "Understanding Gemini's multimodal capabilities, its position in the AI landscape, and how it compares to other leading language models.",
    imageClass: 'gemini-model-image',
    tag: 'LLM Models',
    readingTime: '10 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/llm-models/gemini'
  },

  // AI-Driven IT
  {
    id: 'ai-it-transformation',
    title: 'AI-Driven IT: Transforming Modern Software Development',
    excerpt: 'Discover how IT companies are leveraging AI and LLMs to revolutionize development workflows, enhance productivity, and build better software.',
    imageClass: 'ai-transformation-image',
    tag: 'AI-Driven IT',
    readingTime: '12 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/ai-driven-it/ai-transformation'
  },
  {
    id: 'enterprise-integrations',
    title: 'LLM Integration Guide: Enhancing Enterprise Tools',
    excerpt: 'Learn how to integrate LLMs with enterprise tools like JIRA, Slack, Teams, Confluence, GitHub, and more to enhance team productivity and automate workflows.',
    imageClass: 'enterprise-tools-image',
    tag: 'AI-Driven IT',
    readingTime: '15 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/ai-driven-it/enterprise-integrations'
  },
  {
    id: 'developer-efficiency',
    title: 'The LLM-Powered Developer: A Productivity Guide',
    excerpt: 'Comprehensive guide to integrating LLMs into your daily development workflow. Learn how to leverage AI tools for coding, documentation, and communication tasks.',
    imageClass: 'developer-efficiency-image',
    tag: 'AI-Driven IT',
    readingTime: '15 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/ai-driven-it/developer-efficiency'
  },
  {
    id: 'code-migration-llm',
    title: 'LLM-Powered Code Migration: From Legacy to Modern Frameworks',
    excerpt: 'Learn how companies like Airbnb and Agoda are using LLMs to automate large-scale code migrations, including real case studies of framework transitions.',
    imageClass: 'ai-transformation-image',
    tag: 'AI-Driven IT',
    readingTime: '15 min read',
    publishDate: 'April 7, 2025',
    link: '/blogs/ai-driven-it/code-migration'
  },


  // Advanced Techniques
  {
    id: 'vector-database-guide',
    title: 'Vector Databases: The Backbone of Modern LLM Applications',
    excerpt: 'Learn how vector databases power modern AI applications, from fundamentals to implementation. Discover best practices for integrating vector search with LLMs.',
    imageClass: 'vector-db-image',
    tag: 'Advanced Techniques',
    readingTime: '10 min read',
    publishDate: 'April 3, 2025',
    link: '/blogs/vector-database-guide/vector-llm-guide'
  },
  {
    id: 'rag-tutorial',
    title: 'Building Your First RAG System',
    excerpt: 'A comprehensive tutorial on implementing Retrieval Augmented Generation (RAG) to enhance your LLMs with external data sources and improve response accuracy.',
    imageClass: 'rag-image',
    tag: 'Advanced Techniques',
    readingTime: '12 min read',
    publishDate: 'February 18, 2025',
    link: '/blogs/rag-tutorial'
  },
  {
    id: 'model-context-server',
    title: 'Model Context Server (MCP): Efficient Context Management for LLMs',
    excerpt: 'Explore how Model Context Servers solve context window limitations in LLMs by efficiently managing, storing, and retrieving context to enable more coherent AI experiences.',
    imageClass: 'model-context-image',
    tag: 'Advanced Techniques',
    readingTime: '8 min read',
    publishDate: 'March 30, 2025',
    link: '/blogs/model-context-server'
  },
  // Fundamentals
  {
    id: 'llm-getting-started',
    title: "Getting Started with LLMs: A Beginner's Q&A Guide",
    excerpt: 'A friendly question-answer guide to help beginners understand and start using Large Language Models effectively without feeling overwhelmed.',
    imageClass: 'getting-started-image',
    tag: 'Fundamentals',
    readingTime: '7 min read',
    publishDate: 'March 25, 2025',
    link: '/blogs/llm-getting-started-guide'
  },
  {
    id: 'llm-terminology',
    title: 'Understanding LLM Terminology: A Comprehensive Guide',
    excerpt: 'A detailed guide to essential terms and concepts in Large Language Models, from tokens to fine-tuning, helping you navigate the world of AI language processing.',
    imageClass: 'llm-terminology-image',
    tag: 'Fundamentals',
    readingTime: '8 min read',
    publishDate: 'March 21, 2025',
    link: '/blogs/llm-technology-guide'
  },
  {
    id: 'openai-api',
    title: 'Connecting to OpenAI API: A Complete Guide',
    excerpt: "A step-by-step tutorial to set up and use OpenAI's API for your applications, including authentication, handling requests, and managing API limits.",
    imageClass: 'openai-image',
    tag: 'Fundamentals',
    readingTime: '8 min read',
    publishDate: 'January 20, 2025',
    link: '/blogs/openai-api-guide'
  },
  {
    id: 'openrouter',
    title: 'What is OpenRouter and Why Use It?',
    excerpt: 'Explore how OpenRouter can give you access to multiple LLMs through a unified API, simplifying your multi-model workflow and reducing integration complexity.',
    imageClass: 'openrouter-image',
    tag: 'Fundamentals',
    readingTime: '6 min read',
    publishDate: 'January 15, 2025',
    link: '/blogs/openrouter-platform-guide'
  },

  // Agents
  {
    id: 'agent-basic',
    title: 'Building LLM Agents: A Complete Guide',
    excerpt: 'Learn how to build, test, and deploy LLM-powered agents. From basic concepts to advanced implementations with real-world examples.',
    imageClass: 'agent-basic-image',
    tag: 'Agents',
    readingTime: '15 min read',
    publishDate: 'April 7, 2025',
    link: '/llm-agent/basic'
  },
  {
    id: 'agent-market',
    title: 'MarketMind AI: Building a Market Analysis Agent',
    excerpt: 'Step-by-step guide to creating an AI agent for market analysis and financial insights using LLMs and specialized tools.',
    imageClass: 'agent-market-image',
    tag: 'Agents',
    readingTime: '12 min read',
    publishDate: 'April 7, 2025',
    link: '/agent/marketmind'
  },
  {
    id: 'agent-sport',
    title: 'AthleteInsight AI: Sports Analytics Agent',
    excerpt: 'Create an intelligent agent for sports data analysis, player performance tracking, and strategic insights using LLM capabilities.',
    imageClass: 'agent-sport-image',
    tag: 'Agents',
    readingTime: '10 min read',
    publishDate: 'April 7, 2025',
    link: '/agent/athlete-insight'
  },
  {
    id: 'agent-book',
    title: 'BookBuddy: Your AI Reading Companion',
    excerpt: 'Build a personalized book recommendation and analysis agent that helps users discover and understand literature.',
    imageClass: 'agent-book-image',
    tag: 'Agents',
    readingTime: '12 min read',
    publishDate: 'April 7, 2025',
    link: '/agent/bookbuddy'
  },

  // Tools & Frameworks
  {
    id: 'langchain',
    title: 'Getting Started with LangChain',
    excerpt: 'An introduction to LangChain, a popular framework for developing applications powered by language models, with practical examples.',
    imageClass: 'langchain-image',
    tag: 'Tools & Frameworks',
    readingTime: '11 min read',
    publishDate: 'January 10, 2025',
    link: '/blogs/langchain-introduction'
  },
  {
    id: 'cursor-workflows',
    title: 'Mastering Cursor Custom Workflows: Automate Your Coding Tasks',
    excerpt: 'Learn how to create and optimize custom workflows in Cursor to automate coding tasks, improve productivity, and streamline your development process.',
    imageClass: 'cursor-workflows-image',
    tag: 'Tools & Frameworks',
    readingTime: '8 min read',
    publishDate: 'March 12, 2025',
    link: '/blogs/cursor-custom-workflows'
  },
  {
    id: 'ai-tools',
    title: 'AI-Powered Developer & Agent Tools',
    excerpt: 'Discover powerful tools for agent development and AI-assisted coding to supercharge your workflow. From code generation to intelligent assistance, find the right tools for your needs.',
    imageClass: 'ai-tools-image',
    tag: 'Tools & Frameworks',
    readingTime: '15 min read',
    publishDate: 'March 31, 2025',
    link: '/ai-tools'
  },
  {
    id: 'llm-resources',
    title: 'LLM Resources & References',
    excerpt: 'A curated collection of tools, services, and learning materials for LLM development. Find the best resources for building and deploying language model applications.',
    imageClass: 'resources-image',
    tag: 'Tools & Frameworks',
    readingTime: '10 min read',
    publishDate: 'March 29, 2025',
    link: '/resources'
  }
];