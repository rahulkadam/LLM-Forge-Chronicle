import React from 'react';
import '../styles/Resources.css';

const Resources: React.FC = () => {
  return (
    <div className="resources-page">
      <section className="resources-hero">
        <h1>LLM Resources & References</h1>
        <p className="subtitle">
          Curated collection of tools, services, and learning materials for LLM development
        </p>
      </section>

      <section className="resource-section1">
        <h2>Popular LLM Services</h2>
        <div className="resource-grid1">
          <div className="resource-card1">
            <h3>OpenAI GPT-4</h3>
            <p>State-of-the-art language model with advanced reasoning capabilities.</p>
            <div className="resource-links">
              <a href="https://platform.openai.com/" target="_blank" rel="noopener noreferrer">Platform</a>
              <a href="https://platform.openai.com/docs" target="_blank" rel="noopener noreferrer">Documentation</a>
            </div>
          </div>

          <div className="resource-card1">
            <h3>Anthropic Claude</h3>
            <p>Advanced AI model known for safety, honesty, and long-context understanding.</p>
            <div className="resource-links">
              <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer">Website</a>
              <a href="https://docs.anthropic.com/claude/docs" target="_blank" rel="noopener noreferrer">Documentation</a>
            </div>
          </div>

          <div className="resource-card1">
            <h3>OpenRouter</h3>
            <p>Single API endpoint for multiple language models, including Claude, GPT-4, and more.</p>
            <div className="resource-links">
              <a href="https://openrouter.ai/" target="_blank" rel="noopener noreferrer">Website</a>
              <a href="https://openrouter.ai/docs" target="_blank" rel="noopener noreferrer">Documentation</a>
            </div>
          </div>
        </div>
      </section>

      <section className="resource-section">
        <h2>Cloud Provider LLM Services</h2>
        <div className="resource-grid1">
          <div className="resource-card1">
            <h3>Amazon Bedrock</h3>
            <p>Fully managed service for foundation models from leading AI companies.</p>
            <div className="resource-links">
              <a href="https://aws.amazon.com/bedrock/" target="_blank" rel="noopener noreferrer">Service Page</a>
              <a href="https://docs.aws.amazon.com/bedrock/" target="_blank" rel="noopener noreferrer">Documentation</a>
            </div>
          </div>

          <div className="resource-card1">
            <h3>Google Vertex AI</h3>
            <p>Access to PaLM 2 and other Google AI models with enterprise features.</p>
            <div className="resource-links">
              <a href="https://cloud.google.com/vertex-ai" target="_blank" rel="noopener noreferrer">Service Page</a>
              <a href="https://cloud.google.com/vertex-ai/docs" target="_blank" rel="noopener noreferrer">Documentation</a>
            </div>
          </div>

          <div className="resource-card1">
            <h3>Azure OpenAI Service</h3>
            <p>Enterprise-ready OpenAI models with Azure security and compliance.</p>
            <div className="resource-links">
              <a href="https://azure.microsoft.com/products/cognitive-services/openai-service" target="_blank" rel="noopener noreferrer">Service Page</a>
              <a href="https://learn.microsoft.com/azure/cognitive-services/openai/" target="_blank" rel="noopener noreferrer">Documentation</a>
            </div>
          </div>
        </div>
      </section>

      <section className="resource-section">
        <h2>Notable Agent Projects</h2>
        <div className="resource-grid1">
          <div className="resource-card1">
            <h3>BabyAGI</h3>
            <p>Task-driven autonomous agent that breaks down and executes complex goals.</p>
            <div className="resource-links">
              <a href="https://github.com/yoheinakajima/babyagi" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <div className="resource-card1">
            <h3>GPT Engineer</h3>
            <p>Agent that can understand requirements and generate entire codebases.</p>
            <div className="resource-links">
              <a href="https://github.com/AntonOsika/gpt-engineer" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <div className="resource-card1">
            <h3>MetaGPT</h3>
            <p>Multi-agent framework for complex software development tasks.</p>
            <div className="resource-links">
              <a href="https://github.com/geekan/MetaGPT" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <section className="resource-section">
        <h2>Development Tools & Frameworks</h2>
        <div className="resource-grid1">
          <div className="resource-card1">
            <h3>LangServe</h3>
            <p>Deploy LangChain applications as REST APIs with monitoring.</p>
            <div className="resource-links">
              <a href="https://github.com/langchain-ai/langserve" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://python.langchain.com/docs/langserve" target="_blank" rel="noopener noreferrer">Documentation</a>
            </div>
          </div>

          <div className="resource-card1">
            <h3>Semantic Kernel</h3>
            <p>Microsoft's SDK for integrating LLMs into applications.</p>
            <div className="resource-links">
              <a href="https://github.com/microsoft/semantic-kernel" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://learn.microsoft.com/semantic-kernel/overview/" target="_blank" rel="noopener noreferrer">Documentation</a>
            </div>
          </div>

          <div className="resource-card1">
            <h3>Haystack</h3>
            <p>End-to-end framework for building NLP applications.</p>
            <div className="resource-links">
              <a href="https://github.com/deepset-ai/haystack" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://docs.haystack.deepset.ai/" target="_blank" rel="noopener noreferrer">Documentation</a>
            </div>
          </div>
        </div>
      </section>

      <section className="resource-section">
        <h2>Learning Resources</h2>
        <div className="resource-grid1">
          <div className="resource-card1">
            <h3>Papers & Research</h3>
            <ul className="resource-list">
              <li><a href="https://arxiv.org/abs/2303.08774" target="_blank" rel="noopener noreferrer">GPT-4 Technical Report</a></li>
              <li><a href="https://arxiv.org/abs/2302.07842" target="_blank" rel="noopener noreferrer">Constitutional AI</a></li>
              <li><a href="https://arxiv.org/abs/2307.09288" target="_blank" rel="noopener noreferrer">Tree of Thoughts</a></li>
            </ul>
          </div>

          <div className="resource-card1">
            <h3>Blogs & Newsletters</h3>
            <ul className="resource-list">
              <li><a href="https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/" target="_blank" rel="noopener noreferrer">Wolfram on ChatGPT</a></li>
              <li><a href="https://www.assemblyai.com/blog/" target="_blank" rel="noopener noreferrer">AssemblyAI Blog</a></li>
              <li><a href="https://newsletter.theaiedge.io/" target="_blank" rel="noopener noreferrer">The AI Edge Newsletter</a></li>
            </ul>
          </div>

          <div className="resource-card1">
            <h3>Communities</h3>
            <ul className="resource-list">
              <li><a href="https://huggingface.co/spaces" target="_blank" rel="noopener noreferrer">Hugging Face Spaces</a></li>
              <li><a href="https://www.reddit.com/r/LocalLLaMA/" target="_blank" rel="noopener noreferrer">LocalLLaMA Reddit</a></li>
              <li><a href="https://discord.gg/langchain" target="_blank" rel="noopener noreferrer">LangChain Discord</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources; 