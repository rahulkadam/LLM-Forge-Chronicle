import React from 'react';
import '../styles/BuildingLLMAgent.css';

const BuildingLLMAgent: React.FC = () => {
  return (
    <div className="building-llm">
      <section className="hero">
        <h1>Building LLM Agents</h1>
        <p className="subtitle">A comprehensive guide to creating custom LLM agents</p>
      </section>

      <section className="guide-section">
        <h2>Development Environment Setup</h2>
        <div className="setup-grid">
          <div className="setup-card">
            <h3>Prerequisites</h3>
            <ul>
              <li>Python 3.8+ installed</li>
              <li>OpenAI/Azure API access</li>
              <li>Development IDE</li>
              <li>Git for version control</li>
            </ul>
          </div>

          <div className="setup-card">
            <h3>Required Libraries</h3>
            <pre className="code-block">
{`pip install langchain openai python-dotenv
pip install requests numpy pandas
pip install pytest pytest-cov`}
            </pre>
          </div>

          <div className="setup-card">
            <h3>Environment Configuration</h3>
            <pre className="code-block">
{`# .env file
OPENAI_API_KEY=your_api_key
MODEL_NAME=gpt-4
TEMPERATURE=0.7
MAX_TOKENS=1000`}
            </pre>
          </div>
        </div>
      </section>

      <section className="guide-section">
        <h2>Basic Agent Structure</h2>
        <div className="code-example">
          <h3>Core Agent Components</h3>
          <pre className="code-block">
{`from langchain.agents import Tool, AgentExecutor, LLMSingleActionAgent
from langchain.prompts import StringPromptTemplate
from typing import List, Union, Optional

class CustomAgent:
    def __init__(self, llm, tools: List[Tool]):
        self.llm = llm
        self.tools = tools
        self.memory = []

    def run(self, input_text: str) -> str:
        # Process input
        response = self._process_input(input_text)
        # Execute action
        result = self._execute_action(response)
        # Update memory
        self._update_memory(input_text, result)
        return result`}
          </pre>
        </div>
      </section>

      <section className="guide-section">
        <h2>Tool Integration</h2>
        <div className="tool-grid">
          <div className="tool-card">
            <h3>Custom Tool Definition</h3>
            <pre className="code-block">
{`class CustomTool(BaseTool):
    name = "custom_tool"
    description = "Tool description"

    def _run(self, query: str) -> str:
        # Implementation
        return result

    def _arun(self, query: str) -> str:
        # Async implementation
        return result`}
            </pre>
          </div>

          <div className="tool-card">
            <h3>Tool Registration</h3>
            <pre className="code-block">
{`tools = [
    Tool(
        name="search",
        func=search_tool.run,
        description="useful for searching"
    ),
    Tool(
        name="calculator",
        func=calculator_tool.run,
        description="useful for calculations"
    )
]`}
            </pre>
          </div>
        </div>
      </section>

      <section className="guide-section">
        <h2>Prompt Engineering</h2>
        <div className="prompt-examples">
          <div className="prompt-card">
            <h3>Basic Prompt Template</h3>
            <pre className="code-block">
{`PROMPT_TEMPLATE = """
You are an AI assistant with access to the following tools:
{tools}

User request: {input}

Think about this step by step:
1) Analyze the request
2) Choose the appropriate tool
3) Execute the action
4) Provide the response

Thought process:"""}`}
            </pre>
          </div>

          <div className="prompt-card">
            <h3>Response Format</h3>
            <pre className="code-block">
{`{
    "thoughts": {
        "analysis": "string",
        "plan": "string",
        "criticism": "string"
    },
    "action": "tool_name",
    "action_input": "string"
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="guide-section">
        <h2>Memory Implementation</h2>
        <div className="memory-examples">
          <div className="memory-card">
            <h3>Basic Memory System</h3>
            <pre className="code-block">
{`class AgentMemory:
    def __init__(self, max_tokens=1000):
        self.conversations = []
        self.max_tokens = max_tokens

    def add_interaction(self, input_text, output_text):
        self.conversations.append({
            "input": input_text,
            "output": output_text,
            "timestamp": datetime.now()
        })

    def get_relevant_history(self, query):
        # Implement relevance scoring
        return relevant_conversations`}
            </pre>
          </div>

          <div className="memory-card">
            <h3>Memory Integration</h3>
            <pre className="code-block">
{`def process_with_memory(self, input_text):
    # Get relevant history
    history = self.memory.get_relevant_history(input_text)
    
    # Combine with current input
    context = self._create_context(history, input_text)
    
    # Process with LLM
    response = self.llm(context)
    
    # Update memory
    self.memory.add_interaction(input_text, response)
    
    return response`}
            </pre>
          </div>
        </div>
      </section>

      <section className="guide-section">
        <h2>Testing Framework</h2>
        <div className="testing-grid">
          <div className="test-card">
            <h3>Unit Tests</h3>
            <pre className="code-block">
{`def test_agent_response():
    agent = CustomAgent(llm, tools)
    response = agent.run("test query")
    assert isinstance(response, str)
    assert len(response) > 0

def test_tool_execution():
    tool = CustomTool()
    result = tool.run("test input")
    assert result is not None`}
            </pre>
          </div>

          <div className="test-card">
            <h3>Integration Tests</h3>
            <pre className="code-block">
{`def test_end_to_end():
    # Setup
    agent = CustomAgent(llm, tools)
    memory = AgentMemory()
    
    # Test sequence
    responses = []
    for query in test_queries:
        response = agent.run(query)
        responses.append(response)
    
    # Verify
    assert all(responses)
    assert memory.conversations`}
            </pre>
          </div>
        </div>
      </section>

      <section className="guide-section">
        <h2>Deployment Best Practices</h2>
        <div className="deployment-grid">
          <div className="deployment-card">
            <h3>Error Handling</h3>
            <ul>
              <li>Implement comprehensive error handling</li>
              <li>Add retry mechanisms for API calls</li>
              <li>Log errors and exceptions</li>
              <li>Provide meaningful error messages</li>
            </ul>
          </div>

          <div className="deployment-card">
            <h3>Monitoring</h3>
            <ul>
              <li>Track API usage and costs</li>
              <li>Monitor response times</li>
              <li>Log user interactions</li>
              <li>Set up alerts for issues</li>
            </ul>
          </div>

          <div className="deployment-card">
            <h3>Scaling</h3>
            <ul>
              <li>Implement caching mechanisms</li>
              <li>Use async where possible</li>
              <li>Configure rate limiting</li>
              <li>Optimize resource usage</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="guide-section">
        <h2>Advanced Topics</h2>
        <div className="topics-grid">
          <div className="topic-card">
            <h3>Chain of Thought</h3>
            <p>Implementing sophisticated reasoning patterns</p>
            <ul>
              <li>Step-by-step reasoning</li>
              <li>Decision trees</li>
              <li>Verification steps</li>
            </ul>
          </div>

          <div className="topic-card">
            <h3>Tool Composition</h3>
            <p>Combining multiple tools effectively</p>
            <ul>
              <li>Tool chaining</li>
              <li>Result aggregation</li>
              <li>Error handling</li>
            </ul>
          </div>

          <div className="topic-card">
            <h3>Performance Optimization</h3>
            <p>Improving agent efficiency</p>
            <ul>
              <li>Prompt optimization</li>
              <li>Caching strategies</li>
              <li>Resource management</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildingLLMAgent;