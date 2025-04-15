import React from 'react';
import { Link } from 'react-router-dom';
import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../../components/blogs/BlogComponents';
import CodeExample from '../../../../components/blogs/CodeExample';
import type { BlogCategory } from '../../../../data/blogData';

const LLMsDailyDev: React.FC = () => {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'code-assistance', title: 'Code Assistance & Generation' },
    { id: 'code-review', title: 'Automated Code Reviews' },
    { id: 'documentation', title: 'Documentation Generation' },
    { id: 'refactoring', title: 'AI-Powered Refactoring' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  const category: BlogCategory = 'AI-Driven IT';

  const codeAssistExample = `// Using GitHub Copilot for code generation
function generateApiEndpoint() {
  // Generate a REST API endpoint for user management
  const express = require('express');
  const router = express.Router();

  // User creation endpoint
  router.post('/users', async (req, res) => {
    try {
      const { name, email, role } = req.body;
      
      // Validate input
      if (!name || !email) {
        return res.status(400).json({ 
          error: 'Name and email are required' 
        });
      }

      // Create user in database
      const user = await db.users.create({
        name,
        email,
        role: role || 'user'
      });

      return res.status(201).json(user);
    } catch (error) {
      console.error('User creation failed:', error);
      return res.status(500).json({ 
        error: 'Internal server error' 
      });
    }
  });

  return router;
}`;

  const codeReviewExample = `// Configure automated code review settings
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'complexity': ['error', { max: 10 }],
    'max-lines-per-function': ['warn', { max: 50 }],
    'no-unused-vars': 'error',
    'require-await': 'error'
  },
  overrides: [
    {
      files: ['*.test.ts', '*.spec.ts'],
      rules: {
        'max-lines-per-function': 'off'
      }
    }
  ]
};`;

  const docGenerationExample = `import { generateDocs } from './doc-generator';

async function generateApiDocs(apiPath: string) {
  const docs = await generateDocs({
    path: apiPath,
    format: 'markdown',
    sections: [
      'endpoints',
      'models',
      'authentication',
      'examples'
    ],
    includeTests: true,
    outputPath: './docs/api'
  });

  // Add auto-generated notice
  docs.header = \`
    # API Documentation
    > Auto-generated using AI documentation tools
    > Last updated: \${new Date().toISOString()}
  \`;

  return docs;
}`;

  return (
    <BlogTemplate
      title="LLMs in Daily Development: A Practical Guide"
      date="April 15, 2025"
      readTime="15 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Large Language Models (LLMs) are transforming the way developers work,
          making development more efficient and productive. This guide explores
          practical ways to integrate LLMs into your daily development workflow.
        </p>

        <InfoBox type="tip" title="What You'll Learn">
          <ul>
            <li>Using LLMs for code assistance</li>
            <li>Automating code reviews</li>
            <li>Generating documentation</li>
            <li>AI-powered refactoring</li>
            <li>Best practices and pitfalls</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="code-assistance" title="Code Assistance & Generation">
        <p>
          Modern LLM-powered tools can significantly speed up code writing through
          intelligent suggestions and automated generation:
        </p>

        <CodeExample
          language="javascript"
          code={codeAssistExample}
          title="AI-Assisted Code Generation"
          showLineNumbers={true}
        />

        <InfoBox type="note" title="Key Benefits">
          <ul>
            <li>Faster code generation</li>
            <li>Built-in best practices</li>
            <li>Error handling included</li>
            <li>Consistent patterns</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="code-review" title="Automated Code Reviews">
        <p>
          LLMs can help automate and enhance the code review process:
        </p>

        <CodeExample
          language="javascript"
          code={codeReviewExample}
          title="Automated Review Configuration"
          showLineNumbers={true}
        />

        <InfoBox type="warning" title="Review Guidelines">
          <ul>
            <li>Set clear review criteria</li>
            <li>Define complexity limits</li>
            <li>Enforce coding standards</li>
            <li>Balance automation with human review</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="documentation" title="Documentation Generation">
        <p>
          Automating documentation with LLMs ensures consistent and up-to-date
          documentation:
        </p>

        <CodeExample
          language="typescript"
          code={docGenerationExample}
          title="Documentation Generator"
          showLineNumbers={true}
        />

        <InfoBox type="tip" title="Documentation Best Practices">
          <ul>
            <li>Keep documentation close to code</li>
            <li>Use consistent formats</li>
            <li>Include examples</li>
            <li>Automate updates</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="refactoring" title="AI-Powered Refactoring">
        <h3>Intelligent Code Transformations</h3>
        <ul>
          <li>Pattern recognition</li>
          <li>Code optimization</li>
          <li>Architecture improvements</li>
          <li>Technical debt reduction</li>
        </ul>

        <h3>Refactoring Strategies</h3>
        <ul>
          <li>Incremental changes</li>
          <li>Test coverage preservation</li>
          <li>Performance optimization</li>
          <li>Code maintainability</li>
        </ul>
      </BlogSection>

      <BlogSection id="best-practices" title="Best Practices">
        <h3>LLM Integration Guidelines</h3>
        <ul>
          <li>Review generated code carefully</li>
          <li>Maintain security practices</li>
          <li>Keep human oversight</li>
          <li>Document AI usage</li>
        </ul>

        <InfoBox type="warning" title="Common Pitfalls">
          <ul>
            <li>Over-reliance on AI</li>
            <li>Insufficient testing</li>
            <li>Security vulnerabilities</li>
            <li>Complexity creep</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="next-steps" title="Next Steps">
        <p>
          Continue exploring AI-driven development with these related topics:
        </p>

        <div className="resource-links">
          <Link to="/blogs/ai-it/devops-automation" className="resource-link">
            LLMs in DevOps & Automation →
          </Link>
          <Link to="/blogs/ai-it/config-generation" className="resource-link">
            AI Config Generation →
          </Link>
          <Link to="/blogs/ai-it/support-agents" className="resource-link">
            IT Support Agents →
          </Link>
        </div>

        <InfoBox type="success" title="Keep Learning">
          <p>
            LLMs are constantly evolving. Stay updated with the latest tools and
            best practices to maximize your development efficiency.
          </p>
        </InfoBox>
      </BlogSection>
    </BlogTemplate>
  );
};

export default LLMsDailyDev;