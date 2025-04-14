import React from 'react';
import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox, CodeExample } from '../../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../../data/blogData';
import {Link} from "react-router-dom";

const PromptTemplates: React.FC = () => {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'development-tasks', title: 'Development Tasks' },
    { id: 'content-creation', title: 'Content Creation' },
    { id: 'analysis-tasks', title: 'Analysis Tasks' },
    { id: 'customization', title: 'Customization Guidelines' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  const category: BlogCategory = 'Prompt Engineering';

  return (
    <BlogTemplate
      title="Prompt Templates for Common Tasks: A Practical Guide"
      date="April 14, 2025"
      readTime="20 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Prompt templates are reusable patterns that help streamline interactions with
          LLMs for common tasks. In this guide, we'll explore practical templates for
          various use cases and learn how to customize them for specific needs.
        </p>

        <InfoBox type="tip" title="Key Benefits of Using Templates">
          <ul>
            <li>Consistency in outputs</li>
            <li>Time savings through reuse</li>
            <li>Standardized approach to common tasks</li>
            <li>Easier maintenance and updates</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="development-tasks" title="Development Tasks">
        <h3>Code Review Template</h3>
        <InfoBox type="example" title="Code Review Prompt">
          <CodeExample
            language="text"
            code={`Review the following code with focus on:
1. Code quality and best practices
2. Performance considerations
3. Security implications
4. Potential bugs
5. Documentation needs

Code to review:
[code block]

Provide feedback in this format:
- Issues: (list critical issues)
- Improvements: (list suggested improvements)
- Best Practices: (list relevant best practices)
- Security: (list security considerations)`}
          />
        </InfoBox>

        <h3>Documentation Generation</h3>
        <InfoBox type="example" title="Documentation Template">
          <CodeExample
            language="text"
            code={`Generate technical documentation for:
[component/feature name]

Include:
1. Overview and purpose
2. Installation/setup
3. Configuration options
4. Usage examples
5. API reference
6. Common issues and solutions
7. Dependencies and requirements`}
          />
        </InfoBox>

        <h3>Bug Analysis Template</h3>
        <InfoBox type="example" title="Bug Analysis Prompt">
          <CodeExample
            language="text"
            code={`Analyze this bug report:
[bug description]

Provide analysis in this format:
1. Root Cause Analysis
2. Impact Assessment
3. Suggested Solutions
4. Prevention Measures
5. Testing Requirements`}
          />
        </InfoBox>
      </BlogSection>

      <BlogSection id="content-creation" title="Content Creation">
        <h3>Technical Article Template</h3>
        <InfoBox type="example" title="Article Structure">
          <CodeExample
            language="text"
            code={`Create a technical article about [topic]:
1. Introduction
   - Context and importance
   - Key concepts
2. Main Content
   - Core concepts explanation
   - Implementation details
   - Code examples
3. Best Practices
4. Common Pitfalls
5. Conclusion and Next Steps`}
          />
        </InfoBox>

        <h3>Educational Content Template</h3>
        <InfoBox type="example" title="Learning Module Structure">
          <CodeExample
            language="text"
            code={`Create a learning module for [topic]:
1. Learning Objectives
2. Prerequisites
3. Core Concepts
4. Practical Examples
5. Exercises
6. Common Questions
7. Additional Resources`}
          />
        </InfoBox>
      </BlogSection>

      <BlogSection id="analysis-tasks" title="Analysis Tasks">
        <h3>Data Analysis Template</h3>
        <InfoBox type="example" title="Data Analysis Structure">
          <CodeExample
            language="text"
            code={`Analyze the following data:
[data set/description]

Provide analysis in this format:
1. Key Metrics
2. Trends Identified
3. Correlations
4. Anomalies
5. Actionable Insights
6. Recommendations`}
          />
        </InfoBox>

        <h3>Market Research Template</h3>
        <InfoBox type="example" title="Research Framework">
          <CodeExample
            language="text"
            code={`Conduct market research for [product/service]:
1. Market Overview
2. Target Audience
3. Competitor Analysis
4. Market Trends
5. Opportunities
6. Challenges
7. Recommendations`}
          />
        </InfoBox>
      </BlogSection>

      <BlogSection id="customization" title="Customization Guidelines">
        <h3>Template Adaptation</h3>
        <ul>
          <li>Identify core components to maintain</li>
          <li>Add context-specific elements</li>
          <li>Adjust detail level as needed</li>
          <li>Include domain-specific requirements</li>
        </ul>

        <InfoBox type="tip" title="Customization Best Practices">
          <ul>
            <li>Keep the basic structure consistent</li>
            <li>Add specific examples for your domain</li>
            <li>Include relevant constraints</li>
            <li>Specify output format requirements</li>
          </ul>
        </InfoBox>

        <h3>Parameter Settings</h3>
        <InfoBox type="example" title="Template Parameters">
          <CodeExample
            language="text"
            code={`Template Parameters:
1. Detail Level: [basic/detailed/comprehensive]
2. Output Format: [format specification]
3. Focus Areas: [specific aspects to emphasize]
4. Constraints: [any limitations or requirements]
5. Examples: [included/not included]`}
          />
        </InfoBox>
      </BlogSection>

      <BlogSection id="best-practices" title="Best Practices">
        <h3>Template Organization</h3>
        <ul>
          <li>Categorize templates by function</li>
          <li>Version control your templates</li>
          <li>Document usage guidelines</li>
          <li>Include example outputs</li>
        </ul>

        <InfoBox type="tip" title="Implementation Tips">
          <ul>
            <li>Start with basic templates</li>
            <li>Iterate based on results</li>
            <li>Collect user feedback</li>
            <li>Monitor effectiveness</li>
            <li>Update regularly</li>
          </ul>
        </InfoBox>

        <h3>Common Pitfalls</h3>
        <InfoBox type="warning" title="Avoid These Mistakes">
          <ul>
            <li>Over-complicated templates</li>
            <li>Lack of context</li>
            <li>Rigid structures</li>
            <li>Missing error handling</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="next-steps" title="Next Steps">
        <p>
          Now that you understand prompt templates, explore these related topics
          to further enhance your LLM interactions:
        </p>

        <div className="resource-links">
          <Link to="/blogs/prompts/role-system-instructions" className="resource-link">
            Role Prompting and System Instructions →
          </Link>
          <Link to="/blogs/prompts/patterns" className="resource-link">
            Advanced Prompt Patterns →
          </Link>
          <Link to="/blogs/prompts/developer-guide" className="resource-link">
            Developer's Prompt Guide →
          </Link>
        </div>

        <InfoBox type="note" title="Keep Learning">
          <p>
            Effective template use comes with practice. Start with basic templates
            and gradually customize them for your specific needs. Remember to
            regularly update your templates based on feedback and results.
          </p>
        </InfoBox>
      </BlogSection>
    </BlogTemplate>
  );
};

export default PromptTemplates;