import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Foundation.css';

const Foundation: React.FC = () => {
  return (
    <div className="foundation-track">
      <section className="track-header">
        <h1>AI Engineering Foundation</h1>
        <p className="track-description">
          Master the fundamentals of AI development with our comprehensive foundation track.
          Learn essential concepts, tools, and best practices to build production-ready AI solutions.
        </p>
      </section>

      <section className="learning-modules">
        <h2>Core Learning Modules</h2>
        <div className="module-grid">
          {/* Python for AI Module */}
          <div className="module-card">
            <div className="module-header">
              <h3>Python for AI Development</h3>
              <span className="duration">4 weeks</span>
            </div>
            <div className="module-content">
              <p>Master Python fundamentals essential for AI development</p>
              <ul className="topics-list">
                <li>Advanced Python Features</li>
                <li>NumPy & Scientific Computing</li>
                <li>Pandas & Data Analysis</li>
                <li>Data Visualization</li>
              </ul>
              <div className="module-tools">
                <span className="tool">Python</span>
                <span className="tool">NumPy</span>
                <span className="tool">Pandas</span>
              </div>
              <Link to="/foundation/python" className="module-link">Start Learning →</Link>
            </div>
          </div>

          {/* Machine Learning Fundamentals */}
          <div className="module-card">
            <div className="module-header">
              <h3>ML Fundamentals</h3>
              <span className="duration">6 weeks</span>
            </div>
            <div className="module-content">
              <p>Build strong foundations in machine learning concepts</p>
              <ul className="topics-list">
                <li>ML Algorithms & Models</li>
                <li>Model Training & Validation</li>
                <li>Feature Engineering</li>
                <li>Model Evaluation</li>
              </ul>
              <div className="module-tools">
                <span className="tool">scikit-learn</span>
                <span className="tool">Jupyter</span>
                <span className="tool">MLflow</span>
              </div>
              <Link to="/foundation/ml" className="module-link">Start Learning →</Link>
            </div>
          </div>

          {/* Deep Learning Basics */}
          <div className="module-card">
            <div className="module-header">
              <h3>Deep Learning Basics</h3>
              <span className="duration">8 weeks</span>
            </div>
            <div className="module-content">
              <p>Learn fundamental concepts of neural networks</p>
              <ul className="topics-list">
                <li>Neural Network Architectures</li>
                <li>Training Deep Models</li>
                <li>CNN & Computer Vision</li>
                <li>RNN & NLP Basics</li>
              </ul>
              <div className="module-tools">
                <span className="tool">TensorFlow</span>
                <span className="tool">PyTorch</span>
                <span className="tool">Keras</span>
              </div>
              <Link to="/foundation/deep-learning" className="module-link">Start Learning →</Link>
            </div>
          </div>

          {/* Production ML */}
          <div className="module-card">
            <div className="module-header">
              <h3>Production ML</h3>
              <span className="duration">6 weeks</span>
            </div>
            <div className="module-content">
              <p>Deploy and manage ML models in production</p>
              <ul className="topics-list">
                <li>Model Deployment</li>
                <li>API Development</li>
                <li>Model Monitoring</li>
                <li>Performance Optimization</li>
              </ul>
              <div className="module-tools">
                <span className="tool">Docker</span>
                <span className="tool">FastAPI</span>
                <span className="tool">MLflow</span>
              </div>
              <Link to="/foundation/production" className="module-link">Start Learning →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="practical-exercises">
        <h2>Hands-on Projects</h2>
        <div className="exercise-grid">
          <div className="exercise-card">
            <h3>Image Classification System</h3>
            <p>Build an end-to-end image classification system using CNNs</p>
            <ul className="topics-list">
              <li>Dataset preparation</li>
              <li>Model architecture design</li>
              <li>Training pipeline</li>
              <li>Model deployment</li>
            </ul>
            <Link to="/projects/image-classification" className="exercise-link">Start Project →</Link>
          </div>

          <div className="exercise-card">
            <h3>NLP Analysis Pipeline</h3>
            <p>Develop a text analysis system with modern NLP techniques</p>
            <ul className="topics-list">
              <li>Text preprocessing</li>
              <li>Feature extraction</li>
              <li>Model training</li>
              <li>API development</li>
            </ul>
            <Link to="/projects/nlp-pipeline" className="exercise-link">Start Project →</Link>
          </div>

          <div className="exercise-card">
            <h3>Recommendation Engine</h3>
            <p>Create a scalable recommendation system</p>
            <ul className="topics-list">
              <li>Data modeling</li>
              <li>Algorithm implementation</li>
              <li>System optimization</li>
              <li>Performance testing</li>
            </ul>
            <Link to="/projects/recommendation" className="exercise-link">Start Project →</Link>
          </div>
        </div>
      </section>

      <section className="resources">
        <h2>Learning Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <h3>Documentation & Guides</h3>
            <ul>
              <li><a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">Python Official Documentation</a></li>
              <li><a href="https://scikit-learn.org/stable/" target="_blank" rel="noopener noreferrer">Scikit-learn Guides</a></li>
              <li><a href="https://www.tensorflow.org/guide" target="_blank" rel="noopener noreferrer">TensorFlow Tutorials</a></li>
              <li><a href="https://pytorch.org/tutorials/" target="_blank" rel="noopener noreferrer">PyTorch Learning Resources</a></li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>Development Tools</h3>
            <ul>
              <li><a href="#ide-setup">IDE Setup Guide</a></li>
              <li><a href="#virtual-env">Virtual Environment Best Practices</a></li>
              <li><a href="#debugging">Debugging Tools & Tips</a></li>
              <li><a href="#version-control">Version Control for ML</a></li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>Community & Support</h3>
            <ul>
              <li><a href="#forum">Discussion Forum</a></li>
              <li><a href="#slack">Slack Community</a></li>
              <li><a href="#code-reviews">Code Review Guidelines</a></li>
              <li><a href="#mentorship">Mentorship Program</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="assessment">
        <h2>Track Assessments</h2>
        <div className="assessment-content">
          <p>Validate your learning through comprehensive assessments</p>
          <div className="assessment-types">
            <div className="assessment-type">
              <h3>Module Quizzes</h3>
              <p>Test your knowledge after each module</p>
              <ul className="topics-list">
                <li>Concept validation</li>
                <li>Code understanding</li>
                <li>Best practices</li>
              </ul>
              <Link to="/assessments/quizzes" className="assessment-link">Take Quizzes →</Link>
            </div>

            <div className="assessment-type">
              <h3>Coding Challenges</h3>
              <p>Solve real-world programming problems</p>
              <ul className="topics-list">
                <li>Algorithm implementation</li>
                <li>System design</li>
                <li>Optimization tasks</li>
              </ul>
              <Link to="/assessments/challenges" className="assessment-link">Start Challenges →</Link>
            </div>

            <div className="assessment-type">
              <h3>Project Reviews</h3>
              <p>Get feedback on your projects</p>
              <ul className="topics-list">
                <li>Code quality</li>
                <li>Architecture review</li>
                <li>Performance analysis</li>
              </ul>
              <Link to="/assessments/reviews" className="assessment-link">Submit Project →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="next-steps">
        <h2>Your Learning Path</h2>
        <div className="next-steps-content">
          <div className="next-steps-options">
            <Link to="/professional" className="next-step-card">
              <h3>Professional Track</h3>
              <p>Advanced AI engineering concepts and production-grade implementations</p>
              <ul className="topics-list">
                <li>Advanced architectures</li>
                <li>Scaling strategies</li>
                <li>Enterprise patterns</li>
              </ul>
            </Link>

            <Link to="/specializations" className="next-step-card">
              <h3>Specializations</h3>
              <p>Deep dive into specific AI domains</p>
              <ul className="topics-list">
                <li>Computer Vision</li>
                <li>Natural Language Processing</li>
                <li>Reinforcement Learning</li>
              </ul>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Foundation;