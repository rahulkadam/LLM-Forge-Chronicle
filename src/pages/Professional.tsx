import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Professional.css';

const Professional: React.FC = () => {
  return (
    <div className="professional-track">
      <section className="track-header">
        <h1>Professional AI Engineering</h1>
        <p className="track-description">
          Master advanced AI engineering concepts and build production-grade systems.
          This track focuses on real-world implementation, scalability, and industry best practices.
        </p>
        <div className="prerequisites">
          <h3>Prerequisites</h3>
          <ul>
            <li>Foundation Track completion</li>
            <li>Basic ML model deployment experience</li>
            <li>Programming proficiency in Python</li>
            <li>Basic understanding of cloud services</li>
          </ul>
        </div>
      </section>

      <section className="advanced-modules">
        <h2>Advanced Learning Modules</h2>
        <div className="module-grid">
          {/* Advanced ML Systems */}
          <div className="module-card">
            <div className="module-header">
              <h3>Advanced ML Systems</h3>
              <span className="duration">8 weeks</span>
            </div>
            <div className="module-content">
              <p>Design and implement production-grade ML systems</p>
              <ul className="topics-list">
                <li>System Architecture Design</li>
                <li>Scalable ML Pipelines</li>
                <li>High-Performance Computing</li>
                <li>Distributed Training</li>
              </ul>
              <div className="module-tools">
                <span className="tool">Kubernetes</span>
                <span className="tool">Docker</span>
                <span className="tool">Ray</span>
              </div>
              <Link to="/professional/ml-systems" className="module-link">Start Module →</Link>
            </div>
          </div>

          {/* MLOps & DevOps */}
          <div className="module-card">
            <div className="module-header">
              <h3>MLOps Excellence</h3>
              <span className="duration">6 weeks</span>
            </div>
            <div className="module-content">
              <p>Implement robust MLOps practices and pipelines</p>
              <ul className="topics-list">
                <li>CI/CD for ML</li>
                <li>Model Versioning</li>
                <li>Monitoring & Logging</li>
                <li>Infrastructure as Code</li>
              </ul>
              <div className="module-tools">
                <span className="tool">MLflow</span>
                <span className="tool">Kubeflow</span>
                <span className="tool">Terraform</span>
              </div>
              <Link to="/professional/mlops" className="module-link">Start Module →</Link>
            </div>
          </div>

          {/* Advanced Deep Learning */}
          <div className="module-card">
            <div className="module-header">
              <h3>Advanced Deep Learning</h3>
              <span className="duration">10 weeks</span>
            </div>
            <div className="module-content">
              <p>Master complex deep learning architectures and techniques</p>
              <ul className="topics-list">
                <li>Transformer Architecture</li>
                <li>GANs & VAEs</li>
                <li>Multi-modal Models</li>
                <li>Meta Learning</li>
              </ul>
              <div className="module-tools">
                <span className="tool">PyTorch</span>
                <span className="tool">JAX</span>
                <span className="tool">Transformers</span>
              </div>
              <Link to="/professional/deep-learning" className="module-link">Start Module →</Link>
            </div>
          </div>

          {/* Production Optimization */}
          <div className="module-card">
            <div className="module-header">
              <h3>Production Optimization</h3>
              <span className="duration">6 weeks</span>
            </div>
            <div className="module-content">
              <p>Optimize ML systems for production deployment</p>
              <ul className="topics-list">
                <li>Model Optimization</li>
                <li>Hardware Acceleration</li>
                <li>Cost Optimization</li>
                <li>Performance Tuning</li>
              </ul>
              <div className="module-tools">
                <span className="tool">ONNX</span>
                <span className="tool">TensorRT</span>
                <span className="tool">TFLite</span>
              </div>
              <Link to="/professional/optimization" className="module-link">Start Module →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="industry-projects">
        <h2>Industry Projects</h2>
        <div className="project-grid">
            <div className="project-card highlight-card">
              <h3>Financial Analysis & Reporting Assistant</h3>
              <div className="project-content">
                <p>Build a production-ready LLM application for financial analysis of earnings reports and statements</p>
                <ul className="project-features">
                  <li>Document processing & extraction</li>
                  <li>LLM-based financial analysis</li>
                  <li>Report generation & visualization</li>
                  <li>Production-ready implementation</li>
                </ul>
                <div className="project-tech">
                  <span className="tech">LangChain</span>
                  <span className="tech">FastAPI</span>
                  <span className="tech">OpenAI</span>
                </div>
                <Link to="/professional-example" className="project-link highlight-link">View Complete Implementation →</Link>
              </div>
            </div>          <div className="project-card">
            <h3>Large-Scale Recommendation System</h3>
            <div className="project-content">
              <p>Build a production-ready recommendation engine handling millions of users</p>
              <ul className="project-features">
                <li>Distributed architecture</li>
                <li>Real-time processing</li>
                <li>A/B testing framework</li>
                <li>Monitoring system</li>
              </ul>
              <div className="project-tech">
                <span className="tech">Spark</span>
                <span className="tech">Redis</span>
                <span className="tech">Kafka</span>
              </div>
              <Link to="/projects/recommendation-system" className="project-link">View Project →</Link>
            </div>
          </div>

          <div className="project-card">
            <h3>Computer Vision Pipeline</h3>
            <div className="project-content">
              <p>Implement an end-to-end computer vision system for real-time processing</p>
              <ul className="project-features">
                <li>Multi-model pipeline</li>
                <li>Edge deployment</li>
                <li>Hardware optimization</li>
                <li>Scalable inference</li>
              </ul>
              <div className="project-tech">
                <span className="tech">TensorRT</span>
                <span className="tech">OpenVINO</span>
                <span className="tech">CUDA</span>
              </div>
              <Link to="/projects/vision-pipeline" className="project-link">View Project →</Link>
            </div>
          </div>

          <div className="project-card">
            <h3>NLP Service Platform</h3>
            <div className="project-content">
              <p>Design and implement a scalable NLP services platform</p>
              <ul className="project-features">
                <li>Microservices architecture</li>
                <li>API gateway implementation</li>
                <li>Load balancing</li>
                <li>Service mesh</li>
              </ul>
              <div className="project-tech">
                <span className="tech">FastAPI</span>
                <span className="tech">gRPC</span>
                <span className="tech">Istio</span>
              </div>
              <Link to="/projects/nlp-platform" className="project-link">View Project →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="advanced-topics">
        <h2>Specialized Topics</h2>
        <div className="topics-grid">
          <div className="topic-card">
            <h3>Distributed Training</h3>
            <ul className="topic-content">
              <li>Multi-GPU training</li>
              <li>Data parallelism</li>
              <li>Model parallelism</li>
              <li>Gradient accumulation</li>
            </ul>
            <Link to="/topics/distributed-training" className="topic-link">Learn More →</Link>
          </div>

          <div className="topic-card">
            <h3>Model Serving</h3>
            <ul className="topic-content">
              <li>Serving architectures</li>
              <li>Model versioning</li>
              <li>Batch prediction</li>
              <li>Online inference</li>
            </ul>
            <Link to="/topics/model-serving" className="topic-link">Learn More →</Link>
          </div>

          <div className="topic-card">
            <h3>System Design</h3>
            <ul className="topic-content">
              <li>Scalable architectures</li>
              <li>Fault tolerance</li>
              <li>High availability</li>
              <li>Load balancing</li>
            </ul>
            <Link to="/topics/system-design" className="topic-link">Learn More →</Link>
          </div>
        </div>
      </section>

      <section className="tooling">
        <h2>Professional Tools & Platforms</h2>
        <div className="tools-grid">
          <div className="tool-category">
            <h3>Development Tools</h3>
            <ul className="tool-list">
              <li>
                <span className="tool-name">PyCharm Professional</span>
                <span className="tool-desc">IDE for professional Python development</span>
              </li>
              <li>
                <span className="tool-name">VS Code + Extensions</span>
                <span className="tool-desc">Customizable IDE with ML support</span>
              </li>
              <li>
                <span className="tool-name">Jupyter Enterprise</span>
                <span className="tool-desc">Enterprise-grade notebook environment</span>
              </li>
            </ul>
          </div>

          <div className="tool-category">
            <h3>MLOps Platforms</h3>
            <ul className="tool-list">
              <li>
                <span className="tool-name">Kubeflow</span>
                <span className="tool-desc">ML toolkit for Kubernetes</span>
              </li>
              <li>
                <span className="tool-name">MLflow</span>
                <span className="tool-desc">ML lifecycle management</span>
              </li>
              <li>
                <span className="tool-name">DVC</span>
                <span className="tool-desc">Version control for ML projects</span>
              </li>
            </ul>
          </div>

          <div className="tool-category">
            <h3>Cloud Platforms</h3>
            <ul className="tool-list">
              <li>
                <span className="tool-name">AWS SageMaker</span>
                <span className="tool-desc">Managed ML services</span>
              </li>
              <li>
                <span className="tool-name">Google AI Platform</span>
                <span className="tool-desc">Cloud ML engine</span>
              </li>
              <li>
                <span className="tool-name">Azure ML</span>
                <span className="tool-desc">Enterprise ML platform</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="certification">
        <h2>Professional Certification</h2>
        <div className="certification-content">
          <div className="certification-info">
            <h3>AI Engineering Professional Certificate</h3>
            <p>Earn a professional certification by completing:</p>
            <ul>
              <li>All advanced modules</li>
              <li>Two industry projects</li>
              <li>Technical assessment</li>
              <li>System design interview</li>
            </ul>
            <Link to="/certification" className="cert-link">Learn About Certification →</Link>
          </div>
        </div>
      </section>

      <section className="next-steps">
        <h2>Advanced Specializations</h2>
        <div className="next-steps-content">
          <div className="next-steps-options">
            <Link to="/expert" className="next-step-card">
              <h3>Expert Track</h3>
              <p>Master advanced AI concepts and cutting-edge research</p>
            </Link>
            <Link to="/research" className="next-step-card">
              <h3>Research Track</h3>
              <p>Contribute to the advancement of AI technology</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Professional;