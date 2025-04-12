import React from 'react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection } from '../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../data/blogData';
import '../../../styles/blogs/blog-base-style.css';


const Professional: React.FC = () => {
  const category: BlogCategory = 'Technical';
  
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'advanced-modules', title: 'Advanced Learning Modules' },
    { id: 'industry-projects', title: 'Industry Projects' },
    { id: 'specialized-topics', title: 'Specialized Topics' },
    { id: 'tooling', title: 'Professional Tools' },
    { id: 'certification', title: 'Certification' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  return (
    <BlogTemplate
      title="Professional AI Engineering Track"
      date="April 12, 2025"
      readTime="15 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Professional AI Engineering">
        <div className="content-card">
          <p className="tutorial-description">
            Master advanced AI engineering concepts and build production-grade systems.
            This track focuses on real-world implementation, scalability, and industry best practices.
          </p>
          
          <div className="info-box">
            <h3>Prerequisites</h3>
            <ul>
              <li>Foundation Track completion</li>
              <li>Basic ML model deployment experience</li>
              <li>Programming proficiency in Python</li>
              <li>Basic understanding of cloud services</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="advanced-modules" title="Advanced Learning Modules">
        <div className="content-grid">
          <div className="content-card">
            <h3>Advanced ML Systems</h3>
            <span className="badge">8 weeks</span>
            <p>Design and implement production-grade ML systems</p>
            <ul>
              <li>System Architecture Design</li>
              <li>Scalable ML Pipelines</li>
              <li>High-Performance Computing</li>
              <li>Distributed Training</li>
            </ul>
            <div className="tech-tags">
              <span className="tag">Kubernetes</span>
              <span className="tag">Docker</span>
              <span className="tag">Ray</span>
            </div>
            <Link to="/professional/ml-systems" className="content-link">Start Module →</Link>
          </div>

          <div className="content-card">
            <h3>MLOps Excellence</h3>
            <span className="badge">6 weeks</span>
            <p>Implement robust MLOps practices and pipelines</p>
            <ul>
              <li>CI/CD for ML</li>
              <li>Model Versioning</li>
              <li>Monitoring & Logging</li>
              <li>Infrastructure as Code</li>
            </ul>
            <div className="tech-tags">
              <span className="tag">MLflow</span>
              <span className="tag">Kubeflow</span>
              <span className="tag">Terraform</span>
            </div>
            <Link to="/professional/mlops" className="content-link">Start Module →</Link>
          </div>

          <div className="content-card">
            <h3>Advanced Deep Learning</h3>
            <span className="badge">10 weeks</span>
            <p>Master complex deep learning architectures and techniques</p>
            <ul>
              <li>Transformer Architecture</li>
              <li>GANs & VAEs</li>
              <li>Multi-modal Models</li>
              <li>Meta Learning</li>
            </ul>
            <div className="tech-tags">
              <span className="tag">PyTorch</span>
              <span className="tag">JAX</span>
              <span className="tag">Transformers</span>
            </div>
            <Link to="/professional/deep-learning" className="content-link">Start Module →</Link>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="industry-projects" title="Industry Projects">
        <div className="content-grid">
          <div className="content-card highlight">
            <h3>Financial Analysis & Reporting Assistant</h3>
            <p>Build a production-ready LLM application for financial analysis</p>
            <ul>
              <li>Document processing & extraction</li>
              <li>LLM-based financial analysis</li>
              <li>Report generation & visualization</li>
              <li>Production-ready implementation</li>
            </ul>
            <div className="tech-tags">
              <span className="tag">LangChain</span>
              <span className="tag">FastAPI</span>
              <span className="tag">OpenAI</span>
            </div>
            <Link to="/professional-example" className="content-link highlight">View Implementation →</Link>
          </div>

          <div className="content-card">
            <h3>Large-Scale Recommendation System</h3>
            <p>Build a production-ready recommendation engine</p>
            <ul>
              <li>Distributed architecture</li>
              <li>Real-time processing</li>
              <li>A/B testing framework</li>
              <li>Monitoring system</li>
            </ul>
            <div className="tech-tags">
              <span className="tag">Spark</span>
              <span className="tag">Redis</span>
              <span className="tag">Kafka</span>
            </div>
            <Link to="/projects/recommendation-system" className="content-link">View Project →</Link>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="specialized-topics" title="Specialized Topics">
        <div className="content-grid">
          <div className="content-card">
            <h3>Distributed Training</h3>
            <ul>
              <li>Multi-GPU training</li>
              <li>Data parallelism</li>
              <li>Model parallelism</li>
              <li>Gradient accumulation</li>
            </ul>
            <Link to="/topics/distributed-training" className="content-link">Learn More →</Link>
          </div>

          <div className="content-card">
            <h3>Model Serving</h3>
            <ul>
              <li>Serving architectures</li>
              <li>Model versioning</li>
              <li>Batch prediction</li>
              <li>Online inference</li>
            </ul>
            <Link to="/topics/model-serving" className="content-link">Learn More →</Link>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="tooling" title="Professional Tools & Platforms">
        <div className="resource-grid">
          <div className="resource-item">
            <h4>Development Tools</h4>
            <ul>
              <li>PyCharm Professional - IDE for Python development</li>
              <li>VS Code + Extensions - Customizable IDE with ML support</li>
              <li>Jupyter Enterprise - Enterprise-grade notebooks</li>
            </ul>
          </div>

          <div className="resource-item">
            <h4>MLOps Platforms</h4>
            <ul>
              <li>Kubeflow - ML toolkit for Kubernetes</li>
              <li>MLflow - ML lifecycle management</li>
              <li>DVC - Version control for ML projects</li>
            </ul>
          </div>

          <div className="resource-item">
            <h4>Cloud Platforms</h4>
            <ul>
              <li>AWS SageMaker - Managed ML services</li>
              <li>Google AI Platform - Cloud ML engine</li>
              <li>Azure ML - Enterprise ML platform</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="certification" title="Professional Certification">
        <div className="content-card">
          <h3>AI Engineering Professional Certificate</h3>
          <p>Earn a professional certification by completing:</p>
          <ul>
            <li>All advanced modules</li>
            <li>Two industry projects</li>
            <li>Technical assessment</li>
            <li>System design interview</li>
          </ul>
          <Link to="/certification" className="content-link">Learn About Certification →</Link>
        </div>
      </BlogSection>

      <BlogSection id="next-steps" title="Advanced Specializations">
        <div className="content-grid">
          <Link to="/expert" className="content-card">
            <h3>Expert Track</h3>
            <p>Master advanced AI concepts and cutting-edge research</p>
          </Link>
          <Link to="/research" className="content-card">
            <h3>Research Track</h3>
            <p>Contribute to the advancement of AI technology</p>
          </Link>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default Professional;