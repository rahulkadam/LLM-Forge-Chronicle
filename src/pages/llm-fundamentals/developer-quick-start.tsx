import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import './developer-quick-start.css';
import '../../styles/PromptEngineering.css'; // Borrowing styles from prompt engineering page

const DeveloperQuickStart: React.FC = () => {
  return (
    <div className="developer-quick-start">
      <header className="page-header">
        <h1>Developer's Quick Start Guide to LLMs</h1>
        <p className="subtitle">
          A practical introduction to Large Language Models for developers
        </p>
        <div className="beginner-badge">Beginner-Friendly</div>
      </header>

      <section className="introduction">
        <h2>What Are LLMs? (The 60-Second Version)</h2>
        <p>
          Large Language Models (LLMs) are AI systems trained on massive text datasets that can understand and generate
          human-like text.
          As a developer, you can think of them as sophisticated text prediction engines that can be accessed via APIs.
        </p>
        <div className="key-points">
          <div className="key-point">
            <h3>The Developer's Perspective</h3>
            <ul>
              <li>LLMs are accessible through <strong>API endpoints</strong> (OpenAI, Anthropic, etc.)</li>
              <li>You send <strong>prompts</strong> (text instructions) and
                receive <strong>completions</strong> (generated responses)
              </li>
              <li>They're trained on data up to a <strong>knowledge cutoff date</strong> (they don't know about events
                after that date)
              </li>
              <li>They consume and generate content measured in <strong>tokens</strong> (roughly 4 characters per token)
              </li>
              <li>Different models have different <strong>capabilities, limitations, and costs</strong></li>
            </ul>
          </div>
        </div>
        <div className="parameter-image-container">
          <img src="/llm/LLM-high-level-example.png" alt="LLM Agent overview" className="full-width-image"/>
        </div>
      </section>

      <section className="why-use-section">
        <h2>Why Should Developers Care About LLMs?</h2>

        <div className="use-cases-grid">
          <div className="use-case-card">
            <h3>Code Generation & Assistance</h3>
            <p>
              Generate boilerplate code, convert between languages, debug issues, and get implementation suggestions.
            </p>
            <div className="example-box">
              <h4>Example:</h4>
              <div className="code-block">
                <pre>
                  {`Prompt: "Convert this Python function to TypeScript:

def calculate_discount(price, discount_percent):
    return price - (price * discount_percent / 100)"`}
                </pre>
              </div>
            </div>
          </div>

          <div className="use-case-card">
            <h3>Content Generation</h3>
            <p>
              Create documentation, generate test data, write emails, and produce marketing content.
            </p>
          </div>

          <div className="use-case-card">
            <h3>Data Processing</h3>
            <p>
              Extract information from unstructured text, summarize documents, and transform data formats.
            </p>
          </div>

          <div className="use-case-card">
            <h3>User-Facing Features</h3>
            <p>
              Build chatbots, customer support systems, content recommendations, and personalized experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="key-concepts">
        <h2>Key Concepts for Developers</h2>
        
        <div className="concept-grid">
          <div className="concept-card">
            <h3>Models</h3>
            <p>
              Different LLMs have different capabilities, prices, and specialties.
            </p>
            <div className="example-box">
              <h4>Common Models:</h4>
              <ul>
                <li><strong>GPT-3.5-Turbo</strong> - Fast, cost-effective, good general capabilities</li>
                <li><strong>GPT-4</strong> - More advanced reasoning, higher accuracy, more expensive</li>
                <li><strong>Claude 3</strong> - Strong at following instructions, long context windows</li>
                <li><strong>Llama 3</strong> - Open weights, can be run locally or via API</li>
              </ul>
            </div>
          </div>

          <div className="concept-card">
            <h3>Tokens</h3>
            <p>
              The unit of text processing for LLMs. Billing and context limits are based on token count.
            </p>
            <div className="example-box">
              <h4>Token Estimation:</h4>
              <ul>
                <li>~4 characters per token in English</li>
                <li>"Hello world" ≈ 2 tokens</li>
                <li>A page of text ≈ 500-1000 tokens</li>
                <li>Most APIs have specific token limits (e.g., 4,096 or 8,192 for context)</li>
              </ul>
            </div>
          </div>

          <div className="concept-card">
            <h3>Prompts</h3>
            <p>
              Instructions sent to the LLM. The quality of your prompt greatly impacts results.
            </p>
            <div className="example-box">
              <h4>Prompt Components:</h4>
              <ul>
                <li><strong>System instructions</strong> - Set the behavior and context</li>
                <li><strong>User messages</strong> - Specific requests or questions</li>
                <li><strong>Examples</strong> - Demonstrations of desired inputs/outputs</li>
                <li><strong>Format instructions</strong> - How you want the response structured</li>
              </ul>
            </div>
          </div>

          <div className="concept-card">
            <h3>Temperature</h3>
            <p>
              Controls randomness in responses. Lower values (0-0.3) give consistent, deterministic answers; higher values (0.7-1.0) give more creative, varied responses.
            </p>
          </div>
        </div>
      </section>

      <section className="tech-map">
        <h2>LLM Technology Map</h2>
        <p>
          This diagram shows how different LLM technologies and concepts relate to each other:
        </p>
        <div className="tech-map-container">
          {/* In a real implementation, this would be a proper SVG diagram */}
          <div className="tech-map-placeholder">
            <div className="tech-map-core">LLM Core Models</div>
            <div className="tech-map-branches">
              <div className="tech-branch">
                <div className="branch-title">Input Processing</div>
                <div className="branch-items">
                  <div className="branch-item">Prompt Engineering</div>
                  <div className="branch-item">Context Windows</div>
                  <div className="branch-item">Few-Shot Learning</div>
                </div>
              </div>
              <div className="tech-branch">
                <div className="branch-title">Enhancement Techniques</div>
                <div className="branch-items">
                  <div className="branch-item">RAG (Retrieval)</div>
                  <div className="branch-item">Fine-Tuning</div>
                  <div className="branch-item">Tool Use (Function Calling)</div>
                </div>
              </div>
              <div className="tech-branch">
                <div className="branch-title">Application Types</div>
                <div className="branch-items">
                  <div className="branch-item">Chatbots</div>
                  <div className="branch-item">LLM Agents</div>
                  <div className="branch-item">Content Generation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="setup-guide">
        <h2>Developer Setup Guide</h2>
        
        <div className="setup-steps">
          <div className="setup-step">
            <h3>1. Choose an LLM Provider</h3>
            <p>
              For beginners, we recommend starting with OpenAI's API due to its ease of use and documentation quality.
            </p>
            <div className="provider-options">
              <div className="provider-card">
                <h4>OpenAI</h4>
                <ul>
                  <li>Well-documented API</li>
                  <li>Free tier available</li>
                  <li>Multiple model options</li>
                </ul>
                <a href="https://platform.openai.com/signup" target="_blank" rel="noreferrer" className="provider-link">
                  Sign up for OpenAI →
                </a>
              </div>
              <div className="provider-card">
                <h4>Anthropic</h4>
                <ul>
                  <li>Claude models</li>
                  <li>Long context windows</li>
                  <li>Strong for complex tasks</li>
                </ul>
                <a href="https://console.anthropic.com/sign-up" target="_blank" rel="noreferrer" className="provider-link">
                  Sign up for Anthropic →
                </a>
              </div>
              <div className="provider-card">
                <h4>OpenRouter</h4>
                <ul>
                  <li>Access multiple models</li>
                  <li>Single API integration</li>
                  <li>Compare performance</li>
                </ul>
                <Link to="/blogs/openrouter-platform-guide" className="provider-link">
                  Learn about OpenRouter →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="setup-step">
            <h3>2. Get Your API Key</h3>
            <p>
              After creating an account with your chosen provider:
            </p>
            <ol>
              <li>Navigate to the API or developer section</li>
              <li>Create a new API key</li>
              <li>Store it securely (never in your source code!)</li>
              <li>Set up environment variables to use it in your application</li>
            </ol>
            <div className="warning-box">
              <strong>Security Warning:</strong> API keys should be treated like passwords. Store them in environment variables 
              or a secure secrets manager, never in your source code or version control.
            </div>
          </div>
          
          <div className="setup-step">
            <h3>3. Install Required Libraries</h3>
            <div className="code-tabs">
              <div className="code-tab-headers">
                <div className="code-tab-header active">JavaScript/TypeScript</div>
                <div className="code-tab-header">Python</div>
                <div className="code-tab-header">Other Languages</div>
              </div>
              <div className="code-tab-content active">
                <div className="code-block">
                  <pre>
                    {`// Install OpenAI SDK
npm install openai

// OR with yarn
yarn add openai`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="first-api-call">
        <h2>Your First API Call</h2>
        <p>
          Let's make a simple API call to generate a response from an LLM:
        </p>
        
        <div className="code-tabs">
          <div className="code-tab-headers">
            <div className="code-tab-header active">JavaScript/TypeScript</div>
            <div className="code-tab-header">Python</div>
            <div className="code-tab-header">curl</div>
          </div>
          <div className="code-tab-content active">
            <div className="code-block">
              <pre>
                {`// Complete working example with OpenAI API
import { OpenAI } from 'openai';

// Load API key from environment variable
const apiKey = process.env.OPENAI_API_KEY;

// Create an OpenAI client
const openai = new OpenAI({ apiKey });

// Define an async function to call the API
async function generateResponse() {
  try {
    // Make the API call
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // More affordable model
      messages: [
        { 
          role: "system", 
          content: "You are a helpful assistant that provides concise responses."
        },
        { 
          role: "user", 
          content: "Explain what an API is in one sentence."
        }
      ],
      temperature: 0.3, // Lower temperature for more consistent outputs
    });
    
    // Extract the response text
    const generatedText = response.choices[0].message.content;
    console.log("Generated response:", generatedText);
    
    // Log token usage (important for billing)
    console.log("Token usage:", response.usage);
    
    return generatedText;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw error;
  }
}

// Call the function
generateResponse();`}
              </pre>
            </div>
            <div className="code-note">
              <p>
                <strong>Note:</strong> This is a complete, working example. Copy, install the dependency, add your API key as an environment variable, and run it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="common-errors">
        <h2>Troubleshooting Common Errors</h2>
        
        <div className="error-grid">
          <div className="error-card">
            <h3>Authentication Error</h3>
            <div className="error-message">
              <pre>
                {`Error: 401 Unauthorized`}
              </pre>
            </div>
            <div className="error-solution">
              <p><strong>Solution:</strong> Check that your API key is correct and properly set in your environment variables.</p>
            </div>
          </div>
          
          <div className="error-card">
            <h3>Rate Limit Exceeded</h3>
            <div className="error-message">
              <pre>
                {`Error: 429 Too Many Requests`}
              </pre>
            </div>
            <div className="error-solution">
              <p><strong>Solution:</strong> Implement rate limiting in your code, or wait and try again. For production apps, add exponential backoff.</p>
            </div>
          </div>
          
          <div className="error-card">
            <h3>Context Length Exceeded</h3>
            <div className="error-message">
              <pre>
                {`Error: This model's maximum context length is XXXX tokens.`}
              </pre>
            </div>
            <div className="error-solution">
              <p><strong>Solution:</strong> Reduce your prompt size, or use a model with a larger context window.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="next-steps">
        <h2>Next Steps in Your LLM Journey</h2>
        
        <div className="next-steps-grid">
          <div className="next-step-card">
            <h3>Learn Prompt Engineering</h3>
            <p>
              Master the art of crafting effective prompts to get better results from LLMs.
            </p>
            <Link to="/prompt-engineering" className="next-step-link">
              Prompt Engineering Basics →
            </Link>
          </div>
          
          <div className="next-step-card">
            <h3>Build Your First LLM App</h3>
            <p>
              Create a simple application that leverages LLM capabilities.
            </p>
            <Link to="/BuildingLLMAgent" className="next-step-link">
              LLM App Tutorial →
            </Link>
          </div>
          
          <div className="next-step-card">
            <h3>OpenAI API Deep Dive</h3>
            <p>
              Get a comprehensive understanding of the OpenAI API and its features.
            </p>
            <Link to="/blogs/openai-api-guide" className="next-step-link">
              OpenAI API Guide →
            </Link>
          </div>
        </div>
      </section>
      
      <div className="page-cta">
        <h2>Ready to Build with LLMs?</h2>
        <p>Start with the resources below to continue your learning journey.</p>
        <div className="cta-buttons">
          <Link to="/prompt-engineering" className="cta-button primary">
            Learn Prompt Engineering
          </Link>
          <Link to="/blogs/openai-api-guide" className="cta-button secondary">
            OpenAI API Integration Guide
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeveloperQuickStart;