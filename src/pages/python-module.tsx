import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PythonModule.css';

const PythonModule: React.FC = () => {
  return (
    <div className="python-module">
      <section className="module-header">
        <h1>Python for AI Development</h1>
        <p className="module-description">
          Master Python fundamentals and essential libraries for AI development.
          This module covers key concepts and practical implementations.
        </p>
      </section>

      <section className="learning-path">
        <h2>Learning Path</h2>
        <div className="path-timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Week 1: Python Basics</h3>
              <ul>
                <li>Variables and Data Types</li>
                <li>Control Flow (if, loops)</li>
                <li>Functions and Modules</li>
                <li>Object-Oriented Programming</li>
              </ul>
              <Link to="/foundation/python/week1" className="week-link">Start Week 1 →</Link>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Week 2: NumPy Fundamentals</h3>
              <ul>
                <li>Arrays and Operations</li>
                <li>Broadcasting</li>
                <li>Linear Algebra</li>
                <li>Statistical Functions</li>
              </ul>
              <Link to="/foundation/python/week2" className="week-link">Start Week 2 →</Link>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Week 3: Pandas for Data Analysis</h3>
              <ul>
                <li>DataFrames and Series</li>
                <li>Data Manipulation</li>
                <li>Data Analysis</li>
                <li>Data Visualization</li>
              </ul>
              <Link to="/foundation/python/week3" className="week-link">Start Week 3 →</Link>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Week 4: Advanced Python</h3>
              <ul>
                <li>Decorators and Generators</li>
                <li>Context Managers</li>
                <li>Multithreading</li>
                <li>Best Practices</li>
              </ul>
              <Link to="/foundation/python/week4" className="week-link">Start Week 4 →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="code-examples">
        <h2>Code Examples</h2>
        <div className="examples-grid">
          <div className="example-card">
            <h3>Basic NumPy Operations</h3>
            <pre className="code-block">
              <code>
{`import numpy as np

# Create arrays
arr = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1, 2], [3, 4]])

# Basic operations
print(arr.mean())  # Average
print(matrix.T)    # Transpose
print(np.dot(matrix, matrix))  # Matrix multiplication`}
              </code>
            </pre>
          </div>

          <div className="example-card">
            <h3>Pandas Data Analysis</h3>
            <pre className="code-block">
              <code>
{`import pandas as pd

# Create DataFrame
df = pd.DataFrame({
    'A': [1, 2, 3],
    'B': ['a', 'b', 'c']
})

# Basic operations
print(df.describe())
print(df.groupby('B').mean())`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section className="practical-tasks">
        <h2>Practical Tasks</h2>
        <div className="tasks-grid">
          <div className="task-card">
            <h3>Task 1: Data Processing</h3>
            <p>Create a data processing pipeline using NumPy and Pandas</p>
            <ul className="task-requirements">
              <li>Load and clean dataset</li>
              <li>Perform basic statistics</li>
              <li>Create visualizations</li>
              <li>Handle missing values</li>
            </ul>
            <Link to="/foundation/python/task1" className="task-link">Start Task →</Link>
          </div>

          <div className="task-card">
            <h3>Task 2: Algorithm Implementation</h3>
            <p>Implement basic ML algorithms using NumPy</p>
            <ul className="task-requirements">
              <li>Linear regression</li>
              <li>K-means clustering</li>
              <li>Principal Component Analysis</li>
              <li>Performance optimization</li>
            </ul>
            <Link to="/foundation/python/task2" className="task-link">Start Task →</Link>
          </div>
        </div>
      </section>

      <section className="additional-resources">
        <h2>Additional Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <h3>Documentation</h3>
            <ul>
              <li><a href="https://docs.python.org/3/" target="_blank">Python Documentation</a></li>
              <li><a href="https://numpy.org/doc/" target="_blank">NumPy Documentation</a></li>
              <li><a href="https://pandas.pydata.org/docs/" target="_blank">Pandas Documentation</a></li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>Practice Exercises</h3>
            <ul>
              <li><Link to="/exercises/python-basics">Python Basics Exercises</Link></li>
              <li><Link to="/exercises/numpy">NumPy Exercises</Link></li>
              <li><Link to="/exercises/pandas">Pandas Exercises</Link></li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>Video Tutorials</h3>
            <ul>
              <li><a href="#" target="_blank">Python for Data Science</a></li>
              <li><a href="#" target="_blank">NumPy Crash Course</a></li>
              <li><a href="#" target="_blank">Pandas Tutorial Series</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="assessment">
        <h2>Module Assessment</h2>
        <div className="assessment-content">
          <p>Complete these assessments to test your understanding</p>
          <div className="assessment-options">
            <Link to="/foundation/python/quiz" className="assessment-card">
              <h3>Module Quiz</h3>
              <p>Test your theoretical knowledge</p>
            </Link>
            
            <Link to="/foundation/python/project" className="assessment-card">
              <h3>Final Project</h3>
              <p>Apply your learning in a real-world scenario</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="next-module">
        <h2>Next Module</h2>
        <div className="next-module-preview">
          <h3>ML Fundamentals</h3>
          <p>Learn core machine learning concepts and implementations</p>
          <Link to="/foundation/ml-fundamentals" className="next-module-link">
            Continue to ML Fundamentals →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PythonModule;