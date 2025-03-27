import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/GettingStarted.css';

const GettingStarted: React.FC = () => {
  return (
    <div className="getting-started">
      <header className="getting-started-header">
        <h1>Your LLM Learning Journey</h1>
        <p className="subtitle">A comprehensive guide to mastering Large Language Models</p>
      </header>

      <section className="intro-section">
        <div className="intro-content">
          <h2>Why Learn About LLMs?</h2>
          <p>
            Large Language Models (LLMs) are revolutionizing how we interact with technology. 
            From generating content and code to powering virtual assistants and automating tasks, 
            LLMs are transforming industries and creating new opportunities for innovation.
          </p>
          <p>
            Whether you're a developer, business professional, content creator, or just curious about AI, 
            understanding LLMs will give you powerful tools to enhance your work and stay ahead in the rapidly 
            evolving digital landscape.
          </p>
        </div>
        <div className="intro-image">
          <img src="llm/LLM-title3.png" alt="LLM Illustration" />
        </div>
      </section>

      <section className="how-to-use">
        <h2>How to Use This Guide</h2>
        <div className="use-steps">
          <div className="use-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Assess Your Level</h3>
              <p>
                Start where you feel comfortable. New to AI? Begin with LLM Fundamentals. 
                Already familiar with the basics? Jump into Development sections.
              </p>
            </div>
          </div>
          <div className="use-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Follow the Path</h3>
              <p>
                Each section builds on previous knowledge. The path is designed to take you from 
                fundamental concepts to advanced implementations step by step.
              </p>
            </div>
          </div>
          <div className="use-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Practice Regularly</h3>
              <p>
                Each section includes practical exercises. Learning LLMs is hands-on - 
                experiment with the examples and adapt them to your own projects.
              </p>
            </div>
          </div>
          <div className="use-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Build Real Projects</h3>
              <p>
                Apply what you learn by building your own LLM-powered applications. 
                The guides include project ideas to help you practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="roadmap-container">
        {/* Foundation Stage */}
        <section className="roadmap-stage">
          <div className="stage-header foundation">
            <h2>1. LLM Fundamentals</h2>
          </div>
          <div className="stage-content">
            <div className="milestone">
              <h3>AI Fundamentals</h3>
              <p className="milestone-desc">
                Learn the key concepts behind artificial intelligence and how LLMs fit into the 
                broader AI landscape.
              </p>
              <ul>
                <li>What are Large Language Models?</li>
                <li>Understanding the transformer architecture</li>
                <li>Key LLM models (GPT, Claude, Gemini, LLaMA)</li>
                <li>How LLMs are trained and how they work</li>
              </ul>
              <Link to="/llm-fundamentals" className="stage-link">Explore LLM Fundamentals →</Link>
            </div>
            <div className="milestone">
              <h3>LLM Capabilities & Limitations</h3>
              <p className="milestone-desc">
                Understand what LLMs can and cannot do, and how to set realistic expectations.
              </p>
              <ul>
                <li>Text generation and understanding capabilities</li>
                <li>Common misconceptions about AI</li>
                <li>Understanding hallucinations and biases</li>
                <li>Knowledge cutoffs and limitations</li>
              </ul>
              <Link to="/llm-agent" className="stage-link">Learn About LLM Capabilities →</Link>
            </div>
          </div>
        </section>

        {/* Intermediate Stage */}
        <section className="roadmap-stage">
          <div className="stage-header intermediate">
            <h2>2. Working With LLMs</h2>
          </div>
          <div className="stage-content">
            <div className="milestone">
              <h3>Prompt Engineering</h3>
              <p className="milestone-desc">
                Master the art of crafting effective prompts to get the best results from LLMs.
              </p>
              <ul>
                <li>Principles of effective prompting</li>
                <li>Context and instructions techniques</li>
                <li>Few-shot learning and examples</li>
                <li>Chain-of-thought and structured prompting</li>
              </ul>
              <Link to="/prompt-engineering" className="stage-link">Learn Prompt Engineering →</Link>
            </div>
            <div className="milestone">
              <h3>Practical Applications</h3>
              <p className="milestone-desc">
                Discover how to apply LLMs to solve practical problems in different domains.
              </p>
              <ul>
                <li>Content creation and enhancement</li>
                <li>Data analysis and summarization</li>
                <li>Conversational interfaces</li>
                <li>Domain-specific applications</li>
              </ul>
              <Link to="/BuildingLLMAgent" className="stage-link">Build Your First LLM App →</Link>
            </div>
          </div>
        </section>

        {/* Advanced Stage */}
        <section className="roadmap-stage">
          <div className="stage-header advanced">
            <h2>3. Advanced Implementation</h2>
          </div>
          <div className="stage-content">
            <div className="milestone">
              <h3>LLM Integration</h3>
              <p className="milestone-desc">
                Learn how to integrate LLMs into existing systems and workflows for maximum impact.
              </p>
              <ul>
                <li>API integration patterns</li>
                <li>Working with OpenAI and other providers</li>
                <li>Managing rate limits and costs</li>
                <li>Handling context windows efficiently</li>
              </ul>
              <Link to="/blogs/openai-api-guide" className="stage-link">OpenAI Integration Guide →</Link>
            </div>
            <div className="milestone">
              <h3>Building LLM Agents</h3>
              <p className="milestone-desc">
                Create autonomous AI systems that can reason, plan and execute complex tasks.
              </p>
              <ul>
                <li>Agent architecture design</li>
                <li>Tool use and function calling</li>
                <li>Memory and context management</li>
                <li>ReAct patterns and planning strategies</li>
              </ul>
              <Link to="/BuildingLLMAgent" className="stage-link">Build Advanced Agents →</Link>
            </div>
          </div>
        </section>

        {/* Expert Stage */}
        <section className="roadmap-stage">
          <div className="stage-header expert">
            <h2>4. Expert Techniques</h2>
          </div>
          <div className="stage-content">
            <div className="milestone">
              <h3>LLM Technical Deep Dive</h3>
              <p className="milestone-desc">
                Explore the technical underpinnings of LLMs and how they work at a deeper level.
              </p>
              <ul>
                <li>Understanding transformer architectures</li>
                <li>Attention mechanisms and positional encoding</li>
                <li>Training and inference processes</li>
                <li>Model optimization and deployment techniques</li>
              </ul>
              <Link to="/llm-technical" className="stage-link">Technical Deep Dive →</Link>
            </div>
            <div className="milestone">
              <h3>Enterprise Applications</h3>
              <p className="milestone-desc">
                Deploy LLMs at scale in business environments with security, compliance, and efficiency.
              </p>
              <ul>
                <li>Security best practices and data privacy</li>
                <li>Cost optimization strategies</li>
                <li>Multi-model architecture with OpenRouter</li>
                <li>Enterprise-grade deployment patterns</li>
              </ul>
              <Link to="/blogs/openrouter-platform-guide" className="stage-link">Multi-Model Implementation →</Link>
            </div>
          </div>
        </section>
      </div>

      <section className="ready-to-start1">
        <div className="cta-container1">
          <h2>Ready to Start Your LLM Journey?</h2>
          <p>Choose where you want to begin based on your current knowledge and goals.</p>
          <div className="cta-buttons">
            <Link to="/llm-fundamentals" className="cta-button primary">Start with Fundamentals</Link>
            <Link to="/prompt-engineering" className="cta-button secondary">Jump to Prompt Engineering</Link>
            <Link to="/blogs" className="cta-button outline">Explore Tutorials</Link>
          </div>
        </div>
      </section>

      <section className="learning-paths">
        <h2>Specialized Learning Paths</h2>
        <div className="paths-grid">
          <div className="path-card">
            <h3>🧑‍💻 Developer Path</h3>
            <p>For software engineers and developers looking to integrate LLMs into applications</p>
            <ol className="path-steps">
              <li>Learn API integration with <Link to="/blogs/openai-api-guide">OpenAI API</Link></li>
              <li>Understand <Link to="/blogs/openrouter-platform-guide">OpenRouter</Link> for multi-model access</li>
              <li>Master <Link to="/python-module">Python integration</Link> techniques</li>
              <li>Build full <Link to="/BuildingLLMAgent">LLM agents</Link> with tools</li>
            </ol>
          </div>
          <div className="path-card">
            <h3>📊 Data Professional Path</h3>
            <p>For data scientists and analysts wanting to leverage LLMs for data tasks</p>
            <ol className="path-steps">
              <li>Start with <Link to="/llm-fundamentals">LLM fundamentals</Link></li>
              <li>Learn data-focused <Link to="/prompt-engineering">prompt engineering</Link></li>
              <li>Explore <Link to="/blogs/llm-terms-guide">LLM terminology</Link></li>
              <li>Implement <Link to="/blogs/llm-agent-guide">LLM agents for analytics</Link></li>
            </ol>
          </div>
          <div className="path-card">
            <h3>✍️ Content Creator Path</h3>
            <p>For writers, marketers, and content professionals leveraging LLMs in their workflow</p>
            <ol className="path-steps">
              <li>Begin with <Link to="/llm-fundamentals/chatgpt-guide">ChatGPT fundamentals</Link></li>
              <li>Master <Link to="/prompt-engineering">creative prompting techniques</Link></li>
              <li>Learn <Link to="/blogs/llm-agent-guide">agent-based workflows</Link></li>
              <li>Explore <Link to="/ai-tools">specialized content tools</Link></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="resources-section">
        <h2>Additional Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <h3>📚 Official Documentation</h3>
            <p>Access comprehensive API documentation and technical references for major LLM providers.</p>
            <a href="https://platform.openai.com/docs" target="_blank" rel="noreferrer" className="resource-link">OpenAI Docs →</a>
          </div>
          <div className="resource-card">
            <h3>💻 Code Examples</h3>
            <p>Explore practical code samples that demonstrate LLM integration in real-world applications.</p>
            <a href="https://github.com/topics/llm-applications" target="_blank" rel="noreferrer" className="resource-link">GitHub Examples →</a>
          </div>
          <div className="resource-card">
            <h3>👥 Community</h3>
            <p>Join discussions, ask questions, and learn from others in the LLM development community.</p>
            <Link to="/community" className="resource-link">Join Our Community →</Link>
          </div>
          <div className="resource-card">
            <h3>📝 Latest Tutorials</h3>
            <p>Stay up-to-date with our latest guides, tutorials and insights on LLM implementations.</p>
            <Link to="/blogs" className="resource-link">Browse All Tutorials →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GettingStarted;