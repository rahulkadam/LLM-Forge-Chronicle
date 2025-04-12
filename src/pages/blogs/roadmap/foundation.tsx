import React from 'react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection } from '../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../data/blogData';
import '../../../styles/blogs/blog-base-style.css';
import '../../../styles/blogs/blog-content.css';
import '../../../styles/blogs/blog-layout-update.css';

const Foundation: React.FC = () => {
  const category: BlogCategory = 'Technical';
  
  const tableOfContents = [
    { id: 'intro', title: 'Overview' },
    { id: 'core-modules', title: 'Core Learning Modules' },
    { id: 'projects', title: 'Hands-on Projects' },
    { id: 'resources', title: 'Learning Resources' },
    { id: 'assessment', title: 'Track Assessment' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  return (
    <BlogTemplate
      title="AI Engineering Foundation Track"
      date="April 12, 2025"
      readTime="15 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="intro" title="Overview">
        <p className="tutorial-description">
          Master the fundamentals of AI development with our comprehensive foundation track.
          Learn essential concepts, tools, and best practices to build production-ready AI solutions.
        </p>
      </BlogSection>

      <BlogSection id="core-modules" title="Core Learning Modules">
        <div className="content-grid">
          <div className="content-card">
            <h3>Python for AI Development</h3>
            <p>4 weeks</p>
            <ul>
              <li>Advanced Python Features</li>
              <li>NumPy & Scientific Computing</li>
              <li>Pandas & Data Analysis</li>
              <li>Data Visualization</li>
            </ul>
            <div className="tags">
              <span className="tag">Python</span>
              <span className="tag">NumPy</span>
              <span className="tag">Pandas</span>
            </div>
            <Link to="/foundation/python" className="learn-more">Start Learning →</Link>
          </div>

          <div className="content-card">
            <h3>ML Fundamentals</h3>
            <p>6 weeks</p>
            <ul>
              <li>ML Algorithms & Models</li>
              <li>Model Training & Validation</li>
              <li>Feature Engineering</li>
              <li>Model Evaluation</li>
            </ul>
            <div className="tags">
              <span className="tag">scikit-learn</span>
              <span className="tag">Jupyter</span>
              <span className="tag">MLflow</span>
            </div>
            <Link to="/foundation/ml" className="learn-more">Start Learning →</Link>
          </div>

          <div className="content-card">
            <h3>Deep Learning Basics</h3>
            <p>8 weeks</p>
            <ul>
              <li>Neural Network Architectures</li>
              <li>Training Deep Models</li>
              <li>CNN & Computer Vision</li>
              <li>RNN & NLP Basics</li>
            </ul>
            <div className="tags">
              <span className="tag">TensorFlow</span>
              <span className="tag">PyTorch</span>
              <span className="tag">Keras</span>
            </div>
            <Link to="/foundation/deep-learning" className="learn-more">Start Learning →</Link>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="projects" title="Hands-on Projects">
        <div className="content-grid">
          <div className="content-card">
            <h3>Image Classification System</h3>
            <p>Build an end-to-end image classification system using CNNs</p>
            <ul>
              <li>Dataset preparation</li>
              <li>Model architecture design</li>
              <li>Training pipeline</li>
              <li>Model deployment</li>
            </ul>
            <Link to="/projects/image-classification" className="learn-more">Start Project →</Link>
          </div>

          <div className="content-card">
            <h3>NLP Analysis Pipeline</h3>
            <p>Develop a text analysis system with modern NLP techniques</p>
            <ul>
              <li>Text preprocessing</li>
              <li>Feature extraction</li>
              <li>Model training</li>
              <li>API development</li>
            </ul>
            <Link to="/projects/nlp-pipeline" className="learn-more">Start Project →</Link>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="resources" title="Learning Resources">
        <div className="content-grid">
          <div className="content-card">
            <h3>Documentation & Guides</h3>
            <ul>
              <li><a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">Python Documentation</a></li>
              <li><a href="https://scikit-learn.org/stable/" target="_blank" rel="noopener noreferrer">Scikit-learn Guides</a></li>
              <li><a href="https://www.tensorflow.org/guide" target="_blank" rel="noopener noreferrer">TensorFlow Tutorials</a></li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Development Tools</h3>
            <ul>
              <li><a href="#ide-setup">IDE Setup Guide</a></li>
              <li><a href="#virtual-env">Virtual Environment Guide</a></li>
              <li><a href="#debugging">Debugging Tools & Tips</a></li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="assessment" title="Track Assessment">
        <div className="content-grid">
          <div className="content-card">
            <h3>Module Quizzes</h3>
            <p>Test your knowledge after each module</p>
            <ul>
              <li>Concept validation</li>
              <li>Code understanding</li>
              <li>Best practices</li>
            </ul>
            <Link to="/assessments/quizzes" className="learn-more">Take Quizzes →</Link>
          </div>

          <div className="content-card">
            <h3>Project Reviews</h3>
            <p>Get feedback on your projects</p>
            <ul>
              <li>Code quality</li>
              <li>Architecture review</li>
              <li>Performance analysis</li>
            </ul>
            <Link to="/assessments/reviews" className="learn-more">Submit Project →</Link>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="next-steps" title="Next Steps">
        <div className="content-grid">
          <div className="content-card">
            <h3>Professional Track</h3>
            <p>Advanced AI engineering and production implementations</p>
            <ul>
              <li>Advanced architectures</li>
              <li>Scaling strategies</li>
              <li>Enterprise patterns</li>
            </ul>
            <Link to="/professional" className="learn-more">Explore Professional Track →</Link>
          </div>

          <div className="content-card">
            <h3>Specializations</h3>
            <p>Deep dive into specific AI domains</p>
            <ul>
              <li>Computer Vision</li>
              <li>Natural Language Processing</li>
              <li>Reinforcement Learning</li>
            </ul>
            <Link to="/specializations" className="learn-more">Explore Specializations →</Link>
          </div>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default Foundation;