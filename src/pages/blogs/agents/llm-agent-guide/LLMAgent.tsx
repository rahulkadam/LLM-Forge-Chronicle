import React from 'react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection } from '../../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../../data/blogData';
import '../../../../styles/blogs/blog-base-style.css';


const LLMAgent: React.FC = () => {
  const category: BlogCategory = 'Technical';
  
  const tableOfContents = [
    { id: 'intro', title: 'From Basic LLMs to Agents' },
    { id: 'capabilities', title: 'Agent Capabilities' },
    { id: 'architecture', title: 'Agent Architectures' },
    { id: 'memory', title: 'Memory Systems' },
    { id: 'tools', title: 'Tools and Functions' },
    { id: 'use-cases', title: 'Advanced Use Cases' }
  ];

  return (
    <BlogTemplate
      title="Advanced LLM Capabilities & Agent Systems"
      date="April 12, 2025"
      readTime="15 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="intro" title="From Basic LLMs to Agents">
        <p className="tutorial-description">
          Building on the fundamentals of Large Language Models covered in our <Link to="/ai-basics">LLM
          Fundamentals</Link> guide, this section explores how LLMs can be extended into agent systems 
          capable of more complex, autonomous actions.
        </p>

        <div className="content-grid">
          <div className="content-card">
            <h3>💬 Basic LLM</h3>
            <p>Text completion and generation based purely on prompt input</p>
          </div>
          <div className="content-card">
            <h3>🔍 LLM with Tools</h3>
            <p>Ability to call external functions and APIs to access information</p>
          </div>
          <div className="content-card">
            <h3>🤖 Full Agent System</h3>
            <p>Autonomous planning, tool selection, and execution of complex tasks</p>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="capabilities" title="What Makes an LLM into an Agent?">
        <p className="tutorial-description">
          Unlike basic LLMs that simply generate text, agents are systems that can take actions in the world.
          They combine LLMs with additional capabilities to create autonomous systems that can reason, plan,
          and adapt to achieve complex goals.
        </p>

        <div className="content-grid">
          <div className="content-card">
            <h3>Core Capabilities</h3>
            <ul>
              <li><strong>Reason</strong> about complex problems and break them into steps</li>
              <li><strong>Plan</strong> sequences of actions to achieve goals</li>
              <li><strong>Select and use</strong> appropriate tools for different situations</li>
              <li><strong>Maintain memory</strong> across interactions and plan executions</li>
              <li><strong>Adapt</strong> to changing circumstances and requirements</li>
            </ul>
          </div>
        </div>

        <div className="info-box">
          <img src="/llm/llm-capability.png" alt="LLM Capability" className="full-width-image"/>
        </div>
      </BlogSection>

      <BlogSection id="architecture" title="Agent Architectures">
        <div className="content-grid">
          <div className="content-card">
            <h3>ReAct Pattern</h3>
            <p>Reasoning and Acting in an alternating sequence</p>
            <div className="code-block">
              <pre>{`# ReAct Pattern Example
Thought: I need to find the weather
Action: check_weather("London")
Observation: 15°C and cloudy
Thought: Check weekend forecast
Action: check_forecast("London", days=2)`}</pre>
            </div>
          </div>

          <div className="content-card">
            <h3>Plan-and-Execute</h3>
            <p>Detailed planning before execution</p>
            <div className="code-block">
              <pre>{`# Plan-and-Execute Pattern
Plan:
1. Search company news
2. Get stock price history
3. Analyze correlation
4. Generate recommendation

Execute: search_news("Company X")`}</pre>
            </div>
          </div>

          <div className="content-card">
            <h3>Chain-of-Thought</h3>
            <p>Breaking down complex reasoning</p>
            <div className="code-block">
              <pre>{`# Chain-of-Thought
Problem: Calculate profit margin
Revenue: $120, Cost: $80
Step 1: Profit = $120 - $80 = $40
Step 2: Margin = $40 / $120
Result: 33.3% margin`}</pre>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="memory" title="Memory Systems in Agents">
        <div className="content-grid">
          <div className="content-card">
            <h3>Short-Term Memory</h3>
            <ul>
              <li>Conversation history</li>
              <li>Recent actions and observations</li>
              <li>Current task progress</li>
            </ul>
          </div>
          <div className="content-card">
            <h3>Long-Term Memory</h3>
            <ul>
              <li>Vector databases</li>
              <li>Semantic search</li>
              <li>User preferences</li>
              <li>Past interactions</li>
            </ul>
          </div>
          <div className="content-card">
            <h3>Working Memory</h3>
            <ul>
              <li>Intermediate calculations</li>
              <li>Temporary hypotheses</li>
              <li>Decision criteria</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="tools" title="Tools and Function Calling">
        <p className="tutorial-description">
          Agents gain their power through the ability to use tools via function calling.
          This allows the LLM to request specific actions be performed outside its text generation capabilities.
        </p>

        <div className="content-grid">
          <div className="content-card">
            <h3>API Access</h3>
            <ul>
              <li>Weather services</li>
              <li>Search engines</li>
              <li>Stock data</li>
              <li>Maps and location</li>
            </ul>
          </div>
          <div className="content-card">
            <h3>Data Operations</h3>
            <ul>
              <li>Database queries</li>
              <li>Data analysis</li>
              <li>File operations</li>
              <li>Content transformation</li>
            </ul>
          </div>
        </div>

        <div className="code-block">
          <pre>{`# Function Definition Example
{
  "name": "get_weather",
  "description": "Get current weather",
  "parameters": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "City name"
      },
      "unit": {
        "type": "string",
        "enum": ["celsius", "fahrenheit"]
      }
    },
    "required": ["location"]
  }
}`}</pre>
        </div>
      </BlogSection>

      <BlogSection id="use-cases" title="Advanced Use Cases">
        <div className="content-grid">
          <div className="content-card">
            <h3>Research Assistants</h3>
            <p>Search, compile, and summarize information from multiple sources</p>
            <div className="tags">
              <span className="tag">Web searching</span>
              <span className="tag">Document analysis</span>
              <span className="tag">Fact verification</span>
            </div>
          </div>

          <div className="content-card">
            <h3>Development Copilots</h3>
            <p>Help develop software by navigating and modifying codebases</p>
            <div className="tags">
              <span className="tag">Code generation</span>
              <span className="tag">Bug fixing</span>
              <span className="tag">Test writing</span>
            </div>
          </div>

          <div className="content-card">
            <h3>Autonomous Analysts</h3>
            <p>Process, visualize, and interpret complex datasets</p>
            <div className="tags">
              <span className="tag">Data cleaning</span>
              <span className="tag">Statistical analysis</span>
              <span className="tag">Visualization</span>
            </div>
          </div>
        </div>

        <div className="info-box">
          <h3>Ready to Build Your Own Agent?</h3>
          <p>
            Now that you understand the capabilities and architecture of LLM agents,
            take the next step in your learning journey.
          </p>
          <div className="button-group">
            <Link to="/BuildingLLMAgent" className="primary-button">
              Learn How to Build Agents →
            </Link>
            <Link to="/prompt-engineering" className="secondary-button">
              Master Prompt Engineering →
            </Link>
          </div>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default LLMAgent;