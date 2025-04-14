import React from 'react';
import { Link } from 'react-router-dom';
import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, CodeExample, InfoBox } from '../../../../components/blogs/BlogComponents';
import useBlogBehavior from '../../../../hooks/useBlogBehavior';
import type { BlogCategory } from '../../../../data/blogData';
import './openrouter-platform-guide.css';

const OpenRouterPlatformGuide: React.FC = () => {
  useBlogBehavior();

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'why-openrouter', title: 'Why OpenRouter?' },
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'available-models', title: 'Available Models' },
    { id: 'api-integration', title: 'API Integration' },
    { id: 'cost-management', title: 'Cost Management' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'migration-guide', title: 'Migration Guide' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  const category: BlogCategory = 'Fundamentals';

  return (
    <BlogTemplate
      title="What is OpenRouter and Why Use It?"
      date="January 15, 2025"
      readTime="6 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          OpenRouter is a unified API gateway that provides access to multiple Large Language Models (LLMs)
          through a single, consistent interface. It simplifies the process of working with different AI models
          by providing a standardized API that's compatible with the OpenAI API format.
        </p>

        <InfoBox type="note" title="Key Takeaways">
          <ul>
            <li>Access multiple LLM providers through a single API</li>
            <li>OpenAI-compatible API format for easy integration</li>
            <li>Simplified billing and usage tracking</li>
            <li>Cost-effective model selection options</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="why-openrouter" title="Why OpenRouter?">
        <h3>Key Benefits</h3>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h4>Model Variety</h4>
            <p>Access to models from OpenAI, Anthropic, Meta, Google, and more through a single API.</p>
          </div>
          <div className="benefit-card">
            <h4>Cost Optimization</h4>
            <p>Choose the most cost-effective model for your specific use case.</p>
          </div>
          <div className="benefit-card">
            <h4>Simplified Integration</h4>
            <p>One API key, one interface, multiple models.</p>
          </div>
          <div className="benefit-card">
            <h4>Fallback Support</h4>
            <p>Automatic failover between models for improved reliability.</p>
          </div>
        </div>

        <InfoBox type="tip" title="When to Use OpenRouter">
          <ul>
            <li>When you need access to multiple LLM providers</li>
            <li>For comparing different models' performance</li>
            <li>To optimize costs across different providers</li>
            <li>When building provider-agnostic applications</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="getting-started" title="Getting Started">
        <h3>Setup Process</h3>
        <ol>
          <li>
            <strong>Create an Account</strong>
            <p>Sign up at <a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer">OpenRouter.ai</a></p>
          </li>
          <li>
            <strong>Get API Key</strong>
            <p>Generate an API key from your dashboard</p>
          </li>
          <li>
            <strong>Install SDK</strong>
            <CodeExample
              language="bash"
              code={`# Using npm
npm install openrouter

# Using yarn
yarn add openrouter

# Using pnpm
pnpm add openrouter`}
            />
          </li>
        </ol>

        <InfoBox type="warning" title="API Key Security">
          <ul>
            <li>Never expose your API key in client-side code</li>
            <li>Use environment variables for API keys</li>
            <li>Set appropriate usage limits</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="available-models" title="Available Models">
        <h3>Popular Models</h3>
        <div className="model-table">
          <table>
            <thead>
              <tr>
                <th>Provider</th>
                <th>Model</th>
                <th>Best For</th>
                <th>Relative Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>OpenAI</td>
                <td>gpt-4</td>
                <td>Complex reasoning tasks</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Anthropic</td>
                <td>claude-2</td>
                <td>Long-form content, analysis</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>Meta</td>
                <td>llama-2-70b</td>
                <td>General purpose tasks</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>Google</td>
                <td>gemini-pro</td>
                <td>Multimodal tasks</td>
                <td>Medium</td>
              </tr>
            </tbody>
          </table>
        </div>

        <InfoBox type="tip" title="Model Selection">
          <p>
            Choose models based on your specific needs:
          </p>
          <ul>
            <li>Budget constraints</li>
            <li>Performance requirements</li>
            <li>Specific capabilities needed</li>
            <li>Response time requirements</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="api-integration" title="API Integration">
        <h3>Basic Usage</h3>
        <CodeExample
          language="typescript"
          code={`import OpenRouter from 'openrouter';

const router = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY
});

async function getCompletion(prompt: string) {
  try {
    const completion = await router.chat.completions.create({
      model: 'openai/gpt-3.5-turbo',  // Specify provider/model
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}`}
        />

        <h3>Model Fallback</h3>
        <CodeExample
          language="typescript"
          code={`const modelPreferences = [
  'anthropic/claude-2',
  'openai/gpt-4',
  'meta/llama-2-70b'
];

async function getCompletionWithFallback(prompt: string) {
  for (const model of modelPreferences) {
    try {
      const completion = await router.chat.completions.create({
        model,
        messages: [{ role: 'user', content: prompt }]
      });
      return completion.choices[0].message.content;
    } catch (error) {
      console.warn(\`Failed with model \${model}:\`, error);
      continue;
    }
  }
  throw new Error('All models failed');
}`}
        />
      </BlogSection>

      <BlogSection id="cost-management" title="Cost Management">
        <h3>Monitoring Usage</h3>
        <p>
          OpenRouter provides detailed usage metrics and cost tracking through their dashboard.
          Here's how to implement cost-aware model selection:
        </p>

        <CodeExample
          language="typescript"
          code={`const MODEL_COSTS = {
  'openai/gpt-4': 0.03,
  'anthropic/claude-2': 0.02,
  'meta/llama-2-70b': 0.01
};

async function getCostEfficientCompletion(prompt: string, maxCost: number) {
  const affordableModels = Object.entries(MODEL_COSTS)
    .filter(([_, cost]) => cost <= maxCost)
    .map(([model]) => model)
    .sort((a, b) => MODEL_COSTS[b] - MODEL_COSTS[a]);

  for (const model of affordableModels) {
    try {
      const completion = await router.chat.completions.create({
        model,
        messages: [{ role: 'user', content: prompt }]
      });
      return completion.choices[0].message.content;
    } catch (error) {
      continue;
    }
  }
  throw new Error('No affordable models available');
}`}
        />

        <InfoBox type="warning" title="Cost Control Tips">
          <ul>
            <li>Set budget alerts in the dashboard</li>
            <li>Monitor token usage per request</li>
            <li>Implement cost-based model selection</li>
            <li>Use caching for repeated requests</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="best-practices" title="Best Practices">
        <h3>Implementation Guidelines</h3>
        <ol>
          <li>
            <strong>Error Handling</strong>
            <CodeExample
              language="typescript"
              code={`async function handleOpenRouterErrors() {
  try {
    const result = await router.chat.completions.create({/*...*/});
    return result;
  } catch (error: any) {
    if (error.status === 429) {
      // Rate limit exceeded
      await new Promise(resolve => setTimeout(resolve, 1000));
      return handleOpenRouterErrors();
    }
    throw error;
  }
}`}
            />
          </li>
          <li>
            <strong>Model Selection Strategy</strong>
            <p>
              Implement a smart model selection strategy based on:
            </p>
            <ul>
              <li>Task complexity</li>
              <li>Response time requirements</li>
              <li>Cost constraints</li>
              <li>Fallback preferences</li>
            </ul>
          </li>
        </ol>
      </BlogSection>

      <BlogSection id="migration-guide" title="Migration Guide">
        <h3>Migrating from OpenAI</h3>
        <p>
          OpenRouter maintains compatibility with the OpenAI API format, making migration straightforward:
        </p>

        <CodeExample
          language="typescript"
          code={`// OpenAI
import OpenAI from 'openai';
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// OpenRouter
import OpenRouter from 'openrouter';
const router = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY
});

// The rest of your code remains largely the same
const completion = await router.chat.completions.create({
  model: 'openai/gpt-4',  // Just add provider prefix
  messages: [{ role: 'user', content: prompt }]
});`}
        />

        <InfoBox type="tip" title="Migration Tips">
          <ul>
            <li>Update API endpoint and key</li>
            <li>Add provider prefixes to model names</li>
            <li>Test thoroughly with each model</li>
            <li>Monitor costs during transition</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="conclusion" title="Conclusion">
        <p>
          OpenRouter provides a flexible and cost-effective way to access multiple LLM providers
          through a single, consistent API. By following the best practices and implementation
          guidelines outlined in this guide, you can build robust, provider-agnostic AI applications
          while optimizing for cost and performance.
        </p>

        <div className="next-steps">
          <h3>Further Reading</h3>
          <div className="resource-links">
            <Link to="/blogs/fundamentals/model-comparison" className="resource-link">
              LLM Model Comparison Guide →
            </Link>
            <Link to="/blogs/fundamentals/cost-optimization" className="resource-link">
              LLM Cost Optimization Strategies →
            </Link>
            <a 
              href="https://openrouter.ai/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              Official OpenRouter Documentation →
            </a>
          </div>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default OpenRouterPlatformGuide;