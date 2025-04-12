import React from 'react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../components/blogs/BlogComponents';
import useBlogBehavior from '../../../hooks/useBlogBehavior';
import '../../../styles/blogs/blog-layout-update.css';
import './prompt-engineering.css';

const PromptEngineeringBasics: React.FC = () => {
  useBlogBehavior();

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'core-techniques', title: 'Core Techniques' },
    { id: 'anatomy', title: 'Anatomy of Prompts' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'templates', title: 'Basic Templates' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  return (
    <BlogTemplate
      title="Prompt Engineering Fundamentals"
      date="April 12, 2025"
      readTime="10 min"
      category="Prompt Engineering"
      bannerClassName="prompt-engineering-banner"
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Prompt engineering is the practice of designing, optimizing, and refining inputs to large language models
          (LLMs) to generate desired outputs. It's a critical skill that bridges human intent with AI capabilities.
        </p>
        
        <InfoBox type="tip" title="Why Prompt Engineering Matters">
          <ul>
            <li>Significantly improves model response quality</li>
            <li>Reduces hallucinations and inaccuracies</li>
            <li>Enables complex reasoning and precise outputs</li>
            <li>Maximizes value from existing models</li>
            <li>Mitigates limitations of pre-trained models</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="core-techniques" title="Core Techniques">
        <h3>Zero-Shot Prompting</h3>
        <p>
          Direct instructions without examples, relying on the model's pre-existing knowledge.
        </p>
        <div className="code-block">
          <pre>{`Classify the following text as either positive, negative, or neutral:

"I really enjoyed the movie, the plot was fantastic."`}</pre>
        </div>

        <h3>Few-Shot Prompting</h3>
        <p>
          Providing examples of desired inputs and outputs before asking the model to complete a new task.
        </p>
        <div className="code-block">
          <pre>{`Classify each sentence as positive, negative, or neutral:

Sentence: "The food was delicious."
Sentiment: Positive

Sentence: "I waited for an hour and the service was terrible."
Sentiment: Negative

Sentence: "The restaurant was open until 10pm."
Sentiment: Neutral

Sentence: "I'm not sure if I'll come back again."
Sentiment:`}</pre>
        </div>
      </BlogSection>

      <BlogSection id="anatomy" title="Anatomy of Prompts">
        <p>
          Well-structured prompts typically contain several key components that work together to elicit optimal responses.
        </p>

        <div className="component-grid">
          <InfoBox type="tip" title="Key Components">
            <ul>
              <li><strong>Role/Context:</strong> Define who the model should act as</li>
              <li><strong>Task Instructions:</strong> Clear, specific directions</li>
              <li><strong>Format Specifications:</strong> Response structure guidelines</li>
              <li><strong>Constraints:</strong> Limitations and requirements</li>
              <li><strong>Examples:</strong> Sample inputs and outputs</li>
            </ul>
          </InfoBox>
        </div>
      </BlogSection>

      <BlogSection id="best-practices" title="Best Practices">
        <h3>Be Specific and Clear</h3>
        <div className="comparison">
          <div className="weak">
            <h4>Weak Prompt:</h4>
            <p>"Write about climate change."</p>
          </div>
          <div className="strong">
            <h4>Strong Prompt:</h4>
            <p>"Write a 300-word explanation of how rising global temperatures affect marine ecosystems, including three specific consequences and potential mitigation strategies."</p>
          </div>
        </div>

        <InfoBox type="warning" title="Common Pitfalls">
          <ul>
            <li>Being too vague or ambiguous</li>
            <li>Not providing enough context</li>
            <li>Failing to specify output format</li>
            <li>Overloading with too many requirements</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="templates" title="Basic Templates">
        <p>
          Start with these basic templates and modify them for your specific needs.
        </p>
        <div className="code-block">
          <pre>{`Content Creation Template:
Create a [CONTENT TYPE] about [TOPIC] for [TARGET AUDIENCE].
Style: [FORMAL/CASUAL]
Length: Approximately [WORD COUNT] words
Include:
- Introduction with key points
- Main sections addressing [POINT 1, POINT 2, POINT 3]
- Conclusion with takeaways`}</pre>
        </div>
      </BlogSection>

      <BlogSection id="next-steps" title="Next Steps">
        <p>
          Now that you understand the basics of prompt engineering, you're ready to explore more advanced techniques.
        </p>
        <div className="next-steps-grid">
          <Link to="/prompt-engineering/intermediate" className="next-step-card">
            Continue to Intermediate Techniques →
          </Link>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default PromptEngineeringBasics;