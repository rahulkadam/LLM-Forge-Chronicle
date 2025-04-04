import React from 'react';
import '../styles/AITools.css';

const AITools: React.FC = () => {
  return (
    <div className="ai-tools">
      <section className="tools-hero">
        <h1>AI-Powered Developer & Agent Tools</h1>
        <p className="subtitle">
          Discover powerful tools for agent development and AI-assisted coding to supercharge your workflow
        </p>
      </section>

      <section className="tools-overview">
        <h2>The Rise of AI Agents and Development Tools</h2>
        <p>
          AI-powered tools are revolutionizing software development and enabling the creation of autonomous agents.
          From code generation to intelligent assistance, these tools leverage large language models to 
          understand context, perform tasks, and enhance developer productivity. Agent development platforms 
          allow building sophisticated AI systems that can interact with various services, make decisions, and
          execute complex workflows.
        </p>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>🚀 Accelerated Development</h3>
            <p>Complete tasks in minutes that would take hours manually</p>
          </div>
          <div className="benefit-card">
            <h3>🤖 Autonomous Agents</h3>
            <p>Build AI systems that can understand tasks and take action</p>
          </div>
          <div className="benefit-card">
            <h3>🔍 Code Quality</h3>
            <p>Generate high-quality, optimized code with best practices</p>
          </div>
          <div className="benefit-card">
            <h3>📚 Knowledge Access</h3>
            <p>Leverage vast programming knowledge across frameworks and languages</p>
          </div>
        </div>
      </section>

      <section className="featured-tools">
        <h2>Agent Development Platforms</h2>
        
        <div className="tool-card">
          <div className="tool-header forge">
            <div className="tool-logo">
              <img src="https://forge.anthropic.com/images/forge-logo-dark.svg" alt="Anthropic Forge Logo" />
            </div>
            <div className="tool-name">
              <h3>Antinomyhq Forge</h3>
              <div className="tool-tags">
                <span className="tag">Agent Development</span>
                <span className="tag">Claude Integration</span>
                <span className="tag">Tool Use</span>
              </div>
            </div>
          </div>

          <div className="tool-content">
            <div className="tool-description">
              <h4>Build Powerful Claude-Powered Agents</h4>
              <p>
                Antinomyhq Forge enables developers to create, test, and deploy Claude-powered applications
                and agents. It provides a streamlined environment for building AI systems that can access
                tools, files, and external services.
              </p>

              <h4>Key Features</h4>
              <ul>
                <li><strong>Tool Integration:</strong> Connect Claude to file systems, shell commands, and web access</li>
                <li><strong>System Prompt Engineering:</strong> Design sophisticated agents with specific capabilities</li>
                <li><strong>Testing Environment:</strong> Iterate and refine your agents in a user-friendly interface</li>
                <li><strong>Deployment Options:</strong> Move from prototype to production with Anthropic's API</li>
                <li><strong>Function Calling:</strong> Structured tool use with defined parameters and schemas</li>
              </ul>
            </div>

            <div className="tool-examples">
              <h4>Use Cases</h4>
              <div className="example-grid">
                <div className="example-item">
                  <h5>Project Assistants</h5>
                  <p>Create specialized coding assistants that understand your project structure</p>
                </div>
                <div className="example-item">
                  <h5>Data Agents</h5>
                  <p>Build agents that can analyze, transform, and visualize data</p>
                </div>
                <div className="example-item">
                  <h5>DevOps Automation</h5>
                  <p>Automate deployments and infrastructure management with AI agents</p>
                </div>
                <div className="example-item">
                  <h5>Research Assistants</h5>
                  <p>Develop agents that can search for information and synthesize findings</p>
                </div>
              </div>
              
              <div className="resource-links">
                <a href="https://forge.anthropic.com/" target="_blank" rel="noopener noreferrer">Official Website</a>
                <a href="https://docs.anthropic.com/claude/docs" target="_blank" rel="noopener noreferrer">Documentation</a>
              </div>
            </div>
          </div>
        </div>

        <div className="tool-card">
          <div className="tool-header langchain">
            <div className="tool-logo">
              <img src="https://python.langchain.com/img/favicon.ico" alt="LangChain Logo" />
            </div>
            <div className="tool-name">
              <h3>LangChain</h3>
              <div className="tool-tags">
                <span className="tag">Agent Framework</span>
                <span className="tag">Muliti-LLM</span>
                <span className="tag">Open Source</span>
              </div>
            </div>
          </div>

          <div className="tool-content">
            <div className="tool-description">
              <h4>Framework for LLM-powered Applications</h4>
              <p>
                LangChain is a framework for developing applications powered by language models through composability.
                It provides a standard interface for chains, lots of integrations with other tools, and end-to-end chains
                for common applications.
              </p>

              <h4>Key Features</h4>
              <ul>
                <li><strong>Chains:</strong> Combine multiple components together into a single application</li>
                <li><strong>Agents:</strong> Allow LLMs to interact with other tools and make decisions</li>
                <li><strong>Memory:</strong> Persist state between chain/agent calls</li>
                <li><strong>Retrieval:</strong> Connect language models to other sources of data</li>
                <li><strong>Multiple LLM Support:</strong> Work with various LLMs including OpenAI, Anthropic, and open-source models</li>
              </ul>
            </div>

            <div className="tool-examples">
              <h4>Use Cases</h4>
              <div className="example-grid">
                <div className="example-item">
                  <h5>RAG Applications</h5>
                  <p>Build retrieval-augmented generation systems with external knowledge</p>
                </div>
                <div className="example-item">
                  <h5>Autonomous Agents</h5>
                  <p>Develop agents that can reason and use tools to solve complex problems</p>
                </div>
                <div className="example-item">
                  <h5>Chatbots</h5>
                  <p>Create sophisticated conversational interfaces with memory and tool use</p>
                </div>
                <div className="example-item">
                  <h5>Document Processing</h5>
                  <p>Analyze, summarize, and extract information from large document collections</p>
                </div>
              </div>
              
              <div className="resource-links">
                <a href="https://www.langchain.com/" target="_blank" rel="noopener noreferrer">Official Website</a>
                <a href="https://python.langchain.com/docs/get_started/introduction" target="_blank" rel="noopener noreferrer">Documentation</a>
                <a href="https://github.com/langchain-ai/langchain" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              </div>
            </div>
          </div>
        </div>

        <div className="tool-card">
          <div className="tool-header llamaindex">
            <div className="tool-logo">
              <img src="https://www.llamaindex.ai/favicon.ico" alt="LlamaIndex Logo" />
            </div>
            <div className="tool-name">
              <h3>LlamaIndex</h3>
              <div className="tool-tags">
                <span className="tag">Data Framework</span>
                <span className="tag">RAG</span>
                <span className="tag">Open Source</span>
              </div>
            </div>
          </div>

          <div className="tool-content">
            <div className="tool-description">
              <h4>Data Framework for LLM Applications</h4>
              <p>
                LlamaIndex is a data framework for building LLM applications. It provides tools to connect custom data
                to large language models, enabling the creation of RAG systems, agents, and chatbots with access
                to proprietary information.
              </p>

              <h4>Key Features</h4>
              <ul>
                <li><strong>Data Connectors:</strong> Integrate with various data sources and formats</li>
                <li><strong>Data Indexes:</strong> Structure and optimize data for efficient retrieval</li>
                <li><strong>Query Engines:</strong> Build powerful retrieval systems with context</li>
                <li><strong>Agent Tools:</strong> Create LLM agents that can reason over your data</li>
                <li><strong>Evaluation Framework:</strong> Measure and improve application performance</li>
              </ul>
            </div>

            <div className="tool-examples">
              <h4>Use Cases</h4>
              <div className="example-grid">
                <div className="example-item">
                  <h5>Knowledge Agents</h5>
                  <p>Build agents that can access and reason over domain-specific knowledge</p>
                </div>
                <div className="example-item">
                  <h5>Document Q&A</h5>
                  <p>Create systems that answer questions based on document collections</p>
                </div>
                <div className="example-item">
                  <h5>Code Understanding</h5>
                  <p>Develop tools that can understand and reason about large codebases</p>
                </div>
                <div className="example-item">
                  <h5>Data Analysis</h5>
                  <p>Build agents that can analyze and interpret complex data sources</p>
                </div>
              </div>
              
              <div className="resource-links">
                <a href="https://www.llamaindex.ai/" target="_blank" rel="noopener noreferrer">Official Website</a>
                <a href="https://docs.llamaindex.ai/en/stable/" target="_blank" rel="noopener noreferrer">Documentation</a>
                <a href="https://github.com/jerryjliu/llama_index" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-tools">
        <h2>AI-Powered Development Tools</h2>
        
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
              <h4>AI-First Code Editor</h4>
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
                <li><strong>Error Fixing:</strong> Detect and fix bugs through AI-assisted debugging</li>
                <li><strong>VS Code Foundation:</strong> Familiar interface with extensions support</li>
              </ul>
            </div>

            <div className="tool-examples">
              <h4>Use Cases</h4>
              <div className="example-grid">
                <div className="example-item">
                  <h5>Rapid Prototyping</h5>
                  <p>Quickly scaffold components and features with natural language</p>
                </div>
                <div className="example-item">
                  <h5>Code Refactoring</h5>
                  <p>Ask the AI to improve code structure, performance, or readability</p>
                </div>
                <div className="example-item">
                  <h5>Learning New Frameworks</h5>
                  <p>Get contextual help when working with unfamiliar technologies</p>
                </div>
                <div className="example-item">
                  <h5>Bug Fixing</h5>
                  <p>Identify and resolve issues in your codebase efficiently</p>
                </div>
              </div>
              
              <div className="resource-links">
                <a href="https://cursor.sh/" target="_blank" rel="noopener noreferrer">Official Website</a>
                <a href="https://cursor.sh/docs" target="_blank" rel="noopener noreferrer">Documentation</a>
              </div>
            </div>
          </div>
        </div>

        <div className="tool-card">
          <div className="tool-header copilot">
            <div className="tool-logo">
              <img src="https://github.githubassets.com/favicons/favicon.svg" alt="GitHub Copilot Logo" />
            </div>
            <div className="tool-name">
              <h3>GitHub Copilot</h3>
              <div className="tool-tags">
                <span className="tag">Code Completion</span>
                <span className="tag">Multi-IDE</span>
                <span className="tag">OpenAI-Powered</span>
              </div>
            </div>
          </div>

          <div className="tool-content">
            <div className="tool-description">
              <h4>AI Pair Programmer</h4>
              <p>
                GitHub Copilot is an AI pair programming tool that offers suggestions for whole lines or 
                blocks of code as you type. Powered by OpenAI Codex, it integrates with your preferred IDE 
                and understands context to provide relevant code suggestions.
              </p>

              <h4>Key Features</h4>
              <ul>
                <li><strong>Intelligent Code Completion:</strong> Real-time code suggestions as you type</li>
                <li><strong>Multi-language Support:</strong> Works across dozens of programming languages</li>
                <li><strong>Comment-to-Code:</strong> Turn comments into functional code</li>
                <li><strong>IDE Integration:</strong> Works with VS Code, Visual Studio, JetBrains IDEs, and more</li>
                <li><strong>Copilot Chat:</strong> Conversational AI assistance for development tasks</li>
              </ul>
            </div>

            <div className="tool-examples">
              <h4>Use Cases</h4>
              <div className="example-grid">
                <div className="example-item">
                  <h5>Boilerplate Automation</h5>
                  <p>Generate repetitive code patterns automatically</p>
                </div>
                <div className="example-item">
                  <h5>Test Generation</h5>
                  <p>Create unit tests based on your implementation code</p>
                </div>
                <div className="example-item">
                  <h5>Learning Aid</h5>
                  <p>See practical examples of language features in context</p>
                </div>
                <div className="example-item">
                  <h5>API Implementation</h5>
                  <p>Easily implement methods for working with external APIs</p>
                </div>
              </div>
              
              <div className="resource-links">
                <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">Official Website</a>
                <a href="https://docs.github.com/en/copilot" target="_blank" rel="noopener noreferrer">Documentation</a>
              </div>
            </div>
          </div>
        </div>

        <div className="tool-card">
          <div className="tool-header continuem">
            <div className="tool-logo">
              <img src="https://continuem.ai/favicon.ico" alt="Continue Logo" />
            </div>
            <div className="tool-name">
              <h3>Continue</h3>
              <div className="tool-tags">
                <span className="tag">Code Assistant</span>
                <span className="tag">Open Source</span>
                <span className="tag">Multi-Model</span>
              </div>
            </div>
          </div>

          <div className="tool-content">
            <div className="tool-description">
              <h4>Open-Source AI Software Development</h4>
              <p>
                Continue is an open-source AI coding assistant that helps you complete tasks, answer questions, 
                and improve your code. It integrates with VS Code and JetBrains, offering full context 
                awareness of your codebase to provide highly relevant assistance.
              </p>

              <h4>Key Features</h4>
              <ul>
                <li><strong>Task Completion:</strong> Ask Continue to implement features or fix bugs</li>
                <li><strong>Context-Aware:</strong> Continue understands your full codebase for accurate help</li>
                <li><strong>Multiple Models:</strong> Use Claude, GPT-4, or open-source models</li>
                <li><strong>Self-Hosting:</strong> Run locally without sending code to external servers</li>
                <li><strong>Step-by-Step Solutions:</strong> Watch as Continue solves problems incrementally</li>
              </ul>
            </div>

            <div className="tool-examples">
              <h4>Use Cases</h4>
              <div className="example-grid">
                <div className="example-item">
                  <h5>Feature Implementation</h5>
                  <p>Ask Continue to implement entire features with proper integration</p>
                </div>
                <div className="example-item">
                  <h5>Code Explanation</h5>
                  <p>Get detailed explanations of complex code segments</p>
                </div>
                <div className="example-item">
                  <h5>Code Review</h5>
                  <p>Have Continue review your code for issues and improvements</p>
                </div>
                <div className="example-item">
                  <h5>Documentation Generation</h5>
                  <p>Create comprehensive documentation for your codebase</p>
                </div>
              </div>
              
              <div className="resource-links">
                <a href="https://continue.dev/" target="_blank" rel="noopener noreferrer">Official Website</a>
                <a href="https://continue.dev/docs" target="_blank" rel="noopener noreferrer">Documentation</a>
                <a href="https://github.com/continuedev/continue" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-tools">
        <h2>Specialized Development Tools</h2>
        
        <div className="tool-card">
          <div className="tool-header autogpt">
            <div className="tool-logo">
              <img src="https://raw.githubusercontent.com/Significant-Gravitas/Auto-GPT/master/autogpt/app/frontend/public/favicon.ico" alt="AutoGPT Logo" />
            </div>
            <div className="tool-name">
              <h3>Auto-GPT</h3>
              <div className="tool-tags">
                <span className="tag">Autonomous Agent</span>
                <span className="tag">Open Source</span>
                <span className="tag">Experimental</span>
              </div>
            </div>
          </div>

          <div className="tool-content">
            <div className="tool-description">
              <h4>Experimental Autonomous GPT-4 Agent</h4>
              <p>
                Auto-GPT is an experimental open-source application that showcases the capabilities of the
                GPT-4 language model. It chains together LLM calls to autonomously achieve tasks with minimal
                human intervention, demonstrating the potential of autonomous AI agents.
              </p>

              <h4>Key Features</h4>
              <ul>
                <li><strong>Goal-Oriented:</strong> Autonomously works to achieve user-defined goals</li>
                <li><strong>Memory System:</strong> Maintains context and information across operations</li>
                <li><strong>Tool Use:</strong> Access to internet, file operations, and other tools</li>
                <li><strong>Self-Prompting:</strong> Generates its own prompts and tasks to achieve goals</li>
                <li><strong>Voice Mode:</strong> Optional text-to-speech for agent communication</li>
              </ul>
            </div>

            <div className="tool-examples">
              <h4>Use Cases</h4>
              <div className="example-grid">
                <div className="example-item">
                  <h5>Research Assistant</h5>
                  <p>Gather, analyze, and synthesize information on complex topics</p>
                </div>
                <div className="example-item">
                  <h5>Content Creation</h5>
                  <p>Generate articles, reports, and creative content autonomously</p>
                </div>
                <div className="example-item">
                  <h5>Market Analysis</h5>
                  <p>Research market trends and compile insightful reports</p>
                </div>
                <div className="example-item">
                  <h5>Prototype Testing</h5>
                  <p>Experiment with autonomous agent capabilities and limitations</p>
                </div>
              </div>
              
              <div className="resource-links">
                <a href="https://agpt.co/" target="_blank" rel="noopener noreferrer">Official Website</a>
                <a href="https://github.com/Significant-Gravitas/Auto-GPT" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              </div>
            </div>
          </div>
        </div>

        <div className="tool-card">
          <div className="tool-header openinterpreter">
            <div className="tool-logo">
              <img src="https://raw.githubusercontent.com/KillianLucas/open-interpreter/main/images/logo.png" alt="Open Interpreter Logo" />
            </div>
            <div className="tool-name">
              <h3>Open Interpreter</h3>
              <div className="tool-tags">
                <span className="tag">Code Execution</span>
                <span className="tag">Terminal</span>
                <span className="tag">Open Source</span>
              </div>
            </div>
          </div>

          <div className="tool-content">
            <div className="tool-description">
              <h4>Natural Language Coding Interface</h4>
              <p>
                Open Interpreter lets you run code locally through a natural language interface. It allows
                LLMs to execute code on your computer to perform tasks, offering a terminal-based
                interface where you can ask the system to perform actions using your machine.
              </p>

              <h4>Key Features</h4>
              <ul>
                <li><strong>Local Code Execution:</strong> Run code generated by AI on your local machine</li>
                <li><strong>Multi-language Support:</strong> Execute Python, JavaScript, shell commands, and more</li>
                <li><strong>Interactive Mode:</strong> Have a conversation with your computer through natural language</li>
                <li><strong>Local Models:</strong> Option to run everything locally with no API calls</li>
                <li><strong>Visual Output:</strong> Display images, charts, and other visual content</li>
              </ul>
            </div>

            <div className="tool-examples">
              <h4>Use Cases</h4>
              <div className="example-grid">
                <div className="example-item">
                  <h5>Data Analysis</h5>
                  <p>Ask for data to be processed, visualized, and analyzed in natural language</p>
                </div>
                <div className="example-item">
                  <h5>System Management</h5>
                  <p>Perform system operations through simple conversational requests</p>
                </div>
                <div className="example-item">
                  <h5>Rapid Prototyping</h5>
                  <p>Quickly build and test code snippets and small applications</p>
                </div>
                <div className="example-item">
                  <h5>Learning Tool</h5>
                  <p>Learn programming by seeing how AI translates requests into code</p>
                </div>
              </div>
              
              <div className="resource-links">
                <a href="https://openinterpreter.com/" target="_blank" rel="noopener noreferrer">Official Website</a>
                <a href="https://github.com/KillianLucas/open-interpreter" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
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
                <th>Tool</th>
                <th>Best For</th>
                <th>Primary Features</th>
                <th>Technical Complexity</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Antinomyhq Forge</td>
                <td>Building Claude-powered agents</td>
                <td>Tool use, system prompts, web access</td>
                <td>Medium</td>
                <td>Free (with API usage)</td>
              </tr>
              <tr>
                <td>LangChain</td>
                <td>Flexible agent development</td>
                <td>Chains, agents, memory, multi-LLM</td>
                <td>Medium-High</td>
                <td>Open Source (+ API costs)</td>
              </tr>
              <tr>
                <td>LlamaIndex</td>
                <td>Data-rich applications</td>
                <td>Data connectors, retrieval, indexing</td>
                <td>Medium-High</td>
                <td>Open Source (+ API costs)</td>
              </tr>
              <tr>
                <td>Cursor</td>
                <td>AI-assisted coding</td>
                <td>Code generation, AI chat, VS Code base</td>
                <td>Low</td>
                <td>Free tier available</td>
              </tr>
              <tr>
                <td>GitHub Copilot</td>
                <td>Code completion</td>
                <td>Inline suggestions, IDE integration</td>
                <td>Low</td>
                <td>$10/month</td>
              </tr>
              <tr>
                <td>Continue</td>
                <td>Task-based coding assistant</td>
                <td>Full-codebase context, multiple models</td>
                <td>Low</td>
                <td>Open Source (+ API costs)</td>
              </tr>
              <tr>
                <td>Auto-GPT</td>
                <td>Autonomous experimentation</td>
                <td>Goal-oriented automation, self-prompting</td>
                <td>Medium</td>
                <td>Open Source (+ API costs)</td>
              </tr>
              <tr>
                <td>Open Interpreter</td>
                <td>Local code execution</td>
                <td>Natural language coding, multi-language</td>
                <td>Low-Medium</td>
                <td>Open Source (+ API costs)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="best-practices1">
        <h2>Best Practices for Agent Development</h2>
        <div className="practices-grid">
          <div className="practice-card">
            <h3>🔍 Define Clear Scopes</h3>
            <p>
              Establish specific boundaries for your agent's capabilities and permissions
              to ensure predictable behavior and prevent unintended consequences.
            </p>
          </div>
          <div className="practice-card">
            <h3>📝 Design Thoughtful Prompts</h3>
            <p>
              Craft system prompts that precisely define the agent's persona, reasoning process,
              and decision-making framework for consistent and reliable performance.
            </p>
          </div>
          <div className="practice-card">
            <h3>🧪 Implement Rigorous Testing</h3>
            <p>
              Develop comprehensive test suites that evaluate your agent against edge cases,
              security concerns, and varied user inputs to ensure robustness.
            </p>
          </div>
          <div className="practice-card">
            <h3>🔒 Prioritize Security</h3>
            <p>
              Follow security best practices, especially when allowing agents to execute
              code or access sensitive resources. Implement proper sandboxing and permissions.
            </p>
          </div>
        </div>
      </section>

      <section className="getting-started">
        <h2>Getting Started with Agent Development</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Define Your Agent's Purpose</h3>
              <p>Clearly articulate what problem your agent will solve and what capabilities it needs</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Choose Your Stack</h3>
              <p>Select the right combination of frameworks, models, and tools for your specific needs</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Design Your System Prompt</h3>
              <p>Craft a detailed system prompt that defines personality, capabilities, and constraints</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Implement Tool Integrations</h3>
              <p>Connect your agent to necessary data sources, APIs, and external services</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>Test and Iterate</h3>
              <p>Continuously test your agent's performance and refine its capabilities based on feedback</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AITools;