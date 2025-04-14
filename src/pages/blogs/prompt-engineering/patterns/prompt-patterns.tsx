import React from 'react';
import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox, CodeExample } from '../../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../../data/blogData';
import {Link} from "react-router-dom";

const PromptPatterns: React.FC = () => {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'few-shot', title: 'Few-shot Pattern' },
    { id: 'chain-of-thought', title: 'Chain-of-Thought Pattern' },
    { id: 'react', title: 'ReAct Pattern' },
    { id: 'advanced', title: 'Advanced Patterns' },
    { id: 'combinations', title: 'Pattern Combinations' }
  ];

  const category: BlogCategory = 'Prompt Engineering';

  return (
    <BlogTemplate
      title="Advanced Prompt Patterns: Few-shot, Chain-of-Thought, ReAct, and More"
      date="April 14, 2025"
      readTime="20 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Advanced prompt patterns are sophisticated techniques for enhancing LLM
          performance on complex tasks. This guide explores key patterns and their
          practical applications.
        </p>
        
        <InfoBox type="tip" title="What You'll Learn">
          <ul>
            <li>Few-shot learning techniques</li>
            <li>Chain-of-Thought reasoning</li>
            <li>ReAct pattern implementation</li>
            <li>Advanced pattern combinations</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="few-shot" title="Few-shot Pattern">
        <h3>Understanding Few-shot Learning</h3>
        <p>
          Few-shot learning allows models to understand tasks through a small
          number of examples, improving performance and consistency.
        </p>

        <InfoBox type="example" title="Few-shot Example">
          <CodeExample
            language="text"
            code={`Input: "The movie was fantastic!"
Output: Positive sentiment

Input: "I couldn't stay awake"
Output: Negative sentiment

Input: "The special effects were amazing but the plot was confusing"
Output: Mixed sentiment

Input: "I can't wait to watch it again!"
Output: [Your task]`}
          />
        </InfoBox>

        <h3>Implementation Tips</h3>
        <ul>
          <li>Use clear, diverse examples</li>
          <li>Maintain consistent formatting</li>
          <li>Include edge cases</li>
          <li>Balance example distributions</li>
        </ul>
      </BlogSection>

      <BlogSection id="chain-of-thought" title="Chain-of-Thought Pattern">
        <h3>Mastering Chain-of-Thought</h3>
        <p>
          Chain-of-Thought prompting guides models through step-by-step reasoning,
          improving accuracy and transparency.
        </p>

        <InfoBox type="example" title="CoT Example">
          <CodeExample
            language="text"
            code={`Question: A store has 60 apples. If 1/3 are red and 1/4 are green,
how many apples are neither red nor green?

Let's solve this step by step:
1. Calculate red apples: 60 × (1/3) = 20 red apples
2. Calculate green apples: 60 × (1/4) = 15 green apples
3. Total red and green: 20 + 15 = 35 apples
4. Remaining apples: 60 - 35 = 25 apples

Therefore, 25 apples are neither red nor green.`}
          />
        </InfoBox>

        <h3>Key Benefits</h3>
        <ul>
          <li>Improved reasoning accuracy</li>
          <li>Better problem decomposition</li>
          <li>Transparent decision process</li>
          <li>Easier error detection</li>
        </ul>
      </BlogSection>

      <BlogSection id="react" title="ReAct Pattern">
        <h3>Reasoning and Acting Pattern</h3>
        <p>
          ReAct combines reasoning and action steps, enabling models to solve
          complex tasks through iterative thought and action cycles.
        </p>

        <InfoBox type="example" title="ReAct Pattern Example">
          <CodeExample
            language="text"
            code={`Task: Find population statistics for Tokyo.

Thought: I need to search for Tokyo's population data.
Action: Search for "Tokyo current population statistics"
Observation: Tokyo's population is approximately 37 million (metro area)

Thought: I should verify if this is recent data.
Action: Check the data source date
Observation: Data is from 2021 census

Thought: This is recent enough. Let me summarize the findings.
Action: Provide population summary
Result: Tokyo metropolitan area has approximately 37 million residents
as of 2021, making it the world's largest urban agglomeration.`}
          />
        </InfoBox>

        <h3>Implementation Strategy</h3>
        <ul>
          <li>Clear thought-action cycles</li>
          <li>Explicit reasoning steps</li>
          <li>Structured observation format</li>
          <li>Progressive refinement</li>
        </ul>
      </BlogSection>

      <BlogSection id="advanced" title="Advanced Patterns">
        <h3>Sophisticated Prompting Techniques</h3>
        
        <InfoBox type="tip" title="Advanced Pattern Overview">
          <ul>
            <li>Tree-of-Thought</li>
            <li>Self-consistency</li>
            <li>Step-back prompting</li>
            <li>Generated knowledge</li>
          </ul>
        </InfoBox>

        <h3>Tree-of-Thought</h3>
        <CodeExample
          language="text"
          code={`Problem: What's the best approach for scaling a web service?

Branch 1: Horizontal Scaling
- Add more servers
- Load balancing
- Data consistency challenges

Branch 2: Vertical Scaling
- Upgrade hardware
- Resource limitations
- Cost implications

Branch 3: Hybrid Approach
- Combine both methods
- Dynamic resource allocation
- Complex orchestration

Selection: Hybrid Approach (Branch 3) offers the best balance...`}
        />

        <h3>Self-consistency</h3>
        <p>
          Generate multiple solutions and select the most consistent one through
          majority voting or confidence scoring.
        </p>
      </BlogSection>

      <BlogSection id="combinations" title="Pattern Combinations">
        <h3>Combining Different Patterns</h3>
        <p>
          Advanced applications often benefit from combining multiple patterns
          for enhanced performance.
        </p>

        <InfoBox type="example" title="Combined Pattern Example">
          <CodeExample
            language="text"
            code={`[Few-shot examples]

Task: Solve this math problem using Chain-of-Thought
and verify using ReAct pattern.

Problem: Calculate compound interest for $1000 at 5% for 3 years.

Chain-of-Thought:
1. Formula: A = P(1 + r)^t
2. P = 1000, r = 0.05, t = 3
3. Calculate: 1000(1 + 0.05)^3

ReAct:
Thought: Let's verify this calculation
Action: Calculate step by step
Observation: $1000 × 1.05 × 1.05 × 1.05 = $1157.63

Result: The compound interest will be $1157.63`}
          />
        </InfoBox>

        <h3>Pattern Selection Guide</h3>
        <div className="pattern-selection">
          <h4>Choose based on:</h4>
          <ul>
            <li>Task complexity</li>
            <li>Required accuracy</li>
            <li>Time constraints</li>
            <li>Model capabilities</li>
          </ul>
        </div>

        <div className="resource-links">
          <Link to="/blogs/prompts/advanced" className="resource-link">
            Advanced Prompt Engineering →
          </Link>
          <Link to="/blogs/fundamentals/key-concepts" className="resource-link">
            Key LLM Concepts →
          </Link>
          <Link to="/blogs/prompts/developer-guide" className="resource-link">
            Developer's Guide to Prompting →
          </Link>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default PromptPatterns;