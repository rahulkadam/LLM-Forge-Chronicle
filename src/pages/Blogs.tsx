import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/blogs/blog-list-style.css';

const Blogs: React.FC = () => {
  return (
    <div className="blogs-page">
      <div className="blogs-header">
        <h1>LLM Blog & Tutorials</h1>
        <p className="blogs-subtitle">
          Practical guides, tutorials, and insights about Large Language Models and AI development
        </p>
      </div>

      <div className="blog-categories">
        <button className="category-button active">All</button>
        <button className="category-button">Getting Started</button>
        <button className="category-button">Tutorials</button>
        <button className="category-button">Tools & Integrations</button>
        <button className="category-button">Advanced Topics</button>
      </div>

      <div className="blogs-grid">
        {/* LLM Terminology Blog */}
        <div className="blog-card">
          <div className="blog-card-image llm-terminology-image"></div>
          <div className="blog-card-content">
            <div className="blog-tag">Technical</div>
            <h2 className="blog-title-page">Understanding LLM Terminology: A Comprehensive Guide</h2>
            <p className="blog-excerpt">
              A detailed guide to essential terms and concepts in Large Language Models, 
              from tokens to fine-tuning, helping you navigate the world of AI language processing.
            </p>
            <div className="blog-footer-page">
              <div className="blog-meta">
                <span className="reading-time">8 min read</span>
                <span className="publish-date">March 21, 2024</span>
              </div>
              <Link to="/blogs/llm-technology-guide" className="read-more-link">
                Read Article →
              </Link>
            </div>
          </div>
        </div>

        {/* LLM Agent Blog */}
        <div className="blog-card">
          <div className="blog-card-image llm-agent-image"></div>
          <div className="blog-card-content">
            <div className="blog-tag">Technical</div>
            <h2 className="blog-title-page">LLM Agents: Just Functions with a Fancy Name</h2>
            <p className="blog-excerpt">
              Demystifying LLM Agents - they're just functions that use language models to do specific tasks.
            </p>
            <div className="blog-footer-page">
              <div className="blog-meta">
                <span className="reading-time">5 min read</span>
                <span className="publish-date">March 22, 2024</span>
              </div>
              <Link to="/blogs/llm-agent-guide" className="read-more-link">
                Read Article →
              </Link>
            </div>
          </div>
        </div>

        {/* OpenRouter Blog */}
        <div className="blog-card">
          <div className="blog-card-image openrouter-image"></div>
          <div className="blog-card-content">
            <div className="blog-tag">Platform</div>
            <h2 className="blog-title-page">What is OpenRouter and Why Use It?</h2>
            <p className="blog-excerpt">
              Explore how OpenRouter can give you access to multiple LLMs through a unified API, 
              simplifying your multi-model workflow and reducing integration complexity.
            </p>
            <div className="blog-footer-page">
              <div className="blog-meta">
                <span className="reading-time">6 min read</span>
                <span className="publish-date">July 3, 2023</span>
              </div>
              <Link to="/blogs/openrouter-platform-guide" className="read-more-link">
                Read Article →
              </Link>
            </div>
          </div>
        </div>

        {/* OpenAI Connection Blog */}
        <div className="blog-card">
          <div className="blog-card-image openai-image"></div>
          <div className="blog-card-content">
            <div className="blog-tag">Tutorial</div>
            <h2 className="blog-title-page">Connecting to OpenAI API: A Complete Guide</h2>
            <p className="blog-excerpt">
              A step-by-step tutorial to set up and use OpenAI's API for your applications, 
              including authentication, handling requests, and managing API limits.
            </p>
            <div className="blog-footer-page">
              <div className="blog-meta">
                <span className="reading-time">8 min read</span>
                <span className="publish-date">June 15, 2023</span>
              </div>
              <Link to="/blogs/openai-api-guide" className="read-more-link">
                Read Article →
              </Link>
            </div>
          </div>
        </div>

        {/* RAG Tutorial Blog */}
        <div className="blog-card">
          <div className="blog-card-image rag-image"></div>
          <div className="blog-card-content">
            <div className="blog-tag">Advanced</div>
            <h2 className="blog-title-page">Building Your First RAG System</h2>
            <p className="blog-excerpt">
              A comprehensive tutorial on implementing Retrieval Augmented Generation (RAG) to enhance 
              your LLMs with external data sources and improve response accuracy.
            </p>
            <div className="blog-footer-page">
              <div className="blog-meta">
                <span className="reading-time">12 min read</span>
                <span className="publish-date">July 18, 2023</span>
              </div>
              <Link to="/blogs/rag-tutorial" className="read-more-link">
                Read Article →
              </Link>
            </div>
          </div>
        </div>

        {/* Prompt Engineering Blog */}
        <div className="blog-card">
          <div className="blog-card-image prompt-image"></div>
          <div className="blog-card-content">
            <div className="blog-tag">Technique</div>
            <h2 className="blog-title-page">Advanced Prompt Engineering Patterns</h2>
            <p className="blog-excerpt">
              Learn advanced prompting strategies like chain-of-thought, few-shot learning, and 
              structured outputs to maximize the capabilities of LLMs.
            </p>
            <div className="blog-footer-page">
              <div className="blog-meta">
                <span className="reading-time">10 min read</span>
                <span className="publish-date">August 5, 2023</span>
              </div>
              <Link to="/blogs/advanced-prompt-engineering" className="read-more-link">
                Read Article →
              </Link>
            </div>
          </div>
        </div>

        {/* Function Calling Blog */}
        <div className="blog-card">
          <div className="blog-card-image functions-image"></div>
          <div className="blog-card-content">
            <div className="blog-tag">Development</div>
            <h2 className="blog-title-page">Mastering Function Calling with LLMs</h2>
            <p className="blog-excerpt">
              How to use function calling capabilities in modern LLMs to create powerful 
              applications that can interact with external tools and APIs.
            </p>
            <div className="blog-footer-page">
              <div className="blog-meta">
                <span className="reading-time">9 min read</span>
                <span className="publish-date">August 22, 2023</span>
              </div>
              <Link to="/blogs/function-calling-guide" className="read-more-link">
                Read Article →
              </Link>
            </div>
          </div>
        </div>

        {/* LangChain Blog */}
        <div className="blog-card">
          <div className="blog-card-image langchain-image"></div>
          <div className="blog-card-content">
            <div className="blog-tag">Framework</div>
            <h2 className="blog-title-page">Getting Started with LangChain</h2>
            <p className="blog-excerpt">
              An introduction to LangChain, a popular framework for developing applications 
              powered by language models, with practical examples.
            </p>
            <div className="blog-footer-page">
              <div className="blog-meta">
                <span className="reading-time">11 min read</span>
                <span className="publish-date">September 10, 2023</span>
              </div>
              <Link to="/blogs/langchain-introduction" className="read-more-link">
                Read Article →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="blogs-newsletter">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>
            Subscribe to our newsletter to receive notifications about new articles, 
            tutorials, and resources about LLMs and AI development.
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="blogs-pagination">
        <button className="pagination-button active">1</button>
        <button className="pagination-button">2</button>
        <button className="pagination-button">3</button>
        <button className="pagination-button next">Next →</button>
      </div>
    </div>
  );
};

export default Blogs;