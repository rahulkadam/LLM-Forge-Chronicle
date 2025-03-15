import React from 'react';
import './styles.css';

const LLMFundamentals: React.FC = () => {
  return (
    <div className="llm-fundamentals">
      <h1>Understanding LLMs: A Beginner's Guide</h1>
      
      <section className="intro-section">
        <h2>What are Large Language Models?</h2>
        <p>
          Large Language Models (LLMs) are advanced AI systems trained on vast amounts of text data
          to understand and generate human-like language. These models can perform a wide range of 
          text-based tasks from answering questions and writing content to coding and analysis.
        </p>
        <div className="example-box">
          <h3>Popular LLM Examples</h3>
          <ul>
            <li>ChatGPT (OpenAI's GPT models)</li>
            <li>Google's Gemini (formerly Bard)</li>
            <li>Anthropic's Claude</li>
            <li>Meta's Llama models</li>
            <li>Microsoft's Copilot</li>
          </ul>
        </div>
      </section>

      <section className="key-concepts">
        <h2>Key LLM Concepts Made Simple</h2>
        <div className="concept-grid">
          <div className="concept-card">
            <h3>How LLMs Work</h3>
            <p>
              LLMs are trained on billions of text examples to identify patterns and relationships
              between words and concepts. They learn to predict what text comes next based on context.
            </p>
            <div className="example">
              Example: When you type "The capital of France is," an LLM predicts "Paris" as the most likely continuation.
            </div>
          </div>

          <div className="concept-card">
            <h3>Transformer Architecture</h3>
            <p>
              Most modern LLMs use a design called "transformers" that helps them understand 
              relationships between words across long distances in text.
            </p>
            <div className="example">
              Example: Understanding that "John picked up his coat because he was cold" connects "John" with "he" and "cold" with "coat"
            </div>
          </div>

          <div className="concept-card">
            <h3>Prompt Engineering</h3>
            <p>
              The art of crafting effective instructions (prompts) to guide LLMs toward
              generating the output you want.
            </p>
            <div className="example">
              Example: Instead of asking "Write about dogs," saying "Write a 300-word educational guide about caring for large dog breeds" gets more specific results
            </div>
          </div>
        </div>
      </section>

      <section className="ai-impact">
        <h2>How LLMs Are Transforming Industries</h2>
        <div className="impact-areas">
          <div className="impact-card">
            <h3>💼 Business</h3>
            <ul>
              <li>Customer service automation</li>
              <li>Content creation at scale</li>
              <li>Data analysis and reporting</li>
              <li>Research assistance</li>
            </ul>
          </div>

          <div className="impact-card">
            <h3>📚 Education</h3>
            <ul>
              <li>Personalized tutoring</li>
              <li>Generating learning materials</li>
              <li>Language learning assistance</li>
              <li>Research paper summaries</li>
            </ul>
          </div>

          <div className="impact-card">
            <h3>🖥️ Software Development</h3>
            <ul>
              <li>Code generation and completion</li>
              <li>Debugging assistance</li>
              <li>Documentation creation</li>
              <li>Learning new programming languages</li>
            </ul>
          </div>

          <div className="impact-card">
            <h3>🎨 Creative Fields</h3>
            <ul>
              <li>Writing assistance and brainstorming</li>
              <li>Marketing copy generation</li>
              <li>Script and story development</li>
              <li>Collaborative content creation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="getting-started">
        <h2>Getting Started with LLMs</h2>
        <div className="steps-container">
          <div className="step">
            <h3>1. Choose the Right Model</h3>
            <p>
              Different LLMs have different strengths. ChatGPT is well-rounded, Claude excels at longer contexts,
              and specialized LLMs might be better for niche applications like code or medical information.
            </p>
          </div>

          <div className="step">
            <h3>2. Learn Basic Prompting</h3>
            <p>
              The way you phrase your requests dramatically affects results. Be clear, specific, and structured in your prompts.
              Use our <a href="/prompt-engineering">Prompt Engineering</a> guide to learn effective techniques.
            </p>
          </div>

          <div className="step">
            <h3>3. Understand Limitations</h3>
            <p>
              LLMs aren't perfect - they can make mistakes, "hallucinate" incorrect facts, and have knowledge cut-offs.
              Always verify important information from LLMs with reliable sources.
            </p>
          </div>
        </div>
      </section>

      <section className="resources">
        <h2>Next Steps in Your Learning</h2>
        <div className="resource-links">
          <a href="/llm-fundamentals/chatgpt-guide" className="resource-link">
            ChatGPT Guide for Beginners →
          </a>
          <a href="/prompt-engineering" className="resource-link">
            Learn Effective Prompt Engineering →
          </a>
          <a href="/BuildingLLMAgent" className="resource-link">
            Building Your First LLM Application →
          </a>
        </div>
      </section>
    </div>
  );
};

export default LLMFundamentals;