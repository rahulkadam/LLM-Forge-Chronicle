import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to My React App</h1>
      <p>This is a modern React application built with TypeScript.</p>
      <div className="features">
        <h2>Features</h2>
        <ul>
          <li>TypeScript Support</li>
          <li>React Router</li>
          <li>Component-Based Architecture</li>
          <li>Responsive Design</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;