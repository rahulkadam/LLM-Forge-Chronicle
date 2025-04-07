import React from 'react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../components/blogs/BlogComponents';
import useBlogBehavior from '../../../hooks/useBlogBehavior';
import '../../../styles/blogs/blog-layout-update.css';
import '../../../styles/blogs/llm-models.css';

const GrokGuide: React.FC = () => {
  useBlogBehavior();

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'key-features', title: 'Key Features' },
    { id: 'technical-specs', title: 'Technical Specifications' },
    { id: 'use-cases', title: 'Use Cases' },
    { id: 'access', title: 'Accessing Grok' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  return (
    <BlogTemplate
      title="Grok - X.AI's LLM Model"
      date="April 7, 2025"
      readTime="5 min"
      category="LLM Models"
      bannerClassName="grok-banner"
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Grok is an artificial intelligence language model developed by X.AI (formerly Twitter). 
          It's designed to combine the power of large language models with real-time knowledge 
          from X's platform.
        </p>
      </BlogSection>

      <BlogSection id="key-features" title="Key Features">
        <div className="feature-list">
          <InfoBox type="tip" title="Core Capabilities">
            <ul>
              <li>Real-time information access through X platform integration</li>
              <li>Witty and humorous personality in responses</li>
              <li>Strong performance in coding and analytical tasks</li>
              <li>Multi-turn conversation capabilities</li>
              <li>Context understanding and maintenance</li>
            </ul>
          </InfoBox>
        </div>
      </BlogSection>

      <BlogSection id="technical-specs" title="Technical Specifications">
        <p>
          Grok is built on a mixture of experts architecture and trained on a diverse dataset. 
          It features:
        </p>
        <div className="feature-list">
          <h4>Architecture Highlights</h4>
          <ul>
            <li>Advanced reasoning capabilities</li>
            <li>Zero-shot and few-shot learning abilities</li>
            <li>Real-time data processing</li>
            <li>Custom training on X's data platform</li>
          </ul>
        </div>
      </BlogSection>

      <BlogSection id="use-cases" title="Use Cases">
        <div className="use-case-grid">
          <div className="use-case-card">
            <h4>Real-time Analysis</h4>
            <p>Process and analyze current information from X's platform</p>
          </div>
          <div className="use-case-card">
            <h4>Development</h4>
            <p>Code generation and debugging assistance</p>
          </div>
          <div className="use-case-card">
            <h4>Content Creation</h4>
            <p>Creative writing and content generation</p>
          </div>
          <div className="use-case-card">
            <h4>Problem Solving</h4>
            <p>Analytical tasks and complex reasoning</p>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="access" title="Accessing Grok">
        <p>
          Grok is available to X Premium+ subscribers, offering a unique blend of AI capabilities 
          with real-time information access. Users can interact with Grok directly through the X platform.
        </p>
        <InfoBox type="warning" title="Availability">
          <ul>
            <li>Requires X Premium+ subscription</li>
            <li>Access through X platform interface</li>
            <li>Real-time interaction capabilities</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="conclusion" title="Conclusion">
        <p>
          Grok represents a significant step forward in combining real-time social media data 
          with advanced language model capabilities. Its unique approach to AI interaction, 
          coupled with its access to current information through X, positions it as a 
          distinctive player in the LLM landscape.
        </p>
        
        <h3>Related Articles</h3>
        <div className="related-links">
          <Link to="/blogs/llm-models/chatgpt" className="related-link">
            ChatGPT: OpenAI's Revolutionary LLM →
          </Link>
          <Link to="/blogs/llm-models/claude" className="related-link">
            Claude: Anthropic's Advanced AI Assistant →
          </Link>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default GrokGuide;