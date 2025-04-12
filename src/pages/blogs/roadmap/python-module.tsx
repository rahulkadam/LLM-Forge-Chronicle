import React from 'react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection } from '../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../data/blogData';
import '../../../styles/blogs/blog-base-style.css';
import '../../../styles/blogs/blog-content.css';
import '../../../styles/blogs/blog-layout-update.css';

const PythonModule: React.FC = () => {
  const category: BlogCategory = 'Technical';
  
  const tableOfContents = [
    { id: 'intro', title: 'Introduction' },
    { id: 'path', title: 'Learning Path' },
    { id: 'examples', title: 'Code Examples' },
    { id: 'tasks', title: 'Practical Tasks' },
    { id: 'resources', title: 'Additional Resources' },
    { id: 'assessment', title: 'Assessment' }
  ];

  return (
    <BlogTemplate
      title="Python for AI Development"
      date="April 12, 2025"
      readTime="15 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="intro" title="Introduction">
        <p className="tutorial-description">
          Master Python fundamentals and essential libraries for AI development.
          This module covers key concepts and practical implementations needed for AI development.
        </p>
      </BlogSection>

      <BlogSection id="path" title="Learning Path">
        <div className="content-grid">
          <div className="content-card">
            <h3>Week 1: Python Basics</h3>
            <ul>
              <li>Variables and Data Types</li>
              <li>Control Flow (if, loops)</li>
              <li>Functions and Modules</li>
              <li>Object-Oriented Programming</li>
            </ul>
            <Link to="/foundation/python/week1" className="learn-more">Start Week 1 →</Link>
          </div>

          <div className="content-card">
            <h3>Week 2: NumPy Fundamentals</h3>
            <ul>
              <li>Arrays and Operations</li>
              <li>Broadcasting</li>
              <li>Linear Algebra</li>
              <li>Statistical Functions</li>
            </ul>
            <Link to="/foundation/python/week2" className="learn-more">Start Week 2 →</Link>
          </div>

          <div className="content-card">
            <h3>Week 3: Pandas for Data Analysis</h3>
            <ul>
              <li>DataFrames and Series</li>
              <li>Data Manipulation</li>
              <li>Data Analysis</li>
              <li>Data Visualization</li>
            </ul>
            <Link to="/foundation/python/week3" className="learn-more">Start Week 3 →</Link>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="examples" title="Code Examples">
        <div className="content-grid">
          <div className="content-card">
            <h3>Basic NumPy Operations</h3>
            <div className="code-block">
              <pre>{`import numpy as np

# Create arrays
arr = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1, 2], [3, 4]])

# Basic operations
print(arr.mean())  # Average
print(matrix.T)    # Transpose
print(np.dot(matrix, matrix))  # Matrix multiplication`}</pre>
            </div>
          </div>

          <div className="content-card">
            <h3>Pandas Data Analysis</h3>
            <div className="code-block">
              <pre>{`import pandas as pd

# Create DataFrame
df = pd.DataFrame({
    'A': [1, 2, 3],
    'B': ['a', 'b', 'c']
})

# Basic operations
print(df.describe())
print(df.groupby('B').mean())`}</pre>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="tasks" title="Practical Tasks">
        <div className="content-grid">
          <div className="content-card">
            <h3>Task 1: Data Processing</h3>
            <p>Create a data processing pipeline using NumPy and Pandas</p>
            <ul>
              <li>Load and clean dataset</li>
              <li>Perform basic statistics</li>
              <li>Create visualizations</li>
              <li>Handle missing values</li>
            </ul>
            <Link to="/foundation/python/task1" className="learn-more">Start Task →</Link>
          </div>

          <div className="content-card">
            <h3>Task 2: Algorithm Implementation</h3>
            <p>Implement basic ML algorithms using NumPy</p>
            <ul>
              <li>Linear regression</li>
              <li>K-means clustering</li>
              <li>Principal Component Analysis</li>
              <li>Performance optimization</li>
            </ul>
            <Link to="/foundation/python/task2" className="learn-more">Start Task →</Link>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="resources" title="Additional Resources">
        <div className="content-grid">
          <div className="content-card">
            <h3>Documentation</h3>
            <ul>
              <li><a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">Python Documentation</a></li>
              <li><a href="https://numpy.org/doc/" target="_blank" rel="noopener noreferrer">NumPy Documentation</a></li>
              <li><a href="https://pandas.pydata.org/docs/" target="_blank" rel="noopener noreferrer">Pandas Documentation</a></li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Practice Exercises</h3>
            <ul>
              <li><Link to="/exercises/python-basics">Python Basics Exercises</Link></li>
              <li><Link to="/exercises/numpy">NumPy Exercises</Link></li>
              <li><Link to="/exercises/pandas">Pandas Exercises</Link></li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="assessment" title="Assessment">
        <div className="content-grid">
          <div className="content-card">
            <h3>Module Quiz</h3>
            <p>Test your theoretical knowledge of Python and its libraries</p>
            <Link to="/foundation/python/quiz" className="learn-more">Take Quiz →</Link>
          </div>

          <div className="content-card">
            <h3>Final Project</h3>
            <p>Apply your learning in a real-world scenario</p>
            <Link to="/foundation/python/project" className="learn-more">Start Project →</Link>
          </div>
        </div>

        <div className="info-box">
          <h3>Next Steps</h3>
          <p>Ready to continue your learning journey?</p>
          <Link to="/foundation/ml-fundamentals" className="primary-button">
            Continue to ML Fundamentals →
          </Link>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default PythonModule;