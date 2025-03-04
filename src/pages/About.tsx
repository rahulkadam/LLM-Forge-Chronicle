import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>This is a sample React application that demonstrates modern React development practices.</p>
      <div className="tech-stack">
        <h2>Technology Stack</h2>
        <ul>
          <li>React 18</li>
          <li>TypeScript</li>
          <li>React Router v6</li>
          <li>CSS Modules</li>
        </ul>
      </div>
    </div>
  );
};

export default About;