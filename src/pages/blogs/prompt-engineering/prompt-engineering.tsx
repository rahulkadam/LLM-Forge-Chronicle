import React from 'react';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../components/blogs/BlogComponents';
import useBlogBehavior from '../../../hooks/useBlogBehavior';
import type { BlogCategory } from '../../../data/blogData';
import '../../../styles/blogs/blog-layout-update.css';
import './prompt-engineering.css';

const PromptEngineeringGuide: React.FC = () => {
  useBlogBehavior();

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'fundamentals', title: 'Fundamentals' },
    { id: 'core-techniques', title: 'Core Techniques' },
    { id: 'intermediate-techniques', title: 'Intermediate Techniques' },
    { id: 'model-specific', title: 'Model-Specific Optimizations' },
    { id: 'evaluation', title: 'Evaluation Framework' },
    { id: 'advanced-strategies', title: 'Advanced Strategies' },
    { id: 'domain-applications', title: 'Domain Applications' },
    { id: 'resources', title: 'Resources & Tools' }
  ];

  const category: BlogCategory = 'Prompt Engineering';

  return (
    <BlogTemplate
      title="The Complete Guide to Prompt Engineering"
      date="April 12, 2025"
      readTime="25 min"
      category={category}
      bannerClassName="prompt-engineering-banner"
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Prompt engineering is the practice of designing, optimizing, and refining inputs to large language models (LLMs) to 
          generate desired outputs. It's a critical skill that bridges human intent with AI capabilities, allowing 
          you to effectively "program" language models through carefully crafted instructions.
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

      <BlogSection id="fundamentals" title="Fundamentals">
        <h3>Anatomy of Effective Prompts</h3>
        <p>
          Well-structured prompts typically contain several key components that work together to elicit optimal responses:
        </p>

        <ul>
          <li><strong>Role/Context:</strong> Define who the model should act as and provide relevant background information</li>
          <li><strong>Task Instructions:</strong> Clear, specific directions about what the model should do</li>
          <li><strong>Format Specifications:</strong> Guidelines on how the response should be structured</li>
          <li><strong>Constraints:</strong> Limitations or requirements the model should adhere to</li>
          <li><strong>Input Data:</strong> The specific content the model should process or analyze</li>
          <li><strong>Output Indicators:</strong> Signals for how extensive or detailed the response should be</li>
        </ul>

        <InfoBox type="tip" title="Best Practices">
          <ul>
            <li><strong>Be Specific and Clear:</strong> Precision in your instructions leads to precision in results</li>
            <li><strong>Provide Context:</strong> Give background information to frame the response appropriately</li>
            <li><strong>Structure for Success:</strong> Format prompts logically using lists or sections</li>
            <li><strong>Use Examples:</strong> Demonstrate expectations through examples when needed</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="core-techniques" title="Core Techniques">
        <h3>Basic Prompting Techniques</h3>
        
        <h4>1. Zero-Shot Prompting</h4>
        <p>
          Direct instructions without examples, relying on the model's pre-existing knowledge.
        </p>
        <div className="code-block">
          <pre>{`Classify the following text as either positive, negative, or neutral:

"I really enjoyed the movie, the plot was fantastic."`}</pre>
        </div>

        <h4>2. Few-Shot Prompting</h4>
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

        <h4>3. Chain-of-Thought</h4>
        <p>
          Instructing the model to break down complex problems into step-by-step reasoning.
        </p>
        <div className="code-block">
          <pre>{`If John has 5 apples and gives 2 to Mary, then buys 3 more, and finally gives half of his apples to his brother, how many apples does John have left?

Let's solve this step by step:
1) John starts with 5 apples
2) John gives 2 apples to Mary, leaving John with 5 - 2 = 3 apples
3) John buys 3 more apples, giving him 3 + 3 = 6 apples
4) John gives half of his apples to his brother, which is 6 ÷ 2 = 3 apples
5) Therefore, John has 6 - 3 = 3 apples left`}</pre>
        </div>
      </BlogSection>

      <BlogSection id="intermediate-techniques" title="Intermediate Techniques">
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
            <li>Role prompting works best when the role is clearly defined and relevant to the task</li>
            <li>Self-refinement may require multiple iterations for optimal results</li>
            <li>Always verify the accuracy of role-based responses</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="model-specific" title="Model-Specific Optimizations">
        <h3>GPT-4/3.5 (OpenAI)</h3>
        <ul>
          <li><strong>System Messages:</strong> Use system messages to set persistent context and roles</li>
          <li><strong>Temperature Setting:</strong> Adjust from 0 (deterministic) to 1+ (creative) based on task needs</li>
          <li><strong>Function Calling:</strong> Use structured JSON outputs for data extraction tasks</li>
          <li><strong>Token Awareness:</strong> Keep prompts concise but complete; model has ~8K-32K token context window</li>
        </ul>

        <h3>Claude (Anthropic)</h3>
        <ul>
          <li><strong>XML Tags:</strong> Use &lt;instructions&gt;, &lt;context&gt;, &lt;example&gt; to structure prompts</li>
          <li><strong>Verbose Instructions:</strong> Claude often benefits from detailed, explicit instructions</li>
          <li><strong>Constitution AI:</strong> Designed to refuse harmful requests; frame ethically</li>
          <li><strong>Long Context:</strong> Utilizes large context windows efficiently (100K+ tokens)</li>
        </ul>

        <h3>Open Source Models</h3>
        <ul>
          <li><strong>Model-Specific Templates:</strong> Many open models have specific prompt templates</li>
          <li><strong>Instruction Tuning:</strong> Models like Mistral respond well to direct instructions</li>
          <li><strong>Verbosity in Reasoning:</strong> Often benefits from explicit "think step by step" instructions</li>
          <li><strong>Specific Prefix/Suffix:</strong> May require special tokens or formats</li>
        </ul>
      </BlogSection>

      <BlogSection id="evaluation" title="Evaluation Framework">
        <h3>CRISPE Framework for Prompt Evaluation</h3>
        <ul>
          <li><strong>Clarity:</strong> Is the prompt unambiguous and easy to understand?</li>
          <li><strong>Relevance:</strong> Does the prompt contain all necessary context and constraints?</li>
          <li><strong>Information:</strong> Does the prompt provide sufficient information without overloading?</li>
          <li><strong>Structure:</strong> Is the prompt logically organized and properly formatted?</li>
          <li><strong>Precision:</strong> Is the prompt specific about what it's asking for?</li>
          <li><strong>Execution:</strong> Does the prompt produce the desired outcome?</li>
        </ul>
      </BlogSection>

      <BlogSection id="advanced-strategies" title="Advanced Strategies">
        <h3>ReAct Prompting</h3>
        <p>
          Combining reasoning and acting, alternating between thinking about a problem and taking actions.
        </p>
        <div className="code-block">
          <pre>{`Answer the following question by alternating between Thought, Action, and Observation steps:

Question: What is the capital of the country with the highest population in 2023?

Thought: I need to find the country with the highest population in 2023.
Action: Search for countries by population in 2023
Observation: China is the most populous country, followed by India.
Thought: Now I need to find the capital of China.
Action: Look up the capital of China
Observation: Beijing is the capital of China.
Thought: Therefore, the answer is Beijing.
Answer: Beijing`}</pre>
        </div>

        <h3>Prompt Chaining</h3>
        <p>
          Breaking complex tasks into a sequence of simpler prompts, where each step builds on previous outputs.
        </p>
        <InfoBox type="tip" title="Prompt Chain Example">
          <ol>
            <li>Content Generation: Generate initial content</li>
            <li>Analysis: Analyze & identify issues</li>
            <li>Revision: Refine based on analysis</li>
            <li>Finalization: Polish & format result</li>
          </ol>
        </InfoBox>
      </BlogSection>

      <BlogSection id="domain-applications" title="Domain Applications">
        <h3>Software Development</h3>
        <div className="code-block">
          <pre>{`Write a Python function to validate email addresses with the following requirements:
- Use regular expressions for validation
- Check for standard email format (username@domain.tld)
- Validate TLDs are between 2-6 characters
- Handle edge cases like special characters in username
- Include comprehensive error messages
- Add descriptive comments
- Follow PEP 8 style guidelines
- Use type hints

Return the function definition with a brief explanation of the approach used.`}</pre>
        </div>

        <h3>Data Analysis</h3>
        <div className="code-block">
          <pre>{`Analyze the following customer purchase data to identify purchasing patterns:

Data Description:
- CSV format with columns: CustomerID, Date, ProductID, Category, Amount
- 12 months of transaction data
- Approximately 5,000 unique customers

Analysis Requests:
1. Identify top 3 product categories by revenue
2. Analyze customer segmentation
3. Detect seasonal patterns
4. Examine payment method correlations

Format response as:
- Executive Summary
- Key Findings
- Recommendations
- Follow-up Analyses`}</pre>
        </div>
      </BlogSection>

      <BlogSection id="resources" title="Resources & Tools">
        <h3>Recommended Reading</h3>
        <ul>
          <li><a href="https://www.anthropic.com/research/prompting" target="_blank" rel="noopener noreferrer">Anthropic's Prompt Engineering Guide</a></li>
          <li><a href="https://platform.openai.com/docs/guides/prompt-engineering" target="_blank" rel="noopener noreferrer">OpenAI's Prompt Engineering Guide</a></li>
          <li><a href="https://github.com/dair-ai/Prompt-Engineering-Guide" target="_blank" rel="noopener noreferrer">DAIR.AI Prompt Engineering Guide</a></li>
          <li><a href="https://www.promptingguide.ai/" target="_blank" rel="noopener noreferrer">Promptingguide.ai</a></li>
        </ul>

        <h3>Tools & Playgrounds</h3>
        <ul>
          <li><a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">ChatGPT</a></li>
          <li><a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude</a></li>
          <li><a href="https://huggingface.co/spaces/promptslab/prompt-playground" target="_blank" rel="noopener noreferrer">HuggingFace Prompt Playground</a></li>
        </ul>

        <InfoBox type="warning" title="Next Steps">
          <p>
            Now that you've learned the complete range of prompt engineering techniques, from basics to advanced strategies,
            try applying these concepts to your specific use cases. Start with simpler techniques and gradually incorporate
            more advanced approaches as you become comfortable with the basics.
          </p>
        </InfoBox>
      </BlogSection>
    </BlogTemplate>
  );
};

export default PromptEngineeringGuide;