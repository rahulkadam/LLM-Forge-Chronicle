import { BlogPost } from './types';
import {fundamentalsPosts} from './categories/fundamentals';
import { promptEngineeringPosts } from './categories/prompt-engineering';
import { llmModelsPosts } from './categories/llm-models';
import { agentsPosts } from './categories/agents';
import { aiDrivenITPosts } from './categories/ai-driven-it';
import { advancedTechniquesPosts } from './categories/advanced-techniques';
import { toolsFrameworksPosts } from './categories/tools-frameworks';
import {llmIntegrationPosts} from "./categories/llm-integration";

// Re-export the BlogPost type for convenience
export type { BlogPost };

// Export the combined blog posts array
export const allBlogPosts: BlogPost[] = [
  ...promptEngineeringPosts,  // Most recent category first
  ...fundamentalsPosts,
  ...llmModelsPosts,
  ...agentsPosts,
  ...aiDrivenITPosts,
  ...advancedTechniquesPosts,
  ...toolsFrameworksPosts,
  ...llmIntegrationPosts
];