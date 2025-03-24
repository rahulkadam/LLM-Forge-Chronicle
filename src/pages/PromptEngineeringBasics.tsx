import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PromptEngineering.css';

const PromptEngineeringBasics: React.FC = () => {
  return (
    <div className="prompt-engineering">
      <header className="page-header">
        <h1>Prompt Engineering Fundamentals</h1>
        <p className="subtitle">
          Master the basic techniques to craft effective prompts for large language models
        </p>
      </header>

      <section className="introduction">
        <h2>What is Prompt Engineering?</h2>
        <p>
          Prompt engineering is the practice of designing, optimizing, and refining inputs to large language models
          (LLMs) to
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

        <div className="parameter-image-container">
          <img src="/llm/promp-engineering.png" alt="LLM Agent overview" className="full-width-image"/>
        </div>

        <div className="level-navigator">
          <p>This is part 1 of our 3-part prompt engineering guide:</p>
          <div className="level-buttons">
            <span className="level-button active">Fundamentals</span>
            <Link to="/prompt-engineering/intermediate" className="level-button">Intermediate</Link>
            <Link to="/prompt-engineering/advanced" className="level-button">Advanced</Link>
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
        </div>
      </section>

      <section className="prompt-components">
        <h2>Anatomy of Effective Prompts</h2>
        <p>
          Well-structured prompts typically contain several key components that work together to elicit optimal responses.
        </p>

        <div className="component-diagram">
          <div className="parameter-image-container">
            <img src="/llm/Prompt-engineering-example.png" alt="LLM Agent overview" className="full-width-image"/>
          </div>
          <div className="component-row">
            <div className="component">
              <h3>Role/Context</h3>
              <p>Define who the model should act as and provide relevant background information.</p>
              <div className="example"><em>"You are an expert data scientist with expertise in anomaly detection
                algorithms..."</em></div>
            </div>
            <div className="component">
              <h3>Task Instructions</h3>
              <p>Clear, specific directions about what the model should do.</p>
              <div className="example"><em>"Analyze the following dataset and identify patterns that could indicate
                fraudulent transactions..."</em></div>
            </div>
          </div>
          <div className="component-row">
            <div className="component">
              <h3>Format Specifications</h3>
              <p>Guidelines on how the response should be structured.</p>
              <div className="example"><em>"Present your findings in a bulleted list, with each point containing the
                pattern identified and its significance..."</em></div>
            </div>
            <div className="component">
              <h3>Constraints</h3>
              <p>Limitations or requirements the model should adhere to.</p>
              <div className="example"><em>"Limit your analysis to statistical patterns that can be verified; do not
                make assumptions about user intent..."</em></div>
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
              <div className="example"><em>"Provide a comprehensive analysis with at least 5 distinct patterns..."</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="best-practices1">
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

      <section className="prompt-templates">
        <h2>Basic Prompt Templates</h2>
        <p>
          These templates serve as starting points for common tasks. Modify them to fit your specific needs.
        </p>
        
        <div className="templates-grid">
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
- Include [X] examples
- Use [SPECIFIC FORMATTING] where appropriate`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="next-steps">
        <h2>Ready for More Advanced Techniques?</h2>
        <p>
          Now that you've mastered the fundamentals of prompt engineering, you can explore more advanced techniques to further enhance your prompts.
        </p>
        <div className="cta-container">
          <Link to="/prompt-engineering/intermediate" className="cta-button">Continue to Intermediate Techniques →</Link>
        </div>
      </section>
    </div>
  );
};

export default PromptEngineeringBasics;