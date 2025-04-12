import React from 'react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection } from '../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../data/blogData';
import '../../../styles/blogs/blog-base-style.css';
import '../../../styles/blogs/blog-content.css';
import '../../../styles/blogs/blog-layout-update.css';

const Expert: React.FC = () => {
  const category: BlogCategory = 'Technical';
  
  const tableOfContents = [
    { id: 'intro', title: 'Track Overview' },
    { id: 'modules', title: 'Learning Tracks' },
    { id: 'projects', title: 'Research Projects' },
    { id: 'contributions', title: 'Expert Contributions' },
    { id: 'resources', title: 'Expert Resources' },
    { id: 'recognition', title: 'Recognition Program' }
  ];

  return (
    <BlogTemplate
      title="AI Engineering Expert Track"
      date="April 12, 2025"
      readTime="15 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="intro" title="Track Overview">
        <p className="tutorial-description">
          Master cutting-edge AI technologies, advanced system architectures, and contribute to the evolution
          of artificial intelligence. This track is designed for experienced engineers ready to push the
          boundaries of AI development.
        </p>

        <div className="content-grid">
          <div className="content-card">
            <h3>Technical Prerequisites</h3>
            <ul>
              <li>Professional Track completion</li>
              <li>5+ years ML experience</li>
              <li>System architecture expertise</li>
              <li>Research background</li>
            </ul>
          </div>
          <div className="content-card">
            <h3>Required Skills</h3>
            <ul>
              <li>Advanced mathematics</li>
              <li>Distributed systems</li>
              <li>Performance optimization</li>
              <li>Research methodology</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="modules" title="Expert Learning Tracks">
        <div className="content-grid">
          <div className="content-card">
            <h3>AI Research & Development</h3>
            <p>Conduct advanced AI research and develop novel solutions</p>
            <ul>
              <li>Neural Architecture Search</li>
              <li>Custom Loss Functions</li>
              <li>Novel Training Methods</li>
              <li>Research Paper Writing</li>
            </ul>
            <div className="tags">
              <span className="tag">PyTorch</span>
              <span className="tag">JAX</span>
              <span className="tag">LaTeX</span>
            </div>
            <Link to="/expert/research" className="learn-more">Enter Research Track →</Link>
          </div>

          <div className="content-card">
            <h3>Large Scale AI Systems</h3>
            <p>Design and implement massive-scale AI systems</p>
            <ul>
              <li>Distributed Training at Scale</li>
              <li>Custom Runtime Development</li>
              <li>Hardware Optimization</li>
              <li>System Architecture</li>
            </ul>
            <div className="tags">
              <span className="tag">CUDA</span>
              <span className="tag">TensorRT</span>
              <span className="tag">Horovod</span>
            </div>
            <Link to="/expert/large-scale" className="learn-more">Explore Systems →</Link>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="projects" title="Research & Development Projects">
        <div className="content-grid">
          <div className="content-card">
            <h3>Novel Architecture Development</h3>
            <p>Develop and implement new neural network architectures</p>
            <div className="info-box">
              <h4>Research Objectives</h4>
              <ul>
                <li>Architecture innovation</li>
                <li>Performance benchmarking</li>
                <li>Theoretical analysis</li>
                <li>Paper publication</li>
              </ul>
            </div>
            <Link to="/projects/architecture" className="learn-more">Start Research →</Link>
          </div>

          <div className="content-card">
            <h3>Distributed Training Framework</h3>
            <p>Design a new framework for distributed model training</p>
            <div className="info-box">
              <h4>Design Goals</h4>
              <ul>
                <li>Scalability</li>
                <li>Fault tolerance</li>
                <li>Resource efficiency</li>
                <li>Easy deployment</li>
              </ul>
            </div>
            <Link to="/projects/framework" className="learn-more">Design Framework →</Link>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="contributions" title="Expert Contributions">
        <div className="content-grid">
          <div className="content-card">
            <h3>Research Publications</h3>
            <p>Contribute through research papers and publications</p>
            <ul>
              <li>Conference papers</li>
              <li>Journal publications</li>
              <li>Technical blogs</li>
              <li>Research presentations</li>
            </ul>
            <Link to="/contribute/research" className="learn-more">View Opportunities →</Link>
          </div>

          <div className="content-card">
            <h3>Open Source</h3>
            <p>Lead and contribute to open-source AI projects</p>
            <ul>
              <li>Framework development</li>
              <li>Tool creation</li>
              <li>Documentation</li>
              <li>Community building</li>
            </ul>
            <Link to="/contribute/opensource" className="learn-more">View Projects →</Link>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="resources" title="Expert Resources">
        <div className="content-grid">
          <div className="content-card">
            <h3>Research Tools</h3>
            <ul>
              <li>Advanced research platforms</li>
              <li>Academic publication templates</li>
              <li>Statistical analysis software</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Development Resources</h3>
            <ul>
              <li>System design patterns</li>
              <li>Performance optimization tools</li>
              <li>Hardware documentation</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Community Access</h3>
            <ul>
              <li>Expert network connections</li>
              <li>Specialized research teams</li>
              <li>Conference participation</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="recognition" title="Recognition Program">
        <div className="info-box">
          <h3>AI Engineering Expert Certification</h3>
          <p>Achieve recognition through:</p>
          <ul>
            <li>Research contributions</li>
            <li>System implementations</li>
            <li>Community leadership</li>
            <li>Technical innovations</li>
          </ul>
          <Link to="/recognition" className="learn-more">Learn About Recognition →</Link>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default Expert;