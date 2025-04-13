import React from 'react';
import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox, CodeExample } from '../../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../../data/blogData';
import './key-concepts.css';
import {Link} from "react-router-dom";

const KeyConcepts: React.FC = () => {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'zero-shot', title: 'Zero-shot Learning' },
    { id: 'few-shot', title: 'Few-shot Learning' },
    { id: 'chain-of-thought', title: 'Chain-of-Thought Prompting' },
    { id: 'comparison', title: 'Comparison and Selection' },
    { id: 'advanced', title: 'Advanced Applications' }
  ];

  const category: BlogCategory = 'Fundamentals';

  return (
    <BlogTemplate
      title="Key LLM Concepts: Zero-shot, Few-shot, and Chain-of-Thought"
      date="April 14, 2025"
      readTime="15 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Understanding different prompting techniques is crucial for effective
          interaction with Large Language Models. This guide explores three
          fundamental concepts: Zero-shot learning, Few-shot learning, and
          Chain-of-Thought prompting.
        </p>
        
        <InfoBox type="tip" title="Key Concepts Overview">
          <ul>
            <li>Zero-shot: Direct prompting without examples</li>
            <li>Few-shot: Learning from a few examples</li>
            <li>Chain-of-Thought: Step-by-step reasoning process</li>
            <li>When to use each approach</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="zero-shot" title="Zero-shot Learning">
        <h3>Understanding Zero-shot Learning</h3>
        <p>
          Zero-shot learning allows LLMs to perform tasks without specific examples,
          relying on their pre-trained knowledge and clear instructions.
        </p>

        <InfoBox type="example" title="Zero-shot Example">
          <CodeExample
            language="text"
            code={`Prompt: "Classify this movie review as positive or negative:
'The special effects were amazing but the plot was confusing.'"`}
          />
          <p>The model can understand and perform the task without example classifications.</p>
        </InfoBox>

        <h3>Advantages of Zero-shot</h3>
        <ul>
          <li>Minimal prompt engineering required</li>
          <li>Shorter prompts, using less tokens</li>
          <li>More flexible and adaptable</li>
          <li>Works well for simple tasks</li>
        </ul>

        <h3>Best Practices</h3>
        <ul>
          <li>Be clear and specific in instructions</li>
          <li>Define output format when needed</li>
          <li>Consider task complexity</li>
          <li>Test with different phrasings</li>
        </ul>
      </BlogSection>

      <BlogSection id="few-shot" title="Few-shot Learning">
        <h3>Mastering Few-shot Learning</h3>
        <p>
          Few-shot learning improves model performance by providing a few examples
          of the desired input-output pattern before the actual task.
        </p>

        <InfoBox type="example" title="Few-shot Example">
          <CodeExample
            language="text"
            code={`Input: "The movie was fantastic!"
Output: Positive

Input: "I couldn't stay awake."
Output: Negative

Input: "The acting was superb but the ending disappointed."
Output: [Your answer here]`}
          />
          <p>The model learns from the pattern in the examples.</p>
        </InfoBox>

        <h3>Implementation Tips</h3>
        <ul>
          <li>Use consistent formatting across examples</li>
          <li>Choose diverse, representative examples</li>
          <li>Balance positive and negative cases</li>
          <li>Keep examples relevant to the task</li>
        </ul>
      </BlogSection>

      <BlogSection id="chain-of-thought" title="Chain-of-Thought Prompting">
        <h3>Enhanced Reasoning with Chain-of-Thought</h3>
        <p>
          Chain-of-Thought prompting encourages LLMs to break down complex problems
          into smaller, logical steps, improving accuracy and explainability.
        </p>

        <InfoBox type="example" title="Chain-of-Thought Example">
          <CodeExample
            language="text"
            code={`Question: "If a shirt costs $30 after a 25% discount, what was the original price?"

Let's solve this step by step:
1. The current price ($30) is 75% of original price
2. To find 100%, divide $30 by 0.75
3. $30 ÷ 0.75 = $40

Therefore, the original price was $40.`}
          />
        </InfoBox>

        <h3>Key Benefits</h3>
        <ul>
          <li>Improved accuracy for complex tasks</li>
          <li>Better reasoning transparency</li>
          <li>Easier error detection</li>
          <li>Enhanced problem-solving capabilities</li>
        </ul>
      </BlogSection>

      <BlogSection id="comparison" title="Comparison and Selection">
        <h3>Choosing the Right Approach</h3>
        
        <InfoBox type="tip" title="Selection Guide">
          <p>Choose based on:</p>
          <ul>
            <li>Task complexity</li>
            <li>Required accuracy</li>
            <li>Token budget</li>
            <li>Time constraints</li>
          </ul>
        </InfoBox>

        <h3>When to Use Each Approach</h3>
        <div className="comparison-table">
          <h4>Zero-shot Learning</h4>
          <ul>
            <li>Simple classification tasks</li>
            <li>Well-defined instructions</li>
            <li>Limited token budget</li>
            <li>Standard language tasks</li>
          </ul>

          <h4>Few-shot Learning</h4>
          <ul>
            <li>Specific output formats needed</li>
            <li>Domain-specific tasks</li>
            <li>Pattern-based problems</li>
            <li>Consistent formatting required</li>
          </ul>

          <h4>Chain-of-Thought</h4>
          <ul>
            <li>Complex reasoning tasks</li>
            <li>Math problems</li>
            <li>Logic puzzles</li>
            <li>When explanation is important</li>
          </ul>
        </div>
      </BlogSection>

      <BlogSection id="advanced" title="Advanced Applications">
        <h3>Combining Approaches</h3>
        <p>
          Advanced applications often combine multiple techniques for optimal results.
        </p>

        <InfoBox type="tip" title="Advanced Techniques">
          <ul>
            <li>Few-shot Chain-of-Thought</li>
            <li>Zero-shot Chain-of-Thought</li>
            <li>Hybrid approaches</li>
            <li>Task-specific combinations</li>
          </ul>
        </InfoBox>

        <h3>Future Developments</h3>
        <p>
          The field continues to evolve with new prompting techniques and
          improvements to existing methods.
        </p>

        <div className="resource-links">
          <Link to="/blogs/prompts/advanced" className="resource-link">
            Advanced Prompt Engineering →
          </Link>
          <Link to="/blogs/fundamentals/capabilities" className="resource-link">
            LLM Capabilities Guide →
          </Link>
          <Link to="/blogs/prompts/developer-guide" className="resource-link">
            Developer's Prompt Guide →
          </Link>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default KeyConcepts;