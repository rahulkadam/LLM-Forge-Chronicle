import React from 'react';
import BlogTemplate from '../../components/blogs/BlogTemplate';
import { BlogSection } from '../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../data/blogData';
import '../../styles/blogs/blog-base-style.css';

const About: React.FC = () => {
  const category: BlogCategory = 'About';
  
  const tableOfContents = [
    { id: 'mission', title: 'Our Mission' },
    { id: 'why', title: 'Why ChronoPrompt' },
    { id: 'offerings', title: 'What We Offer' },
    { id: 'tech', title: 'Technology Focus' },
    { id: 'founder', title: 'About the Founder' },
    { id: 'vision', title: 'Future Vision' },
    { id: 'community', title: 'Join Our Community' }
  ];

  return (
    <BlogTemplate
      title="About ChronoPrompt"
      date="April 12, 2025"
      readTime="10 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="mission" title="Our Mission">
        <p>
          ChronoPrompt empowers developers with the knowledge and tools to master Large Language Model (LLM) applications. 
          We bridge the gap between theoretical AI concepts and practical implementation, making advanced LLM technologies 
          accessible to developers at all skill levels.
        </p>
      </BlogSection>

      <BlogSection id="why" title="Why We Started ChronoPrompt">
        <p>
          We noticed a significant gap in practical, developer-focused resources for LLMs. Existing tutorials either oversimplified 
          complex concepts or presented advanced techniques without establishing proper foundations.
        </p>
        <p>
          As developers ourselves, we experienced the frustration of piecing together knowledge from scattered resources across 
          the internet. We envisioned a centralized platform providing a structured learning path — from fundamentals to advanced 
          techniques — specifically designed for developers integrating LLMs into real-world applications.
        </p>
        <p>
          Our core mission is to democratize LLM expertise, enabling more developers to build innovative, responsible, and effective 
          AI-powered applications that solve meaningful problems in today's rapidly evolving technological landscape.
        </p>
      </BlogSection>

      <BlogSection id="offerings" title="What We Offer">
        <div className="content-grid">
          <div className="content-card">
            <h3>📚 Progressive Learning Path</h3>
            <p>Structured tutorials that build systematically from foundational concepts to advanced implementation techniques.</p>
          </div>
          <div className="content-card">
            <h3>🛠️ Code-First Approach</h3>
            <p>Practical, executable examples demonstrating real-world LLM integration patterns with production-ready code.</p>
          </div>
          <div className="content-card">
            <h3>🔍 Best Practices</h3>
            <p>Industry-tested approaches to prompt engineering, context management, error handling, and system design.</p>
          </div>
          <div className="content-card">
            <h3>💡 Architectural Patterns</h3>
            <p>Proven architectures for building scalable, reliable, and cost-effective LLM-powered applications.</p>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="tech" title="Our Technology Focus">
        <p>We leverage and teach cutting-edge technologies in the LLM ecosystem:</p>
        
        <div className="content-card">
          <ul>
            <li>🤖 <strong>LLM Integration Techniques</strong> - OpenAI GPT-4, Claude 3, Mistral, Llama 3, and other frontier models</li>
            <li>⚛️ <strong>Modern Web Frameworks</strong> - React, Next.js, and TypeScript for building responsive AI interfaces</li>
            <li>🔄 <strong>Agent Architectures</strong> - Design patterns and frameworks for building autonomous AI systems</li>
            <li>📊 <strong>RAG Systems</strong> - Advanced retrieval-augmented generation for knowledge-intensive applications</li>
            <li>🧩 <strong>LLM Frameworks</strong> - LangChain, LlamaIndex, OpenAI Assistants API, and other tooling ecosystems</li>
            <li>📦 <strong>Vector Databases</strong> - Pinecone, Chroma, Weaviate, and pgvector for efficient semantic search</li>
            <li>🔒 <strong>Security & Governance</strong> - Best practices for secure, compliant, and responsible AI applications</li>
            <li>💰 <strong>Cost Optimization</strong> - Strategies for building efficient systems that minimize token usage and latency</li>
          </ul>
        </div>
      </BlogSection>

      <BlogSection id="founder" title="About the Founder">
        <div className="content-card founder-bio">
          <img src="/founder-image.png" alt="Rahul Kadam" className="founder-image" />
          <h3>Rahul Kadam</h3>
          <p className="subtitle">Software Engineering Leader & AI Specialist</p>
          <p>
            Rahul is a seasoned software engineering leader passionate about bridging the gap between cutting-edge AI 
            technologies and practical software development. With extensive experience in building scalable applications 
            and leading engineering teams across multiple industries, Rahul founded ChronoPrompt to address the critical 
            need for developer-focused LLM resources.
          </p>
          <p>
            His approach combines technical depth with practical implementation strategies, helping developers navigate 
            the rapidly evolving landscape of AI tools and frameworks. Rahul specializes in translating complex AI concepts 
            into actionable engineering practices.
          </p>
          <div className="button-group">
            <a href="https://www.linkedin.com/in/rahul-kadam-19211022/" target="_blank" rel="noopener noreferrer" className="tag">
              LinkedIn Profile
            </a>
            <a href="mailto:kadamrahul581@gmail.com" className="tag">
              Email Contact
            </a>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="vision" title="Our Vision for the Future">
        <p>
          As LLM technology evolves at unprecedented speed, we're committed to growing ChronoPrompt into the most comprehensive 
          and practical resource for developers in the AI space. Our roadmap includes:
        </p>
        
        <div className="content-grid">
          <div className="content-card">
            <h3>Expanded Tutorial Library</h3>
            <p>Covering emerging LLM techniques, multimodal models, and specialized use cases</p>
          </div>
          <div className="content-card">
            <h3>Pattern Repository</h3>
            <p>A searchable collection of proven patterns and architectures for common LLM challenges</p>
          </div>
          <div className="content-card">
            <h3>Expert Workshops</h3>
            <p>Live coding sessions and masterclasses with industry experts and practitioners</p>
          </div>
          <div className="content-card">
            <h3>Industry-Specific Tracks</h3>
            <p>Specialized content for healthcare, finance, legal, and other regulated domains</p>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="community" title="Join Our Community">
        <p>
          We're building a vibrant community of forward-thinking developers passionate about creating the next generation 
          of intelligent applications. Whether you're just beginning your LLM journey or already building sophisticated AI systems, 
          your experience and insights are valuable to our collective growth.
        </p>

        <div className="content-grid">
          <div className="content-card">
            <h3>Discord Community</h3>
            <p>
              Join our active Discord server to connect with fellow developers, share insights, troubleshoot challenges, 
              and collaborate on cutting-edge LLM projects.
            </p>
            <a href="https://discord.gg/yuqWWdCc" className="tag" target="_blank" rel="noopener noreferrer">
              Join Discord Server
            </a>
          </div>

          <div className="content-card">
            <h3>GitHub Repository</h3>
            <p>
              Contribute to our open-source codebase, suggest improvements, or use our example projects as starting points 
              for your own applications.
            </p>
            <a href="https://github.com/rahulkadam/LLM-Forge-Chronicle" className="tag" target="_blank" rel="noopener noreferrer">
              Explore GitHub Repo
            </a>
          </div>

          <div className="content-card">
            <h3>Contact Directly</h3>
            <p>
              Have questions, partnership inquiries, or content suggestions? Reach out to Rahul directly via email. 
              We welcome collaboration opportunities and feedback.
            </p>
            <a href="mailto:kadamrahul581@gmail.com" className="tag">
              Contact Us Today
            </a>
          </div>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default About;