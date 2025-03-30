import React from 'react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../components/blogs/BlogComponents';
import '../mobile-viewport-fix.css';
import './openai-guide-style.css';

const OpenAIConnectionGuide: React.FC = () => {
  // Table of contents definition
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'prerequisites', title: 'Prerequisites' },
    { id: 'api-key', title: 'Getting Your API Key' },
    { id: 'basic-request', title: 'Making Your First API Request' },
    { id: 'handling-responses', title: 'Handling API Responses' },
    { id: 'error-handling', title: 'Error Handling' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  return (
    <BlogTemplate
      title="Connecting to OpenAI API: A Complete Guide"
      date="June 15, 2025"
      readTime="8 min"
      category="Tutorial"
      bannerClassName="openai-banner"
      tableOfContents={tableOfContents}
      className="openai-guide"
    >
      <BlogSection id="introduction" title="Introduction to the OpenAI API">
        <p>
          The OpenAI API provides access to powerful language models like GPT-4, GPT-3.5, and others that can be used 
          for a wide range of natural language processing tasks. With the API, you can build applications that generate 
          text, answer questions, summarize content, translate languages, write different kinds of creative content, and more.
        </p>
        <p>
          In this guide, we'll walk through the entire process of connecting to the OpenAI API, from setting up your account 
          to making API calls and handling responses. By the end, you'll have everything you need to start integrating 
          OpenAI's capabilities into your applications.
        </p>
      </BlogSection>

      <BlogSection id="prerequisites" title="Prerequisites">
        <p>Before getting started, make sure you have:</p>
        <ul>
          <li>An OpenAI account (we'll cover how to create one)</li>
          <li>Basic understanding of HTTP requests and JSON</li>
          <li>A development environment with your preferred programming language</li>
        </ul>
        <div className="code-box-label">Recommended libraries</div>
        <div className="code-box">
          <pre>
            <code>
              {`# Python
pip install openai

# Node.js
npm install openai

# .NET
dotnet add package Azure.AI.OpenAI`}
            </code>
          </pre>
        </div>
      </BlogSection>

      <BlogSection id="api-key" title="Getting Your API Key">
        <p>
          To use the OpenAI API, you'll need an API key, which is a unique identifier that authenticates your requests.
          Here's how to get one:
        </p>
        <ol>
          <li>Go to <a href="https://platform.openai.com/signup" target="_blank" rel="noreferrer">OpenAI's website</a> and sign up for an account if you don't already have one</li>
          <li>After logging in, navigate to the <a href="https://platform.openai.com/account/api-keys" target="_blank" rel="noreferrer">API Keys section</a></li>
          <li>Click "Create new secret key"</li>
          <li>Give your key a name that helps you remember its purpose (e.g., "Development-Test")</li>
          <li>Copy the key and store it securely - it will only be shown once!</li>
        </ol>
        <div className="warning-box">
          <strong>Important Security Note:</strong> Your API key is sensitive information. Never hardcode it directly in your application 
          or commit it to version control. Use environment variables or a secure configuration management system to store it.
        </div>
      </BlogSection>

      <BlogSection id="basic-request" title="Making Your First API Request">
        <p>
          Now that you have an API key, let's make a basic request to the API. We'll use the Chat Completions endpoint, which is one of 
          the most versatile APIs offered by OpenAI.
        </p>
        
        <div className="tabs">
          <button className="tab-button active">Python</button>
          <button className="tab-button">Node.js</button>
          <button className="tab-button">curl</button>
        </div>
        
        <div className="code-box-label">Making a simple chat completion request</div>
        <div className="code-box">
          <pre>
            <code>
{`# Python example
import openai

# Set your API key
openai.api_key = "your-api-key"  # Replace with your actual API key

# Make a request to the Chat Completions API
response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Tell me about the OpenAI API"}
    ]
)

# Print the response
print(response.choices[0].message.content)`}
            </code>
          </pre>
        </div>
        
        <p>
          This example creates a simple conversation with a system message setting the context and a user message asking for information.
          The API will return a response that includes the model's reply.
        </p>
        
        <div className="tip-box">
          <strong>Pro Tip:</strong> The system message helps set the behavior and context for the AI. Be specific about the assistant's 
          role and instructions to get better results.
        </div>
      </BlogSection>

      <BlogSection id="handling-responses" title="Handling API Responses">
        <p>
          When you make a request to the OpenAI API, it returns a response in JSON format. Here's what a typical response looks like and how to handle it:
        </p>
        
        <div className="code-box-label">Example response structure</div>
        <div className="code-box">
          <pre>
            <code>
{`{
  "id": "chatcmpl-123ABC...",
  "object": "chat.completion",
  "created": 1677858242,
  "model": "gpt-3.5-turbo-0301",
  "usage": {
    "prompt_tokens": 13,
    "completion_tokens": 46,
    "total_tokens": 59
  },
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "The OpenAI API provides access to powerful language models..."
      },
      "finish_reason": "stop",
      "index": 0
    }
  ]
}`}
            </code>
          </pre>
        </div>
        
        <p>Key elements of the response:</p>
        <ul>
          <li><strong>id</strong>: A unique identifier for the API call</li>
          <li><strong>choices</strong>: An array containing the generated completions</li>
          <li><strong>choices[0].message.content</strong>: The actual text response from the model</li>
          <li><strong>finish_reason</strong>: Why the API stopped generating (usually "stop" for a complete response)</li>
          <li><strong>usage</strong>: Token usage information (important for billing)</li>
        </ul>
        
        <div className="code-box-label">Processing the response in Python</div>
        <div className="code-box">
          <pre>
            <code>
{`# Get the main content of the response
response_text = response.choices[0].message.content

# Get token usage for billing purposes
prompt_tokens = response.usage.prompt_tokens
completion_tokens = response.usage.completion_tokens
total_tokens = response.usage.total_tokens

print(f"Response: {response_text}")
print(f"Used {total_tokens} tokens total ({prompt_tokens} prompt, {completion_tokens} completion)")`}
            </code>
          </pre>
        </div>
      </BlogSection>

      <BlogSection id="error-handling" title="Error Handling">
        <p>
          API calls can sometimes fail for various reasons, such as invalid parameters, rate limits, or server issues. Proper error 
          handling will make your application more robust.
        </p>
        
        <div className="code-box-label">Basic error handling</div>
        <div className="code-box">
          <pre>
            <code>
{`import openai

try:
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Tell me about the OpenAI API"}
        ]
    )
    print(response.choices[0].message.content)
    
except openai.error.RateLimitError:
    print("Rate limit exceeded. Please wait before making more requests.")
    
except openai.error.APIError as e:
    print(f"OpenAI API returned an API Error: {e}")
    
except openai.error.APIConnectionError as e:
    print(f"Failed to connect to OpenAI API: {e}")
    
except openai.error.InvalidRequestError as e:
    print(f"Invalid request to OpenAI API: {e}")
    
except Exception as e:
    print(f"An unexpected error occurred: {e}")`}
            </code>
          </pre>
        </div>
        
        <p>
          Common errors you might encounter include:
        </p>
        <ul>
          <li><strong>Rate limit errors</strong>: You've exceeded your API quota or rate limit</li>
          <li><strong>Authentication errors</strong>: Invalid API key or insufficient permissions</li>
          <li><strong>Validation errors</strong>: Problems with your request parameters</li>
          <li><strong>Server errors</strong>: Issues on OpenAI's side</li>
        </ul>
      </BlogSection>

      <BlogSection id="best-practices" title="Best Practices">
        <p>
          To make the most of the OpenAI API and keep your costs reasonable, follow these best practices:
        </p>
        
        <div className="info-grid">
          <div className="info-card">
            <h3>Use Token Efficiently</h3>
            <p>
              APIs are billed by token usage. Be concise in your prompts and consider using the right model for your needs.
              GPT-3.5-Turbo is more cost-effective than GPT-4 for many applications.
            </p>
          </div>
          
          <div className="info-card">
            <h3>Implement Caching</h3>
            <p>
              Store results for common queries to reduce API calls. For deterministic inputs, you can often reuse previous responses.
            </p>
          </div>
          
          <div className="info-card">
            <h3>Rate Limiting</h3>
            <p>
              Implement your own rate limiting to prevent exceeding OpenAI limits. Use techniques like exponential backoff for retries.
            </p>
          </div>
          
          <div className="info-card">
            <h3>Monitor Usage</h3>
            <p>
              Regularly check your usage on the OpenAI dashboard. Set up alerts or caps to avoid unexpected bills.
            </p>
          </div>
        </div>
        
        <div className="tip-box">
          <strong>Pro Tip:</strong> For production applications, consider implementing a message queue system to manage API requests, especially during high traffic periods.
        </div>
      </BlogSection>

      <BlogSection id="conclusion" title="Conclusion">
        <p>
          In this guide, we've covered the essentials of connecting to and using the OpenAI API. We started with account setup and API key management, 
          then moved on to making requests, handling responses, and implementing error handling.
        </p>
        <p>
          The OpenAI API is incredibly versatile, powering everything from chatbots and content generation to code assistance and data analysis. 
          As you continue to explore its capabilities, remember to:
        </p>
        <ul>
          <li>Keep your API keys secure</li>
          <li>Monitor your token usage to manage costs</li>
          <li>Implement robust error handling</li>
          <li>Consider user experience, especially response speed</li>
        </ul>
        <p>
          Ready to take your implementation to the next level? Check out our other tutorials on advanced prompting, function calling, and building 
          complete applications with OpenAI.
        </p>
        
        <div className="next-steps">
          <h3>Next Steps</h3>
          <div className="next-steps-links">
            <Link to="/blogs/advanced-prompt-engineering" className="next-link">
              Advanced Prompt Engineering Techniques →
            </Link>
            <Link to="/blogs/function-calling-guide" className="next-link">
              Mastering Function Calling with LLMs →
            </Link>
            <Link to="/blogs/rag-tutorial" className="next-link">
              Building Your First RAG System →
            </Link>
          </div>
        </div>
      </BlogSection>

      <div className="related-content">
        <h2>Related Articles</h2>
        <div className="related-articles-grid">
          <div className="related-article-card">
            <h4>What is OpenRouter and Why Use It?</h4>
            <Link to="/blogs/openrouter-platform-guide" className="related-link">Read Article →</Link>
          </div>
          <div className="related-article-card">
            <h4>Advanced Prompt Engineering Patterns</h4>
            <Link to="/blogs/advanced-prompt-engineering" className="related-link">Read Article →</Link>
          </div>
          <div className="related-article-card">
            <h4>Mastering Function Calling with LLMs</h4>
            <Link to="/blogs/function-calling-guide" className="related-link">Read Article →</Link>
          </div>
        </div>
      </div>
    </BlogTemplate>
  );
};

export default OpenAIConnectionGuide;