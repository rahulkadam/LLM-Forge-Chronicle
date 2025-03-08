import React from 'react';
import '../styles/PromptEngineering.css';

const PromptEngineering: React.FC = () => {
  return (
    <div className="prompt-engineering">
      <header className="page-header">
        <h1>The Art of Prompt Engineering</h1>
        <p className="subtitle">
          Master the techniques to design effective prompts for large language models
        </p>
      </header>

      <section className="introduction">
        <h2>What is Prompt Engineering?</h2>
        <p>
          Prompt engineering is the practice of designing, optimizing, and refining inputs to large language models (LLMs) to 
          generate desired outputs. It's a critical skill that bridges human intent with AI capabilities, allowing 
          you to effectively "program" language models through carefully crafted instructions.
        </p>
        <div className="key-points">
          <div className="key-point">
            <h3>Why Prompt Engineering Matters</h3>
            <ul>
              <li>Significantly improves model response quality</li>
              <li>Reduces hallucinations and inaccuracies</li>
              <li>Enables complex reasoning and precise outputs</li>
              <li>Maximizes value from existing models</li>
              <li>Mitigates limitations of pre-trained models</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="core-techniques">
        <h2>Core Prompt Engineering Techniques</h2>
        
        <div className="technique-grid">
          <div className="technique-card">
            <h3>Zero-Shot Prompting</h3>
            <div className="technique-content">
              <p>
                Direct instructions without examples, relying on the model's pre-existing knowledge.
              </p>
              <div className="example-box">
                <h4>Example:</h4>
                <div className="code-block">
                  <pre>
                    {`Classify the following text as either positive, negative, or neutral:

"I really enjoyed the movie, the plot was fantastic."`}
                  </pre>
                </div>
              </div>
              <p className="best-for">
                Best for: Simple tasks where the model likely has strong prior knowledge.
              </p>
            </div>
          </div>

          <div className="technique-card">
            <h3>Few-Shot Prompting</h3>
            <div className="technique-content">
              <p>
                Providing examples of desired inputs and outputs before asking the model to complete a new task.
              </p>
              <div className="example-box">
                <h4>Example:</h4>
                <div className="code-block">
                  <pre>
                    {`Classify each sentence as positive, negative, or neutral:

Sentence: "The food was delicious."
Sentiment: Positive

Sentence: "I waited for an hour and the service was terrible."
Sentiment: Negative

Sentence: "The restaurant was open until 10pm."
Sentiment: Neutral

Sentence: "I'm not sure if I'll come back again."
Sentiment:`}
                  </pre>
                </div>
              </div>
              <p className="best-for">
                Best for: Guiding the model on specific formats or classification criteria.
              </p>
            </div>
          </div>

          <div className="technique-card">
            <h3>Chain-of-Thought</h3>
            <div className="technique-content">
              <p>
                Instructing the model to break down complex problems into step-by-step reasoning.
              </p>
              <div className="example-box">
                <h4>Example:</h4>
                <div className="code-block">
                  <pre>
                    {`If John has 5 apples and gives 2 to Mary, then buys 3 more, and finally gives half of his apples to his brother, how many apples does John have left?

Let's solve this step by step:
1) John starts with 5 apples
2) John gives 2 apples to Mary, leaving John with 5 - 2 = 3 apples
3) John buys 3 more apples, giving him 3 + 3 = 6 apples
4) John gives half of his apples to his brother, which is 6 ÷ 2 = 3 apples
5) Therefore, John has 6 - 3 = 3 apples left`}
                  </pre>
                </div>
              </div>
              <p className="best-for">
                Best for: Complex reasoning problems that benefit from explicit intermediate steps.
              </p>
            </div>
          </div>

          <div className="technique-card">
            <h3>Role Prompting</h3>
            <div className="technique-content">
              <p>
                Assigning a specific role or persona to the model to guide its response style and knowledge use.
              </p>
              <div className="example-box">
                <h4>Example:</h4>
                <div className="code-block">
                  <pre>
                    {`Act as an experienced cybersecurity expert. Review the following network configuration and identify potential security vulnerabilities:

[configuration details here]`}
                  </pre>
                </div>
              </div>
              <p className="best-for">
                Best for: Tailoring responses to specific domains or expertise levels.
              </p>
            </div>
          </div>
          
          <div className="technique-card">
            <h3>Self-Refinement</h3>
            <div className="technique-content">
              <p>
                Instructing the model to evaluate and improve its own responses through multiple drafts.
              </p>
              <div className="example-box">
                <h4>Example:</h4>
                <div className="code-block">
                  <pre>
                    {`Write a short paragraph explaining quantum computing. Then, review your explanation for accuracy and clarity, and provide an improved version.`}
                  </pre>
                </div>
              </div>
              <p className="best-for">
                Best for: Generating high-quality content that benefits from self-review and refinement.
              </p>
            </div>
          </div>
          
          <div className="technique-card">
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
        </div>
      </section>

      <section className="prompt-components">
        <h2>Anatomy of Effective Prompts</h2>
        <p>
          Well-structured prompts typically contain several key components that work together to elicit optimal responses.
        </p>
        
        <div className="component-diagram">
          <div className="component-row">
            <div className="component">
              <h3>Role/Context</h3>
              <p>Define who the model should act as and provide relevant background information.</p>
              <div className="example"><em>"You are an expert data scientist with expertise in anomaly detection algorithms..."</em></div>
            </div>
            <div className="component">
              <h3>Task Instructions</h3>
              <p>Clear, specific directions about what the model should do.</p>
              <div className="example"><em>"Analyze the following dataset and identify patterns that could indicate fraudulent transactions..."</em></div>
            </div>
          </div>
          <div className="component-row">
            <div className="component">
              <h3>Format Specifications</h3>
              <p>Guidelines on how the response should be structured.</p>
              <div className="example"><em>"Present your findings in a bulleted list, with each point containing the pattern identified and its significance..."</em></div>
            </div>
            <div className="component">
              <h3>Constraints</h3>
              <p>Limitations or requirements the model should adhere to.</p>
              <div className="example"><em>"Limit your analysis to statistical patterns that can be verified; do not make assumptions about user intent..."</em></div>
            </div>
          </div>
          <div className="component-row">
            <div className="component">
              <h3>Input Data</h3>
              <p>The specific content the model should process or analyze.</p>
              <div className="example"><em>"Here is the transaction log for the past 30 days: [data]..."</em></div>
            </div>
            <div className="component">
              <h3>Output Indicators</h3>
              <p>Signals for how extensive or detailed the response should be.</p>
              <div className="example"><em>"Provide a comprehensive analysis with at least 5 distinct patterns..."</em></div>
            </div>
          </div>
        </div>
      </section>

      <section className="best-practices">
        <h2>Best Practices for Prompt Engineering</h2>
        
        <div className="practices-grid">
          <div className="practice-card">
            <h3>Be Specific and Clear</h3>
            <div className="practice-content">
              <p>Precision in your instructions leads to precision in results. Avoid ambiguity and provide explicit directions.</p>
              <div className="comparison">
                <div className="weak">
                  <h4>Weak Prompt:</h4>
                  <p>"Write about climate change."</p>
                </div>
                <div className="strong">
                  <h4>Strong Prompt:</h4>
                  <p>"Write a 300-word explanation of how rising global temperatures affect marine ecosystems, including at least three specific consequences and potential mitigation strategies."</p>
                </div>
              </div>
            </div>
          </div>

          <div className="practice-card">
            <h3>Provide Context</h3>
            <div className="practice-content">
              <p>Give the model background information to frame the response appropriately.</p>
              <div className="comparison">
                <div className="weak">
                  <h4>Weak Prompt:</h4>
                  <p>"Explain quantum entanglement."</p>
                </div>
                <div className="strong">
                  <h4>Strong Prompt:</h4>
                  <p>"Explain quantum entanglement to a high school physics student who understands basic atomic theory but has no prior knowledge of quantum mechanics."</p>
                </div>
              </div>
            </div>
          </div>

          <div className="practice-card">
            <h3>Structure for Success</h3>
            <div className="practice-content">
              <p>Format your prompts logically, using paragraphs, bullet points, or numbered lists.</p>
              <div className="comparison">
                <div className="weak">
                  <h4>Weak Prompt:</h4>
                  <p>"Help me plan a website for my business it's a bakery in Boston we need online ordering and a gallery of our products and also customer reviews and information about our location and hours and a contact form."</p>
                </div>
                <div className="strong">
                  <h4>Strong Prompt:</h4>
                  <p>"I need to plan a website for my bakery in Boston. Please help me outline the necessary pages and features, including:
1. Online ordering system
2. Product gallery
3. Customer reviews
4. Location and hours information
5. Contact form
For each element, provide 1-2 sentences explaining the best implementation approach."</p>
                </div>
              </div>
            </div>
          </div>

          <div className="practice-card">
            <h3>Use Examples</h3>
            <div className="practice-content">
              <p>Demonstrate your expectations through examples to guide the model's output format and style.</p>
              <div className="comparison">
                <div className="weak">
                  <h4>Weak Prompt:</h4>
                  <p>"Generate creative names for a science fiction novel about time travel."</p>
                </div>
                <div className="strong">
                  <h4>Strong Prompt:</h4>
                  <p>"Generate 5 creative titles for a science fiction novel about time travel. Each title should be evocative and include a subtitle. Examples of the style I'm looking for:
- 'Echoes of Tomorrow: A Journey Through Fractured Time'
- 'The Chronos Directive: When Past Becomes Future'
Please create 5 original titles following this format."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="advanced-strategies">
        <h2>Advanced Prompt Engineering Strategies</h2>
        <div className="strategies-container">
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

      <section className="model-specific-techniques">
        <h2>Model-Specific Techniques</h2>
        <p>
          Different models respond better to different prompting techniques. Here are some model-specific optimizations:
        </p>
        
        <div className="model-grid">
          <div className="model-card">
            <h3>GPT-4/3.5 (OpenAI)</h3>
            <ul>
              <li><strong>System Messages:</strong> Use the system message to set persistent context and roles</li>
              <li><strong>Temperature Setting:</strong> Adjust from 0 (deterministic) to 1+ (creative) based on task needs</li>
              <li><strong>Function Calling:</strong> Use structured JSON outputs for data extraction tasks</li>
              <li><strong>Token Awareness:</strong> Keep prompts concise but complete; model has ~8K-32K token context window</li>
            </ul>
          </div>

          <div className="model-card">
            <h3>Claude (Anthropic)</h3>
            <ul>
              <li><strong>XML Tags:</strong> Use &lt;instructions&gt;, &lt;context&gt;, &lt;example&gt; to structure prompts</li>
              <li><strong>Verbose Instructions:</strong> Claude often benefits from detailed, explicit instructions</li>
              <li><strong>Constitution AI:</strong> Designed to refuse harmful requests; frame ethically</li>
              <li><strong>Long Context:</strong> Utilizes large context windows efficiently (100K+ tokens)</li>
            </ul>
          </div>

          <div className="model-card">
            <h3>Llama 2/3 (Meta)</h3>
            <ul>
              <li><strong>Detailed Priming:</strong> More extensive context setting than some commercial models</li>
              <li><strong>Explicit Formatting:</strong> Be very clear about expected output formats</li>
              <li><strong>Instruct Format:</strong> Using specific "instruction:" prefix can improve results</li>
              <li><strong>Multi-Turn Interactions:</strong> Benefits from conversation history for context</li>
            </ul>
          </div>

          <div className="model-card">
            <h3>Open Source Models</h3>
            <ul>
              <li><strong>Model-Specific Templates:</strong> Many open models have specific prompt templates</li>
              <li><strong>Instruction Tuning:</strong> Models like Mistral respond well to direct instructions</li>
              <li><strong>Verbosity in Reasoning:</strong> Often benefits from explicit "think step by step" instructions</li>
              <li><strong>Specific Prefix/Suffix:</strong> May require special tokens or formats (e.g., "### Instruction:" or "&lt;s&gt;")</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="prompt-evaluation">
        <h2>Evaluating and Iterating Prompts</h2>
        
        <div className="evaluation-framework">
          <h3>CRISPE Framework for Prompt Evaluation</h3>
          <div className="framework-grid">
            <div className="framework-item">
              <h4><span className="highlight">C</span>larity</h4>
              <p>Is the prompt unambiguous and easy to understand?</p>
              <div className="rating-scale">
                <span className="rating-label">Low</span>
                <div className="rating-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <span className="rating-label">High</span>
              </div>
            </div>
            
            <div className="framework-item">
              <h4><span className="highlight">R</span>elevance</h4>
              <p>Does the prompt contain all necessary context and constraints?</p>
              <div className="rating-scale">
                <span className="rating-label">Low</span>
                <div className="rating-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <span className="rating-label">High</span>
              </div>
            </div>
            
            <div className="framework-item">
              <h4><span className="highlight">I</span>nformation</h4>
              <p>Does the prompt provide sufficient information without overloading?</p>
              <div className="rating-scale">
                <span className="rating-label">Low</span>
                <div className="rating-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <span className="rating-label">High</span>
              </div>
            </div>
            
            <div className="framework-item">
              <h4><span className="highlight">S</span>tructure</h4>
              <p>Is the prompt logically organized and properly formatted?</p>
              <div className="rating-scale">
                <span className="rating-label">Low</span>
                <div className="rating-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <span className="rating-label">High</span>
              </div>
            </div>
            
            <div className="framework-item">
              <h4><span className="highlight">P</span>recision</h4>
              <p>Is the prompt specific about what it's asking for?</p>
              <div className="rating-scale">
                <span className="rating-label">Low</span>
                <div className="rating-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <span className="rating-label">High</span>
              </div>
            </div>
            
            <div className="framework-item">
              <h4><span className="highlight">E</span>xecution</h4>
              <p>Does the prompt produce the desired outcome?</p>
              <div className="rating-scale">
                <span className="rating-label">Low</span>
                <div className="rating-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <span className="rating-label">High</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="iteration-process">
          <h3>Iterative Prompt Development Process</h3>
          <div className="process-diagram">
            <div className="process-step">
              <div className="step-circle">1</div>
              <div className="step-description">
                <h4>Initial Prompt</h4>
                <p>Create first version based on task requirements</p>
              </div>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-circle">2</div>
              <div className="step-description">
                <h4>Test</h4>
                <p>Evaluate output against desired outcome</p>
              </div>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-circle">3</div>
              <div className="step-description">
                <h4>Identify Issues</h4>
                <p>Analyze gaps between expected and actual results</p>
              </div>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-circle">4</div>
              <div className="step-description">
                <h4>Refine</h4>
                <p>Adjust prompt based on analysis</p>
              </div>
            </div>
            <div className="process-arrow circular-arrow">↩</div>
          </div>
        </div>
      </section>

      <section className="domain-applications">
        <h2>Prompt Engineering for Specific Domains</h2>
        
        <div className="domain-grid">
          <div className="domain-card">
            <h3>Software Development</h3>
            <div className="domain-content">
              <ul>
                <li>Specify language, framework, and coding style requirements</li>
                <li>Include expected error handling and edge cases</li>
                <li>Provide context about existing codebase and architectural constraints</li>
                <li>Request explanatory comments within generated code</li>
              </ul>
              <div className="example-box">
                <h4>Example Prompt:</h4>
                <div className="code-block">
                  <pre>
                    {`Write a Python function to validate email addresses with the following requirements:
- Use regular expressions for validation
- Check for standard email format (username@domain.tld)
- Validate TLDs are between 2-6 characters
- Handle edge cases like special characters in username
- Include comprehensive error messages
- Add descriptive comments
- Follow PEP 8 style guidelines
- Use type hints

Return the function definition with a brief explanation of the approach used.`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="domain-card">
            <h3>Content Creation</h3>
            <div className="domain-content">
              <ul>
                <li>Define target audience demographics and knowledge level</li>
                <li>Specify tone, voice, and stylistic preferences</li>
                <li>Include content structure and length requirements</li>
                <li>Provide SEO keywords or themes if applicable</li>
              </ul>
              <div className="example-box">
                <h4>Example Prompt:</h4>
                <div className="code-block">
                  <pre>
                    {`Create a blog post about sustainable home gardening with these specifications:

Target Audience: Urban millennials (25-40) with limited gardening experience but interest in sustainability
Tone: Informative yet conversational, encouraging but not preachy
Structure: 
- Introduction with hook about environmental impact
- 3 sections on easy-to-grow vegetables, herbs, and flowers
- Each plant should include difficulty level, space requirements, and care tips
- Conclusion with next steps and encouragement
Length: Approximately 1200 words
SEO Keywords to Include: sustainable gardening, apartment gardening, eco-friendly, urban garden, beginner plants
Additional Requirements: Include a short shopping list of essential tools`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
          
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

      <section className="prompt-templates">
        <h2>Ready-to-Use Prompt Templates</h2>
        <p>
          These templates serve as starting points for common tasks. Modify them to fit your specific needs.
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
            <h3>Content Creation</h3>
            <div className="code-block">
              <pre>
                {`Create a [CONTENT TYPE] about [TOPIC] for [TARGET AUDIENCE].

Tone: [SPECIFY TONE: professional, casual, academic, etc.]
Style: [SPECIFY STYLE: informative, persuasive, entertaining, etc.]
Length: Approximately [WORD COUNT] words

Structure:
- Compelling introduction that hooks the reader
- Main sections covering: [KEY POINT 1, KEY POINT 2, KEY POINT 3]
- Actionable conclusion with key takeaways

Additional requirements:
- Include [X] examples/case studies/statistics
- Use [SPECIFIC FORMATTING] where appropriate
- Incorporate these keywords naturally: [LIST KEYWORDS]

The content should achieve the following goals: [LIST OBJECTIVES]`}
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
    </div>
  );
};

export default PromptEngineering;