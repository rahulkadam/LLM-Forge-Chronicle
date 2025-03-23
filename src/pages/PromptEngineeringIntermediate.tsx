import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PromptEngineering.css';

const PromptEngineeringIntermediate: React.FC = () => {
  return (
    <div className="prompt-engineering">
      <header className="page-header">
        <h1>Intermediate Prompt Engineering</h1>
        <p className="subtitle">
          Learn advanced techniques and model-specific approaches for more powerful results
        </p>
      </header>

      <section className="introduction">
        <p>
          Once you've mastered the basics of prompt engineering, you can explore more sophisticated techniques that enable
          greater control over language model outputs. This guide covers role-based prompting, self-refinement, model-specific 
          optimization, and evaluation frameworks.
        </p>

        <div className="level-navigator">
          <p>This is part 2 of our 3-part prompt engineering guide:</p>
          <div className="level-buttons">
            <Link to="/prompt-engineering" className="level-button">Fundamentals</Link>
            <span className="level-button active">Intermediate</span>
            <Link to="/prompt-engineering/advanced" className="level-button">Advanced</Link>
          </div>
        </div>
      </section>

      <section className="intermediate-techniques">
        <h2>Intermediate Prompt Techniques</h2>
        
        <div className="technique-grid">
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
        <h2>Domain-Specific Applications</h2>
        
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
        </div>
      </section>

      <section className="next-steps">
        <h2>Ready for More Advanced Techniques?</h2>
        <p>
          Now that you've learned intermediate prompt engineering techniques, you can explore more advanced concepts like
          ReAct patterns, prompt chaining, and other sophisticated approaches.
        </p>
        <div className="cta-container">
          <Link to="/prompt-engineering/advanced" className="cta-button">Continue to Advanced Techniques →</Link>
        </div>
      </section>
    </div>
  );
};

export default PromptEngineeringIntermediate;