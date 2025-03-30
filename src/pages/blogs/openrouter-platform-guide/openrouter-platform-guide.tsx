import React from 'react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection } from '../../../components/blogs/BlogComponents';
import '../mobile-viewport-fix.css';
import './openrouter-style.css';

const OpenRouterIntroduction: React.FC = () => {
  // Table of contents definition
  const tableOfContents = [
    { id: 'introduction', title: 'What is OpenRouter?' },
    { id: 'key-features', title: 'Key Features and Benefits' },
    { id: 'technical-implementation', title: 'Technical Implementation' },
    { id: 'available-models', title: 'Available Models' },
    { id: 'api-key-management', title: 'API Key Management' },
    { id: 'advanced-implementation', title: 'Advanced Implementation' },
    { id: 'use-cases', title: 'Use Cases' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  return (
    <BlogTemplate
      title="OpenRouter: Your Gateway to Multiple LLM Models"
      date="March 20, 2025"
      readTime="10 min"
      category="Platform"
      bannerClassName="openrouter-banner"
      tableOfContents={tableOfContents}
      className="openrouter-guide"
    >
      <BlogSection id="introduction" title="What is OpenRouter?">
        <p>
          OpenRouter is a powerful API gateway that provides unified access to multiple Large Language Models (LLMs) 
          from various providers. It's like having a universal remote control for all your AI models, making it easier 
          to experiment with different models without managing multiple API keys and integrations.
        </p>
        <div className="resource-links">
          <a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer" className="resource-link">
            Visit OpenRouter Website →
          </a>
          <a href="https://openrouter.ai/docs" target="_blank" rel="noopener noreferrer" className="resource-link">
            OpenRouter Documentation →
          </a>
        </div>
      </BlogSection>

      <BlogSection id="key-features" title="Key Features and Benefits">
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Unified API</h3>
            <p>
              Access multiple LLM providers through a single API endpoint, reducing integration complexity 
              and maintenance overhead.
            </p>
          </div>
          <div className="feature-card">
            <h3>Cost Optimization</h3>
            <p>
              Compare and choose the most cost-effective model for your specific use case, with transparent 
              pricing across providers.
            </p>
          </div>
          <div className="feature-card">
            <h3>Model Flexibility</h3>
            <p>
              Easily switch between different models (GPT-4, Claude, Llama, etc.) without changing your 
              application code.
            </p>
          </div>
          <div className="feature-card">
            <h3>Fallback Options</h3>
            <p>
              Implement automatic fallback to alternative models if your primary model is unavailable or 
              rate-limited.
            </p>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="technical-implementation" title="Technical Implementation">
        <div className="code-example">
          <h3>Basic Integration Example</h3>
          <pre>
            {`import { OpenRouter } from 'openrouter';

const client = new OpenRouter({
  apiKey: 'your-api-key',
  defaultModel: 'gpt-4'
});

const response = await client.chat.completions.create({
  messages: [
    { role: 'user', content: 'Hello, how are you?' }
  ]
});`}
          </pre>
        </div>

        <div className="implementation-notes">
          <h3>API Endpoints</h3>
          <ul>
            <li><strong>Base URL:</strong> https://openrouter.ai/api/v1</li>
            <li><strong>Chat Completion:</strong> /chat/completions</li>
            <li><strong>Models List:</strong> /models</li>
            <li><strong>Usage Stats:</strong> /usage</li>
          </ul>
        </div>
      </BlogSection>

      <BlogSection id="available-models" title="Available Models">
        <div className="feature-grid">
          <div className="feature-card">
            <h3>GPT Models</h3>
            <ul>
              <li>GPT-4 Turbo</li>
              <li>GPT-3.5 Turbo</li>
              <li>GPT-4 Vision</li>
            </ul>
            <p>Best for general-purpose tasks and complex reasoning</p>
          </div>
          <div className="feature-card">
            <h3>Claude Models</h3>
            <ul>
              <li>Claude 3 Opus</li>
              <li>Claude 3 Sonnet</li>
              <li>Claude 2.1</li>
            </ul>
            <p>Excellent for analysis and detailed responses</p>
          </div>
          <div className="feature-card">
            <h3>Open Source Models</h3>
            <ul>
              <li>Mistral 7B</li>
              <li>Llama 2 70B</li>
              <li>CodeLlama 34B</li>
            </ul>
            <p>Cost-effective for specific use cases</p>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="api-key-management" title="API Key Management">
        <div className="implementation-notes">
          <h3>Key Storage Best Practices</h3>
          <p>Here are the recommended approaches for storing and managing your OpenRouter API keys:</p>

          <h4>1. Environment Variables</h4>
          <pre className="code-example">
            {`# .env file
OPENROUTER_API_KEY=your_api_key_here
OPENROUTER_DEV_API_KEY=your_dev_key_here
OPENROUTER_BACKUP_API_KEY=your_backup_key_here

# Access in your code
const apiKey = process.env.OPENROUTER_API_KEY;`}
          </pre>

          <h4>2. Secure Key Management Service</h4>
          <pre className="code-example">
            {`// Using AWS Secrets Manager
const AWS = require('aws-sdk');
const secretsManager = new AWS.SecretsManager();

async function getApiKey() {
  const secret = await secretsManager.getSecretValue({
    SecretId: 'openrouter/api-keys'
  }).promise();
  return JSON.parse(secret.SecretString).apiKey;
}

// Using HashiCorp Vault
const vault = require('node-vault')();
const apiKey = await vault.read('secret/openrouter/api-key');`}
          </pre>

          <h4>3. Key Rotation Implementation</h4>
          <pre className="code-example">
            {`class ApiKeyManager {
  constructor() {
    this.keys = {
      primary: process.env.OPENROUTER_API_KEY,
      secondary: process.env.OPENROUTER_BACKUP_API_KEY,
      lastRotation: new Date()
    };
  }

  async rotateKeys() {
    // Implement key rotation logic
    const newKey = await generateNewKey();
    this.keys.secondary = this.keys.primary;
    this.keys.primary = newKey;
    this.keys.lastRotation = new Date();
  }

  getActiveKey() {
    return this.keys.primary;
  }
}`}
          </pre>

          <h4>4. Error Handling and Fallback</h4>
          <pre className="code-example">
            {`async function getCompletion(prompt) {
  const keyManager = new ApiKeyManager();
  
  try {
    const response = await client.chat.completions.create({
      apiKey: keyManager.getActiveKey(),
      messages: [{ role: 'user', content: prompt }]
    });
    return response;
  } catch (error) {
    if (error.status === 401) {
      // Key might be invalid, try backup key
      return await client.chat.completions.create({
        apiKey: keyManager.keys.secondary,
        messages: [{ role: 'user', content: prompt }]
      });
    }
    throw error;
  }
}`}
          </pre>

          <div className="security-notes">
            <h4>Security Considerations</h4>
            <ul>
              <li>Never commit API keys to version control</li>
              <li>Use different keys for development and production</li>
              <li>Implement key rotation policies</li>
              <li>Monitor key usage for suspicious activity</li>
              <li>Use environment-specific key storage solutions</li>
            </ul>
          </div>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Credit Limits</h3>
            <ul>
              <li>Free Tier: $5 credit/month</li>
              <li>Pro Tier: $50 credit/month</li>
              <li>Enterprise: Custom limits</li>
            </ul>
            <p>Monitor usage through the dashboard or API</p>
          </div>
          <div className="feature-card">
            <h3>Multiple Key Management</h3>
            <ul>
              <li>Create separate keys for different environments</li>
              <li>Use key rotation for security</li>
              <li>Implement fallback keys for redundancy</li>
            </ul>
            <p>Manage keys through OpenRouter dashboard</p>
          </div>
          <div className="feature-card">
            <h3>Usage Monitoring</h3>
            <pre>
              {`// Check usage
const usage = await client.usage.get();
console.log(usage.credits_remaining);
console.log(usage.credits_used);`}
            </pre>
            <p>Monitor credit usage and set up alerts</p>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="advanced-implementation" title="Advanced Implementation">
        <div className="code-example">
          <h3>Model Fallback Example</h3>
          <pre>
            {`async function getCompletion(prompt, primaryModel = 'gpt-4') {
  try {
    const response = await client.chat.completions.create({
      model: primaryModel,
      messages: [{ role: 'user', content: prompt }]
    });
    return response;
  } catch (error) {
    // Fallback to alternative model
    return await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }]
    });
  }
}`}
          </pre>
        </div>

        <div className="implementation-notes">
          <h3>Rate Limiting and Retries</h3>
          <pre className="code-example">
            {`const client = new OpenRouter({
  apiKey: 'your-api-key',
  maxRetries: 3,
  retryDelay: 1000, // 1 second
  timeout: 30000, // 30 seconds
  rateLimit: {
    requestsPerMinute: 60,
    concurrentRequests: 5
  }
});`}
          </pre>
        </div>
      </BlogSection>

      <BlogSection id="use-cases" title="Use Cases">
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Startups</h3>
            <p>
              Perfect for startups looking to experiment with different models without committing to a single provider.
            </p>
          </div>
          <div className="feature-card">
            <h3>AI Researchers</h3>
            <p>
              Ideal for researchers comparing model performance across different providers and architectures.
            </p>
          </div>
          <div className="feature-card">
            <h3>Enterprises</h3>
            <p>
              Suitable for enterprises requiring model redundancy and cost optimization across multiple providers.
            </p>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="best-practices" title="Best Practices">
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Model Selection</h3>
            <p>
              Choose models based on your specific use case requirements, considering factors like cost, 
              performance, and reliability.
            </p>
          </div>
          <div className="feature-card">
            <h3>Cost Management</h3>
            <p>
              Monitor usage patterns and implement cost controls to optimize spending across different models.
            </p>
          </div>
          <div className="feature-card">
            <h3>Performance Optimization</h3>
            <p>
              Implement caching and request batching to improve response times and reduce API costs.
            </p>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="getting-started" title="Getting Started with OpenRouter">
        <div className="feature-grid">
          <div className="feature-card">
            <h3>1. Sign Up</h3>
            <p>
              Create an account at OpenRouter and obtain your API key. The signup process is straightforward 
              and you can start with a free tier.
            </p>
          </div>
          <div className="feature-card">
            <h3>2. Choose Your Models</h3>
            <p>
              Review the available models and their capabilities. Consider your use case and budget when 
              selecting models.
            </p>
          </div>
          <div className="feature-card">
            <h3>3. Integration</h3>
            <p>
              Integrate the OpenRouter API into your application. Start with a simple test to ensure 
              everything works as expected.
            </p>
          </div>
          <div className="feature-card">
            <h3>4. Monitoring and Optimization</h3>
            <p>
              Set up comprehensive monitoring for usage patterns, costs, and performance metrics. Use this data 
              to optimize your implementation and make informed decisions about model selection and usage patterns.
            </p>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="conclusion" title="Conclusion">
        <p>
          OpenRouter provides a powerful solution for accessing multiple LLM models through a unified API. 
          Whether you're a startup looking to experiment with different models or an enterprise seeking 
          model redundancy, OpenRouter offers the flexibility and features needed to build robust AI 
          applications.
        </p>
      </BlogSection>

      <div className="related-content">
        <h2>Related Articles</h2>
        <div className="related-links">
          <Link to="/blogs/openai-api-guide" className="related-link">
            OpenAI Connection Guide →
          </Link>
          <Link to="/blogs/llm-technical" className="related-link">
            Understanding LLMs: A Technical Deep Dive →
          </Link>
        </div>
      </div>
    </BlogTemplate>
  );
};

export default OpenRouterIntroduction;