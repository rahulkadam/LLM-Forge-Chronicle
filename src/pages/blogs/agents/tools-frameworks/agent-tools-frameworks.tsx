import React from 'react';
import { Link } from 'react-router-dom';
import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../../components/blogs/BlogComponents';
import CodeExample from '../../../../components/blogs/CodeExample';
import type { BlogCategory } from '../../../../data/blogData';

const AgentToolsFrameworks: React.FC = () => {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'langgraph', title: 'LangGraph Framework' },
    { id: 'autogen', title: 'AutoGen Framework' },
    { id: 'crewai', title: 'CrewAI' },
    { id: 'camel', title: 'CAMEL Framework' },
    { id: 'openagents', title: 'OpenAgents Platform' },
    { id: 'comparison', title: 'Framework Comparison' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  const category: BlogCategory = 'Agents';

  const langGraphExample = `from langgraph.graph import Graph
from langgraph.prebuilt.tool_nodes import ToolNode

# Define agent nodes
planner = ToolNode("planner", tools=[create_plan])
executor = ToolNode("executor", tools=[execute_step])
validator = ToolNode("validator", tools=[validate_result])

# Create graph
graph = Graph()
graph.add_node(planner)
graph.add_node(executor)
graph.add_node(validator)

# Define edges
graph.add_edge(planner, executor)
graph.add_edge(executor, validator)
graph.add_edge(validator, planner, condition="needs_replanning")

# Build and run
agent = graph.compile()
result = agent.run(task="Analyze market data")`;

  const autoGenExample = `from autogen import AssistantAgent, UserProxyAgent

# Create agents
assistant = AssistantAgent(
    name="assistant",
    llm_config={
        "model": "gpt-4",
        "temperature": 0.7
    }
)

user_proxy = UserProxyAgent(
    name="user_proxy",
    human_input_mode="NEVER",
    max_consecutive_auto_reply=10
)

# Create chat and task execution
task = "Analyze the latest market trends"
user_proxy.initiate_chat(
    assistant,
    message=task
)`;

  const crewAIExample = `from crewai import Agent, Task, Crew

# Create specialized agents
researcher = Agent(
    role="Researcher",
    goal="Find and analyze market data",
    backstory="Expert market researcher with 10 years experience",
    tools=[search_tool, analyze_tool]
)

analyst = Agent(
    role="Analyst",
    goal="Interpret market trends",
    backstory="Senior market analyst specializing in trend analysis",
    tools=[interpret_tool, visualize_tool]
)

# Create tasks
research_task = Task(
    description="Gather latest market data",
    agent=researcher
)

analysis_task = Task(
    description="Analyze market trends",
    agent=analyst
)

# Create and run crew
crew = Crew(
    agents=[researcher, analyst],
    tasks=[research_task, analysis_task]
)

result = crew.kickoff()`;

  return (
    <BlogTemplate
      title="Agent Development Tools and Frameworks: A Comprehensive Guide"
      date="April 12, 2025"
      readTime="15 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Modern AI agent development is supported by a rich ecosystem of tools
          and frameworks. This guide explores the most popular frameworks and
          helps you choose the right one for your project.
        </p>

        <InfoBox type="tip" title="What You'll Learn">
          <ul>
            <li>Understanding major agent frameworks</li>
            <li>Implementing agents with different tools</li>
            <li>Comparing framework features</li>
            <li>Best practices for framework selection</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="langgraph" title="LangGraph Framework">
        <p>
          LangGraph provides a graph-based approach to building complex agent
          workflows:
        </p>

        <CodeExample
          language="python"
          code={langGraphExample}
          title="LangGraph Implementation"
          showLineNumbers={true}
        />

        <InfoBox type="note" title="Key Features">
          <ul>
            <li>Graph-based workflow definition</li>
            <li>Modular component design</li>
            <li>Built-in tool integration</li>
            <li>Flow visualization</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="autogen" title="AutoGen Framework">
        <p>
          AutoGen simplifies the creation of conversational agents:
        </p>

        <CodeExample
          language="python"
          code={autoGenExample}
          title="AutoGen Implementation"
          showLineNumbers={true}
        />

        <InfoBox type="tip" title="AutoGen Benefits">
          <ul>
            <li>Easy agent creation</li>
            <li>Flexible conversation flows</li>
            <li>Built-in LLM integration</li>
            <li>Automated response handling</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="crewai" title="CrewAI">
        <p>
          CrewAI enables the creation of collaborative agent teams:
        </p>

        <CodeExample
          language="python"
          code={crewAIExample}
          title="CrewAI Implementation"
          showLineNumbers={true}
        />

        <InfoBox type="note" title="CrewAI Features">
          <ul>
            <li>Role-based agent design</li>
            <li>Task orchestration</li>
            <li>Team collaboration</li>
            <li>Process management</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="camel" title="CAMEL Framework">
        <h3>Key Features</h3>
        <ul>
          <li>Role-playing capabilities</li>
          <li>Task decomposition</li>
          <li>Collaborative problem-solving</li>
          <li>Flexible agent interactions</li>
        </ul>

        <h3>Use Cases</h3>
        <ul>
          <li>Complex task solving</li>
          <li>Multi-agent collaboration</li>
          <li>Role-based scenarios</li>
          <li>Educational applications</li>
        </ul>
      </BlogSection>

      <BlogSection id="openagents" title="OpenAgents Platform">
        <h3>Platform Features</h3>
        <ul>
          <li>Open-source agent templates</li>
          <li>Community-driven development</li>
          <li>Extensible architecture</li>
          <li>Pre-built integrations</li>
        </ul>

        <h3>Development Workflow</h3>
        <ul>
          <li>Agent customization</li>
          <li>Tool integration</li>
          <li>Deployment options</li>
          <li>Community support</li>
        </ul>
      </BlogSection>

      <BlogSection id="comparison" title="Framework Comparison">
        <h3>Feature Comparison</h3>
        <table>
          <thead>
            <tr>
              <th>Framework</th>
              <th>Best For</th>
              <th>Learning Curve</th>
              <th>Scalability</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>LangGraph</td>
              <td>Complex workflows</td>
              <td>Medium</td>
              <td>High</td>
            </tr>
            <tr>
              <td>AutoGen</td>
              <td>Quick prototypes</td>
              <td>Low</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>CrewAI</td>
              <td>Team collaboration</td>
              <td>Medium</td>
              <td>High</td>
            </tr>
            <tr>
              <td>CAMEL</td>
              <td>Role-playing</td>
              <td>Medium</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>OpenAgents</td>
              <td>Community projects</td>
              <td>Low</td>
              <td>High</td>
            </tr>
          </tbody>
        </table>

        <InfoBox type="warning" title="Selection Criteria">
          <ul>
            <li>Project requirements</li>
            <li>Development timeline</li>
            <li>Team expertise</li>
            <li>Scalability needs</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="next-steps" title="Next Steps">
        <p>
          Continue your learning journey with these related topics:
        </p>

        <div className="resource-links">
          <Link to="/blogs/agents/architectures" className="resource-link">
            Agent Architectures →
          </Link>
          <Link to="/blogs/agents/memory" className="resource-link">
            Memory in Agents →
          </Link>
          <Link to="/blogs/agents/agent-evaluation" className="resource-link">
            Agent Evaluation →
          </Link>
        </div>

        <InfoBox type="success" title="Keep Learning">
          <p>
            Each framework has its strengths and ideal use cases. Experiment
            with different options to find the best fit for your specific needs.
          </p>
        </InfoBox>
      </BlogSection>
    </BlogTemplate>
  );
};

export default AgentToolsFrameworks;