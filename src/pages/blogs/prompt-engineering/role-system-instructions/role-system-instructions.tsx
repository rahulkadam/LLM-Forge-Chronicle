import React from 'react';
import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox, CodeExample } from '../../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../../data/blogData';
import './role-system-instructions.css';
import {Link} from "react-router-dom";

const RoleSystemInstructions: React.FC = () => {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'role-prompting', title: 'Understanding Role Prompting' },
    { id: 'system-instructions', title: 'System Instructions Deep Dive' },
    { id: 'advanced-techniques', title: 'Advanced Techniques' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'practical-examples', title: 'Practical Examples' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  const category: BlogCategory = 'Prompt Engineering';

  return (
    <BlogTemplate 
      title="Role Prompting and System Instructions: Mastering LLM Behavior"
      date="April 14, 2025"
      readTime="20 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Role prompting and system instructions are powerful techniques that allow you to
          shape and control how Large Language Models (LLMs) behave and respond. In this
          comprehensive guide, we'll explore how to effectively use these techniques to
          enhance your AI interactions.
        </p>

        <InfoBox type="tip" title="Key Concepts We'll Cover">
          <ul>
            <li>Understanding role prompting and its impact on LLM behavior</li>
            <li>Crafting effective system instructions</li>
            <li>Combining roles and instructions for optimal results</li>
            <li>Real-world applications and best practices</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="role-prompting" title="Understanding Role Prompting">
        <h3>What is Role Prompting?</h3>
        <p>
          Role prompting involves instructing an LLM to assume a specific persona or role
          when generating responses. This technique helps in obtaining more focused and
          contextually appropriate outputs.
        </p>

        <InfoBox type="example" title="Role Prompting Example">
          <CodeExample
            language="text"
            code={`"Act as an experienced software architect reviewing a system design..."
"Take on the role of a medieval historian explaining..."
"Assume you are a professional copy editor reviewing..."'`}
          />
        </InfoBox>

        <h3>Common Role Types</h3>
        <ul>
          <li>Professional roles (Developer, Doctor, Teacher)</li>
          <li>Expert personas (Subject matter expert, Consultant)</li>
          <li>Process roles (Reviewer, Analyst, Mentor)</li>
          <li>Creative roles (Writer, Artist, Designer)</li>
        </ul>

        <InfoBox type="tip" title="Role Selection Tips">
          <p>
            Choose roles that are relevant to your task and have clear, well-defined
            responsibilities. The more specific the role, the more focused the response.
          </p>
        </InfoBox>
      </BlogSection>

      <BlogSection id="system-instructions" title="System Instructions Deep Dive">
        <h3>Understanding System Instructions</h3>
        <p>
          System instructions provide the foundational context and behavioral guidelines
          for the LLM. They set the tone, establish boundaries, and define the operational
          parameters for the interaction.
        </p>

        <InfoBox type="note" title="Components of System Instructions">
          <ul>
            <li>Behavior guidelines</li>
            <li>Response format specifications</li>
            <li>Operational constraints</li>
            <li>Task-specific parameters</li>
          </ul>
        </InfoBox>

        <h3>Writing Effective Instructions</h3>
        <InfoBox type="example" title="System Instruction Template">
          <CodeExample
            language="text"
            code={`You are a [role] specialized in [domain].
Your task is to [primary objective].
Always [key behavior 1] and [key behavior 2].
Format your responses using [specific format].
Never [restricted behavior].`}
          />
        </InfoBox>
      </BlogSection>

      <BlogSection id="advanced-techniques" title="Advanced Techniques">
        <h3>Combining Roles and Instructions</h3>
        <p>
          Advanced implementations often combine role prompting with detailed system
          instructions to create highly specialized AI behaviors.
        </p>

        <InfoBox type="tip" title="Advanced Implementation">
          <CodeExample
            language="text"
            code={`System: You are a senior software architect with 20 years of experience.
Role: Technical reviewer for enterprise applications
Constraints:
- Focus on scalability and security
- Provide concrete examples
- Reference industry standards
- Highlight potential risks`}
          />
        </InfoBox>

        <h3>Context Management</h3>
        <ul>
          <li>Maintaining role consistency across interactions</li>
          <li>Managing context windows effectively</li>
          <li>Handling role transitions when needed</li>
          <li>Balancing specificity with flexibility</li>
        </ul>
      </BlogSection>

      <BlogSection id="best-practices" title="Best Practices">
        <h3>Role Prompting Best Practices</h3>
        <ul>
          <li>Be specific about expertise and background</li>
          <li>Define clear boundaries and limitations</li>
          <li>Maintain consistency throughout the interaction</li>
          <li>Use relevant domain terminology</li>
        </ul>

        <InfoBox type="tip" title="System Instruction Guidelines">
          <ul>
            <li>Start with clear objectives</li>
            <li>Use explicit constraints</li>
            <li>Define success criteria</li>
            <li>Include error handling preferences</li>
          </ul>
        </InfoBox>

        <h3>Common Pitfalls to Avoid</h3>
        <ul>
          <li>Overly complex role definitions</li>
          <li>Contradictory instructions</li>
          <li>Ambiguous success criteria</li>
          <li>Insufficient context provision</li>
        </ul>
      </BlogSection>

      <BlogSection id="practical-examples" title="Practical Examples">
        <h3>Development Scenarios</h3>
        <InfoBox type="example" title="Code Review Role">
          <CodeExample
            language="text"
            code={`System: You are a senior code reviewer with expertise in clean code principles.
Focus areas:
- Code organization
- Performance optimization
- Security best practices
- Maintainability
Response format: Provide feedback in bullet points with specific recommendations.`}
          />
        </InfoBox>

        <h3>Business Applications</h3>
        <InfoBox type="example" title="Business Analyst Role">
          <CodeExample
            language="text"
            code={`System: Act as a business analyst with experience in digital transformation.
Key responsibilities:
- Requirements analysis
- Process optimization
- Stakeholder communication
- Risk assessment
Output: Structured reports with actionable insights.`}
          />
        </InfoBox>
      </BlogSection>

      <BlogSection id="next-steps" title="Next Steps">
        <p>
          Now that you understand role prompting and system instructions, explore these
          related topics to further enhance your LLM interactions:
        </p>

        <div className="resource-links">
          <Link to="/blogs/prompts/advanced" className="resource-link">
            Advanced Prompt Engineering →
          </Link>
          <Link to="/blogs/prompts/patterns" className="resource-link">
            Prompt Patterns Guide →
          </Link>
          <Link to="/blogs/prompts/developer-guide" className="resource-link">
            Developer's Prompt Guide →
          </Link>
        </div>

        <InfoBox type="note" title="Keep Learning">
          <p>
            Mastering role prompting and system instructions is crucial for developing
            effective LLM applications. Practice with different scenarios and continuously
            refine your approach based on results.
          </p>
        </InfoBox>
      </BlogSection>
    </BlogTemplate>
  );
};

export default RoleSystemInstructions;