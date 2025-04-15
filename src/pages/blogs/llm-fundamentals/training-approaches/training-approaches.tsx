import React from 'react';
import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../../components/blogs/BlogComponents';
import CodeExample from '../../../../components/blogs/CodeExample';
import type { BlogCategory } from '../../../../data/blogData';
import './training-approaches.css';
import {Link} from "react-router-dom";

const LLMTrainingApproaches: React.FC = () => {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'pretraining', title: 'Pretraining: The Foundation' },
    { id: 'fine-tuning', title: 'Fine-tuning: Specialization' },
    { id: 'instruction-tuning', title: 'Instruction Tuning' },
    { id: 'comparison', title: 'Comparing Approaches' },
    { id: 'use-cases', title: 'When to Use Each Approach' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  const category: BlogCategory = 'Fundamentals';

  return (
    <BlogTemplate
      title="Understanding LLM Training: Pretraining vs Fine-tuning vs Instruction Tuning"
      date="April 14, 2025"
      readTime="12 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title={'Introduction'}>
        <p>
          Large Language Models undergo different types of training to achieve their
          capabilities. Understanding these training approaches is crucial for
          anyone working with LLMs, as it affects how you can adapt and use these
          models effectively.
        </p>
        
        <InfoBox type="tip" title="Key Training Approaches">
          <ul>
            <li>Pretraining: Building foundational knowledge</li>
            <li>Fine-tuning: Specializing for specific tasks</li>
            <li>Instruction Tuning: Teaching to follow directions</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="pretraining" title="Pretraining: The Foundation">
        <h3>What is Pretraining?</h3>
        <p>
          Pretraining is the initial phase where an LLM learns to understand and
          generate human language by training on massive amounts of text data from
          the internet, books, and other sources.
        </p>

        <InfoBox type="note" title="Key Characteristics">
          <ul>
            <li>Requires enormous amounts of data (hundreds of billions of tokens)</li>
            <li>Computationally intensive (thousands of GPU hours)</li>
            <li>Creates general-purpose language understanding</li>
            <li>Usually done with self-supervised learning</li>
          </ul>
        </InfoBox>

        <h3>Pretraining Objectives</h3>
        <ul>
          <li>Next token prediction</li>
          <li>Masked language modeling</li>
          <li>Sequence-to-sequence learning</li>
        </ul>

        <InfoBox type="example" title="Pretraining Example">
          <p>Given the input: "The capital of France is ___"</p>
          <p>The model learns to predict: "Paris"</p>
          <p>This is learned from seeing many similar patterns in training data, not from explicit instructions.</p>
        </InfoBox>
      </BlogSection>

      <BlogSection id="fine-tuning" title="Fine-tuning: Specialization">
        <h3>Understanding Fine-tuning</h3>
        <p>
          Fine-tuning takes a pretrained model and adapts it for specific tasks
          or domains using a smaller, more focused dataset. This process helps
          the model perform better on particular types of tasks while retaining
          its general knowledge.
        </p>

        <InfoBox type="note" title="Fine-tuning Characteristics">
          <ul>
            <li>Uses smaller, task-specific datasets</li>
            <li>Requires less computational resources than pretraining</li>
            <li>Can be done on specific domains (medical, legal, etc.)</li>
            <li>Preserves general knowledge while adding specialized capabilities</li>
          </ul>
        </InfoBox>

        <h3>Common Fine-tuning Applications</h3>
        <div className="applications-grid">
          <div className="application-card">
            <h4>Domain Adaptation</h4>
            <p>Making models understand specific fields like medicine or law</p>
          </div>

          <div className="application-card">
            <h4>Task Specialization</h4>
            <p>Optimizing for specific tasks like summarization or translation</p>
          </div>

          <div className="application-card">
            <h4>Style Adaptation</h4>
            <p>Teaching models to write in particular styles or tones</p>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="instruction-tuning" title="Instruction Tuning">
        <h3>The Power of Following Instructions</h3>
        <p>
          Instruction tuning teaches models to understand and follow specific
          instructions or prompts. This approach bridges the gap between raw
          language understanding and useful task completion.
        </p>

        <InfoBox type="tip" title="Key Benefits">
          <ul>
            <li>Better task comprehension</li>
            <li>More reliable responses</li>
            <li>Improved alignment with human intent</li>
            <li>Enhanced safety and control</li>
          </ul>
        </InfoBox>

        <h3>Instruction Tuning Process</h3>
        <ol>
          <li>Create instruction-response pairs</li>
          <li>Train model to recognize instruction patterns</li>
          <li>Validate response quality and alignment</li>
          <li>Iterate with human feedback</li>
        </ol>

        <InfoBox type="example" title="Instruction Tuning Example">
          <p>Instead of just completing text, the model learns to understand commands:</p>
          <CodeExample
            language="text"
            code={`Input: "Summarize this article in three sentences"
Model: *Generates concise summary*

Input: "Explain this concept to a 5-year-old"
Model: *Provides simple explanation*`}
          />
        </InfoBox>
      </BlogSection>

      <BlogSection id="comparison" title="Comparing Approaches">
        <h3>Key Differences</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Pretraining</th>
                <th>Fine-tuning</th>
                <th>Instruction Tuning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data Size</td>
                <td>Massive</td>
                <td>Moderate</td>
                <td>Small to Moderate</td>
              </tr>
              <tr>
                <td>Purpose</td>
                <td>General Knowledge</td>
                <td>Specialization</td>
                <td>Task Following</td>
              </tr>
              <tr>
                <td>Cost</td>
                <td>Very High</td>
                <td>Moderate</td>
                <td>Low to Moderate</td>
              </tr>
              <tr>
                <td>Output Control</td>
                <td>Low</td>
                <td>Medium</td>
                <td>High</td>
              </tr>
            </tbody>
          </table>
        </div>
      </BlogSection>

      <BlogSection id="use-cases" title="When to Use Each Approach">
        <h3>Choosing the Right Approach</h3>
        
        <InfoBox type="tip" title="Decision Guide">
          <h4>Use Pretraining When:</h4>
          <ul>
            <li>Building a new foundation model</li>
            <li>Needing broad knowledge base</li>
            <li>Having massive computational resources</li>
          </ul>

          <h4>Use Fine-tuning When:</h4>
          <ul>
            <li>Specializing in specific domain</li>
            <li>Improving performance on particular tasks</li>
            <li>Having domain-specific data</li>
          </ul>

          <h4>Use Instruction Tuning When:</h4>
          <ul>
            <li>Needing better instruction following</li>
            <li>Improving task completion reliability</li>
            <li>Enhancing model safety and control</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="next-steps" title="Next Steps">
        <p>
          Understanding these training approaches helps you make better decisions
          about which models to use and how to adapt them for your needs.
        </p>

        <div className="resource-links">
          <Link to="/blogs/fundamentals/how-llms-work" className="resource-link">
            How LLMs Work: Core Mechanics →
          </Link>
          <Link to="/blogs/advanced/rag-tutorial" className="resource-link">
            Build a RAG System →
          </Link>
          <Link to="/blogs/fundamentals/capabilities" className="resource-link">
            Understanding LLM Capabilities →
          </Link>
        </div>

        <InfoBox type="note" title="Further Learning">
          <p>
            Consider exploring specific implementations of these approaches in
            popular models like GPT, BERT, and T5. Each model uses different
            combinations of these training strategies to achieve their capabilities.
          </p>
        </InfoBox>
      </BlogSection>
    </BlogTemplate>
  );
};

export default LLMTrainingApproaches;