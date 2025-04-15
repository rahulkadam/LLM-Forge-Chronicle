import React from 'react';
import { Link } from 'react-router-dom';
import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../../components/blogs/BlogComponents';
import CodeExample from '../../../../components/blogs/CodeExample';
import type { BlogCategory } from '../../../../data/blogData';

const AgentArchitectures: React.FC = () => {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'react-pattern', title: 'ReAct Pattern' },
    { id: 'plan-execute', title: 'Plan & Execute' },
    { id: 'role-based', title: 'Role-based Agents' },
    { id: 'implementation', title: 'Implementation Guide' },
    { id: 'comparison', title: 'Architecture Comparison' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  const category: BlogCategory = 'Agents';

  const reactPatternExample = `class ReActAgent {
  async process(task: string) {
    let context = [];
    while (true) {
      // Reason about the current state
      const reasoning = await this.reason(task, context);
      context.push({ type: 'reasoning', content: reasoning });

      // Decide on action
      const action = await this.decideAction(reasoning);
      context.push({ type: 'action', content: action });

      // Execute action and observe
      const observation = await this.executeAction(action);
      context.push({ type: 'observation', content: observation });

      // Check if task is complete
      if (await this.isTaskComplete(context)) {
        break;
      }
    }
    
    return this.generateFinalResponse(context);
  }
}`;

  const planExecuteExample = `class PlanExecuteAgent {
  async solve(task: string) {
    // Generate plan
    const plan = await this.createPlan(task);
    
    // Execute steps
    const results = [];
    for (const step of plan.steps) {
      const result = await this.executeStep(step);
      results.push(result);
      
      // Adjust plan if needed
      if (result.requiresReplanning) {
        return this.solve(task); // Recursive replanning
      }
    }
    
    return this.summarizeResults(results);
  }
}`;

  const roleBasedExample = `interface AgentRole {
  name: string;
  capabilities: string[];
  constraints: string[];
  objectives: string[];
}

class RoleBasedAgent {
  private role: AgentRole;
  private collaborators: Map<string, AgentRole>;

  constructor(role: AgentRole) {
    this.role = role;
    this.collaborators = new Map();
  }

  async processTask(task: string) {
    // Check if task aligns with role
    if (!this.canHandleTask(task)) {
      return this.delegateTask(task);
    }

    // Process within role constraints
    const result = await this.executeWithinRole(task);
    
    // Validate against role objectives
    return this.validateResult(result);
  }
}`;

  return (
    <BlogTemplate
      title="Agent Architectures: ReAct, Plan & Execute, and Role-based Approaches"
      date="April 14, 2025"
      readTime="15 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Agent architectures define how AI agents process information, make
          decisions, and execute actions. This guide explores three popular
          architectures: ReAct, Plan & Execute, and Role-based approaches.
        </p>

        <InfoBox type="tip" title="What You'll Learn">
          <ul>
            <li>Understanding different agent architectures</li>
            <li>Implementing each architecture type</li>
            <li>Choosing the right architecture</li>
            <li>Best practices and patterns</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="react-pattern" title="ReAct Pattern">
        <p>
          The ReAct pattern combines reasoning and acting in a continuous loop,
          making it effective for complex problem-solving tasks.
        </p>

        <CodeExample
          language="typescript"
          code={reactPatternExample}
          title="ReAct Pattern Implementation"
          showLineNumbers={true}
        />

        <InfoBox type="note" title="ReAct Components">
          <ul>
            <li>Reasoning: Analyze current state</li>
            <li>Acting: Execute chosen action</li>
            <li>Observing: Monitor results</li>
            <li>Iterative improvement</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="plan-execute" title="Plan & Execute">
        <p>
          The Plan & Execute architecture separates planning from execution,
          allowing for more structured problem-solving:
        </p>

        <CodeExample
          language="typescript"
          code={planExecuteExample}
          title="Plan & Execute Implementation"
          showLineNumbers={true}
        />

        <InfoBox type="tip" title="Key Features">
          <ul>
            <li>Explicit planning phase</li>
            <li>Sequential execution</li>
            <li>Dynamic replanning</li>
            <li>Progress tracking</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="role-based" title="Role-based Agents">
        <p>
          Role-based architectures define agent behavior through specific roles
          and responsibilities:
        </p>

        <CodeExample
          language="typescript"
          code={roleBasedExample}
          title="Role-based Agent Implementation"
          showLineNumbers={true}
        />

        <InfoBox type="note" title="Role Elements">
          <ul>
            <li>Clear responsibilities</li>
            <li>Defined constraints</li>
            <li>Collaboration patterns</li>
            <li>Objective alignment</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="implementation" title="Implementation Guide">
        <h3>Architecture Selection</h3>
        <ul>
          <li>ReAct: Best for complex, dynamic tasks</li>
          <li>Plan & Execute: Ideal for structured problems</li>
          <li>Role-based: Perfect for collaborative systems</li>
        </ul>

        <h3>Implementation Steps</h3>
        <ol>
          <li>Define agent objectives</li>
          <li>Choose appropriate architecture</li>
          <li>Implement core components</li>
          <li>Add monitoring and logging</li>
          <li>Test and validate behavior</li>
        </ol>
      </BlogSection>

      <BlogSection id="comparison" title="Architecture Comparison">
        <h3>ReAct Pattern</h3>
        <ul>
          <li>Pros: Flexible, adaptive, good for unknown environments</li>
          <li>Cons: Can be computationally intensive</li>
        </ul>

        <h3>Plan & Execute</h3>
        <ul>
          <li>Pros: Structured, predictable, easy to monitor</li>
          <li>Cons: Less adaptive to unexpected changes</li>
        </ul>

        <h3>Role-based</h3>
        <ul>
          <li>Pros: Clear boundaries, good for team coordination</li>
          <li>Cons: Overhead in role management</li>
        </ul>

        <InfoBox type="warning" title="Selection Criteria">
          <ul>
            <li>Task complexity</li>
            <li>Environment predictability</li>
            <li>Collaboration requirements</li>
            <li>Resource constraints</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="next-steps" title="Next Steps">
        <p>
          Continue exploring agent development with these related topics:
        </p>

        <div className="resource-links">
          <Link to="/blogs/agents/function-calling" className="resource-link">
            Function Calling Guide →
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
            Understanding different agent architectures is crucial for building
            effective AI systems. Experiment with each approach to find the best
            fit for your use case.
          </p>
        </InfoBox>
      </BlogSection>
    </BlogTemplate>
  );
};

export default AgentArchitectures;