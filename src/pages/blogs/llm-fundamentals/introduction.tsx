import React from 'react';

import "../../../styles/blogs/blog-base-style.css";
import { Link } from 'react-router-dom';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../data/blogData';
import './llm-fundamentals.css';

const LLMIntroduction: React.FC = () => {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'key-concepts', title: 'Key LLM Concepts' },
    { id: 'industry-impact', title: 'Industry Impact' },
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  const category: BlogCategory = 'Fundamentals';

  return (
    <BlogTemplate
      title="Understanding LLMs: A Beginner's Guide"
      date="April 12, 2025"
      readTime="10 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="What are Large Language Models?">
        <p>
          Large Language Models (LLMs) are advanced AI systems trained on vast amounts of text data
          to understand and generate human-like language. These models can perform a wide range of 
          text-based tasks from answering questions and writing content to coding and analysis.
        </p>
        
        <InfoBox type="tip" title="Popular LLM Examples">
          <ul>
            <li>ChatGPT (OpenAI's GPT models)</li>
            <li>Google's Gemini (formerly Bard)</li>
            <li>Anthropic's Claude</li>
            <li>Meta's Llama models</li>
            <li>Microsoft's Copilot</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="key-concepts" title="Key LLM Concepts Made Simple">
        <h3>How LLMs Work</h3>
        <p>
          LLMs are trained on billions of text examples to identify patterns and relationships
          between words and concepts. They learn to predict what text comes next based on context.
        </p>
        <InfoBox type="tip" title="Example">
          When you type "The capital of France is," an LLM predicts "Paris" as the most likely continuation.
        </InfoBox>

        <h3>Transformer Architecture</h3>
        <p>
          Most modern LLMs use a design called "transformers" that helps them understand 
          relationships between words across long distances in text.
        </p>
        <InfoBox type="tip" title="Example">
          Understanding that "John picked up his coat because he was cold" connects "John" with "he" and "cold" with "coat"
        </InfoBox>

        <h3>Prompt Engineering</h3>
        <p>
          The art of crafting effective instructions (prompts) to guide LLMs toward
          generating the output you want.
        </p>
        <InfoBox type="tip" title="Example">
          Instead of asking "Write about dogs," saying "Write a 300-word educational guide about caring for large dog breeds" gets more specific results
        </InfoBox>
      </BlogSection>

      <BlogSection id="industry-impact" title="How LLMs Are Transforming Industries">
        <div className="impact-grid">
          <div className="impact-card">
            <h3>Business Impact</h3>
            <ul>
              <li>Customer service automation</li>
              <li>Content creation at scale</li>
              <li>Data analysis and reporting</li>
              <li>Research assistance</li>
            </ul>
          </div>

          <div className="impact-card">
            <h3>Education Impact</h3>
            <ul>
              <li>Personalized tutoring</li>
              <li>Generating learning materials</li>
              <li>Language learning assistance</li>
              <li>Research paper summaries</li>
            </ul>
          </div>

          <div className="impact-card">
            <h3>Software Development</h3>
            <ul>
              <li>Code generation and completion</li>
              <li>Debugging assistance</li>
              <li>Documentation creation</li>
              <li>Learning new programming languages</li>
            </ul>
          </div>

          <div className="impact-card">
            <h3>Creative Fields</h3>
            <ul>
              <li>Writing assistance and brainstorming</li>
              <li>Marketing copy generation</li>
              <li>Script and story development</li>
              <li>Collaborative content creation</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="getting-started" title="Getting Started with LLMs">
        <InfoBox type="tip" title="Key Steps">
          <div className="steps-container">
            <h3>1. Choose the Right Model</h3>
            <p>
              Different LLMs have different strengths. ChatGPT is well-rounded, Claude excels at longer contexts,
              and specialized LLMs might be better for niche applications like code or medical information.
            </p>

            <h3>2. Learn Basic Prompting</h3>
            <p>
              The way you phrase your requests dramatically affects results. Be clear, specific, and structured in your prompts.
              Use our <a href="/prompt-engineering">Prompt Engineering</a> guide to learn effective techniques.
            </p>

            <h3>3. Understand Limitations</h3>
            <p>
              LLMs aren't perfect - they can make mistakes, "hallucinate" incorrect facts, and have knowledge cut-offs.
              Always verify important information from LLMs with reliable sources.
            </p>
          </div>
        </InfoBox>
      </BlogSection>

      <BlogSection id="next-steps" title="Next Steps in Your Learning">
        <div className="resource-links">
          <Link to="/blogs/llm-fundamentals/chatgpt-guide" className="resource-link">
            ChatGPT Guide for Beginners →
          </Link>
          <Link to="/prompt-engineering" className="resource-link">
            Learn Effective Prompt Engineering →
          </Link>
          <Link to="/BuildingLLMAgent" className="resource-link">
            Building Your First LLM Application →
          </Link>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default LLMIntroduction;
