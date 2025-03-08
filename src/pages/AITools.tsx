import React from 'react';
import '../styles/AITools.css';

const AITools: React.FC = () => {
  return (
    <div className="ai-tools">
      <section className="tools-hero">
        <h1>AI-Powered Developer Tools</h1>
        <p className="subtitle">
          Discover how advanced AI tools can boost your development workflow and productivity
        </p>
      </section>

      <section className="tools-overview">
        <h2>How AI Is Transforming Development</h2>
        <p>
          Modern AI-powered developer tools are revolutionizing how we write, debug, and maintain code.
          By integrating large language models directly into the development environment, these tools offer
          capabilities like intelligent code completion, automated refactoring, natural language code generation,
          and interactive debugging assistance that go far beyond traditional IDEs.
        </p>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>🚀 Increased Productivity</h3>
            <p>Complete tasks faster with AI-assisted coding that understands your intent</p>
          </div>
          <div className="benefit-card">
            <h3>🧠 Reduced Cognitive Load</h3>
            <p>Focus on problem-solving rather than syntax and implementation details</p>
          </div>
          <div className="benefit-card">
            <h3>🔍 Enhanced Code Quality</h3>
            <p>Receive intelligent suggestions for improvements and best practices</p>
          </div>
          <div className="benefit-card">
            <h3>📚 Accelerated Learning</h3>
            <p>Learn new frameworks and languages faster with contextual guidance</p>
          </div>
        </div>
      </section>

      <section className="featured-tools">
        <h2>Featured AI Development Tools</h2>
        
        <div className="tool-card">
          <div className="tool-header forge">
            <div className="tool-logo">
              <img src="https://forge.anthropic.com/images/forge-logo-dark.svg" alt="Anthropic Forge Logo" />
            </div>
            <div className="tool-name">
              <h3>Anthropic Forge</h3>
              <div className="tool-tags">
                <span className="tag">AI Assistant</span>
                <span className="tag">Claude Integration</span>
                <span className="tag">Tool Use</span>
              </div>
            </div>
          </div>

          <div className="tool-content">
            <div className="tool-description">
              <h4>What is Forge?</h4>
              <p>
                Anthropic Forge is a powerful AI assistant platform that enables developers to create, 
                test, and deploy Claude-powered applications. Forge provides a seamless interface for
                building AI agents that can perform a wide range of tasks through tools and system prompts.
              </p>

              <h4>Key Features</h4>
              <ul>
                <li><strong>Tool Integration:</strong> Connect Claude to your file system, execute shell commands, and more</li>
                <li><strong>System Prompt Engineering:</strong> Craft custom AI assistants with specialized capabilities</li>
                <li><strong>Web Access:</strong> Allow Claude to search the web and access online information</li>
                <li><strong>Development Environment:</strong> Test and iterate on your AI applications in a user-friendly interface</li>
                <li><strong>Deployment Options:</strong> Move from prototype to production with Anthropic's API</li>
              </ul>
            </div>

            <div className="tool-examples">
              <h4>Common Use Cases</h4>
              <div className="example-grid">
                <div className="example-item">
                  <h5>Code Generation</h5>
                  <p>Create complete functions, classes, or even entire applications with natural language instructions</p>
                </div>
                <div className="example-item">
                  <h5>Project Management</h5>
                  <p>Automate file organization, documentation, and project setup tasks</p>
                </div>
                <div className="example-item">
                  <h5>Data Analysis</h5>
                  <p>Process, analyze, and visualize data through natural language requests</p>
                </div>
                <div className="example-item">
                  <h5>Learning Assistant</h5>
                  <p>Get explanations, tutorials, and guidance on complex technical topics</p>
                </div>
              </div>
              
              <div className="resource-links">
                <h4>Resources</h4>
                <a href="https://forge.anthropic.com/" target="_blank" rel="noopener noreferrer">Official Website</a>
                <a href="https://docs.anthropic.com/claude/docs" target="_blank" rel="noopener noreferrer">Documentation</a>
                <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer">Claude API Console</a>
              </div>
            </div>
          </div>
        </div>

        <div className="tool-card">
          <div className="tool-header cursor">
            <div className="tool-logo">
              <img src="https://cursor.sh/apple-touch-icon.png" alt="Cursor Logo" />
            </div>
            <div className="tool-name">
              <h3>Cursor</h3>
              <div className="tool-tags">
                <span className="tag">IDE</span>
                <span className="tag">Code Generation</span>
                <span className="tag">GPT-4 Powered</span>
              </div>
            </div>
          </div>

          <div className="tool-content">
            <div className="tool-description">
              <h4>What is Cursor?</h4>
              <p>
                Cursor is an AI-first code editor built on top of VS Code that integrates powerful 
                AI capabilities directly into your development workflow. Powered by GPT-4, Cursor 
                understands your codebase and can help write, edit, and explain code through natural 
                language interaction.
              </p>

              <h4>Key Features</h4>
              <ul>
                <li><strong>AI Chat:</strong> Chat with an AI that understands your entire codebase</li>
                <li><strong>Code Generation:</strong> Generate entire functions or components using natural language</li>
                <li><strong>Code Editing:</strong> Ask for changes to existing code in plain English</li>
                <li><strong>Contextual Help:</strong> Get explanations about specific code snippets or concepts</li>
                <li><strong>Error Fixing:</strong> Detect and fix bugs through AI-assisted debugging</li>
                <li><strong>VS Code Foundation:</strong> Familiar interface with all VS Code extensions support</li>
              </ul>
            </div>

            <div className="tool-examples">
              <h4>Common Use Cases</h4>
              <div className="example-grid">
                <div className="example-item">
                  <h5>Complex Function Generation</h5>
                  <p>Describe the functionality you need, and get a working implementation</p>
                </div>
                <div className="example-item">
                  <h5>Code Refactoring</h5>
                  <p>Ask the AI to improve code structure, performance, or readability</p>
                </div>
                <div className="example-item">
                  <h5>Bug Fixing</h5>
                  <p>Have the AI identify and fix issues in your code</p>
                </div>
                <div className="example-item">
                  <h5>Learning New Frameworks</h5>
                  <p>Get contextual help and examples when working with unfamiliar libraries</p>
                </div>
              </div>
              
              <div className="resource-links">
                <h4>Resources</h4>
                <a href="https://cursor.sh/" target="_blank" rel="noopener noreferrer">Official Website</a>
                <a href="https://cursor.sh/docs" target="_blank" rel="noopener noreferrer">Documentation</a>
                <a href="https://cursor.sh/blog" target="_blank" rel="noopener noreferrer">Blog</a>
              </div>
            </div>
          </div>
        </div>

        <div className="tool-card">
          <div className="tool-header vscode">
            <div className="tool-logo">
              <img src="https://code.visualstudio.com/favicon.ico" alt="VS Code Logo" />
            </div>
            <div className="tool-name">
              <h3>VS Code + GitHub Copilot</h3>
              <div className="tool-tags">
                <span className="tag">IDE</span>
                <span className="tag">IntelliSense</span>
                <span className="tag">AI Extensions</span>
              </div>
            </div>
          </div>

          <div className="tool-content">
            <div className="tool-description">
              <h4>What is VS Code with Copilot?</h4>
              <p>
                Visual Studio Code is Microsoft's lightweight but powerful source code editor, and when enhanced 
                with GitHub Copilot, it transforms into an AI-powered development environment. Copilot integrates
                OpenAI's technology to provide intelligent code suggestions directly within your editor.
              </p>

              <h4>Key Features</h4>
              <ul>
                <li><strong>Intelligent Code Completion:</strong> Real-time code suggestions as you type</li>
                <li><strong>Full Line & Function Completion:</strong> Generate entire blocks of code based on context</li>
                <li><strong>Multi-language Support:</strong> Works across dozens of programming languages</li>
                <li><strong>Comment-to-Code:</strong> Turn natural language comments into functional code</li>
                <li><strong>Alternative Suggestion Browsing:</strong> Cycle through different AI-generated solutions</li>
                <li><strong>Vast Extension Ecosystem:</strong> Customize with thousands of extensions beyond AI features</li>
              </ul>
            </div>

            <div className="tool-examples">
              <h4>Common Use Cases</h4>
              <div className="example-grid">
                <div className="example-item">
                  <h5>Rapid Prototyping</h5>
                  <p>Quickly build application components with AI assistance</p>
                </div>
                <div className="example-item">
                  <h5>Boilerplate Automation</h5>
                  <p>Generate repetitive code patterns automatically</p>
                </div>
                <div className="example-item">
                  <h5>API Implementation</h5>
                  <p>Easily implement methods for working with APIs</p>
                </div>
                <div className="example-item">
                  <h5>Testing</h5>
                  <p>Generate test cases and testing code for your applications</p>
                </div>
              </div>
              
              <div className="resource-links">
                <h4>Resources</h4>
                <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code Website</a>
                <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">GitHub Copilot</a>
                <a href="https://code.visualstudio.com/docs" target="_blank" rel="noopener noreferrer">VS Code Documentation</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tool-comparison">
        <h2>Choosing the Right Tool</h2>
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Anthropic Forge</th>
                <th>Cursor</th>
                <th>VS Code + Copilot</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Primary Use Case</td>
                <td>AI assistant development, tool-using agents</td>
                <td>AI-first code editor</td>
                <td>General-purpose code editor with AI features</td>
              </tr>
              <tr>
                <td>Underlying AI Model</td>
                <td>Claude (Anthropic)</td>
                <td>GPT-4 (OpenAI)</td>
                <td>OpenAI Codex</td>
              </tr>
              <tr>
                <td>Code Understanding</td>
                <td>Excellent</td>
                <td>Excellent</td>
                <td>Good</td>
              </tr>
              <tr>
                <td>Tool Integration</td>
                <td>Extensive (files, shell, web)</td>
                <td>Limited</td>
                <td>Via extensions</td>
              </tr>
              <tr>
                <td>Language Support</td>
                <td>Most popular languages</td>
                <td>Most popular languages</td>
                <td>Comprehensive</td>
              </tr>
              <tr>
                <td>Learning Curve</td>
                <td>Moderate</td>
                <td>Low (familiar VS Code interface)</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>Cost</td>
                <td>Free (with Claude API usage)</td>
                <td>Free tier available</td>
                <td>$10/month (Copilot)</td>
              </tr>
              <tr>
                <td>Best For</td>
                <td>Building AI agents, complex tasks</td>
                <td>AI-assisted coding, codebase understanding</td>
                <td>General development with AI suggestions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="best-practices">
        <h2>Best Practices for AI-Assisted Development</h2>
        <div className="practices-grid">
          <div className="practice-card">
            <h3>🔍 Always Review AI-Generated Code</h3>
            <p>
              While AI tools are impressive, they can sometimes generate incorrect or inefficient code.
              Always review and understand code before integrating it into your projects.
            </p>
          </div>
          <div className="practice-card">
            <h3>📝 Be Specific in Your Prompts</h3>
            <p>
              The more specific your instructions or prompts, the better results you'll get.
              Include details about your requirements, edge cases, and preferred approaches.
            </p>
          </div>
          <div className="practice-card">
            <h3>🧪 Test AI-Generated Code Thoroughly</h3>
            <p>
              Write comprehensive tests for AI-generated code, as it may contain subtle bugs
              or edge case failures that aren't immediately obvious.
            </p>
          </div>
          <div className="practice-card">
            <h3>🌱 Use AI to Learn, Not Just to Generate</h3>
            <p>
              AI tools are excellent learning resources. Ask for explanations of generated code
              and alternative approaches to deepen your understanding.
            </p>
          </div>
        </div>
      </section>

      <section className="future-trends">
        <h2>The Future of AI in Development</h2>
        <div className="trends-content">
          <p>
            AI-powered development tools are rapidly evolving. Here are some trends to watch:
          </p>
          <div className="trends-grid">
            <div className="trend-card">
              <h3>🤖 Autonomous Agents</h3>
              <p>AI systems that can independently tackle complex development tasks with minimal human guidance</p>
            </div>
            <div className="trend-card">
              <h3>🔄 Continuous Code Improvement</h3>
              <p>AI tools that proactively suggest optimizations and refactorings as codebases evolve</p>
            </div>
            <div className="trend-card">
              <h3>🧠 Domain-Specific Assistants</h3>
              <p>Specialized AI tools fine-tuned for specific frameworks, industries, or coding styles</p>
            </div>
            <div className="trend-card">
              <h3>👥 Collaborative AI</h3>
              <p>Systems designed to work alongside development teams, understanding project context and goals</p>
            </div>
          </div>
        </div>
      </section>

      <section className="getting-started">
        <h2>Getting Started with AI-Powered Development</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Choose a Tool That Fits Your Workflow</h3>
              <p>Consider your development style, tech stack, and specific needs when selecting an AI tool</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Start with Simple Tasks</h3>
              <p>Begin by using AI for boilerplate code, simple functions, or documentation</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Learn Effective Prompting</h3>
              <p>Practice writing clear, specific instructions to get the best results from AI tools</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Integrate with Your Development Process</h3>
              <p>Find ways to incorporate AI tools into your regular workflow and CI/CD pipelines</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>Stay Updated</h3>
              <p>Follow AI tool updates and new features to maximize their potential in your work</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AITools;