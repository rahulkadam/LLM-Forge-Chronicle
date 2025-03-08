import React from 'react';
import '../styles/BuildingLLMAgent.css';

const BuildingLLMAgent: React.FC = () => {
  return (
    <div className="building-agent">
      <header className="page-header">
        <h1>Building a File System LLM Agent</h1>
        <p className="subtitle">A practical guide to creating an AI assistant for file operations</p>
      </header>

      <section className="introduction">
        <h2>Project Overview</h2>
        <p>
          In this tutorial, we'll build a practical LLM agent that can help users manage their file system
          through natural language commands. This agent will be able to create, read, update, and delete files,
          search through directories, and provide summaries of file contents.
        </p>
        <div className="project-goals">
          <h3>What We'll Build</h3>
          <ul>
            <li>A file system agent that understands natural language commands</li>
            <li>Integration with OpenAI's GPT models for understanding and generation</li>
            <li>Custom tools for file operations</li>
            <li>Memory system to maintain context</li>
          </ul>
        </div>
        
        <div className="real-world-applications">
          <h3>Real-World Applications</h3>
          <p>
            File system agents can be incredibly useful in multiple scenarios, such as:
          </p>
          <div className="applications-grid">
            <div className="application-card">
              <h4>Developer Productivity</h4>
              <p>
                Software developers can use natural language to organize project files,
                find specific code patterns, or generate boilerplate files without
                switching contexts from their main tasks.
              </p>
            </div>
            <div className="application-card">
              <h4>Content Management</h4>
              <p>
                Writers and content creators can manage drafts, organize media assets,
                and perform bulk operations on content files using intuitive language commands.
              </p>
            </div>
            <div className="application-card">
              <h4>System Administration</h4>
              <p>
                IT professionals can build agents that help automate routine file system
                maintenance, log analysis, and configuration file management through
                simple conversational interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="architecture-overview">
        <h2>Agent Architecture</h2>
        <div className="architecture-diagram">
          <div className="diagram-container">
            <pre className="ascii-diagram">
{`+-------------------+    +-----------------+    +-------------------+
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
+-------------------+    +-----------------+    +-------------------+`}
            </pre>
          </div>
          <div className="architecture-explanation">
            <h3>Key Components</h3>
            <ul>
              <li><strong>User Interface:</strong> The command-line interface that accepts natural language requests</li>
              <li><strong>Input Parser:</strong> Processes and normalizes user input for the LLM</li>
              <li><strong>LLM Processing:</strong> The core AI model that understands requests and determines actions</li>
              <li><strong>Memory & Context:</strong> Stores conversation history and maintains context</li>
              <li><strong>Tool Execution:</strong> The component that selects and calls appropriate tools</li>
              <li><strong>File System Operations:</strong> The actual implementation of file system commands</li>
            </ul>
          </div>
        </div>
        
        <div className="data-flow">
          <h3>Data Flow Process</h3>
          <ol>
            <li>User inputs a natural language request</li>
            <li>Request is parsed and formatted for the LLM</li>
            <li>LLM processes the request within the current conversation context</li>
            <li>LLM generates a plan of action using available tools</li>
            <li>System executes the appropriate file system operations</li>
            <li>Results are returned to the user in a readable format</li>
            <li>Conversation context is updated for future interactions</li>
          </ol>
        </div>
      </section>

      <section className="when-to-use">
        <h2>When to Use LLM Agents for File Operations</h2>
        <div className="use-scenarios-grid">
          <div className="scenario-card ideal">
            <h3>Ideal Use Cases</h3>
            <ul>
              <li>Complex file organization tasks requiring context</li>
              <li>Natural language search through file contents</li>
              <li>Multi-step file operations requiring planning</li>
              <li>File operations that benefit from remembering previous actions</li>
              <li>Content summarization and extraction from multiple files</li>
            </ul>
          </div>
          
          <div className="scenario-card avoid">
            <h3>When to Use Alternatives</h3>
            <ul>
              <li>Simple, repetitive file tasks better handled by scripts</li>
              <li>Performance-critical file operations with large volumes</li>
              <li>Operations requiring complex permissions management</li>
              <li>When deterministic behavior is required without variation</li>
              <li>When working with extremely sensitive data requiring tight controls</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="implementation-guide">
        <h2>Step-by-Step Implementation</h2>
        
        <div className="step">
          <h3>1. Project Setup</h3>
          <div className="code-block">
            <pre>
{`# Create a new directory and set up the project
mkdir file_system_agent
cd file_system_agent

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# Install required packages
pip install langchain openai python-dotenv pathlib typing colorama`}
            </pre>
          </div>
          <p>Create a .env file in your project root:</p>
          <div className="code-block">
            <pre>
{`# .env
OPENAI_API_KEY=your_api_key_here`}
            </pre>
          </div>
        </div>

        <div className="step">
          <h3>2. Creating Custom Tools</h3>
          <div className="code-block">
            <pre>
{`# tools.py
from langchain.tools import BaseTool
from pathlib import Path
from typing import Optional
import os

class FileSystemTool(BaseTool):
    name = "file_system_tool"
    description = "Tool for file system operations"

    def _handle_error(self, error: Exception) -> str:
        return f"Error: {str(error)}"

    def list_directory(self, path: str = ".") -> str:
        """List contents of a directory"""
        try:
            items = os.listdir(path)
            return "\\n".join([
                f"{'[DIR]' if os.path.isdir(os.path.join(path, item)) else '[FILE]'} {item}"
                for item in items
            ])
        except Exception as e:
            return self._handle_error(e)

    def read_file(self, path: str) -> str:
        """Read contents of a file"""
        try:
            with open(path, 'r') as file:
                return file.read()
        except Exception as e:
            return self._handle_error(e)

    def write_file(self, path: str, content: str) -> str:
        """Write content to a file"""
        try:
            with open(path, 'w') as file:
                file.write(content)
            return f"Successfully wrote to {path}"
        except Exception as e:
            return self._handle_error(e)

    def search_files(self, pattern: str) -> str:
        """Search for files matching a pattern"""
        try:
            matches = []
            for root, _, files in os.walk("."):
                for file in files:
                    if pattern.lower() in file.lower():
                        matches.append(os.path.join(root, file))
            return "\\n".join(matches) if matches else "No matches found"
        except Exception as e:
            return self._handle_error(e)`}
            </pre>
          </div>
          <div className="implementation-notes">
            <h4>Key Design Patterns</h4>
            <ul>
              <li><strong>Error Handling:</strong> Consistent error handling through the _handle_error method</li>
              <li><strong>Method Documentation:</strong> Clear docstrings explaining each method's purpose</li>
              <li><strong>Interface Consistency:</strong> All methods follow a consistent pattern of inputs and outputs</li>
              <li><strong>Path Handling:</strong> Relative and absolute paths are managed appropriately</li>
            </ul>
          </div>
        </div>

        <div className="step">
          <h3>3. Implementing the Agent</h3>
          <div className="code-block">
            <pre>
{`# agent.py
from langchain.agents import Tool, AgentExecutor, LLMSingleActionAgent
from langchain.prompts import StringPromptTemplate
from langchain import OpenAI, LLMChain
from langchain.memory import ConversationBufferMemory
from tools import FileSystemTool
import os
from dotenv import load_dotenv

load_dotenv()

class FileSystemAgent:
    def __init__(self):
        self.llm = OpenAI(temperature=0)
        self.tools = self._setup_tools()
        self.memory = ConversationBufferMemory(memory_key="chat_history")
        self.agent_chain = self._create_agent_chain()

    def _setup_tools(self):
        fs_tool = FileSystemTool()
        return [
            Tool(
                name="list_directory",
                func=fs_tool.list_directory,
                description="Lists contents of a directory"
            ),
            Tool(
                name="read_file",
                func=fs_tool.read_file,
                description="Reads content of a file"
            ),
            Tool(
                name="write_file",
                func=fs_tool.write_file,
                description="Writes content to a file"
            ),
            Tool(
                name="search_files",
                func=fs_tool.search_files,
                description="Searches for files matching a pattern"
            )
        ]

    def _create_agent_chain(self):
        prompt_template = """
        You are a helpful file system assistant. You have access to the following tools:
        {tools}

        Use these tools to help users manage their files and directories.
        Always think about the steps needed before executing any file operation.
        If a file operation might be destructive, ask for confirmation first.

        Previous conversation:
        {chat_history}

        User request: {input}
        Let's approach this step by step:
        1) First, analyze the request
        2) Then, plan the necessary actions
        3) Finally, execute the actions carefully

        Response:"""

        prompt = StringPromptTemplate(
            template=prompt_template,
            input_variables=["tools", "chat_history", "input"]
        )

        return LLMChain(
            llm=self.llm,
            prompt=prompt,
            memory=self.memory
        )

    def run(self, query: str) -> str:
        """Execute the agent with the given query"""
        try:
            response = self.agent_chain.run(
                input=query,
                tools=self.tools
            )
            return response
        except Exception as e:
            return f"Error: {str(e)}"`}
            </pre>
          </div>
        </div>

        <div className="step">
          <h3>4. Creating the Main Interface</h3>
          <div className="code-block">
            <pre>
{`# main.py
from agent import FileSystemAgent
from colorama import init, Fore
import sys

def main():
    init()  # Initialize colorama
    agent = FileSystemAgent()
    
    print(Fore.GREEN + "File System Agent initialized. Type 'exit' to quit." + Fore.RESET)
    print(Fore.CYAN + "Example commands:" + Fore.RESET)
    print("- List files in current directory")
    print("- Search for Python files")
    print("- Read contents of config.json")
    print("- Create a new file named notes.txt with some content")
    
    while True:
        try:
            query = input(Fore.YELLOW + "\\nEnter your request: " + Fore.RESET)
            if query.lower() == 'exit':
                break
                
            response = agent.run(query)
            print(Fore.GREEN + "\\nAgent response:" + Fore.RESET)
            print(response)
            
        except KeyboardInterrupt:
            break
        except Exception as e:
            print(Fore.RED + f"Error: {str(e)}" + Fore.RESET)
    
    print(Fore.GREEN + "\\nGoodbye!" + Fore.RESET)

if __name__ == "__main__":
    main()`}
            </pre>
          </div>
        </div>

        <div className="step">
          <h3>5. Using the Agent</h3>
          <div className="usage-example">
            <h4>Running the Agent</h4>
            <div className="code-block">
              <pre>
{`python main.py

# Example interactions:
> Enter your request: List all Python files in the current directory
> Enter your request: Create a new file called todo.txt with a shopping list
> Enter your request: Read the contents of todo.txt
> Enter your request: Search for files containing the word "test"`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="example-interactions">
        <h2>Example Interactions</h2>
        <div className="interaction-examples">
          <div className="example-card">
            <h3>File Management</h3>
            <div className="code-block">
              <pre>
{`> List all files in the current directory
[DIR] src
[DIR] tests
[FILE] README.md
[FILE] requirements.txt

> Create a new file called notes.txt with "Meeting agenda for tomorrow"
Successfully wrote to notes.txt

> Search for txt files
./notes.txt
./requirements.txt

> Read the contents of notes.txt
Meeting agenda for tomorrow`}
              </pre>
            </div>
          </div>
          
          <div className="example-card">
            <h3>Complex Operations</h3>
            <div className="code-block">
              <pre>
{`> Find all Python files with "test" in the name and show their content
Searching for Python files with "test" in the name...
Found 2 files:
./tests/test_utils.py
./tests/test_file_operations.py

Contents of ./tests/test_utils.py:
import unittest
from utils import format_path, validate_path

class TestUtils(unittest.TestCase):
    def test_format_path(self):
        # Test cases here...

Contents of ./tests/test_file_operations.py:
import unittest
from file_operations import read_file, write_file

class TestFileOperations(unittest.TestCase):
    # Test cases here...`}
              </pre>
            </div>
          </div>
          
          <div className="example-card">
            <h3>Natural Language Understanding</h3>
            <div className="code-block">
              <pre>
{`> I need to organize my project by creating a src folder with config and utils subfolders
I'll help you organize your project structure. Let me break this down:

1. First, I'll check if these folders already exist
2. Then I'll create the necessary folders

Checking current directory structure...
[DIR] tests
[FILE] README.md
[FILE] requirements.txt

Creating folders:
- Created directory: src
- Created directory: src/config
- Created directory: src/utils

Your project structure has been organized with the following new directories:
src/
├── config/
└── utils/`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="common-pitfalls">
        <h2>Common Pitfalls and How to Avoid Them</h2>
        <div className="pitfalls-grid">
          <div className="pitfall-card">
            <h3>🚨 Security Vulnerabilities</h3>
            <p>Without proper validation, file system operations can be exploited for unauthorized access.</p>
            <h4>Solution:</h4>
            <ul>
              <li>Always validate and sanitize file paths</li>
              <li>Restrict operations to specific directories</li>
              <li>Implement permission checks before operations</li>
              <li>Use Path objects instead of string concatenation</li>
            </ul>
            <div className="code-block">
              <pre>
{`# Bad practice
def read_file(path_str):
    with open(path_str, 'r') as f:  # No validation!
        return f.read()

# Good practice
from pathlib import Path

def read_file(path_str, base_dir="."):
    # Convert to Path object
    base = Path(base_dir).resolve()
    requested_path = Path(path_str).resolve()
    
    # Ensure path doesn't escape base directory
    if base in requested_path.parents or base == requested_path:
        try:
            with open(requested_path, 'r') as f:
                return f.read()
        except Exception as e:
            return f"Error: {str(e)}"
    else:
        return "Error: Access denied - path outside allowed directory"`}
              </pre>
            </div>
          </div>

          <div className="pitfall-card">
            <h3>⚠️ Error Handling Gaps</h3>
            <p>Inconsistent error handling can lead to cryptic failures and security issues.</p>
            <h4>Solution:</h4>
            <ul>
              <li>Implement consistent error handling patterns</li>
              <li>Provide informative but safe error messages</li>
              <li>Log detailed errors for debugging while returning sanitized messages to users</li>
              <li>Handle specific exceptions with targeted responses</li>
            </ul>
          </div>

          <div className="pitfall-card">
            <h3>🔄 Context Management</h3>
            <p>LLM agents can forget previous operations or context, leading to inconsistent behavior.</p>
            <h4>Solution:</h4>
            <ul>
              <li>Implement proper memory systems (as shown in our agent.py)</li>
              <li>Provide context in prompt templates</li>
              <li>Consider different memory types for different scenarios (buffer, summary, etc.)</li>
              <li>Periodically remind the agent of important contextual information</li>
            </ul>
          </div>
          
          <div className="pitfall-card">
            <h3>🌐 Cross-Platform Compatibility</h3>
            <p>File system operations often behave differently across operating systems.</p>
            <h4>Solution:</h4>
            <ul>
              <li>Use pathlib for platform-agnostic path handling</li>
              <li>Test on multiple platforms</li>
              <li>Use os-specific code branches when necessary</li>
              <li>Consider containerization for consistent environments</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="best-practices">
        <h2>Best Practices and Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h3>🔒 Security</h3>
            <ul>
              <li>Always validate file paths</li>
              <li>Implement proper error handling</li>
              <li>Restrict access to sensitive directories</li>
              <li>Never blindly execute user-provided commands</li>
              <li>Implement rate limiting for file operations</li>
            </ul>
          </div>
          <div className="tip-card">
            <h3>💡 Usability</h3>
            <ul>
              <li>Provide clear feedback for actions</li>
              <li>Implement confirmation for destructive operations</li>
              <li>Maintain consistent response formats</li>
              <li>Support natural language variations</li>
              <li>Offer examples of valid commands</li>
            </ul>
          </div>
          <div className="tip-card">
            <h3>🔧 Maintenance</h3>
            <ul>
              <li>Log all operations for debugging</li>
              <li>Implement proper exception handling</li>
              <li>Keep the codebase modular</li>
              <li>Add comprehensive tests</li>
              <li>Document agent capabilities and limitations</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="next-steps">
        <h2>Extending the Agent</h2>
        <div className="next-steps-grid">
          <div className="next-step-card">
            <h3>Additional Features</h3>
            <ul>
              <li>File compression and extraction</li>
              <li>Batch operations on multiple files</li>
              <li>File type detection and validation</li>
              <li>Content summarization using LLM</li>
              <li>Image recognition and tagging</li>
              <li>Audio transcription for media files</li>
            </ul>
          </div>
          <div className="next-step-card">
            <h3>Advanced Integration</h3>
            <ul>
              <li>Cloud storage integration (S3, Google Drive, Dropbox)</li>
              <li>Version control system integration (Git)</li>
              <li>File content analysis and tagging</li>
              <li>Natural language search improvements</li>
              <li>Web interface with real-time feedback</li>
              <li>Integration with productivity tools and workflows</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="resources">
        <h2>Additional Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <h3>LangChain Documentation</h3>
            <p>
              Comprehensive documentation for the LangChain framework used in this project.
            </p>
            <a href="https://python.langchain.com/docs/get_started/introduction" target="_blank" rel="noopener noreferrer">
              Visit LangChain Docs →
            </a>
          </div>
          <div className="resource-card">
            <h3>OpenAI API Reference</h3>
            <p>
              Complete API reference for OpenAI's models used in this project.
            </p>
            <a href="https://platform.openai.com/docs/api-reference" target="_blank" rel="noopener noreferrer">
              Visit OpenAI API Docs →
            </a>
          </div>
          <div className="resource-card">
            <h3>GitHub Repository</h3>
            <p>
              Full source code and additional examples for this file system agent.
            </p>
            <a href="https://github.com/example/file-system-agent" target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildingLLMAgent;