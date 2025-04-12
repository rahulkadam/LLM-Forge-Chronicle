import React from 'react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../components/blogs/BlogComponents';
import useBlogBehavior from '../../../hooks/useBlogBehavior';
import type { BlogCategory } from '../../../data/blogData';
import '../../../styles/blogs/blog-layout-update.css';
import './llm-fundamentals.css';

const LLMCapabilities: React.FC = () => {
  useBlogBehavior();

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'progression', title: 'From LLMs to Agents' },
    { id: 'architectures', title: 'Agent Architectures' },
    { id: 'memory-systems', title: 'Memory Systems' },
    { id: 'tools', title: 'Tools and Function Calling' },
    { id: 'use-cases', title: 'Advanced Use Cases' }
  ];

  const category: BlogCategory = 'Fundamentals';

  return (
    <BlogTemplate
      title="Advanced LLM Capabilities & Agent Systems"
      date="April 12, 2025"
      readTime="15 min"
      category={category}
      bannerClassName="llm-capabilities-banner"
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Building on the fundamentals of Large Language Models, we explore how LLMs can be extended into 
          agent systems capable of more complex, autonomous actions.
        </p>

        <div className="parameter-image-container">
          <img src="/llm/llm-capability.png" alt="LLM Capability" className="full-width-image"/>
        </div>
      </BlogSection>

      <BlogSection id="progression" title="From LLMs to Agents">
        <h3>The Progression of Capabilities</h3>
        <InfoBox type="tip" title="Evolution Steps">
          <ul>
            <li><strong>Basic LLM:</strong> Text completion and generation based purely on prompt input</li>
            <li><strong>LLM with Tools:</strong> Ability to call external functions and APIs to access information</li>
            <li><strong>Full Agent System:</strong> Autonomous planning, tool selection, and execution of complex tasks</li>
          </ul>
        </InfoBox>

        <h3>What Makes an LLM into an Agent?</h3>
        <p>
          Unlike basic LLMs that simply generate text, agents are systems that can take actions in the world.
          They combine LLMs with additional capabilities to create autonomous systems.
        </p>
        <InfoBox type="tip" title="Key Capabilities">
          <ul>
            <li><strong>Reason</strong> about complex problems and break them into steps</li>
            <li><strong>Plan</strong> sequences of actions to achieve goals</li>
            <li><strong>Select and use</strong> appropriate tools for different situations</li>
            <li><strong>Maintain memory</strong> across interactions and plan executions</li>
            <li><strong>Adapt</strong> to changing circumstances and requirements</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="architectures" title="Agent Architectures">
        <h3>ReAct Pattern</h3>
        <p>Reasoning and Acting in an alternating sequence</p>
        <div className="code-block">
          <pre>{`# ReAct Pattern
Thought: I need to find the weather in London
Action: check_weather("London")
Observation: It's currently 15°C and cloudy
Thought: User asked for weekend forecast too
Action: check_forecast("London", days=2)
...`}</pre>
        </div>

        <h3>Plan-and-Execute</h3>
        <p>Detailed planning before execution</p>
        <div className="code-block">
          <pre>{`# Plan-and-Execute Pattern
Plan:
1. Search for recent news on company X
2. Get stock price history for company X
3. Analyze correlation between news and price
4. Generate investment recommendation

Execution:
Step 1: search_news("Company X", days=7)
...`}</pre>
        </div>

        <h3>Chain-of-Thought</h3>
        <p>Breaking down complex reasoning</p>
        <div className="code-block">
          <pre>{`# Chain-of-Thought
Problem: Calculate profit margin of $120 revenue with $80 cost.
Step 1: Profit = Revenue - Cost = $120 - $80 = $40
Step 2: Margin = Profit / Revenue = $40 / $120
Step 3: Convert to percentage: 0.333... = 33.3%
Answer: The profit margin is 33.3%`}</pre>
        </div>
      </BlogSection>

      <BlogSection id="memory-systems" title="Memory Systems in Agents">
        <InfoBox type="tip" title="Types of Memory">
          <h4>Short-Term Memory</h4>
          <ul>
            <li>Conversation history</li>
            <li>Recent actions and observations</li>
            <li>Current task progress</li>
          </ul>

          <h4>Long-Term Memory</h4>
          <ul>
            <li>Vector databases</li>
            <li>Semantic search</li>
            <li>User preferences</li>
            <li>Past interactions</li>
          </ul>

          <h4>Working Memory</h4>
          <ul>
            <li>Intermediate calculations</li>
            <li>Temporary hypotheses</li>
            <li>Decision criteria</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="tools" title="Tools and Function Calling">
        <p>
          Agents gain their power through the ability to use tools via function calling.
          This allows the LLM to request specific actions be performed outside its text generation capabilities.
        </p>

        <div className="code-block">
          <pre>{`# Function calling in LLM Agents
functions = [
  {
    "name": "get_weather",
    "description": "Get current weather in a location",
    "parameters": {
      "type": "object",
      "properties": {
        "location": {
          "type": "string",
          "description": "City and state, e.g. San Francisco, CA"
        },
        "unit": {
          "type": "string",
          "enum": ["celsius", "fahrenheit"]
        }
      },
      "required": ["location"]
    }
  }
]

# Agent can now call this function when needed
# result: {"name": "get_weather", "arguments": "{"location": "Boston, MA", "unit": "celsius"}"}`}</pre>
        </div>

        <InfoBox type="tip" title="Tool Categories">
          <div className="tool-examples">
            <h4>API Access</h4>
            <ul>
              <li>Weather services</li>
              <li>Search engines</li>
              <li>Stock data</li>
              <li>Maps and location</li>
            </ul>

            <h4>Data Operations</h4>
            <ul>
              <li>Database queries</li>
              <li>Data analysis</li>
              <li>File operations</li>
              <li>Content transformation</li>
            </ul>

            <h4>System Actions</h4>
            <ul>
              <li>Process management</li>
              <li>Network operations</li>
              <li>Authentication</li>
              <li>Email/messaging</li>
            </ul>
          </div>
        </InfoBox>
      </BlogSection>

      <BlogSection id="use-cases" title="Advanced Use Cases">
        <h3>Research Assistants</h3>
        <InfoBox type="tip" title="Capabilities">
          <ul>
            <li>Web searching</li>
            <li>Document analysis</li>
            <li>Fact verification</li>
            <li>Citation management</li>
          </ul>
        </InfoBox>

        <h3>Development Copilots</h3>
        <InfoBox type="tip" title="Capabilities">
          <ul>
            <li>Code generation</li>
            <li>Bug fixing</li>
            <li>Code explanations</li>
            <li>Test writing</li>
          </ul>
        </InfoBox>

        <h3>Autonomous Analysts</h3>
        <InfoBox type="tip" title="Capabilities">
          <ul>
            <li>Data cleaning</li>
            <li>Statistical analysis</li>
            <li>Visualization</li>
            <li>Insight generation</li>
          </ul>
        </InfoBox>

        <div className="next-steps-grid">
          <Link to="/BuildingLLMAgent" className="next-step-card">
            Learn How to Build Agents →
          </Link>
          <Link to="/prompt-engineering" className="next-step-card">
            Master Prompt Engineering →
          </Link>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default LLMCapabilities;