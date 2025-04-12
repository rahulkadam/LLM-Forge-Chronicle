import React from 'react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection } from '../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../data/blogData';
import '../../../styles/blogs/blog-base-style.css';


const DeveloperQuickStart: React.FC = () => {
  const category: BlogCategory = 'Technical';
  
  const tableOfContents = [
    { id: 'intro', title: 'Introduction to LLMs' },
    { id: 'why-use', title: 'Why Use LLMs?' },
    { id: 'concepts', title: 'Key Concepts' },
    { id: 'setup', title: 'Developer Setup' },
    { id: 'first-call', title: 'First API Call' },
    { id: 'troubleshoot', title: 'Troubleshooting' },
    { id: 'next', title: 'Next Steps' }
  ];

  return (
    <BlogTemplate
      title="Developer's Quick Start Guide to LLMs"
      date="April 12, 2025"
      readTime="20 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="intro" title="Introduction to LLMs">
        <div className="beginner-badge">Beginner-Friendly</div>
        <p className="tutorial-description">
          Large Language Models (LLMs) are AI systems trained on massive text datasets that can understand and generate
          human-like text. As a developer, you can think of them as sophisticated text prediction engines that can be 
          accessed via APIs.
        </p>

        <div className="content-grid">
          <div className="content-card">
            <h3>The Developer's Perspective</h3>
            <ul>
              <li>LLMs are accessible through <strong>API endpoints</strong></li>
              <li>Send <strong>prompts</strong>, receive <strong>completions</strong></li>
              <li>Models have a <strong>knowledge cutoff date</strong></li>
              <li>Content measured in <strong>tokens</strong></li>
              <li>Different <strong>capabilities and costs</strong></li>
            </ul>
          </div>
        </div>

        <div className="info-box">
          <img src="/llm/LLM-high-level-example.png" alt="LLM Agent overview" className="full-width-image"/>
        </div>
      </BlogSection>

      <BlogSection id="why-use" title="Why Use LLMs?">
        <div className="content-grid">
          <div className="content-card">
            <h3>Code Generation & Assistance</h3>
            <p>Generate boilerplate code, convert between languages, debug issues</p>
            <div className="code-block">
              <pre>{`# Example: Python to TypeScript conversion
def calculate_discount(price, discount_percent):
    return price - (price * discount_percent / 100)`}</pre>
            </div>
          </div>

          <div className="content-card">
            <h3>Content Generation</h3>
            <p>Create documentation, generate test data, write emails</p>
          </div>

          <div className="content-card">
            <h3>Data Processing</h3>
            <p>Extract information, summarize documents, transform data</p>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="concepts" title="Key Concepts">
        <div className="content-grid">
          <div className="content-card">
            <h3>Models</h3>
            <ul>
              <li><strong>GPT-3.5-Turbo</strong> - Fast, cost-effective</li>
              <li><strong>GPT-4</strong> - Advanced reasoning</li>
              <li><strong>Claude 3</strong> - Long context windows</li>
              <li><strong>Llama 3</strong> - Open weights, local deployment</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Tokens</h3>
            <ul>
              <li>~4 characters per token</li>
              <li>"Hello world" ≈ 2 tokens</li>
              <li>Page of text ≈ 500-1000 tokens</li>
              <li>Context limits: 4k-8k tokens</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Prompts</h3>
            <ul>
              <li><strong>System instructions</strong></li>
              <li><strong>User messages</strong></li>
              <li><strong>Examples</strong></li>
              <li><strong>Format instructions</strong></li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="setup" title="Developer Setup">
        <div className="content-grid">
          <div className="content-card">
            <h3>1. Choose a Provider</h3>
            <ul>
              <li><strong>OpenAI</strong> - Well-documented API</li>
              <li><strong>Anthropic</strong> - Claude models</li>
              <li><strong>OpenRouter</strong> - Multiple models</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>2. Get API Key</h3>
            <ol>
              <li>Create account</li>
              <li>Generate API key</li>
              <li>Store securely</li>
              <li>Set environment variables</li>
            </ol>
          </div>

          <div className="content-card">
            <h3>3. Install Libraries</h3>
            <div className="code-block">
              <pre>{`npm install openai
# OR
yarn add openai`}</pre>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="first-call" title="Your First API Call">
        <div className="code-block">
          <pre>{`import { OpenAI } from 'openai';

const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey });

async function generateResponse() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { 
          role: "system", 
          content: "You are a helpful assistant."
        },
        { 
          role: "user", 
          content: "Explain what an API is."
        }
      ],
      temperature: 0.3,
    });
    
    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

generateResponse();`}</pre>
        </div>
      </BlogSection>

      <BlogSection id="troubleshoot" title="Troubleshooting">
        <div className="content-grid">
          <div className="content-card">
            <h3>Authentication Error</h3>
            <div className="code-block">
              <pre>Error: 401 Unauthorized</pre>
            </div>
            <p>Check API key and environment variables</p>
          </div>

          <div className="content-card">
            <h3>Rate Limit Exceeded</h3>
            <div className="code-block">
              <pre>Error: 429 Too Many Requests</pre>
            </div>
            <p>Implement rate limiting and backoff</p>
          </div>

          <div className="content-card">
            <h3>Context Length Exceeded</h3>
            <div className="code-block">
              <pre>Error: Maximum context length exceeded</pre>
            </div>
            <p>Reduce prompt size or change model</p>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="next" title="Next Steps">
        <div className="content-grid">
          <div className="content-card">
            <h3>Learn More</h3>
            <ul>
              <li><Link to="/prompt-engineering">Prompt Engineering Basics</Link></li>
              <li><Link to="/BuildingLLMAgent">Build Your First LLM App</Link></li>
              <li><Link to="/blogs/openai-api-guide">OpenAI API Guide</Link></li>
            </ul>
          </div>
        </div>

        <div className="info-box">
          <h3>Ready to Build with LLMs?</h3>
          <p>Continue your learning journey with these resources:</p>
          <div className="button-group">
            <Link to="/prompt-engineering" className="primary-button">
              Learn Prompt Engineering →
            </Link>
            <Link to="/blogs/openai-api-guide" className="secondary-button">
              OpenAI API Integration Guide →
            </Link>
          </div>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default DeveloperQuickStart;