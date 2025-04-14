import React from 'react';
import { Link } from 'react-router-dom';
import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../../components/blogs/BlogComponents';
import CodeExample from '../../../../components/blogs/CodeExample';
import useBlogBehavior from '../../../../hooks/useBlogBehavior';
import type { BlogCategory } from '../../../../data/blogData';

const OpenAIAPIGuide: React.FC = () => {
  useBlogBehavior();

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'authentication', title: 'Authentication' },
    { id: 'basic-requests', title: 'Making Basic Requests' },
    { id: 'advanced-usage', title: 'Advanced Usage' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'error-handling', title: 'Error Handling' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  const category: BlogCategory = 'Fundamentals';

  return (
    <BlogTemplate
      title="Connecting to OpenAI API: A Complete Guide"
      date="January 20, 2025"
      readTime="8 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          OpenAI's API provides developers with access to powerful language models like GPT-4 and GPT-3.5.
          This guide will walk you through the process of integrating OpenAI's API into your applications,
          from basic setup to advanced usage patterns.
        </p>

        <InfoBox type="note" title="Prerequisites">
          <ul>
            <li>Basic understanding of REST APIs</li>
            <li>Node.js installed (version 14.0 or higher)</li>
            <li>An OpenAI account and API key</li>
            <li>Familiarity with async/await in JavaScript</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="getting-started" title="Getting Started">
        <h3>Installation</h3>
        <p>First, install the OpenAI Node.js library:</p>

        <CodeExample
          code={`# Using npm
npm install openai

# Using yarn
yarn add openai

# Using pnpm
pnpm add openai`}
          language="bash"
          title="Installing OpenAI SDK"
        />

        <InfoBox type="tip" title="Version Information">
          <p>
            This guide uses the latest OpenAI Node.js SDK (v4.x). The API structure
            has changed significantly from v3.x, so make sure you're using the correct version.
          </p>
        </InfoBox>

        <h3>Initial Setup</h3>
        <CodeExample
          code={`import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: 'org-...', // Optional
});`}
          language="typescript"
          title="Initial Configuration"
        />
      </BlogSection>

      <BlogSection id="authentication" title="Authentication">
        <h3>Setting Up Your API Key</h3>
        <p>
          To use the OpenAI API, you'll need an API key. You can obtain one from
          the <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer">
          OpenAI dashboard</a>.
        </p>

        <InfoBox type="warning" title="Security Best Practices">
          <ul>
            <li>Never expose your API key in client-side code</li>
            <li>Use environment variables to store sensitive credentials</li>
            <li>Implement proper key rotation practices</li>
            <li>Set up usage limits in the OpenAI dashboard</li>
          </ul>
        </InfoBox>

        <h3>Environment Configuration</h3>
        <CodeExample
          code={`// .env file
OPENAI_API_KEY=sk-...
OPENAI_ORG_ID=org-...

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();`}
          language="typescript"
          title="Environment Setup"
        />
      </BlogSection>

      <BlogSection id="basic-requests" title="Making Basic Requests">
        <h3>Chat Completion Example</h3>
        <p>Here's a basic example of using the chat completion API:</p>

        <CodeExample
          code={`async function getChatCompletion(prompt: string) {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      max_tokens: 150
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}`}
          language="typescript"
          title="Basic Chat Completion"
        />

        <InfoBox type="tip" title="Important Parameters">
          <ul>
            <li><strong>model</strong>: The model to use (e.g., 'gpt-4', 'gpt-3.5-turbo')</li>
            <li><strong>temperature</strong>: Controls response randomness (0-1)</li>
            <li><strong>max_tokens</strong>: Maximum length of the response</li>
            <li><strong>presence_penalty</strong>: Encourages new topics (-2.0 to 2.0)</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="advanced-usage" title="Advanced Usage">
        <h3>Streaming Responses</h3>
        <p>For real-time responses, use streaming:</p>

        <CodeExample
          code={`async function streamCompletion(prompt: string) {
  const stream = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
    stream: true
  });

  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content || '';
    process.stdout.write(content);
  }
}`}
          language="typescript"
          title="Streaming Response Handler"
        />

        <h3>Function Calling</h3>
        <CodeExample
          code={`const completion = await openai.chat.completions.create({
  messages: [{ role: 'user', content: 'What's the weather in Boston?' }],
  model: 'gpt-3.5-turbo',
  functions: [{
    name: 'get_weather',
    description: 'Get the current weather in a location',
    parameters: {
      type: 'object',
      properties: {
        location: {
          type: 'string',
          description: 'The city and state'
        }
      }
    }
  }]
});`}
          language="typescript"
          title="Function Calling Example"
        />
      </BlogSection>

      <BlogSection id="best-practices" title="Best Practices">
        <h3>Optimization Tips</h3>
        <ol>
          <li>
            <strong>Token Management</strong>
            <p>Monitor and optimize token usage to control costs:</p>
            <ul>
              <li>Use appropriate max_tokens limits</li>
              <li>Choose the right model for your use case</li>
              <li>Implement caching where appropriate</li>
            </ul>
          </li>
          <li>
            <strong>Error Handling</strong>
            <p>Implement robust error handling:</p>
            <CodeExample
              code={`const makeRequest = async (retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await openai.chat.completions.create({/*...*/});
    } catch (error: any) {
      if (error.status === 429 && i < retries - 1) {
        await new Promise(resolve => 
          setTimeout(resolve, Math.pow(2, i) * 1000)
        );
        continue;
      }
      throw error;
    }
  }
};`}
              language="typescript"
              title="Retry Handler"
            />
          </li>
        </ol>

        <InfoBox type="tip" title="Production Readiness">
          <ul>
            <li>Implement request timeouts</li>
            <li>Set up monitoring and logging</li>
            <li>Use response validation</li>
            <li>Implement rate limiting</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="error-handling" title="Error Handling">
        <h3>Common Errors</h3>
        <p>Handle various API errors effectively:</p>

        <CodeExample
          code={`type APIError = {
  status: number;
  message: string;
};

async function handleAPIErrors() {
  try {
    const result = await openai.chat.completions.create({/*...*/});
    return result;
  } catch (error: any) {
    switch (error.status) {
      case 401:
        throw new Error('Invalid API key');
      case 429:
        throw new Error('Rate limit exceeded');
      case 500:
        throw new Error('OpenAI server error');
      default:
        throw new Error(\`Unexpected error: \${error.message}\`);
    }
  }
}`}
          language="typescript"
          title="Error Handler"
        />

        <InfoBox type="warning" title="Error Types">
          <ul>
            <li><strong>401</strong>: Authentication errors</li>
            <li><strong>429</strong>: Rate limit exceeded</li>
            <li><strong>400</strong>: Invalid requests</li>
            <li><strong>500</strong>: Server errors</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="conclusion" title="Conclusion">
        <p>
          You now have a solid foundation for integrating OpenAI's API into your applications.
          Remember to follow security best practices, implement proper error handling, and
          optimize your usage for both performance and cost.
        </p>

        <div className="next-steps">
          <h3>Further Reading</h3>
          <div className="resource-links">
            <Link to="/blogs/fundamentals/advanced-openai" className="resource-link">
              Advanced OpenAI Techniques →
            </Link>
            <Link to="/blogs/fundamentals/model-comparison" className="resource-link">
              Comparing LLM Models →
            </Link>
            <a 
              href="https://platform.openai.com/docs/api-reference"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              Official OpenAI API Documentation →
            </a>
          </div>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default OpenAIAPIGuide;