import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Roadmap.css';

const Roadmap: React.FC = () => {
  return (
    <div className="roadmap">
      <header className="roadmap-header">
        <h1>Getting Started with LLMs</h1>
        <p className="subtitle">Your practical guide to understanding and mastering Large Language Models</p>
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
          <img src="/llm-logo2.png" alt="LLM Illustration" />
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
            <span className="stage-estimate">2-4 Hours</span>
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
                <li>How LLMs are trained and how they work</li>
                <li>Major LLM models (GPT, BERT, LLaMA)</li>
              </ul>
              <Link to="/ai-basics" className="stage-link">Start with AI Basics →</Link>
            </div>
            <div className="milestone">
              <h3>LLM Capabilities & Limitations</h3>
              <p className="milestone-desc">
                Understand what LLMs can and cannot do, and how to set realistic expectations.
              </p>
              <ul>
                <li>Text generation and understanding</li>
                <li>Common misconceptions about AI</li>
                <li>Ethical considerations and biases</li>
              </ul>
              <Link to="/llm-agent" className="stage-link">Explore LLM Basics →</Link>
            </div>
          </div>
        </section>

        {/* Intermediate Stage */}
        <section className="roadmap-stage">
          <div className="stage-header intermediate">
            <h2>2. Working With LLMs</h2>
            <span className="stage-estimate">4-8 Hours</span>
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
                <li>Few-shot and chain-of-thought prompting</li>
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
              </ul>
              <Link to="/BuildingLLMAgent" className="stage-link">Build Your First LLM App →</Link>
            </div>
          </div>
        </section>

        {/* Advanced Stage */}
        <section className="roadmap-stage">
          <div className="stage-header advanced">
            <h2>3. Advanced Implementation</h2>
            <span className="stage-estimate">8-12 Hours</span>
          </div>
          <div className="stage-content">
            <div className="milestone">
              <h3>LLM Integration</h3>
              <p className="milestone-desc">
                Learn how to integrate LLMs into existing systems and workflows for maximum impact.
              </p>
              <ul>
                <li>API integration patterns</li>
                <li>Handling rate limits and costs</li>
                <li>Optimizing response quality</li>
              </ul>
              <Link to="/professional" className="stage-link">Professional Implementation →</Link>
            </div>
            <div className="milestone">
              <h3>Building LLM Agents</h3>
              <p className="milestone-desc">
                Create autonomous AI agents that can perform complex tasks using LLMs as their reasoning engine.
              </p>
              <ul>
                <li>Agent architecture design</li>
                <li>Tool use and function calling</li>
                <li>Memory and context management</li>
              </ul>
              <Link to="/BuildingLLMAgent" className="stage-link">Build Advanced Agents →</Link>
            </div>
          </div>
        </section>

        {/* Expert Stage */}
        <section className="roadmap-stage">
          <div className="stage-header expert">
            <h2>4. Expert Techniques</h2>
            <span className="stage-estimate">10-15 Hours</span>
          </div>
          <div className="stage-content">
            <div className="milestone">
              <h3>Fine-tuning & Customization</h3>
              <p className="milestone-desc">
                Customize LLMs for specific use cases and domains to improve performance and efficiency.
              </p>
              <ul>
                <li>When and how to fine-tune models</li>
                <li>Creating custom datasets</li>
                <li>Evaluation and improvement</li>
              </ul>
              <Link to="/expert" className="stage-link">Advanced Techniques →</Link>
            </div>
            <div className="milestone">
              <h3>Enterprise Applications</h3>
              <p className="milestone-desc">
                Deploy LLMs at scale in business environments with security, compliance, and efficiency.
              </p>
              <ul>
                <li>Security and data privacy</li>
                <li>Cost optimization strategies</li>
                <li>LLM deployment architectures</li>
              </ul>
              <Link to="/DSGuidance" className="stage-link">Enterprise Implementation →</Link>
            </div>
          </div>
        </section>
      </div>

      <section className="ready-to-start">
        <div className="cta-container">
          <h2>Ready to Start Your LLM Journey?</h2>
          <p>Choose where you want to begin based on your current knowledge and goals.</p>
          <div className="cta-buttons">
            <Link to="/ai-basics" className="cta-button primary">Start with Basics</Link>
            <Link to="/prompt-engineering" className="cta-button secondary">Jump to Prompt Engineering</Link>
            <Link to="/professional" className="cta-button outline">Advanced Implementation</Link>
          </div>
        </div>
      </section>

      <section className="resources-section">
        <h2>Learning Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <h3>📚 Documentation</h3>
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
            <a href="https://huggingface.co/spaces" target="_blank" rel="noreferrer" className="resource-link">HuggingFace Community →</a>
          </div>
          <div className="resource-card">
            <h3>📝 Latest Research</h3>
            <p>Stay up-to-date with cutting-edge research and advancements in LLM technology.</p>
            <a href="https://arxiv.org/list/cs.CL/recent" target="_blank" rel="noreferrer" className="resource-link">ArXiv Papers →</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;
