import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PromptEngineering.css';

const PromptEngineeringAdvanced: React.FC = () => {
  return (
    <div className="prompt-engineering">
      <header className="page-header">
        <h1>Advanced Prompt Engineering</h1>
        <p className="subtitle">
          Master sophisticated techniques for complex AI tasks and workflows
        </p>
      </header>

      <section className="introduction">
        <p>
          Advanced prompt engineering techniques allow you to solve complex problems, create sophisticated workflows,
          and maximize the capabilities of large language models. This guide covers ReAct patterns, prompt chaining,
          in-context meta-prompting, and other advanced strategies.
        </p>

        <div className="level-navigator">
          <p>This is part 3 of our 3-part prompt engineering guide:</p>
          <div className="level-buttons">
            <Link to="/prompt-engineering" className="level-button">Fundamentals</Link>
            <Link to="/prompt-engineering/intermediate" className="level-button">Intermediate</Link>
            <span className="level-button active">Advanced</span>
          </div>
        </div>
      </section>

      <section className="advanced-strategies">
        <h2>Advanced Prompt Engineering Strategies</h2>
        <div className="strategies-container">
          <div className="strategy-card">
            <h3>ReAct Prompting</h3>
            <div className="technique-content">
              <p>
                Combining reasoning and acting, alternating between thinking about a problem and taking actions.
              </p>
              <div className="example-box">
                <h4>Example:</h4>
                <div className="code-block">
                  <pre>
                    {`Answer the following question by alternating between Thought, Action, and Observation steps:

Question: What is the capital of the country with the highest population in 2023?

Thought: I need to find the country with the highest population in 2023.
Action: Search for countries by population in 2023
Observation: China is the most populous country, followed by India.
Thought: Now I need to find the capital of China.
Action: Look up the capital of China
Observation: Beijing is the capital of China.
Thought: Therefore, the answer is Beijing.
Answer: Beijing`}
                  </pre>
                </div>
              </div>
              <p className="best-for">
                Best for: Complex tasks requiring both reasoning and information gathering.
              </p>
            </div>
          </div>

          <div className="strategy-card">
            <h3>Prompt Chaining</h3>
            <p>
              Breaking complex tasks into a sequence of simpler prompts, where each step builds on previous outputs.
            </p>
            <div className="strategy-diagram">
              <div className="diagram-step">
                <span className="step-number">1</span>
                <div className="step-content">
                  <p><strong>Content Generation</strong></p>
                  <p className="step-desc">Generate initial content</p>
                </div>
              </div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-step">
                <span className="step-number">2</span>
                <div className="step-content">
                  <p><strong>Analysis</strong></p>
                  <p className="step-desc">Analyze & identify issues</p>
                </div>
              </div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-step">
                <span className="step-number">3</span>
                <div className="step-content">
                  <p><strong>Revision</strong></p>
                  <p className="step-desc">Refine based on analysis</p>
                </div>
              </div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-step">
                <span className="step-number">4</span>
                <div className="step-content">
                  <p><strong>Finalization</strong></p>
                  <p className="step-desc">Polish & format result</p>
                </div>
              </div>
            </div>
          </div>

          <div className="strategy-card">
            <h3>In-Context Meta-Prompting</h3>
            <p>
              Including prompting instructions within the prompt itself to guide the model's approach.
            </p>
            <div className="code-block">
              <pre>
                {`When answering the following question:
1. First, identify what knowledge domains are relevant
2. For each domain, recall key facts and principles
3. Apply these principles to the specific question
4. Structure your answer from general to specific
5. Include concrete examples to illustrate concepts

Question: How do quantum computers differ from classical computers in their approach to cryptography?`}
              </pre>
            </div>
          </div>

          <div className="strategy-card">
            <h3>Prompt Templating</h3>
            <p>
              Creating reusable prompt structures with placeholders for variable content.
            </p>
            <div className="code-block">
              <pre>
                {`// Template
You are a {{ROLE}} helping a user with {{TASK_TYPE}}. 
User request: {{USER_INPUT}}
Provide {{OUTPUT_TYPE}} that addresses the user's needs.
Consider the following constraints: {{CONSTRAINTS}}

// Example Usage
You are a financial analyst helping a user with investment planning. 
User request: "I have $10,000 to invest for retirement in 30 years."
Provide a detailed investment strategy that addresses the user's needs.
Consider the following constraints: risk tolerance is moderate, focus on global diversification.`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="domain-applications">
        <h2>Advanced Domain Applications</h2>
        
        <div className="domain-grid">
          <div className="domain-card">
            <h3>Data Analysis</h3>
            <div className="domain-content">
              <ul>
                <li>Describe data structure, format, and meaning of fields</li>
                <li>Clarify specific analytical questions or hypotheses</li>
                <li>Define statistical methods to apply if relevant</li>
                <li>Specify output format (tables, summaries, recommendations)</li>
              </ul>
              <div className="example-box">
                <h4>Example Prompt:</h4>
                <div className="code-block">
                  <pre>
                    {`Analyze the following customer purchase data to identify purchasing patterns and provide actionable insights:

Data Description:
- CSV format with columns: CustomerID, Date, ProductID, Category, Amount, PaymentMethod, DeliveryMethod
- 12 months of transaction data from Jan-Dec 2023
- Approximately 5,000 unique customers

Analysis Requests:
1. Identify the top 3 product categories by revenue and their month-over-month growth
2. Analyze customer segmentation based on purchase frequency and average order value
3. Detect any seasonal patterns in purchasing behavior
4. Examine correlation between payment methods and order sizes

Please format your response as:
- Executive Summary (3-4 sentences)
- Key Findings (bulleted list with numerical insights)
- Recommendations (3-5 actionable items)
- Suggested follow-up analyses

[Data would be provided here]`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="prompt-templates">
        <h2>Advanced Prompt Templates</h2>
        <p>
          These templates serve as starting points for complex tasks. Modify them to fit your specific needs.
        </p>
        
        <div className="templates-grid">
          <div className="template-card">
            <h3>Complex Problem Solving</h3>
            <div className="code-block">
              <pre>
                {`I'm trying to solve a complex problem about [TOPIC]. 

Context: [PROVIDE RELEVANT BACKGROUND]

The specific problem is: [DESCRIBE PROBLEM IN DETAIL]

To solve this problem effectively:
1. Break down the key components and analyze each one
2. Consider multiple approaches and their trade-offs
3. Recommend the most effective solution with justification
4. Identify potential implementation challenges
5. Suggest how to measure success

Please structure your response with clear headings and concise explanations.`}
              </pre>
            </div>
          </div>
          
          <div className="template-card">
            <h3>Technical Tutorial</h3>
            <div className="code-block">
              <pre>
                {`Create a step-by-step tutorial on how to [SPECIFIC TECHNICAL TASK].

Target audience: [BEGINNER/INTERMEDIATE/ADVANCED] users who [SPECIFIC BACKGROUND]

Include the following sections:
1. Introduction
   - Brief explanation of what we're building/doing
   - Why it's useful
   - Prerequisites and required tools/technologies

2. Setup
   - Environment configuration
   - Required installations
   - Initial configuration

3. Step-by-Step Instructions
   - Detailed, numbered steps
   - Include code samples for each critical step
   - Explain WHY each step is necessary, not just what to do

4. Common Issues & Troubleshooting
   - Address at least 3 common problems
   - Include solutions for each

5. Next Steps & Advanced Usage
   - How to extend the solution
   - Related techniques or features

Format all code in proper syntax highlighting for [LANGUAGE/FRAMEWORK].
Include comments in code samples to explain complex parts.`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="resources">
        <h2>Further Learning Resources</h2>
        <div className="resources-container">
          <div className="resource-links">
            <h3>Recommended Reading</h3>
            <ul>
              <li><a href="https://www.anthropic.com/research/prompting" target="_blank" rel="noopener noreferrer">Anthropic's Prompt Engineering Guide</a></li>
              <li><a href="https://platform.openai.com/docs/guides/prompt-engineering" target="_blank" rel="noopener noreferrer">OpenAI's Prompt Engineering Guide</a></li>
              <li><a href="https://github.com/dair-ai/Prompt-Engineering-Guide" target="_blank" rel="noopener noreferrer">DAIR.AI Prompt Engineering Guide (GitHub)</a></li>
              <li><a href="https://www.promptingguide.ai/" target="_blank" rel="noopener noreferrer">Promptingguide.ai</a></li>
            </ul>
          </div>
          
          <div className="resource-links">
            <h3>Tools & Playgrounds</h3>
            <ul>
              <li><a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">ChatGPT</a></li>
              <li><a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude</a></li>
              <li><a href="https://huggingface.co/spaces/promptslab/prompt-playground" target="_blank" rel="noopener noreferrer">HuggingFace Prompt Playground</a></li>
              <li><a href="https://github.com/promptslab/Promptify" target="_blank" rel="noopener noreferrer">Promptify (Python Library)</a></li>
            </ul>
          </div>
          
          <div className="resource-links">
            <h3>Community & Forums</h3>
            <ul>
              <li><a href="https://www.reddit.com/r/PromptEngineering/" target="_blank" rel="noopener noreferrer">r/PromptEngineering Subreddit</a></li>
              <li><a href="https://discord.gg/promptengineering" target="_blank" rel="noopener noreferrer">Prompt Engineering Discord</a></li>
              <li><a href="https://www.prompthub.us/" target="_blank" rel="noopener noreferrer">PromptHub</a></li>
              <li><a href="https://twitter.com/search?q=promptengineering" target="_blank" rel="noopener noreferrer">Twitter #PromptEngineering</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="next-steps">
        <h2>Explore the Full Prompt Engineering Guide</h2>
        <p>
          Now that you've learned advanced prompt engineering techniques, you might want to revisit the basics or
          intermediate topics to build a comprehensive understanding.
        </p>
        <div className="cta-container">
          <Link to="/prompt-engineering" className="cta-button">Review Fundamentals</Link>
          <Link to="/prompt-engineering/intermediate" className="cta-button">Review Intermediate Techniques</Link>
        </div>
      </section>
    </div>
  );
};

export default PromptEngineeringAdvanced;