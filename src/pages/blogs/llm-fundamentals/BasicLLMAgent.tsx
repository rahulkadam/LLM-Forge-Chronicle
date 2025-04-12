import React from 'react';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection } from '../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../data/blogData';
import '../../../styles/blogs/blog-base-style.css';
import '../../../styles/blogs/blog-content.css';
import '../../../styles/blogs/blog-layout-update.css';

const BasicLLMAgent: React.FC = () => {
  const category: BlogCategory = 'Technical';
  
  const tableOfContents = [
    { id: 'intro', title: 'Introduction' },
    { id: 'prerequisites', title: 'Prerequisites' },
    { id: 'implementation', title: 'Implementation' },
    { id: 'examples', title: 'Example Interactions' },
    { id: 'customization', title: 'Customization' },
    { id: 'practices', title: 'Best Practices' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  return (
    <BlogTemplate
      title="Building Your First LLM Agent"
      date="April 12, 2025"
      readTime="20 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="intro" title="Introduction">
        <p className="tutorial-description">
          In this tutorial, we'll create a basic LLM agent that can help with text analysis
          and writing tasks. This practical guide will walk you through building an AI assistant
          with real-world applications.
        </p>

        <div className="content-grid">
          <div className="content-card">
            <h3>📝 Text Analysis</h3>
            <p>Analyze text for tone, style, and readability</p>
          </div>
          <div className="content-card">
            <h3>✍️ Writing Assistant</h3>
            <p>Help improve writing with suggestions and edits</p>
          </div>
          <div className="content-card">
            <h3>🔍 Content Research</h3>
            <p>Find relevant information for writing tasks</p>
          </div>
        </div>

        <div className="info-box">
          <h3>GitHub Repository</h3>
          <p>Find complete implementation and examples:</p>
          <a href="https://github.com/rahulkadam/llm-agents-examples" target="_blank" rel="noopener noreferrer">
            github.com/rahulkadam/llm-agents-examples
          </a>
        </div>
      </BlogSection>

      <BlogSection id="prerequisites" title="Prerequisites">
        <div className="content-grid">
          <div className="content-card">
            <h3>🐍 Python Basics</h3>
            <p>Basic understanding of Python programming</p>
          </div>
          <div className="content-card">
            <h3>🔑 OpenAI API Key</h3>
            <p>Access to OpenAI's API (GPT-3.5 or GPT-4)</p>
          </div>
          <div className="content-card">
            <h3>📚 Basic Libraries</h3>
            <p>Python environment with pip for installing packages</p>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="implementation" title="Step-by-Step Implementation">
        <div className="steps-container">
          <div className="step-item">
            <h3>1. Project Setup</h3>
            <div className="code-block">
              <pre>{`# Create project directory
mkdir writing_assistant_agent
cd writing_assistant_agent

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# Install required packages
pip install openai python-dotenv`}</pre>
            </div>
          </div>

          <div className="step-item">
            <h3>2. Environment Setup</h3>
            <div className="code-block">
              <pre>{`# .env
OPENAI_API_KEY=your_api_key_here`}</pre>
            </div>
          </div>

          <div className="step-item">
            <h3>3. Creating the Basic Agent</h3>
            <div className="code-block">
              <pre>{`# agent.py
import os
from dotenv import load_dotenv
import openai

class WritingAssistant:
    def __init__(self):
        load_dotenv()
        openai.api_key = os.getenv("OPENAI_API_KEY")
        
    def analyze_text(self, text: str) -> dict:
        prompt = f"""
        Please analyze the following text for:
        1. Tone (formal, informal, etc.)
        2. Style (descriptive, technical, etc.)
        3. Readability (easy, moderate, difficult)
        4. Suggestions for improvement

        Text: {text}
        """
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a writing analysis expert."},
                {"role": "user", "content": prompt}
            ]
        )
        
        return {
            "analysis": response.choices[0].message.content,
            "tokens_used": response.usage.total_tokens
        }`}</pre>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="examples" title="Example Interactions">
        <div className="content-grid">
          <div className="content-card">
            <h3>Text Analysis Example</h3>
            <div className="code-block">
              <pre>{`Input: 
The quick brown fox jumps over the lazy dog.

Output:
Analysis:
1. Tone: Neutral, straightforward
2. Style: Simple, descriptive
3. Readability: Easy
4. Suggestions:
   - Could add more descriptive adjectives
   - Consider varying sentence structure`}</pre>
            </div>
          </div>

          <div className="content-card">
            <h3>Writing Improvement Example</h3>
            <div className="code-block">
              <pre>{`Input:
The meeting was good and we talked about stuff.

Output:
Suggestions:
1. Be more specific about outcomes
2. Replace vague words
3. Improved version:
   "The team meeting was productive, covering 
    project timelines and resource allocation."`}</pre>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="customization" title="Customizing Your Agent">
        <div className="content-grid">
          <div className="content-card">
            <h3>Add New Capabilities</h3>
            <div className="code-block">
              <pre>{`def summarize_text(self, text: str) -> dict:
    """Generate a concise summary."""
    prompt = f"Please summarize:\\n{text}"
    # ... implementation ...`}</pre>
            </div>
          </div>

          <div className="content-card">
            <h3>Modify System Prompts</h3>
            <div className="code-block">
              <pre>{`# Customize personality
{"role": "system", "content": 
 "You are a technical writing expert."}`}</pre>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="practices" title="Best Practices">
        <div className="content-grid">
          <div className="content-card">
            <h3>🔐 API Key Security</h3>
            <ul>
              <li>Use environment variables</li>
              <li>Never commit API keys</li>
              <li>Rotate keys periodically</li>
            </ul>
          </div>
          <div className="content-card">
            <h3>💰 Cost Management</h3>
            <ul>
              <li>Monitor token usage</li>
              <li>Set usage limits</li>
              <li>Use appropriate models</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="next-steps" title="Next Steps">
        <div className="content-grid">
          <div className="content-card">
            <h3>Advanced Features</h3>
            <ul>
              <li>Add conversation memory</li>
              <li>Implement error handling</li>
              <li>Add more analysis tools</li>
              <li>Create a web interface</li>
            </ul>
          </div>
          <div className="content-card">
            <h3>Integration Ideas</h3>
            <ul>
              <li>Connect to document processors</li>
              <li>Add grammar checking APIs</li>
              <li>Integrate with writing tools</li>
              <li>Add collaboration features</li>
            </ul>
          </div>
        </div>
      </BlogSection>

    </BlogTemplate>
  );
};

export default BasicLLMAgent;