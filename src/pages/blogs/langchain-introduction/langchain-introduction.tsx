import React from 'react';

import "../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection, CodeExample } from '../../../components/blogs/BlogComponents';
import useBlogBehavior from '../../../hooks/useBlogBehavior';
import '../mobile-viewport-fix.css';
import './langchain-introduction.css';

const LangchainIntroduction: React.FC = () => {
  // Use the blog behavior hook
  useBlogBehavior();

  // Table of contents definition
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'what-is-langchain', title: 'What is LangChain?' },
    { id: 'installation', title: 'Installation' },
    { id: 'first-app', title: 'Your First LangChain App' },
    { id: 'core-concepts', title: 'Core Concepts' },
    { id: 'chatbot-example', title: 'Chatbot Example' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  return (
    <BlogTemplate
      title="Getting Started with LangChain"
      date="March 25, 2025"
      readTime="7 min"
      category="Tools & Frameworks"
      tableOfContents={tableOfContents}
      className="langchain-introduction"
    >{/* Rest of the component content remains the same */}</BlogTemplate>
  );
};

export default LangchainIntroduction;
