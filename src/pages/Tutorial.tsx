import React from 'react';
import '../styles/Tutorial.css';

const Tutorial: React.FC = () => {
  return (
    <div className="tutorial">
      <h1>Forge Tutorial</h1>
      
      <section className="tutorial-section">
        <h2>File Operations</h2>
        <div className="command-grid">
          <div className="command-card">
            <h3>Read File</h3>
            <pre>
              {`tool_forge_fs_read
Parameters:
- path: Absolute path to file`}
            </pre>
            <p>Reads and returns file contents. Works with text files, PDFs, and DOCX files.</p>
          </div>

          <div className="command-card">
            <h3>Create/Update File</h3>
            <pre>
              {`tool_forge_fs_create
Parameters:
- path: File path
- content: File content`}
            </pre>
            <p>Creates or updates a file with specified content.</p>
          </div>

          <div className="command-card">
            <h3>List Directory</h3>
            <pre>
              {`tool_forge_fs_list
Parameters:
- path: Directory path
- recursive: true/false`}
            </pre>
            <p>Lists files and directories in the specified path.</p>
          </div>
        </div>
      </section>

      <section className="tutorial-section">
        <h2>Code Analysis</h2>
        <div className="command-grid">
          <div className="command-card">
            <h3>Code Outline</h3>
            <pre>
              {`tool_forge_code_outline
Parameters:
- path: Source code directory`}
            </pre>
            <p>Analyzes and shows code structure including classes, functions, and methods.</p>
          </div>

          <div className="command-card">
            <h3>Code Search</h3>
            <pre>
              {`tool_forge_fs_search
Parameters:
- path: Directory to search
- regex: Search pattern
- file_pattern: File type filter`}
            </pre>
            <p>Searches code using regex patterns with context.</p>
          </div>
        </div>
      </section>

      <section className="tutorial-section">
        <h2>Development Tools</h2>
        <div className="command-grid">
          <div className="command-card">
            <h3>Apply Patch</h3>
            <pre>
              {`tool_forge_patch
Parameters:
- path: File to patch
- diff: Changes in blocks`}
            </pre>
            <p>Applies changes to files using search/replace blocks.</p>
          </div>

          <div className="command-card">
            <h3>Shell Commands</h3>
            <pre>
              {`tool_forge_process_shell
Parameters:
- command: Shell command
- cwd: Working directory`}
            </pre>
            <p>Executes shell commands safely.</p>
          </div>

          <div className="command-card">
            <h3>Network Fetch</h3>
            <pre>
              {`tool_forge_net_fetch
Parameters:
- url: URL to fetch
- max_length: Max chars
- raw: Get raw content`}
            </pre>
            <p>Fetches content from URLs with optional markdown conversion.</p>
          </div>
        </div>
      </section>

      <section className="tutorial-section">
        <h2>Best Practices</h2>
        <ul className="best-practices">
          <li>
            <strong>File Paths:</strong> Always use absolute paths for file operations
          </li>
          <li>
            <strong>Error Handling:</strong> Check command results for errors and handle appropriately
          </li>
          <li>
            <strong>Shell Safety:</strong> Use restricted shell mode for better security
          </li>
          <li>
            <strong>Search Patterns:</strong> Use specific regex patterns to narrow down search results
          </li>
          <li>
            <strong>Code Analysis:</strong> Utilize code outline for better project understanding
          </li>
        </ul>
      </section>

      <section className="tutorial-section">
        <h2>Common Use Cases</h2>
        <div className="use-case-grid">
          <div className="use-case-card">
            <h3>Project Setup</h3>
            <ol>
              <li>Create directory structure with fs_create</li>
              <li>Initialize configuration files</li>
              <li>Set up build scripts</li>
              <li>Configure version control</li>
            </ol>
          </div>

          <div className="use-case-card">
            <h3>Code Maintenance</h3>
            <ol>
              <li>Search for patterns across files</li>
              <li>Apply patches for updates</li>
              <li>Analyze code structure</li>
              <li>Update documentation</li>
            </ol>
          </div>

          <div className="use-case-card">
            <h3>Development Tasks</h3>
            <ol>
              <li>Execute build commands</li>
              <li>Run tests</li>
              <li>Update dependencies</li>
              <li>Manage configurations</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tutorial;