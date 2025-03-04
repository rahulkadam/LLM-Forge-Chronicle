import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Engineering Excellence Hub</h1>
        <p className="subtitle">
          Comprehensive guide to AI, ML, and Software Engineering best practices
        </p>
        <div className="hero-cta">
          <Link to="/getting-started" className="cta-button primary">Start Learning</Link>
          <Link to="/roadmap" className="cta-button secondary">View Learning Roadmap</Link>
        </div>
      </section>

      <section className="learning-paths">
        <h2>Learning Paths</h2>
        <div className="path-cards">
          <div className="path-card beginner">
            <h3>Foundation Track</h3>
            <p>Build strong fundamentals in AI and ML</p>
            <ul>
              <li>Basic ML Concepts</li>
              <li>Python for AI</li>
              <li>Data Preprocessing</li>
              <li>Model Basics</li>
            </ul>
            <Link to="/foundation" className="path-link">Start Foundation →</Link>
          </div>

          <div className="path-card intermediate">
            <h3>Professional Track</h3>
            <p>Advanced concepts and practical implementation</p>
            <ul>
              <li>Advanced ML Models</li>
              <li>Deep Learning</li>
              <li>LLM Development</li>
              <li>Production Systems</li>
            </ul>
            <Link to="/professional" className="path-link">Start Professional →</Link>
          </div>

          <div className="path-card expert">
            <h3>Expert Track</h3>
            <p>Master advanced topics and architecture</p>
            <ul>
              <li>System Architecture</li>
              <li>Custom ML Solutions</li>
              <li>Performance Optimization</li>
              <li>Research Methods</li>
            </ul>
            <Link to="/expert" className="path-link">Start Expert →</Link>
          </div>
        </div>
      </section>

      <section className="core-topics">
        <h2>Core Engineering Topics</h2>
        <div className="topic-grid">
          <Link to="/ai-development" className="topic-card ai">
            <div className="card-content">
              <h3>🧠 AI Development</h3>
              <p>Master AI development fundamentals and advanced concepts</p>
              <ul>
                <li>Neural Networks Architecture</li>
                <li>Training Methodologies</li>
                <li>Model Selection & Evaluation</li>
                <li>AI System Design</li>
              </ul>
              <div className="tech-stack">
                <span>TensorFlow</span>
                <span>PyTorch</span>
                <span>Keras</span>
              </div>
            </div>
          </Link>

          <Link to="/llm-engineering" className="topic-card llm">
            <div className="card-content">
              <h3>🤖 LLM Engineering</h3>
              <p>Build and deploy production-grade LLM applications</p>
              <ul>
                <li>LLM Architecture Design</li>
                <li>Prompt Engineering</li>
                <li>Fine-tuning Strategies</li>
                <li>Deployment Patterns</li>
              </ul>
              <div className="tech-stack">
                <span>GPT</span>
                <span>LangChain</span>
                <span>Hugging Face</span>
              </div>
            </div>
          </Link>

          <Link to="/mlops" className="topic-card mlops">
            <div className="card-content">
              <h3>🔄 MLOps</h3>
              <p>Build robust ML pipelines and deployment systems</p>
              <ul>
                <li>ML Pipeline Design</li>
                <li>Continuous Training</li>
                <li>Model Monitoring</li>
                <li>Infrastructure Management</li>
              </ul>
              <div className="tech-stack">
                <span>Kubernetes</span>
                <span>MLflow</span>
                <span>Kubeflow</span>
              </div>
            </div>
          </Link>

          <Link to="/ml-system-design" className="topic-card system">
            <div className="card-content">
              <h3>⚙️ ML System Design</h3>
              <p>Design scalable machine learning systems</p>
              <ul>
                <li>System Architecture</li>
                <li>Scalability Patterns</li>
                <li>Performance Optimization</li>
                <li>Cost Management</li>
              </ul>
              <div className="tech-stack">
                <span>Docker</span>
                <span>AWS</span>
                <span>GCP</span>
              </div>
            </div>
          </Link>

          <Link to="/ai-security" className="topic-card security">
            <div className="card-content">
              <h3>🔒 AI Security</h3>
              <p>Implement secure AI systems and practices</p>
              <ul>
                <li>Security Best Practices</li>
                <li>Privacy-Preserving ML</li>
                <li>Attack Prevention</li>
                <li>Compliance Standards</li>
              </ul>
              <div className="tech-stack">
                <span>PyTorch</span>
                <span>TensorFlow Privacy</span>
                <span>ML Shield</span>
              </div>
            </div>
          </Link>

          <Link to="/performance" className="topic-card performance">
            <div className="card-content">
              <h3>⚡ Performance Engineering</h3>
              <p>Optimize AI systems for production</p>
              <ul>
                <li>Model Optimization</li>
                <li>Hardware Acceleration</li>
                <li>Distributed Training</li>
                <li>Memory Management</li>
              </ul>
              <div className="tech-stack">
                <span>CUDA</span>
                <span>TensorRT</span>
                <span>ONNX</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="practical-guides">
        <h2>Engineering Guides</h2>
        <div className="guides-grid">
          <div className="guide-category">
            <h3>System Design</h3>
            <div className="guide-list">
              <Link to="/guides/large-scale-ml" className="guide-item">
                <span className="guide-title">Large-Scale ML Systems</span>
                <span className="difficulty">Advanced</span>
              </Link>
              <Link to="/guides/distributed-training" className="guide-item">
                <span className="guide-title">Distributed Training</span>
                <span className="difficulty">Intermediate</span>
              </Link>
              <Link to="/guides/model-serving" className="guide-item">
                <span className="guide-title">Model Serving Architectures</span>
                <span className="difficulty">Advanced</span>
              </Link>
            </div>
          </div>

          <div className="guide-category">
            <h3>Best Practices</h3>
            <div className="guide-list">
              <Link to="/guides/code-quality" className="guide-item">
                <span className="guide-title">ML Code Quality</span>
                <span className="difficulty">Intermediate</span>
              </Link>
              <Link to="/guides/testing" className="guide-item">
                <span className="guide-title">Testing ML Systems</span>
                <span className="difficulty">Advanced</span>
              </Link>
              <Link to="/guides/monitoring" className="guide-item">
                <span className="guide-title">Production Monitoring</span>
                <span className="difficulty">Intermediate</span>
              </Link>
            </div>
          </div>

          <div className="guide-category">
            <h3>Performance</h3>
            <div className="guide-list">
              <Link to="/guides/optimization" className="guide-item">
                <span className="guide-title">Model Optimization</span>
                <span className="difficulty">Advanced</span>
              </Link>
              <Link to="/guides/scaling" className="guide-item">
                <span className="guide-title">Scaling Strategies</span>
                <span className="difficulty">Expert</span>
              </Link>
              <Link to="/guides/profiling" className="guide-item">
                <span className="guide-title">System Profiling</span>
                <span className="difficulty">Intermediate</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="technical-resources">
        <h2>Technical Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <h3>Documentation</h3>
            <ul>
              <li>
                <Link to="/docs/api">API References</Link>
                <span className="tag">Technical</span>
              </li>
              <li>
                <Link to="/docs/architecture">Architecture Guides</Link>
                <span className="tag">Advanced</span>
              </li>
              <li>
                <Link to="/docs/examples">Code Examples</Link>
                <span className="tag">Practical</span>
              </li>
              <li>
                <Link to="/docs/patterns">Design Patterns</Link>
                <span className="tag">Best Practices</span>
              </li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>Tools & Libraries</h3>
            <ul>
              <li>
                <Link to="/tools/frameworks">ML Frameworks</Link>
                <span className="tag">Essential</span>
              </li>
              <li>
                <Link to="/tools/deployment">Deployment Tools</Link>
                <span className="tag">MLOps</span>
              </li>
              <li>
                <Link to="/tools/monitoring">Monitoring Solutions</Link>
                <span className="tag">Production</span>
              </li>
              <li>
                <Link to="/tools/testing">Testing Tools</Link>
                <span className="tag">Quality</span>
              </li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>Engineering Excellence</h3>
            <ul>
              <li>
                <Link to="/excellence/principles">Design Principles</Link>
                <span className="tag">Foundation</span>
              </li>
              <li>
                <Link to="/excellence/patterns">Architecture Patterns</Link>
                <span className="tag">Advanced</span>
              </li>
              <li>
                <Link to="/excellence/practices">Best Practices</Link>
                <span className="tag">Essential</span>
              </li>
              <li>
                <Link to="/excellence/case-studies">Case Studies</Link>
                <span className="tag">Real-world</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="interactive-learning">
        <h2>Interactive Learning</h2>
        <div className="interactive-grid">
          <Link to="/workshops" className="interactive-card">
            <h3>🔨 Workshops</h3>
            <p>Hands-on technical workshops with real-world scenarios</p>
          </Link>
          <Link to="/code-labs" className="interactive-card">
            <h3>💻 Code Labs</h3>
            <p>Interactive coding exercises and practical implementations</p>
          </Link>
          <Link to="/case-studies" className="interactive-card">
            <h3>📚 Case Studies</h3>
            <p>Real-world engineering case studies and solutions</p>
          </Link>
          <Link to="/challenges" className="interactive-card">
            <h3>🎯 Challenges</h3>
            <p>Technical challenges to test and improve your skills</p>
          </Link>
        </div>
      </section>

      <section className="community">
        <h2>Engineering Community</h2>
        <div className="community-links">
          <Link to="/discussion" className="community-link">
            <h3>💬 Discussion Forums</h3>
            <p>Engage with other engineers and share knowledge</p>
          </Link>
          <Link to="/contribute" className="community-link">
            <h3>🤝 Contribute</h3>
            <p>Contribute to our engineering guides and resources</p>
          </Link>
          <Link to="/events" className="community-link">
            <h3>📅 Events</h3>
            <p>Technical workshops and engineering meetups</p>
          </Link>
        </div>
      </section>

      <section className="cta">
        <h2>Start Your Learning Journey</h2>
        <p>Choose your path and begin mastering AI engineering</p>
        <div className="cta-buttons">
          <Link to="/getting-started" className="cta-button primary">Get Started</Link>
          <Link to="/learning-paths" className="cta-button secondary">Explore Paths</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;