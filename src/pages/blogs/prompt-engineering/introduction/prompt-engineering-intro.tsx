import React from 'react';
import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../../components/blogs/BlogComponents';
import CodeExample from '../../../../components/blogs/CodeExample';
import type { BlogCategory } from '../../../../data/blogData';
import {Link} from "react-router-dom";

const PromptEngineeringIntro: React.FC = () => {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'components', title: 'Prompt Components' },
    { id: 'techniques', title: 'Basic Techniques' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'patterns', title: 'Common Patterns' },
    { id: 'applications', title: 'Practical Applications' }
  ];

  const category: BlogCategory = 'Prompt Engineering';

  return (
    <BlogTemplate
      title="Introduction to Prompt Engineering: Mastering LLM Communication"
      date="April 14, 2025"
      readTime="15 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Prompt engineering is the art and science of effectively communicating
          with Large Language Models. It's about crafting inputs that reliably
          produce desired outputs, combining creativity with structured methodology.
        </p>
        
        <InfoBox type="tip" title="Why Prompt Engineering Matters">
          <ul>
            <li>Better output quality</li>
            <li>More consistent results</li>
            <li>Efficient resource usage</li>
            <li>Enhanced control over model behavior</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="components" title="Prompt Components">
        <h3>Understanding Prompt Structure</h3>
        <p>
          Effective prompts typically consist of several key components working
          together to guide the model's response.
        </p>

        <InfoBox type="example" title="Prompt Components Example">
          <CodeExample
            language="text"
            code={`System: You are a helpful technical assistant.
Context: We're analyzing Python code performance.
Task: Review this function and suggest optimizations.
Input: def fibonacci(n):
    if n <= 1: return n
    return fibonacci(n-1) + fibonacci(n-2)
Format: Provide suggestions in bullet points.`}
          />
        </InfoBox>

        <h3>Key Components</h3>
        <ul>
          <li>System message: Sets the model's role and behavior</li>
          <li>Context: Provides background information</li>
          <li>Task description: Specifies what needs to be done</li>
          <li>Input data: The actual content to process</li>
          <li>Format instructions: How the output should be structured</li>
        </ul>
      </BlogSection>

      <BlogSection id="techniques" title="Basic Techniques">
        <h3>Essential Prompt Engineering Techniques</h3>
        
        <InfoBox type="tip" title="Core Techniques">
          <ul>
            <li>Clear instruction formatting</li>
            <li>Context provision</li>
            <li>Example-based learning</li>
            <li>Output specification</li>
          </ul>
        </InfoBox>

        <h3>Instruction Clarity</h3>
        <div className="technique-example">
          <h4>❌ Unclear Prompt:</h4>
          <CodeExample
            language="text"
            code={`Make it better`}
          />

          <h4>✅ Clear Prompt:</h4>
          <CodeExample
            language="text"
            code={`Improve this text by:
1. Fixing grammar errors
2. Making sentences more concise
3. Enhancing clarity
4. Maintaining the original meaning`}
          />
        </div>
      </BlogSection>

      <BlogSection id="best-practices" title="Best Practices">
        <h3>Optimizing Your Prompts</h3>
        
        <InfoBox type="note" title="Key Principles">
          <ul>
            <li>Be specific and clear</li>
            <li>Provide relevant context</li>
            <li>Use consistent formatting</li>
            <li>Test and iterate</li>
          </ul>
        </InfoBox>

        <h3>Common Mistakes to Avoid</h3>
        <ul>
          <li>Ambiguous instructions</li>
          <li>Missing context</li>
          <li>Inconsistent formatting</li>
          <li>Overly complex requests</li>
          <li>Insufficient constraints</li>
        </ul>

        <InfoBox type="tip" title="Testing Strategy">
          <p>Always test prompts with:</p>
          <ul>
            <li>Different inputs</li>
            <li>Edge cases</li>
            <li>Various contexts</li>
            <li>Multiple runs</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="patterns" title="Common Patterns">
        <h3>Standard Prompt Patterns</h3>
        
        <div className="pattern-examples">
          <h4>1. Question Answering</h4>
          <CodeExample
            language="text"
            code={`Context: [Relevant information]
Question: [Specific question]
Instructions: Provide a concise answer based on the context.`}
          />

          <h4>2. Text Generation</h4>
          <CodeExample
            language="text"
            code={`Topic: [Subject]
Style: [Desired writing style]
Length: [Word/character count]
Additional requirements: [Specific elements to include]`}
          />

          <h4>3. Classification</h4>
          <CodeExample
            language="text"
            code={`Categories: [List of possible categories]
Input: [Text to classify]
Task: Classify the input into one of the given categories.
Explanation: Provide a brief reasoning for the classification.`}
          />
        </div>
      </BlogSection>

      <BlogSection id="applications" title="Practical Applications">
        <h3>Real-World Use Cases</h3>
        
        <InfoBox type="example" title="Application Examples">
          <ul>
            <li>Content Generation</li>
            <li>Code Analysis</li>
            <li>Data Extraction</li>
            <li>Translation</li>
            <li>Summarization</li>
          </ul>
        </InfoBox>

        <h3>Implementation Tips</h3>
        <ul>
          <li>Start with basic templates</li>
          <li>Customize for your use case</li>
          <li>Maintain consistency</li>
          <li>Document successful patterns</li>
        </ul>

        <div className="resource-links">
          <Link to="/blogs/prompts/intermediate" className="resource-link">
            Advanced Prompt Engineering →
          </Link>
          <Link to="/blogs/prompts/patterns" className="resource-link">
            Prompt Patterns Guide →
          </Link>
          <Link to="/blogs/prompts/developer-guide" className="resource-link">
            Developer's Guide to Prompting →
          </Link>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default PromptEngineeringIntro;