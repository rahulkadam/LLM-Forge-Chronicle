import React from 'react';
import '../styles/DSGuidance.css';

const DSGuidance: React.FC = () => {
  return (
    <div className="ds-guidance">
      <h1>Data Structures Learning Guide</h1>
      
      <section className="guidance-section">
        <h2>Getting Started</h2>
        <div className="info-card">
          <h3>Prerequisites</h3>
          <ul>
            <li>Basic programming knowledge in any language (preferably Java, Python, or JavaScript)</li>
            <li>Understanding of basic mathematics and logic</li>
            <li>Familiarity with time and space complexity concepts</li>
            <li>Development environment setup</li>
          </ul>
        </div>

        <div className="info-card">
          <h3>Learning Path</h3>
          <ol>
            <li>Basic Data Structures
              <ul>
                <li>Arrays and Strings</li>
                <li>Linked Lists</li>
                <li>Stacks and Queues</li>
                <li>Hash Tables</li>
              </ul>
            </li>
            <li>Advanced Data Structures
              <ul>
                <li>Trees (Binary, BST, AVL)</li>
                <li>Heaps</li>
                <li>Graphs</li>
                <li>Tries</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      <section className="guidance-section">
        <h2>Study Strategies</h2>
        <div className="strategy-grid">
          <div className="strategy-card">
            <h3>1. Structured Learning</h3>
            <ul>
              <li>Study one data structure at a time</li>
              <li>Understand the theoretical concepts first</li>
              <li>Implement basic operations</li>
              <li>Practice problems of increasing difficulty</li>
              <li>Review and optimize solutions</li>
            </ul>
          </div>

          <div className="strategy-card">
            <h3>2. Practice Approach</h3>
            <ul>
              <li>Start with pen and paper solutions</li>
              <li>Write pseudocode before actual code</li>
              <li>Test with different input cases</li>
              <li>Analyze time and space complexity</li>
              <li>Look for optimization opportunities</li>
            </ul>
          </div>

          <div className="strategy-card">
            <h3>3. Problem Solving Pattern</h3>
            <ol>
              <li>Understand the problem completely</li>
              <li>Identify the appropriate data structure</li>
              <li>Break down into smaller steps</li>
              <li>Consider edge cases</li>
              <li>Implement and test</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="guidance-section">
        <h2>Important Concepts by Topic</h2>
        <div className="concept-grid">
          <div className="concept-card">
            <h3>Arrays & Strings</h3>
            <ul>
              <li>Indexing and slicing</li>
              <li>Two-pointer technique</li>
              <li>Sliding window</li>
              <li>Array manipulation</li>
            </ul>
          </div>

          <div className="concept-card">
            <h3>Linked Lists</h3>
            <ul>
              <li>Pointer manipulation</li>
              <li>Runner technique</li>
              <li>Reversal algorithms</li>
              <li>Cycle detection</li>
            </ul>
          </div>

          <div className="concept-card">
            <h3>Trees & Graphs</h3>
            <ul>
              <li>Tree traversals</li>
              <li>Balance concepts</li>
              <li>Graph representations</li>
              <li>Path finding algorithms</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="guidance-section">
        <h2>Interview Preparation Tips</h2>
        <div className="tips-container">
          <div className="tip-card">
            <h3>Time Management</h3>
            <ul>
              <li>Allocate 30-45 minutes per problem</li>
              <li>Save 5 minutes for optimization</li>
              <li>Practice with a timer</li>
              <li>Learn to recognize problem patterns</li>
            </ul>
          </div>

          <div className="tip-card">
            <h3>Communication</h3>
            <ul>
              <li>Explain your thought process</li>
              <li>Discuss trade-offs</li>
              <li>Ask clarifying questions</li>
              <li>Consider multiple approaches</li>
            </ul>
          </div>

          <div className="tip-card">
            <h3>Common Mistakes to Avoid</h3>
            <ul>
              <li>Jumping to coding without planning</li>
              <li>Ignoring edge cases</li>
              <li>Not considering time/space complexity</li>
              <li>Failing to test your solution</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="guidance-section">
        <h2>Recommended Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <h3>Books</h3>
            <ul>
              <li>Introduction to Algorithms (CLRS)</li>
              <li>Cracking the Coding Interview</li>
              <li>Elements of Programming Interviews</li>
              <li>Data Structures and Algorithms Made Easy</li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>Online Platforms</h3>
            <ul>
              <li>LeetCode - Problem practice</li>
              <li>HackerRank - Implementation practice</li>
              <li>GeeksForGeeks - Concepts and problems</li>
              <li>Visualgo - Algorithm visualization</li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>YouTube Channels</h3>
            <ul>
              <li>MIT OpenCourseWare</li>
              <li>mycodeschool</li>
              <li>Back To Back SWE</li>
              <li>Abdul Bari</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DSGuidance;