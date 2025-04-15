import React from 'react';
import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../../components/blogs/BlogComponents';
import CodeExample from '../../../../components/blogs/CodeExample';
import type { BlogCategory } from '../../../../data/blogData';
import './how-llms-work.css';
import {Link} from "react-router-dom";

const HowLLMsWork: React.FC = () => {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'tokenization', title: 'Understanding Tokenization' },
    { id: 'attention-mechanism', title: 'Attention Mechanism' },
    { id: 'transformer-architecture', title: 'Transformer Architecture' },
    { id: 'practical-implications', title: 'Practical Implications' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  const category: BlogCategory = 'Fundamentals';

  return (
    <BlogTemplate
      title="How LLMs Work: Understanding the Core Mechanics"
      date="April 14, 2025"
      readTime="15 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title={'Introduction'}>
        <p>
          Large Language Models (LLMs) have revolutionized natural language processing,
          but how do they actually work? In this guide, we'll break down the core
          components that make LLMs function: tokenization, attention mechanisms,
          and the transformer architecture.
        </p>
        
        <InfoBox type="tip" title="Key Concepts We'll Cover">
          <ul>
            <li>How text is converted into tokens for processing</li>
            <li>How attention helps models understand context</li>
            <li>The fundamental architecture of transformers</li>
            <li>Practical implications for using LLMs</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="tokenization" title="Understanding Tokenization">
        <h3>What is Tokenization?</h3>
        <p>
          Tokenization is the process of converting text into smaller units (tokens)
          that the model can process. Think of it as breaking down a sentence into
          meaningful pieces, which might be words, parts of words, or even characters.
        </p>

        <InfoBox type="tip" title="Tokenization Example">
          <p>The sentence "I love programming" might be tokenized as:</p>
          <CodeExample
            language="text"
            code={`"I" → token_id: 250
"love" → token_id: 1567
"programming" → token_ids: [23789, 4567]`}
          />
          <p>Notice how "programming" gets split into multiple tokens!</p>
        </InfoBox>

        <h3>Types of Tokenization</h3>
        <ul>
          <li>Word-based: Splits text into whole words</li>
          <li>Character-based: Splits text into individual characters</li>
          <li>Subword-based: Uses parts of words (most common in modern LLMs)</li>
        </ul>

        <InfoBox type="tip" title="Why Subword Tokenization?">
          <p>
            Subword tokenization offers a balance between vocabulary size and
            handling unknown words. For example, "unhappy" might be split into
            "un" and "happy", allowing the model to understand both parts.
          </p>
        </InfoBox>
      </BlogSection>

      <BlogSection id="attention-mechanism" title="Attention Mechanism">
        <h3>The Power of Attention</h3>
        <p>
          Attention allows LLMs to weigh the importance of different words in
          relation to each other, regardless of their position in the text.
          It's similar to how humans focus on relevant parts of a sentence
          to understand its meaning.
        </p>

        <InfoBox type="tip" title="Attention in Action">
          <p>In the sentence: "The cat sat on the mat because it was comfortable"</p>
          <ul>
            <li>When processing "it", the model pays most attention to "mat"</li>
            <li>When processing "comfortable", attention splits between "cat" and "mat"</li>
            <li>This helps resolve what "it" refers to</li>
          </ul>
        </InfoBox>

        <h3>Types of Attention</h3>
        <ul>
          <li>Self-attention: Words attending to other words in the same sequence</li>
          <li>Multi-head attention: Multiple attention mechanisms working in parallel</li>
          <li>Cross-attention: Words attending to words in a different sequence</li>
        </ul>
      </BlogSection>

      <BlogSection id="transformer-architecture" title="Transformer Architecture">
        <h3>The Building Blocks</h3>
        <p>
          The transformer architecture is built on several key components working
          together to process and generate text.
        </p>

        <InfoBox type="note" title="Key Components">
          <ul>
            <li>Embedding Layer: Converts tokens to vectors</li>
            <li>Positional Encoding: Adds position information</li>
            <li>Multi-head Attention: Processes relationships</li>
            <li>Feed-forward Networks: Processes individual tokens</li>
            <li>Layer Normalization: Stabilizes learning</li>
          </ul>
        </InfoBox>

        <h3>How It All Works Together</h3>
        <p>
          1. Text is tokenized and embedded into vectors
          2. Positional information is added
          3. Multiple transformer layers process the text
          4. Each layer refines the understanding
          5. Final layer produces output probabilities
        </p>
      </BlogSection>

      <BlogSection id="practical-implications" title="Practical Implications">
        <h3>What This Means for Users</h3>
        
        <InfoBox type="tip" title="Key Implications">
          <ul>
            <li>Token Limits: Understanding why models have context windows</li>
            <li>Attention Patterns: Why models sometimes lose track in long text</li>
            <li>Processing Order: Why responses are generated token by token</li>
            <li>Memory Usage: Why larger contexts need more computational resources</li>
          </ul>
        </InfoBox>

        <h3>Best Practices</h3>
        <ul>
          <li>Break long inputs into meaningful chunks</li>
          <li>Keep important context closer to the relevant questions</li>
          <li>Consider token usage in prompt engineering</li>
          <li>Understand model-specific limitations</li>
        </ul>
      </BlogSection>

      <BlogSection id="next-steps" title="Next Steps">
        <p>
          Now that you understand how LLMs work internally, you're better equipped
          to use them effectively. Consider exploring these related topics:
        </p>

        <div className="resource-links">
          <Link to="/blogs/prompt-engineering/advanced" className="resource-link">
            Advanced Prompt Engineering →
          </Link>
          <Link to="/blogs/llm-fundamentals/capabilities" className="resource-link">
            Understanding LLM Capabilities →
          </Link>
          <Link to="/blogs/llm-fundamentals/model-selection" className="resource-link">
            Choosing the Right LLM →
          </Link>
        </div>

        <InfoBox type="note" title="Keep Learning">
          <p>
            Understanding the internals of LLMs helps you make better decisions
            about which models to use and how to use them effectively in your
            applications.
          </p>
        </InfoBox>
      </BlogSection>
    </BlogTemplate>
  );
};

export default HowLLMsWork;