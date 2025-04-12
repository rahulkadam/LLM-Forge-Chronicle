import React from 'react';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection } from '../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../data/blogData';
import '../../../styles/blogs/blog-base-style.css';
import '../../../styles/blogs/blog-content.css';
import '../../../styles/blogs/blog-layout-update.css';

const AITutorial: React.FC = () => {
  const category: BlogCategory = 'Technical';
  
  const tableOfContents = [
    { id: 'fundamentals', title: 'AI Fundamentals' },
    { id: 'frameworks', title: 'Popular Frameworks' },
    { id: 'process', title: 'Development Process' },
    { id: 'practices', title: 'Best Practices' },
    { id: 'resources', title: 'Resources and Tools' }
  ];

  return (
    <BlogTemplate
      title="AI Development Tutorial"
      date="April 12, 2025"
      readTime="15 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="fundamentals" title="Understanding AI Fundamentals">
        <div className="content-card">
          <h3>Key Concepts</h3>
          <ul>
            <li>Machine Learning vs Deep Learning vs AI</li>
            <li>Neural Networks Basics</li>
            <li>Supervised vs Unsupervised Learning</li>
            <li>Natural Language Processing (NLP)</li>
            <li>Computer Vision</li>
          </ul>
        </div>
      </BlogSection>

      <BlogSection id="frameworks" title="Popular AI Frameworks">
        <div className="content-grid">
          <div className="content-card">
            <h3>TensorFlow</h3>
            <p>Google's open-source ML framework</p>
            <ul>
              <li>Keras integration</li>
              <li>TensorFlow.js for web</li>
              <li>TensorFlow Lite for mobile</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>PyTorch</h3>
            <p>Facebook's ML framework</p>
            <ul>
              <li>Dynamic computational graphs</li>
              <li>Strong community support</li>
              <li>Research-friendly</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Hugging Face</h3>
            <p>NLP-focused platform</p>
            <ul>
              <li>Transformers library</li>
              <li>Pre-trained models</li>
              <li>Model fine-tuning</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="process" title="AI Development Process">
        <div className="steps-container">
          <div className="step-item">
            <h3>1. Data Preparation</h3>
            <ul>
              <li>Data collection</li>
              <li>Data cleaning</li>
              <li>Data augmentation</li>
              <li>Feature engineering</li>
            </ul>
          </div>

          <div className="step-item">
            <h3>2. Model Development</h3>
            <ul>
              <li>Architecture selection</li>
              <li>Hyperparameter tuning</li>
              <li>Training process</li>
              <li>Validation strategies</li>
            </ul>
          </div>

          <div className="step-item">
            <h3>3. Deployment</h3>
            <ul>
              <li>Model optimization</li>
              <li>API development</li>
              <li>Scaling solutions</li>
              <li>Monitoring setup</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="practices" title="Best Practices">
        <div className="content-grid">
          <div className="content-card">
            <h3>Model Development</h3>
            <ul>
              <li>Start simple, iterate gradually</li>
              <li>Use cross-validation</li>
              <li>Monitor overfitting</li>
              <li>Document experiments</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Data Management</h3>
            <ul>
              <li>Version control for data</li>
              <li>Regular data quality checks</li>
              <li>Proper data splitting</li>
              <li>Handle data privacy</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Production</h3>
            <ul>
              <li>CI/CD for ML</li>
              <li>Model versioning</li>
              <li>A/B testing</li>
              <li>Performance monitoring</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="resources" title="Resources and Tools">
        <div className="resource-grid">
          <div className="resource-item">
            <h4>Learning Resources</h4>
            <ul>
              <li>Fast.ai - Practical Deep Learning</li>
              <li>Coursera - Deep Learning Specialization</li>
              <li>Stanford CS231n - CNN for Visual Recognition</li>
              <li>Stanford CS224n - NLP with Deep Learning</li>
            </ul>
          </div>

          <div className="resource-item">
            <h4>Development Tools</h4>
            <ul>
              <li>Jupyter Notebooks</li>
              <li>Google Colab</li>
              <li>AWS SageMaker</li>
              <li>MLflow</li>
            </ul>
          </div>

          <div className="resource-item">
            <h4>Communities</h4>
            <ul>
              <li>Papers with Code</li>
              <li>AI Research Discord</li>
              <li>Reddit r/MachineLearning</li>
              <li>Kaggle Community</li>
            </ul>
          </div>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default AITutorial;