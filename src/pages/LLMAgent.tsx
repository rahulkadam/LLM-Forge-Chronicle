import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LLMAgent.css';

const LLMAgent: React.FC = () => {
  return (
      <div className="llm-agent">
        <h1>Advanced LLM Capabilities & Agent Systems</h1>

        <section className="intro-section">
          <p className="intro-text">
            Building on the fundamentals of Large Language Models covered in our <Link to="/ai-basics">LLM
            Fundamentals</Link> guide,
            this section explores how LLMs can be extended into agent systems capable of more complex, autonomous
            actions.
          </p>
        </section>

        <section className="agent-section">
          <h2>From Basic LLMs to Agents</h2>
          <div className="content-card">
            <h3>The Progression of Capabilities</h3>
            <div className="progression-chart">
              <div className="progression-step">
                <div className="step-icon">💬</div>
                <h4>Basic LLM</h4>
                <p>Text completion and generation based purely on prompt input</p>
              </div>
              <div className="progression-arrow">→</div>
              <div className="progression-step">
                <div className="step-icon">🔍</div>
                <h4>LLM with Tools</h4>
                <p>Ability to call external functions and APIs to access information</p>
              </div>
              <div className="progression-arrow">→</div>
              <div className="progression-step">
                <div className="step-icon">🤖</div>
                <h4>Full Agent System</h4>
                <p>Autonomous planning, tool selection, and execution of complex tasks</p>
              </div>
            </div>
          </div>
        </section>

        <section className="agent-section">
          <h2>What Makes an LLM into an Agent?</h2>
          <div className="content-card">
            <p>
              Unlike basic LLMs that simply generate text, agents are systems that can take actions in the world.
              They combine LLMs with additional capabilities to create autonomous systems that can:
            </p>
            <div className="key-points">
              <ul>
                <li><strong>Reason</strong> about complex problems and break them into steps</li>
                <li><strong>Plan</strong> sequences of actions to achieve goals</li>
                <li><strong>Select and use</strong> appropriate tools for different situations</li>
                <li><strong>Maintain memory</strong> across interactions and plan executions</li>
                <li><strong>Adapt</strong> to changing circumstances and requirements</li>
              </ul>
            </div>
          </div>
        </section>
        <div className="parameter-image-container">
          <img src="/llm/llm-capability.png" alt="LLM Capability" className="full-width-image"/>
        </div>
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
              <div className="code-example">
              <pre><code>
{`# ReAct Pattern
Thought: I need to find the weather in London
Action: check_weather("London")
Observation: It's currently 15°C and cloudy
Thought: User asked for weekend forecast too
Action: check_forecast("London", days=2)
...`}
              </code></pre>
              </div>
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
              <div className="code-example">
              <pre><code>
{`# Plan-and-Execute Pattern
Plan:
1. Search for recent news on company X
2. Get stock price history for company X
3. Analyze correlation between news and price
4. Generate investment recommendation

Execution:
Step 1: search_news("Company X", days=7)
...`}
              </code></pre>
              </div>
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
              <div className="code-example">
              <pre><code>
{`# Chain-of-Thought
Problem: Calculate profit margin of $120 revenue
         with $80 cost.
Step 1: Profit = Revenue - Cost = $120 - $80 = $40
Step 2: Margin = Profit / Revenue = $40 / $120
Step 3: Convert to percentage: 0.333... = 33.3%
Answer: The profit margin is 33.3%`}
              </code></pre>
              </div>
            </div>
          </div>
        </section>

        <section className="agent-section">
          <h2>Memory Systems in Agents</h2>
          <div className="memory-types">
            <div className="memory-card">
              <h3>Short-Term Memory</h3>
              <p>Maintains context within a single conversation or task execution</p>
              <ul>
                <li>Conversation history</li>
                <li>Recent actions and observations</li>
                <li>Current task progress</li>
              </ul>
            </div>
            <div className="memory-card">
              <h3>Long-Term Memory</h3>
              <p>Persists information across multiple sessions</p>
              <ul>
                <li>Vector databases</li>
                <li>Semantic search</li>
                <li>User preferences</li>
                <li>Past interactions</li>
              </ul>
            </div>
            <div className="memory-card">
              <h3>Working Memory</h3>
              <p>Manages active information needed for current reasoning</p>
              <ul>
                <li>Intermediate calculations</li>
                <li>Temporary hypotheses</li>
                <li>Decision criteria</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="agent-section">
          <h2>Tools and Function Calling</h2>
          <div className="tools-explanation">
            <p>
              Agents gain their power through the ability to use tools via function calling.
              This allows the LLM to request specific actions be performed outside its text generation capabilities.
            </p>
            <div className="tool-examples">
              <div className="tool-card">
                <h3>API Access</h3>
                <ul>
                  <li>Weather services</li>
                  <li>Search engines</li>
                  <li>Stock data</li>
                  <li>Maps and location</li>
                </ul>
              </div>
              <div className="tool-card">
                <h3>Data Operations</h3>
                <ul>
                  <li>Database queries</li>
                  <li>Data analysis</li>
                  <li>File operations</li>
                  <li>Content transformation</li>
                </ul>
              </div>
              <div className="tool-card">
                <h3>System Actions</h3>
                <ul>
                  <li>Process management</li>
                  <li>Network operations</li>
                  <li>Authentication</li>
                  <li>Email/messaging</li>
                </ul>
              </div>
            </div>
            <div className="code-example">
              <h4>Function Calling Example:</h4>
              <pre><code>
{`# Function calling in LLM Agents
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
# result: {"name": "get_weather", "arguments": "{"location": "Boston, MA", "unit": "celsius"}"}
`}
            </code></pre>
            </div>
          </div>
        </section>

        <section className="agent-section">
          <h2>Advanced Use Cases</h2>
          <div className="use-cases">
            <div className="use-case-card">
              <h3>Research Assistants</h3>
              <p>Agents that can search multiple sources, compile information, and generate summaries or reports</p>
              <div className="capabilities">
                <span className="capability-tag">Web searching</span>
                <span className="capability-tag">Document analysis</span>
                <span className="capability-tag">Fact verification</span>
                <span className="capability-tag">Citation management</span>
              </div>
            </div>

            <div className="use-case-card">
              <h3>Development Copilots</h3>
              <p>Coding assistants that can help develop software by navigating codebases and making changes</p>
              <div className="capabilities">
                <span className="capability-tag">Code generation</span>
                <span className="capability-tag">Bug fixing</span>
                <span className="capability-tag">Code explanations</span>
                <span className="capability-tag">Test writing</span>
              </div>
            </div>

            <div className="use-case-card">
              <h3>Autonomous Analysts</h3>
              <p>Data analysis agents that can process, visualize, and interpret complex datasets</p>
              <div className="capabilities">
                <span className="capability-tag">Data cleaning</span>
                <span className="capability-tag">Statistical analysis</span>
                <span className="capability-tag">Visualization</span>
                <span className="capability-tag">Insight generation</span>
              </div>
            </div>
          </div>
        </section>

        <section className="agent-section cta-section">
          <h2>Ready to Build Your Own Agent?</h2>
          <p>
            Now that you understand the capabilities and architecture of LLM agents,
            take the next step in your learning journey.
          </p>
          <div className="cta-buttons">
            <Link to="/BuildingLLMAgent" className="primary-button">
              Learn How to Build Agents →
            </Link>
            <Link to="/prompt-engineering" className="secondary-button">
              Master Prompt Engineering →
            </Link>
          </div>
        </section>
      </div>
  );
};

export default LLMAgent;
