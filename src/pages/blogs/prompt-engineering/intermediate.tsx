import React from 'react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../components/blogs/BlogComponents';
import useBlogBehavior from '../../../hooks/useBlogBehavior';
import '../../../styles/blogs/blog-layout-update.css';
import './prompt-engineering.css';

const PromptEngineeringIntermediate: React.FC = () => {
  useBlogBehavior();

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'advanced-techniques', title: 'Advanced Techniques' },
    { id: 'model-specific', title: 'Model-Specific Optimizations' },
    { id: 'evaluation', title: 'Evaluation Framework' },
    { id: 'domain-applications', title: 'Domain Applications' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  return (
    <BlogTemplate
      title="Intermediate Prompt Engineering"
      date="April 12, 2025"
      readTime="12 min"
      category="Prompt Engineering"
      bannerClassName="prompt-engineering-banner"
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Once you've mastered the basics of prompt engineering, you can explore more sophisticated techniques that
          enable greater control over language model outputs. This guide covers role-based prompting, self-refinement,
          model-specific optimization, and evaluation frameworks.
        </p>

        <InfoBox type="tip" title="In This Guide">
          <ul>
            <li>Advanced prompting techniques</li>
            <li>Model-specific optimizations</li>
            <li>Evaluation frameworks</li>
            <li>Domain-specific applications</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="advanced-techniques" title="Advanced Techniques">
        <h3>Role Prompting</h3>
        <p>
          Assigning a specific role or persona to the model to guide its response style and knowledge use.
        </p>
        <div className="code-block">
          <pre>{`Act as an experienced cybersecurity expert. Review the following network configuration and identify potential security vulnerabilities:

[configuration details here]`}</pre>
        </div>

        <h3>Self-Refinement</h3>
        <p>
          Instructing the model to evaluate and improve its own responses through multiple drafts.
        </p>
        <div className="code-block">
          <pre>{`Write a short paragraph explaining quantum computing. Then, review your explanation for accuracy and clarity, and provide an improved version.`}</pre>
        </div>

        <InfoBox type="warning" title="Important Considerations">
          <ul>
            <li>Role prompting works best when the role is clearly defined</li>
            <li>Self-refinement may require multiple iterations</li>
            <li>Always verify the accuracy of outputs</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="model-specific" title="Model-Specific Optimizations">
        <h3>GPT-4/3.5 (OpenAI)</h3>
        <ul>
          <li><strong>System Messages:</strong> Use for persistent context</li>
          <li><strong>Temperature Setting:</strong> 0 (precise) to 1+ (creative)</li>
          <li><strong>Function Calling:</strong> Structured JSON outputs</li>
          <li><strong>Token Awareness:</strong> ~8K-32K context window</li>
        </ul>

        <h3>Claude (Anthropic)</h3>
        <ul>
          <li><strong>XML Tags:</strong> Structure prompts with tags</li>
          <li><strong>Verbose Instructions:</strong> Benefits from detail</li>
          <li><strong>Constitution AI:</strong> Ethical considerations</li>
          <li><strong>Long Context:</strong> 100K+ tokens</li>
        </ul>
      </BlogSection>

      <BlogSection id="evaluation" title="Evaluation Framework">
        <h3>CRISPE Framework</h3>
        <InfoBox type="tip" title="Evaluation Criteria">
          <ul>
            <li><strong>Clarity:</strong> Unambiguous instructions</li>
            <li><strong>Relevance:</strong> Necessary context included</li>
            <li><strong>Information:</strong> Sufficient detail</li>
            <li><strong>Structure:</strong> Logical organization</li>
            <li><strong>Precision:</strong> Specific requirements</li>
            <li><strong>Execution:</strong> Desired outcomes</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="domain-applications" title="Domain Applications">
        <h3>Software Development</h3>
        <div className="code-block">
          <pre>{`Write a Python function to validate email addresses with:
- Regular expression validation
- Standard email format check
- TLD validation (2-6 characters)
- Edge case handling
- Error messages
- Type hints
- PEP 8 compliance`}</pre>
        </div>

        <h3>Data Analysis</h3>
        <div className="code-block">
          <pre>{`Analyze this customer purchase data:
- CSV format (CustomerID, Date, Amount)
- 12 months of transactions
- 5,000 unique customers

Provide:
1. Top product categories
2. Customer segmentation
3. Seasonal patterns
4. Recommendations`}</pre>
        </div>
      </BlogSection>

      <BlogSection id="next-steps" title="Next Steps">
        <p>
          Ready to explore more sophisticated prompt engineering techniques?
        </p>
        <div className="next-steps-grid">
          <Link to="/prompt-engineering/advanced" className="next-step-card">
            Continue to Advanced Techniques →
          </Link>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default PromptEngineeringIntermediate;