import React from 'react';

import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../../components/blogs/BlogComponents';
import useBlogBehavior from '../../../../hooks/useBlogBehavior';

const LLMGettingStartedGuide: React.FC = () => {
  useBlogBehavior();

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'what-are-llms', title: 'What Are LLMs?' },
    { id: 'key-concepts', title: 'Key Concepts' },
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'first-steps', title: 'First Steps' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'resources', title: 'Additional Resources' }
  ];

  return (
    <BlogTemplate
      title="Getting Started with LLMs: A Beginner's Guide"
      date="March 25, 2025"
      readTime="7 min"
      category="Fundamentals"
      tableOfContents={tableOfContents}
    >{/* Rest of the component content remains the same */}</BlogTemplate>
  );
};

export default LLMGettingStartedGuide;
