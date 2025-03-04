import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LLMAgent.css';

const LLMAgent: React.FC = () => {
  return (
    <div className="llm-agent">
      <h1>LLM Agents Guide</h1>

      <section className="agent-section">
        <h2>Understanding LLM Agents</h2>
        <div className="content-card">
          <h3>What are LLM Agents?</h3>
          <p>
            LLM Agents are AI systems that combine Large Language Models with action capabilities,
            allowing them to interact with their environment and perform tasks autonomously.
          </p>
          <div className="key-points">
            <h4>Key Components:</h4>
            <ul>
              <li>Language Model Core</li>
              <li>Tool Integration</li>
              <li>Planning & Reasoning</li>
              <li>Memory Systems</li>
              <li>Action Execution</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="agent-section">
        <h2>Core Components</h2>
        <div className="components-grid">
          <div className="component-card">
            <h3>1. Language Models</h3>
            <ul>
              <li>GPT-4/3.5</li>
              <li>Claude</li>
              <li>PaLM</li>
              <li>Local LLMs</li>
            </ul>
          </div>

          <div className="component-card">
            <h3>2. Tool Integration</h3>
            <ul>
              <li>API Connections</li>
              <li>System Commands</li>
              <li>External Services</li>
              <li>Custom Tools</li>
            </ul>
          </div>

          <div className="component-card">
            <h3>3. Planning Systems</h3>
            <ul>
              <li>Task Decomposition</li>
              <li>Goal Setting</li>
              <li>Strategy Formation</li>
              <li>Progress Tracking</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="agent-section">
        <h2>Agent Architectures</h2>
        <div className="architecture-cards">
          <div className="arch-card">
            <h3>ReAct Pattern</h3>
            <p>Reasoning and Acting in an alternating sequence</p>
            <ol>
              <li>Thought: Analyze the situation</li>
              <li>Action: Choose appropriate tool</li>
              <li>Observation: Process results</li>
              <li>Repeat until goal achieved</li>
            </ol>
          </div>

          <div className="arch-card">
            <h3>Plan-and-Execute</h3>
            <p>Detailed planning before execution</p>
            <ol>
              <li>Goal Analysis</li>
              <li>Strategy Development</li>
              <li>Step-by-Step Planning</li>
              <li>Execution and Monitoring</li>
            </ol>
          </div>

          <div className="arch-card">
            <h3>Chain-of-Thought</h3>
            <p>Breaking down complex reasoning</p>
            <ol>
              <li>Problem Understanding</li>
              <li>Step-by-Step Reasoning</li>
              <li>Intermediate Conclusions</li>
              <li>Final Solution</li>
            </ol>
            <Link to="/llm-agent/building" className="learn-more-link">
              Learn How to Build →
            </Link>
          </div>
        </div>
      </section>

      <section className="agent-section">
        <h2>Implementation Guide</h2>
        <div className="implementation-steps">
          <div className="step-card">
            <h3>1. Setup</h3>
            <ul>
              <li>Choose LLM Provider</li>
              <li>Set up API Access</li>
              <li>Configure Environment</li>
              <li>Install Dependencies</li>
            </ul>
          </div>

          <div className="step-card">
            <h3>2. Tool Creation</h3>
            <ul>
              <li>Define Tool Interface</li>
              <li>Implement Functions</li>
              <li>Add Error Handling</li>
              <li>Test Integration</li>
            </ul>
          </div>

          <div className="step-card">
            <h3>3. Agent Development</h3>
            <ul>
              <li>Design Prompt Template</li>
              <li>Implement Control Flow</li>
              <li>Add Memory System</li>
              <li>Configure Output Parser</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="agent-section">
        <h2>Best Practices</h2>
        <div className="practices-grid">
          <div className="practice-card">
            <h3>Prompt Engineering</h3>
            <ul>
              <li>Clear Instructions</li>
              <li>Consistent Format</li>
              <li>Example-driven Design</li>
              <li>Error Recovery</li>
            </ul>
          </div>

          <div className="practice-card">
            <h3>Tool Design</h3>
            <ul>
              <li>Atomic Operations</li>
              <li>Clear Documentation</li>
              <li>Input Validation</li>
              <li>Error Messages</li>
            </ul>
          </div>

          <div className="practice-card">
            <h3>Testing</h3>
            <ul>
              <li>Unit Tests</li>
              <li>Integration Tests</li>
              <li>Edge Cases</li>
              <li>Performance Metrics</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="agent-section">
        <h2>Common Use Cases</h2>
        <div className="use-cases">
          <div className="use-case-card">
            <h3>Code Generation</h3>
            <ul>
              <li>File Operations</li>
              <li>Code Analysis</li>
              <li>Test Generation</li>
              <li>Documentation</li>
            </ul>
          </div>

          <div className="use-case-card">
            <h3>Data Analysis</h3>
            <ul>
              <li>Data Cleaning</li>
              <li>Pattern Recognition</li>
              <li>Visualization</li>
              <li>Report Generation</li>
            </ul>
          </div>

          <div className="use-case-card">
            <h3>Task Automation</h3>
            <ul>
              <li>System Commands</li>
              <li>File Management</li>
              <li>API Interactions</li>
              <li>Workflow Automation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LLMAgent;