import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Expert.css';

const Expert: React.FC = () => {
  return (
    <div className="expert-track">
      <section className="track-header">
        <h1>AI Engineering Expert Track</h1>
        <p className="track-description">
          Master cutting-edge AI technologies, advanced system architectures, and contribute to the evolution
          of artificial intelligence. This track is designed for experienced engineers ready to push the
          boundaries of AI development.
        </p>
        <div className="expert-prerequisites">
          <h3>Track Prerequisites</h3>
          <div className="prereq-grid">
            <div className="prereq-item">
              <span className="prereq-title">Technical Background</span>
              <ul>
                <li>Professional Track completion</li>
                <li>5+ years ML experience</li>
                <li>System architecture expertise</li>
                <li>Research background</li>
              </ul>
            </div>
            <div className="prereq-item">
              <span className="prereq-title">Required Skills</span>
              <ul>
                <li>Advanced mathematics</li>
                <li>Distributed systems</li>
                <li>Performance optimization</li>
                <li>Research methodology</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="expert-modules">
        <h2>Expert Learning Tracks</h2>
        <div className="module-grid">
          {/* AI Research & Development */}
          <div className="module-card">
            <div className="module-header">
              <h3>AI Research & Development</h3>
              <span className="duration">12 weeks</span>
            </div>
            <div className="module-content">
              <p>Conduct advanced AI research and develop novel solutions</p>
              <ul className="topics-list">
                <li>Neural Architecture Search</li>
                <li>Custom Loss Functions</li>
                <li>Novel Training Methods</li>
                <li>Research Paper Writing</li>
              </ul>
              <div className="module-tools">
                <span className="tool">PyTorch</span>
                <span className="tool">JAX</span>
                <span className="tool">LaTeX</span>
              </div>
              <div className="papers-published">
                <h4>Recent Papers</h4>
                <ul>
                  <li>Efficient Neural Architecture Search</li>
                  <li>Advanced Training Methodologies</li>
                </ul>
              </div>
              <Link to="/expert/research" className="module-link">Enter Research Track →</Link>
            </div>
          </div>

          {/* Large Scale Systems */}
          <div className="module-card">
            <div className="module-header">
              <h3>Large Scale AI Systems</h3>
              <span className="duration">10 weeks</span>
            </div>
            <div className="module-content">
              <p>Design and implement massive-scale AI systems</p>
              <ul className="topics-list">
                <li>Distributed Training at Scale</li>
                <li>Custom Runtime Development</li>
                <li>Hardware Optimization</li>
                <li>System Architecture</li>
              </ul>
              <div className="module-tools">
                <span className="tool">CUDA</span>
                <span className="tool">TensorRT</span>
                <span className="tool">Horovod</span>
              </div>
              <div className="case-studies">
                <h4>Case Studies</h4>
                <ul>
                  <li>Billion-parameter Model Training</li>
                  <li>Real-time Inference at Scale</li>
                </ul>
              </div>
              <Link to="/expert/large-scale" className="module-link">Explore Systems →</Link>
            </div>
          </div>

          {/* AI Infrastructure */}
          <div className="module-card">
            <div className="module-header">
              <h3>AI Infrastructure Design</h3>
              <span className="duration">8 weeks</span>
            </div>
            <div className="module-content">
              <p>Build next-generation AI infrastructure</p>
              <ul className="topics-list">
                <li>Custom Hardware Integration</li>
                <li>Distributed Systems</li>
                <li>Resource Management</li>
                <li>Performance Analysis</li>
              </ul>
              <div className="module-tools">
                <span className="tool">Kubernetes</span>
                <span className="tool">TPU</span>
                <span className="tool">FPGA</span>
              </div>
              <div className="architectures">
                <h4>Reference Architectures</h4>
                <ul>
                  <li>Multi-cluster Training</li>
                  <li>Hybrid Cloud Deployment</li>
                </ul>
              </div>
              <Link to="/expert/infrastructure" className="module-link">Design Infrastructure →</Link>
            </div>
          </div>

          {/* Advanced MLOps */}
          <div className="module-card">
            <div className="module-header">
              <h3>Enterprise MLOps</h3>
              <span className="duration">10 weeks</span>
            </div>
            <div className="module-content">
              <p>Design enterprise-grade MLOps platforms</p>
              <ul className="topics-list">
                <li>Custom MLOps Platforms</li>
                <li>Multi-team Orchestration</li>
                <li>Compliance & Security</li>
                <li>Resource Optimization</li>
              </ul>
              <div className="module-tools">
                <span className="tool">Airflow</span>
                <span className="tool">Argo</span>
                <span className="tool">GitOps</span>
              </div>
              <div className="platforms">
                <h4>Platform Examples</h4>
                <ul>
                  <li>Enterprise ML Platform</li>
                  <li>Automated ML Pipeline</li>
                </ul>
              </div>
              <Link to="/expert/mlops" className="module-link">Build Platforms →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="research-projects">
        <h2>Research & Development Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <div className="project-badge">Research Project</div>
            <h3>Novel Architecture Development</h3>
            <p>Develop and implement new neural network architectures</p>
            <div className="project-details">
              <div className="objectives">
                <h4>Research Objectives</h4>
                <ul>
                  <li>Architecture innovation</li>
                  <li>Performance benchmarking</li>
                  <li>Theoretical analysis</li>
                  <li>Paper publication</li>
                </ul>
              </div>
              <div className="deliverables">
                <h4>Deliverables</h4>
                <ul>
                  <li>Research paper</li>
                  <li>Implementation code</li>
                  <li>Performance analysis</li>
                  <li>Documentation</li>
                </ul>
              </div>
            </div>
            <Link to="/projects/architecture" className="project-link">Start Research →</Link>
          </div>

          <div className="project-card">
            <div className="project-badge">System Design</div>
            <h3>Distributed Training Framework</h3>
            <p>Design a new framework for distributed model training</p>
            <div className="project-details">
              <div className="objectives">
                <h4>Design Goals</h4>
                <ul>
                  <li>Scalability</li>
                  <li>Fault tolerance</li>
                  <li>Resource efficiency</li>
                  <li>Easy deployment</li>
                </ul>
              </div>
              <div className="deliverables">
                <h4>Components</h4>
                <ul>
                  <li>Core framework</li>
                  <li>APIs and SDKs</li>
                  <li>Monitoring tools</li>
                  <li>Documentation</li>
                </ul>
              </div>
            </div>
            <Link to="/projects/framework" className="project-link">Design Framework →</Link>
          </div>

          <div className="project-card">
            <div className="project-badge">Innovation</div>
            <h3>Custom AI Accelerator</h3>
            <p>Develop custom hardware acceleration solutions</p>
            <div className="project-details">
              <div className="objectives">
                <h4>Focus Areas</h4>
                <ul>
                  <li>Hardware design</li>
                  <li>Runtime optimization</li>
                  <li>Driver development</li>
                  <li>Performance tuning</li>
                </ul>
              </div>
              <div className="deliverables">
                <h4>Outputs</h4>
                <ul>
                  <li>Hardware specs</li>
                  <li>Runtime library</li>
                  <li>Benchmark results</li>
                  <li>Integration guide</li>
                </ul>
              </div>
            </div>
            <Link to="/projects/accelerator" className="project-link">Develop Hardware →</Link>
          </div>
        </div>
      </section>

      <section className="contribution">
        <h2>Expert Contributions</h2>
        <div className="contribution-areas">
          <div className="contribution-card">
            <h3>Research Publications</h3>
            <p>Contribute to the AI community through research papers and publications</p>
            <ul className="contribution-list">
              <li>Conference papers</li>
              <li>Journal publications</li>
              <li>Technical blogs</li>
              <li>Research presentations</li>
            </ul>
            <Link to="/contribute/research" className="contrib-link">View Opportunities →</Link>
          </div>

          <div className="contribution-card">
            <h3>Open Source</h3>
            <p>Lead and contribute to open-source AI projects</p>
            <ul className="contribution-list">
              <li>Framework development</li>
              <li>Tool creation</li>
              <li>Documentation</li>
              <li>Community building</li>
            </ul>
            <Link to="/contribute/opensource" className="contrib-link">View Projects →</Link>
          </div>

          <div className="contribution-card">
            <h3>Technical Leadership</h3>
            <p>Guide and mentor the AI engineering community</p>
            <ul className="contribution-list">
              <li>Technical workshops</li>
              <li>Design reviews</li>
              <li>Mentorship programs</li>
              <li>Industry talks</li>
            </ul>
            <Link to="/contribute/leadership" className="contrib-link">Lead Initiatives →</Link>
          </div>
        </div>
      </section>

      <section className="expert-resources">
        <h2>Expert Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <h3>Research Tools</h3>
            <ul className="resource-list">
              <li>
                <span className="resource-name">Research Frameworks</span>
                <span className="resource-desc">Advanced research platforms and tools</span>
              </li>
              <li>
                <span className="resource-name">Paper Templates</span>
                <span className="resource-desc">Academic publication templates</span>
              </li>
              <li>
                <span className="resource-name">Analysis Tools</span>
                <span className="resource-desc">Statistical analysis software</span>
              </li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>Development Resources</h3>
            <ul className="resource-list">
              <li>
                <span className="resource-name">System Design Patterns</span>
                <span className="resource-desc">Advanced architectural patterns</span>
              </li>
              <li>
                <span className="resource-name">Performance Tools</span>
                <span className="resource-desc">Profiling and optimization tools</span>
              </li>
              <li>
                <span className="resource-name">Hardware Specs</span>
                <span className="resource-desc">Custom hardware documentation</span>
              </li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>Community Access</h3>
            <ul className="resource-list">
              <li>
                <span className="resource-name">Expert Network</span>
                <span className="resource-desc">Connect with AI experts</span>
              </li>
              <li>
                <span className="resource-name">Research Groups</span>
                <span className="resource-desc">Join specialized research teams</span>
              </li>
              <li>
                <span className="resource-name">Conference Access</span>
                <span className="resource-desc">Participate in top AI conferences</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="recognition">
        <h2>Expert Recognition Program</h2>
        <div className="recognition-content">
          <div className="recognition-info">
            <h3>AI Engineering Expert Certification</h3>
            <p>Achieve recognition as an AI engineering expert through:</p>
            <ul>
              <li>Research contributions</li>
              <li>System implementations</li>
              <li>Community leadership</li>
              <li>Technical innovations</li>
            </ul>
            <Link to="/recognition" className="recognition-link">Learn About Recognition →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expert;