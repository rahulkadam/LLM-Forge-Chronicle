import React from 'react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../components/blogs/BlogComponents';
import useBlogBehavior from '../../../hooks/useBlogBehavior';
import '../../../styles/blogs/blog-layout-update.css';
import '../../../styles/blogs/llm-models.css';

const LlamaGuide: React.FC = () => {
  useBlogBehavior();

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'what-is-llama', title: 'What is Llama?' },
    { id: 'development', title: 'Development & Evolution' },
    { id: 'key-features', title: 'Key Features' },
    { id: 'technical-details', title: 'Technical Details' },
    { id: 'use-cases', title: 'Use Cases' },
    { id: 'resources', title: 'Resources & Access' },
    { id: 'comparison', title: 'Comparison with Other LLMs' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  return (
    <BlogTemplate
      title="Meta's Llama: Open Source AI Innovation"
      date="April 7, 2025"
      readTime="10 min"
      category="LLM Models"
      bannerClassName="llama-banner"
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Meta's Llama series represents a significant milestone in open-source AI,
          offering powerful language models that combine high performance with
          accessibility. This guide explores Llama's capabilities, evolution, and
          impact on the AI landscape.
        </p>
      </BlogSection>

      <BlogSection id="what-is-llama" title="What is Llama?">
        <p>
          Llama (Large Language Model Meta AI) is Meta's family of open-source
          language models, designed to advance AI research and development while
          promoting transparency and collaboration.
        </p>
        <InfoBox type="tip" title="Key Points">
          <ul>
            <li>Open-source language model by Meta</li>
            <li>Multiple model sizes and versions</li>
            <li>Strong focus on research accessibility</li>
            <li>Community-driven improvements</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="development" title="Development & Evolution">
        <p>
          The evolution of Llama shows Meta's commitment to advancing open-source AI.
        </p>
        <div className="timeline">
          <div className="timeline-item">
            <h4>2023</h4>
            <p>Initial release of Llama and Llama 2</p>
          </div>
          <div className="timeline-item">
            <h4>2024</h4>
            <p>Enhanced versions and specialized models</p>
          </div>
          <div className="timeline-item">
            <h4>2025</h4>
            <p>Advanced capabilities and broader applications</p>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="key-features" title="Key Features">
        <div className="feature-list">
          <h4>Open Source Nature</h4>
          <p>
            Freely available for research and commercial use with appropriate licensing.
          </p>

          <h4>Multiple Model Sizes</h4>
          <p>
            Various parameter counts to suit different needs and resources.
          </p>

          <h4>Advanced Architecture</h4>
          <p>
            Innovative design focusing on efficiency and performance.
          </p>

          <h4>Community Support</h4>
          <p>
            Strong ecosystem of tools, adaptations, and improvements.
          </p>
        </div>
      </BlogSection>

      <BlogSection id="technical-details" title="Technical Details">
        <p>
          Llama's architecture includes several advanced features:
        </p>
        <ul>
          <li>Transformer-based architecture</li>
          <li>Efficient training methodology</li>
          <li>Advanced pre-training approach</li>
          <li>Optimized inference capabilities</li>
        </ul>
        <InfoBox type="warning" title="Model Variations">
          <ul>
            <li>Llama 2 7B: Base model</li>
            <li>Llama 2 13B: Enhanced capabilities</li>
            <li>Llama 2 70B: Largest model</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="use-cases" title="Use Cases">
        <div className="use-case-grid">
          <div className="use-case-card">
            <h4>Research</h4>
            <p>Academic and industrial research applications</p>
          </div>
          <div className="use-case-card">
            <h4>Development</h4>
            <p>Integration into applications and services</p>
          </div>
          <div className="use-case-card">
            <h4>Education</h4>
            <p>Learning and teaching AI concepts</p>
          </div>
          <div className="use-case-card">
            <h4>Innovation</h4>
            <p>Building new AI-powered solutions</p>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="resources" title="Resources & Access">
        <p>
          Access Llama through various channels:
        </p>
        <ul>
          <li>
            <a href="https://ai.meta.com/llama" target="_blank" rel="noopener noreferrer">
              Official Llama Page
            </a>
          </li>
          <li>
            <a href="https://github.com/facebookresearch/llama" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </li>
          <li>
            <a href="https://huggingface.co/meta-llama" target="_blank" rel="noopener noreferrer">
              Hugging Face Models
            </a>
          </li>
        </ul>
      </BlogSection>

      <BlogSection id="comparison" title="Comparison with Other LLMs">
        <div className="comparison-grid">
          <div className="comparison-item">
            <h4>Vs. Proprietary Models</h4>
            <ul>
              <li>Open source availability</li>
              <li>Flexible deployment</li>
              <li>Community involvement</li>
            </ul>
          </div>
          <div className="comparison-item">
            <h4>Vs. Other Open Source LLMs</h4>
            <ul>
              <li>Strong corporate backing</li>
              <li>Regular updates</li>
              <li>Extensive documentation</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="conclusion" title="Conclusion">
        <p>
          Llama represents a significant step forward in democratizing AI technology,
          offering powerful capabilities while maintaining an open and collaborative
          approach to development.
        </p>
        
        <h3>Related Articles</h3>
        <div className="related-links">
          <Link to="/blogs/llm-models/mistral" className="related-link">
            Mistral AI: The Rising Star in Language Models →
          </Link>
          <Link to="/blogs/llm-models/claude" className="related-link">
            Claude: Anthropic's Advanced AI Assistant →
          </Link>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default LlamaGuide;