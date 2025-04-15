import React from 'react';
import { Link } from 'react-router-dom';
import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../../components/blogs/BlogComponents';
import CodeExample from '../../../../components/blogs/CodeExample';
import type { BlogCategory } from '../../../../data/blogData';

const AgentFunctionCalling: React.FC = () => {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'function-basics', title: 'Function Calling Basics' },
    { id: 'tool-usage', title: 'Tool Usage in Agents' },
    { id: 'implementation', title: 'Implementation Guide' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'advanced-patterns', title: 'Advanced Patterns' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  const category: BlogCategory = 'Agents';

  const functionDefExample = `{
  "name": "get_weather",
  "description": "Get current weather for a location",
  "parameters": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "City name or coordinates"
      },
      "units": {
        "type": "string",
        "enum": ["celsius", "fahrenheit"]
      }
    },
    "required": ["location"]
  }
}`;

  const agentImplementationExample = `import { OpenAI } from 'openai';
import { Tool } from './types';

class WeatherAgent {
  private tools: Tool[];
  private llm: OpenAI;

  constructor() {
    this.llm = new OpenAI();
    this.tools = [
      {
        name: 'get_weather',
        function: this.getWeather.bind(this),
        description: 'Get current weather for a location'
      }
    ];
  }

  async processQuery(query: string) {
    const response = await this.llm.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: query }],
      functions: this.tools.map(tool => ({
        name: tool.name,
        description: tool.description,
        parameters: tool.parameters
      }))
    });

    if (response.choices[0].function_call) {
      const functionCall = response.choices[0].function_call;
      const tool = this.tools.find(t => t.name === functionCall.name);
      
      if (tool) {
        const result = await tool.function(
          JSON.parse(functionCall.arguments)
        );
        return result;
      }
    }

    return response.choices[0].message.content;
  }
}`;

  const toolUsageExample = `// Define a tool with its interface
interface WeatherTool {
  name: string;
  description: string;
  function: (args: any) => Promise<any>;
  parameters: {
    type: string;
    properties: Record<string, any>;
    required: string[];
  };
}

// Implement the tool
const weatherTool: WeatherTool = {
  name: 'get_weather',
  description: 'Get current weather for a location',
  parameters: {
    type: 'object',
    properties: {
      location: {
        type: 'string',
        description: 'City name or coordinates'
      },
      units: {
        type: 'string',
        enum: ['celsius', 'fahrenheit']
      }
    },
    required: ['location']
  },
  function: async (args) => {
    const { location, units = 'celsius' } = args;
    // Implementation of weather fetching logic
    return { temperature: 25, units, location };
  }
};`;

  return (
    <BlogTemplate
      title="Function Calling and Tool Usage in AI Agents"
      date="April 15, 2025"
      readTime="15 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Function calling and tool usage are fundamental capabilities that enable AI
          agents to interact with external systems and perform specific tasks. This
          guide explores how to implement and utilize these features effectively in
          your AI agents.
        </p>

        <InfoBox type="tip" title="What You'll Learn">
          <ul>
            <li>Understanding function calling in AI agents</li>
            <li>Implementing custom tools</li>
            <li>Best practices for tool design</li>
            <li>Advanced patterns and error handling</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="function-basics" title="Function Calling Basics">
        <p>
          Function calling allows AI agents to invoke specific functions based on
          user input or task requirements. Here's how to define a function:
        </p>

        <CodeExample
          language="json"
          code={functionDefExample}
          title="Function Definition"
          showLineNumbers={true}
        />

        <InfoBox type="note" title="Key Components">
          <ul>
            <li>Function name and description</li>
            <li>Parameter specifications</li>
            <li>Type definitions</li>
            <li>Required fields</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="tool-usage" title="Tool Usage in Agents">
        <p>
          Tools are higher-level abstractions of functions that include
          implementation details and error handling:
        </p>

        <CodeExample
          language="typescript"
          code={toolUsageExample}
          title="Tool Implementation"
          showLineNumbers={true}
        />

        <InfoBox type="tip" title="Tool Design Tips">
          <ul>
            <li>Keep tools focused and single-purpose</li>
            <li>Include clear error handling</li>
            <li>Document input/output formats</li>
            <li>Consider rate limiting</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="implementation" title="Implementation Guide">
        <p>
          Here's a complete implementation of an agent with function calling
          capabilities:
        </p>

        <CodeExample
          language="typescript"
          code={agentImplementationExample}
          title="Agent Implementation"
          showLineNumbers={true}
        />

        <InfoBox type="warning" title="Implementation Considerations">
          <ul>
            <li>Proper error handling</li>
            <li>Input validation</li>
            <li>Response formatting</li>
            <li>Tool registration system</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="best-practices" title="Best Practices">
        <h3>Tool Design Principles</h3>
        <ul>
          <li>Keep tools atomic and focused</li>
          <li>Implement proper error handling</li>
          <li>Document tool capabilities clearly</li>
          <li>Include validation and safety checks</li>
        </ul>

        <h3>Error Handling</h3>
        <ul>
          <li>Validate inputs before execution</li>
          <li>Provide meaningful error messages</li>
          <li>Implement fallback mechanisms</li>
          <li>Log errors for debugging</li>
        </ul>

        <InfoBox type="note" title="Security Considerations">
          <ul>
            <li>Implement access controls</li>
            <li>Validate user inputs</li>
            <li>Rate limit tool usage</li>
            <li>Monitor for abuse</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="advanced-patterns" title="Advanced Patterns">
        <h3>Tool Composition</h3>
        <p>
          Combine multiple tools to create more complex workflows:
        </p>
        <ul>
          <li>Sequential tool execution</li>
          <li>Conditional tool selection</li>
          <li>Parallel tool execution</li>
          <li>Tool result aggregation</li>
        </ul>

        <h3>Dynamic Tool Loading</h3>
        <p>
          Implement dynamic tool discovery and loading:
        </p>
        <ul>
          <li>Plugin system architecture</li>
          <li>Tool versioning</li>
          <li>Hot-reloading capabilities</li>
        </ul>
      </BlogSection>

      <BlogSection id="next-steps" title="Next Steps">
        <p>
          Continue your learning journey with these related topics:
        </p>

        <div className="resource-links">
          <Link to="/blogs/agents/agent-architectures" className="resource-link">
            Agent Architectures Guide →
          </Link>
          <Link to="/blogs/agents/memory-in-agents" className="resource-link">
            Memory in Agents →
          </Link>
          <Link to="/blogs/agents/tools-and-frameworks" className="resource-link">
            Agent Tools & Frameworks →
          </Link>
        </div>

        <InfoBox type="success" title="Keep Learning">
          <p>
            Function calling and tool usage are just the beginning. Explore more
            advanced topics like agent architectures and memory systems to build
            more sophisticated AI agents.
          </p>
        </InfoBox>
      </BlogSection>
    </BlogTemplate>
  );
};

export default AgentFunctionCalling;