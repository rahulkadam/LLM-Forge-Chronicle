import React from 'react';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection } from '../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../data/blogData';
import '../../../styles/blogs/blog-base-style.css';
import '../../../styles/blogs/blog-content.css';
import '../../../styles/blogs/blog-layout-update.css';

const BuildingLLMAgent: React.FC = () => {
  const category: BlogCategory = 'Technical';
  
  const tableOfContents = [
    { id: 'overview', title: 'Project Overview' },
    { id: 'architecture', title: 'Agent Architecture' },
    { id: 'implementation', title: 'Implementation' },
    { id: 'examples', title: 'Example Interactions' },
    { id: 'workflow', title: 'Practical Workflow' },
    { id: 'pitfalls', title: 'Common Pitfalls' },
    { id: 'practices', title: 'Best Practices' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  return (
    <BlogTemplate
      title="Building a File System LLM Agent"
      date="April 12, 2025"
      readTime="25 min"
      category={category}
      tableOfContents={tableOfContents}
      bannerClassName={'blog-banner'}>
      <BlogSection id="overview" title="Project Overview">
        <p className="tutorial-description">
          In this tutorial, we'll build a practical LLM agent that can help users manage their file system
          through natural language commands. This agent will be able to create, read, update, and delete files,
          search through directories, and provide summaries of file contents.
        </p>

        <div className="info-box">
          <h3>What We'll Build</h3>
          <ul>
            <li>A file system agent that understands natural language commands</li>
            <li>Integration with OpenAI's GPT models for understanding and generation</li>
            <li>Custom tools for file operations</li>
            <li>Memory system to maintain context</li>
          </ul>
        </div>

        <div className="content-grid">
          <div className="content-card">
            <h3>Developer Productivity</h3>
            <p>Software developers can use natural language to organize project files and find specific code patterns</p>
          </div>
          <div className="content-card">
            <h3>Content Management</h3>
            <p>Writers and content creators can manage drafts and organize media assets using intuitive commands</p>
          </div>
          <div className="content-card">
            <h3>System Administration</h3>
            <p>IT professionals can automate routine file system maintenance and configuration management</p>
          </div>
        </div>

        <div className="info-box">
          <h3>GitHub Example Repository</h3>
          <p>Find a complete implementation and more advanced examples here:</p>
          <a href="https://github.com/rahulkadam/llm-agents-examples" target="_blank" rel="noopener noreferrer">
            github.com/rahulkadam/llm-agents-examples
          </a>
        </div>
      </BlogSection>

      <BlogSection id="architecture" title="Agent Architecture">
        <div className="code-block">
          <pre>{`+-------------------+    +-----------------+    +-------------------+
|                   |    |                 |    |                   |
|   User Interface  |<-->|  LLM Processing |<-->|   Tool Execution  |
|                   |    |                 |    |                   |
+-------------------+    +-----------------+    +-------------------+
        ^                        ^                       ^
        |                        |                       |
        v                        v                       v
+-------------------+    +-----------------+    +-------------------+
|                   |    |                 |    |                   |
|    Input Parser   |    | Memory & Context|    |   File System     |
|                   |    |                 |    |     Operations    |
+-------------------+    +-----------------+    +-------------------+`}</pre>
        </div>

        <div className="content-grid">
          <div className="content-card">
            <h3>Key Components</h3>
            <ul>
              <li>User Interface: Command-line interface for natural language requests</li>
              <li>Input Parser: Processes and normalizes user input</li>
              <li>LLM Processing: Core AI model for understanding requests</li>
              <li>Memory & Context: Stores conversation history</li>
              <li>Tool Execution: Selects and calls appropriate tools</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="implementation" title="Implementation">
        <div className="steps-container">
          <div className="step-item">
            <h3>1. Project Setup</h3>
            <div className="code-block">
              <pre>{`# Create a new directory and set up the project
mkdir file_system_agent
cd file_system_agent

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# Install required packages
pip install langchain openai python-dotenv pathlib typing colorama`}</pre>
            </div>
          </div>

          <div className="step-item">
            <h3>2. Creating Custom Tools</h3>
            <div className="code-block">
              <pre>{`# tools.py
from langchain.tools import BaseTool
from pathlib import Path
import os

class FileSystemTool(BaseTool):
    name = "file_system_tool"
    description = "Tool for file system operations"

    def list_directory(self, path: str = ".") -> str:
        try:
            items = os.listdir(path)
            return "\\n".join([
                f"{'[DIR]' if os.path.isdir(os.path.join(path, item)) else '[FILE]'} {item}"
                for item in items
            ])
        except Exception as e:
            return f"Error: {str(e)}"`}</pre>
            </div>
          </div>
        </div>
      </BlogSection>

      {/* Continue with other sections using blog styling */}
      {/* Example Interactions, Workflow, Pitfalls, etc. */}

    </BlogTemplate>
  );
};

export default BuildingLLMAgent;